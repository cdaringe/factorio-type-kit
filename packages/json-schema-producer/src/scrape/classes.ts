import type { Document, IElement } from "happy-dom";
import { JSONSchema6 } from "json-schema";
import { filterWhile } from "../collections";
import { query, queryAll, siblings } from "../dom-extensions";
import { PageMeta } from "../interfaces";
import { fromLuaType } from "../json-schema";
import { asMarkdown, asUrlCorrectedMarkdown } from "../markdown";

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

const getClassListingEls = (document: Document) =>
  document.body.children.filter((el_) => {
    const el = (el_ as any) as HTMLElement;
    return (
      el.classList.contains("brief-listing") &&
      el.firstElementChild?.textContent?.match(/class /) &&
      el.firstElementChild?.id &&
      el.firstElementChild?.id.match(/Lua/)
    );
  });

interface MethodParam extends JSONSchema6 {
  properties: {
    name: {
      const: string;
    };
    type: JSONSchema6;
  };
}
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

const parseParam = (el: IElement): JSONSchema6 => {
  const trim = (v: string) => v.trim();
  // special case: factorio variadic splat
  if (el.textContent.startsWith("...")) return { type: "any" };
  // params with name :: type : description
  if (el.textContent.includes("::")) {
    const [name, r1] = el.textContent.split("::").map(trim);
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
    const [typeStr, description] = el.textContent.split(":").map(trim);
    return {
      description: description || "",
      properties: {
        type: fromLuaType(typeStr),
      },
    };
  }
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
              query(el, ".return-type", "unable to find return type")
                .textContent
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
  const id = implEl.id;
  if (!id) throw new Error("unable to find id");
  const name = id.split(".")[id.split(".").length - 1];
  if (!name) throw new Error("missing impl fn name");
  const signatureEl = query(
    implEl,
    ".element-name",
    "failed to find signature el"
  );
  let [, argsMatch] = signatureEl.textContent.match(/((\(|{).*(\)|}))/) || [];
  if (!argsMatch) {
    throw new Error("failed to find args");
  }
  const argPlaceholders = argsMatch.split(",");
  if (!argPlaceholders.length)
    throw new Error("no args detected. fast parse should have executed");
  const parametersHeadingEl = queryAll(implEl, ".detail-header").find(
    (el) => el.textContent === "Parameters"
  );
  if (!parametersHeadingEl) {
    throw new Error("missing parameter heading el");
  }
  const params = parametersHeadingEl.nextElementSibling.children.map(
    parseParam
  );
  const returnHeaderSiblingEl = queryAll(implEl, ".detail-header").find(
    (el) => el.textContent === "Return value"
  )?.nextElementSibling;
  const returnDescription = asMarkdown(
    returnHeaderSiblingEl?.textContent || ""
  );
  const returnTypeText = query(signatureEl, ".return-type")?.textContent;
  const isReturningNil = !signatureEl.textContent.includes("→");
  if (!returnTypeText && !isReturningNil) {
    throw new Error("failed to find return type");
  }
  const method: Method = {
    properties: {
      name: {
        const: name,
      },
      parameters: {
        type: "array",
        items: params,
      },
      return: {
        description: returnDescription,
        anyOf: (isReturningNil
          ? [{ type: "null" } as JSONSchema6]
          : [fromLuaType(returnTypeText)]
        )
          .concat(returnDescription.match("or nil") ? [{ type: "null" }] : [])
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
  const schema: JSONSchema6 = {
    properties: {
      name: {
        const: paramName,
      },
      // see https://lua-api.factorio.com/latest/LuaItemStack.html connected_entity
      // some attrs just have no type information :/
      type: [/[a-zA-Z0-9_-]+ (\[\])?\S?\[/].some((m) =>
        sigEl.textContent.match(m)
      )
        ? { type: "any" }
        : fromLuaType(
            query(
              sigEl!,
              ".param-type",
              "failed to find member attr type element"
            ).textContent
          ),
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

const scrapeClassFromEl = (
  document: Document,
  el: IElement,
  pageMeta: PageMeta
) => {
  const rootSiblings = el.firstElementChild.children;
  const classNameEl = rootSiblings.find(
    (it) => "className" in it && it.className === "type-name"
  );
  if (!classNameEl) throw new Error(`missing class name el`);
  const name = classNameEl.textContent.trim();
  const inherits = filterWhile(
    rootSiblings,
    (it) => it.tagName === "a",
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
        type: "array",
        items: members,
      },
      inherits: {
        type: "array",
        items: inherits.map((className) => ({ const: className })),
      },
    },
  };
  return schema;
};

const prefixDescription = (description: string) => (schema: JSONSchema6) => {
  if (!description) return schema;
  if (!schema.description) {
    schema.description = description;
    return schema;
  }
  schema.description = `${description}. ${schema.description}`;
  return schema;
};

export const scrapeClassPage = (document: Document, pageMeta: PageMeta) => {
  const classEls = getClassListingEls(document);
  return classEls
    .map((el) => scrapeClassFromEl(document, el, pageMeta))
    .map(
      prefixDescription(
        getDescription(document.body.getElementsByTagName("h1")[0], pageMeta)
      )
    );
};
