import { Document, IElement, INode, Node } from "happy-dom";
import { JSONSchema6, JSONSchema6Definition } from "json-schema";
import { filterWhile } from "../batteries/collections";
import { query, queryAll, siblings } from "../batteries/dom/dom-extensions";
import { PageMeta } from "../interfaces";
import { fromLuaType } from "../factorio-meta/factorio-lua-json-schema";
import { withType } from "../langs/typescript";
import { asMarkdown, asUrlCorrectedMarkdown } from "../batteries/markdown";

const getDescription = (el: IElement, pageMeta: PageMeta): string => {
  if (!el) {
    throw new Error(`missing el @ ${JSON.stringify(pageMeta)}`);
  }
  if (el.classList.contains("brief-description")) {
    return asUrlCorrectedMarkdown(el.textContent || "", pageMeta);
  }
  if (!el.nextElementSibling) {
    return "";
    // throw new Error(`unable to find desc el @ ${JSON.stringify(pageMeta)}`);
  }
  return getDescription(el.nextElementSibling, pageMeta);
};

export const getClassListingEls = (document: Document) =>
  document.querySelectorAll(".brief-listing > .brief-listing");

type MethodParams = JSONSchema6 & { items: Required<JSONSchema6>["items"] };

interface Method extends JSONSchema6 {
  properties: {
    name: {
      const: string;
    };
    parameters: MethodParams;
    return: JSONSchema6;
  };
}

const getFieldList = (el: IElement) =>
  Array.from(el.children).find((child) =>
    child.classList.contains("field-list")
  );

function testIsFieldListUl(el?: INode): el is IElement {
  if (!el || el.nodeType === Node.TEXT_NODE) return false;
  const elp = el as IElement;
  return !!(elp.tagName.match(/ul/i) && elp.classList.contains("field-list"));
}
const getTableParamMeta = (elp: IElement) => {
  const el = elp.cloneNode(true);
  const fieldsUl = el.children.find(testIsFieldListUl);
  if (!fieldsUl) throw new Error("didnt find field list");
  el.removeChild(fieldsUl);
  return { unparsedNameTypeText: el.textContent.trim(), fieldsUl };
};

type ParseParamRet = JSONSchema6 & { properties: { name: { const: string } } };
export const parseParam = (el: IElement, i: number): ParseParamRet => {
  const trim = (v: string) => v.trim();
  const tableEl = getFieldList(el);
  if (tableEl) {
    const { fieldsUl, unparsedNameTypeText } = getTableParamMeta(el)!;
    let [nameAndOptional, description] = unparsedNameTypeText
      .split(":")
      .map(trim);
    // handle the `This is a description:` case
    if (!description && nameAndOptional) {
      description = nameAndOptional;
      nameAndOptional = "";
    }
    const [name] = nameAndOptional.split("(optional)").map(trim);
    const isOptional = name !== nameAndOptional;
    const members = Array.from(fieldsUl.children).reduce((acc, el, j) => {
      const prm = parseParam(el, j);
      acc[prm.properties.name.const] = prm;
      return acc;
    }, {} as Record<string, JSONSchema6Definition>);
    const schema: ParseParamRet = {
      description,
      type: "object",
      properties: {
        name: { const: name || `table_${i}` },
        members: {
          anyOf: [members, ...(isOptional ? [{ type: "null" as "null" }] : [])],
        },
      },
    };
    return schema;
  }
  const txt = el.textContent.trim();
  // special case: factorio variadic splat
  if (txt.startsWith("..."))
    return { type: "any", properties: { name: { const: `arg_${i}` } } };
  // params with name :: type : description
  if (txt.includes("::")) {
    const [name, r1] = txt.split("::").map(trim);
    const [typeStr, description] = r1.split(":").map(trim);
    return {
      description: description || "",
      properties: {
        name: {
          const: name,
        },
        type: fromLuaType(typeStr),
      },
    };
  } else {
    // params with type : description
    const [typeStr, description] = txt.split(":").map(trim);
    return {
      description: description || "",
      properties: {
        name: {
          const: `arg_${i}`,
        },
        type: fromLuaType(typeStr),
      },
    };
  }
};

export const parseImplEl = (implEl: IElement) => {
  const id = implEl.id;
  if (!id) throw new Error("unable to find id");
  const name = id.split(".")[id.split(".").length - 1];
  if (!name) throw new Error("missing impl fn name");
  const signatureEl = query(
    implEl,
    ".element-name",
    "failed to find signature el"
  );
  const signatureText = signatureEl.textContent || "";
  /* eg: do_work(a,b,c) */
  const stdFnCallMatch = signatureText.match(/\(((.|\s)*)\)/);
  /* eg: set_controller{type=…, character=…, waypoints\n chart_mode_cutoff=…} */
  const tableCallMatch = signatureText.match(/{((.|\s)*)}/);
  let [, argsMatch] = stdFnCallMatch || tableCallMatch || [];
  if (!argsMatch) {
    throw new Error("failed to find args");
  }
  const argPlaceholders = argsMatch.split(",").map((v) => v.trim());
  if (!argPlaceholders.length)
    throw new Error("no args detected. fast parse should have executed");
  const parametersHeadingEl = queryAll(implEl, ".detail-header").find(
    (el) => el.textContent === "Parameters"
  );
  if (!parametersHeadingEl) {
    throw new Error("missing parameter heading el");
  }
  const paramDivs = Array.from(
    parametersHeadingEl.nextElementSibling?.children
  ).filter((el) => el.tagName.match(/div/i));
  let params: JSONSchema6[] = paramDivs
    .filter((el) => el.textContent)
    .map(parseParam);
  if (stdFnCallMatch && argPlaceholders.length !== params.length) {
    console.warn(
      [
        `unabled to parse params for ${name}.`,
        `expected ${argPlaceholders.length} params, received ${params.length}.`,
        "replacing all args with any",
      ].join(" ")
    );
    params = params.map(() => ({ type: "any" }));
  }
  const returnHeaderSiblingEl = queryAll(implEl, ".detail-header").find(
    (el) => el.textContent === "Return value"
  )?.nextElementSibling;
  const returnDescription = asMarkdown(
    returnHeaderSiblingEl?.textContent || ""
  );
  const returnTypeText = query(signatureEl, ".return-type")?.textContent;
  const isReturningNil = !signatureEl.textContent.match(/(→|&rarr;)/);
  if (!returnTypeText && !isReturningNil) {
    throw new Error("failed to find return type");
  }
  return {
    name,
    returnDescription,
    isReturningNil,
    params,
    returnType: isReturningNil
      ? ({ type: "null" } as JSONSchema6)
      : fromLuaType(returnTypeText.trim()),
  };
};

const parseMemberFunction = (document: Document, row: IElement) => {
  const el = query(
    row,
    ".element-name",
    `missing function implementation node, (class=element-name)`
  );
  const implAnchor = query(el, "a", "missing impl anchor");
  // fast parse when there are no args
  if (el.textContent.includes("()")) {
    const method: Method = {
      properties: {
        name: {
          const: implAnchor.textContent,
        },
        parameters: {
          type: "array",
          items: [],
        },
        return: el.textContent.includes("→")
          ? fromLuaType(
              query(
                el,
                ".return-type",
                "unable to find return type"
              ).textContent.trim()
            )
          : { type: "null" },
      },
    };
    return method;
  }
  // slow parse when no arg case fails
  const implHref = implAnchor.getAttribute("href");
  if (!implHref) throw new Error("missing impl href");
  const implEl = document.getElementById(implHref.replace(/.*#/, ""));
  if (!implEl) {
    throw new Error("missing impl el");
  }
  const impl = parseImplEl(implEl);
  const method: Method = {
    properties: {
      name: {
        const: impl.name,
      },
      parameters: {
        type: "array",
        items: impl.params,
      },
      return: {
        description: impl.returnDescription,
        anyOf: [impl.returnType]
          .concat(
            impl.returnDescription.match("or nil") ? [{ type: "null" }] : []
          )
          .filter(Boolean),
      },
    },
  };
  return method;
};

const parseMemberAttr = (_document: Document, sigEl: IElement) => {
  const paramName = query(
    sigEl!,
    ".element-name",
    "failed to find member attr name element"
  ).textContent;
  const paramEl = query(sigEl!, ".param-type");
  const jsonSchemaAny: JSONSchema6 = { type: "any" };
  const type = sigEl.textContent.includes("::")
    ? paramEl
      ? fromLuaType(paramEl.textContent)
      : jsonSchemaAny
    : jsonSchemaAny;
  const schema: JSONSchema6 = {
    properties: {
      name: {
        const: paramName,
      },
      // see https://lua-api.factorio.com/latest/LuaItemStack.html connected_entity
      // some attrs just have no type information :/
      // type: [/[a-zA-Z0-9_-]+ (\[\])?\S?\[/].some((m) =>
      //   sigEl.textContent.match(m)
      // )
      type,
      mode: {
        const:
          query(sigEl!, ".attribute-mode")
            ?.textContent.split("")
            .filter((v) => !!v.match(/(R|W|X)/i)) || [],
      },
    },
  };
  return schema;
};
const parseMemberRow = (
  document: Document,
  row: IElement,
  pageMeta: PageMeta
) => {
  const [signatureEl, descriptionEl] = row.children;
  if (!signatureEl) throw new Error("unable to find member signature el");
  const description = asUrlCorrectedMarkdown(
    descriptionEl?.textContent || "",
    pageMeta
  );
  return {
    description,
    ...(signatureEl.textContent.match(/\[.+\]/)
      ? parseMemberAttr(document, signatureEl)
      : parseMemberFunction(document, signatureEl)),
  };
};
const parseMemberRows = (
  document: Document,
  rows: IElement[],
  pageMeta: PageMeta
) => rows.map((row) => parseMemberRow(document, row, pageMeta));

const prefixDescription = (description: string) => (schema: JSONSchema6) => {
  if (!description) return schema;
  if (!schema.description) {
    schema.description = description;
    return schema;
  }
  schema.description = `${description}. ${schema.description}`;
  return schema;
};

export const ofEl = (document: Document, el: IElement, pageMeta: PageMeta) => {
  const rootSiblings = el.children;
  const classNameEl = rootSiblings.find(
    (it) => "className" in it && it.className === "type-name"
  );
  if (!classNameEl) throw new Error(`missing class name el`);
  const name = classNameEl.textContent.trim();
  const inherits = filterWhile(
    rootSiblings,
    (it) => !!(it.tagName || "").match(/^a$/i),
    (it) => it.className !== "sort"
  ).map((el) => el.textContent.trim());
  const membersRootEl = rootSiblings.find((it) =>
    it.classList.contains("brief-members")
  );
  if (!membersRootEl) throw new Error(`unable to find class member root el`);

  const members = parseMemberRows(
    document,
    queryAll(membersRootEl, "tr"),
    pageMeta
  );
  const schema: JSONSchema6 = {
    properties: {
      name: {
        const: name,
      },
      members: {
        type: "object",
        properties: members.reduce((acc, schema) => {
          acc[
            (schema.properties?.name as JSONSchema6).const as string
          ] = schema;
          return acc;
        }, {} as Required<JSONSchema6>["properties"]),
      },
      inherits: {
        type: "array",
        items: inherits.map((className) => ({ const: className })),
      },
    },
  };
  Object.defineProperty(schema, "tsType", {
    value: withType.class(schema, { asStruct: false }),
    enumerable: false,
  });
  return schema;
};

export const scrapeClassPage = (document: Document, pageMeta: PageMeta) => {
  const classEls = getClassListingEls(document);
  const classes = classEls
    .map((el) => ofEl(document, el, pageMeta))
    .map(
      prefixDescription(
        getDescription(document.body.getElementsByTagName("h1")[0], pageMeta)
      )
    );
  return classes;
};
