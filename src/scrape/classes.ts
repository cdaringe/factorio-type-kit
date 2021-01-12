import { Document, IElement, INode, Node } from "happy-dom";
import { filterWhile } from "../batteries/collections";
import { query, queryAll } from "../batteries/dom/dom-extensions";
import { asMarkdown, asUrlCorrectedMarkdown } from "../batteries/markdown";
import { PageMeta } from "../interfaces";
import {
  ClassMember,
  Cls,
  cls,
  field,
  fn,
  objectLiteral,
  ofLua,
  param,
  Param,
  property,
  sym,
  Type,
  union,
} from "../ir/ir";

const trim = (v: string) => v.trim();

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

export const getParamFromRow = (el: IElement): Param => {
  const txt = el.textContent.trim();
  // special case: factorio variadic splat
  if (txt.startsWith("..."))
    return param({
      name: "variadic_args",
      type: "any",
      isOptional: true,
      description: "",
      isVariadic: true,
    });
  // params with name :: type : description
  if (txt.includes("::")) {
    const [name, r1] = txt.split("::").map(trim);
    const [typeStr, description] = r1.split(":").map(trim);
    return param({
      description,
      name,
      type: ofLua(typeStr),
    });
  } else {
    // params with type : description
    const [typeStr, description] = txt.split(":").map(trim);
    return param({
      description: description || "",
      name: `arg`,
      type: ofLua(typeStr),
    });
  }
};

export const parseParam = (el: IElement, i: number): Param => {
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
      acc[prm.name] = field({ type: prm.type, description: prm.description });
      return acc;
    }, {} as Record<string, Type>);
    return param({
      description,
      name: name || `table_${i}`,
      type: objectLiteral(members),
      isOptional,
    });
  }
  return getParamFromRow(el);
};

export const parseImplEl = (implEl: IElement, description: string) => {
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
  let params = paramDivs.filter((el) => el.textContent).map(parseParam);
  if (stdFnCallMatch && argPlaceholders.length !== params.length) {
    console.warn(
      [
        `unabled to parse params for ${name}.`,
        `expected ${argPlaceholders.length} params, received ${params.length}.`,
        "replacing all args with any",
      ].join(" ")
    );
    params = params.map((_, i) =>
      param({ name: `param_${i}`, description: "", type: "any" })
    );
  }
  const returnHeaderSiblingEl = queryAll(implEl, ".detail-header").find(
    (el) => el.textContent === "Return value"
  )?.nextElementSibling;
  const returnDescription = asMarkdown(
    returnHeaderSiblingEl?.textContent || ""
  );
  const returnTypeText =
    query(signatureEl, ".return-type")?.textContent || "nil";
  const isReturningNil = !signatureEl.textContent.match(/(→|&rarr;)/);
  if (!returnTypeText && !isReturningNil) {
    throw new Error("failed to find return type");
  }
  const returnType = ofLua(returnTypeText.trim());
  const isReturnDescriptionPermittingNil = returnDescription.match("or nil");
  return fn({
    description,
    name,
    parameters: params,
    return: isReturningNil
      ? "null"
      : isReturnDescriptionPermittingNil
      ? union(returnType, "null")
      : returnType,
    returnDescription,
  });
};

const parseMemberFunction = (
  document: Document,
  row: IElement,
  description: string
) => {
  const el = query(
    row,
    ".element-name",
    `missing function implementation node, (class=element-name)`
  );
  const implAnchor = query(el, "a", "missing impl anchor");
  // fast parse when there are no args
  if (el.textContent.includes("()")) {
    return fn({
      description,
      name: implAnchor.textContent,
      parameters: [],
      return: el.textContent.includes("→")
        ? ofLua(
            query(
              el,
              ".return-type",
              "unable to find return type"
            ).textContent.trim()
          )
        : "null",
    });
  }
  // slow parse when no arg case fails
  const implHref = implAnchor.getAttribute("href");
  if (!implHref) throw new Error("missing impl href");
  const implEl = document.getElementById(implHref.replace(/.*#/, ""));
  if (!implEl) {
    throw new Error("missing impl el");
  }
  return parseImplEl(implEl, description);
};

const parseMemberAttr = (
  _document: Document,
  sigEl: IElement,
  description: string
) => {
  const paramName = query(
    sigEl!,
    ".element-name",
    "failed to find member attr name element"
  ).textContent;
  const paramEl = query(sigEl!, ".param-type");
  const type: Type = sigEl.textContent.includes("::")
    ? paramEl
      ? ofLua(paramEl.textContent)
      : "any"
    : "any";
  return property({
    name: paramName,
    description,
    // see https://lua-api.factorio.com/latest/LuaItemStack.html connected_entity
    // some attrs just have no type information :/
    // type: [/[a-zA-Z0-9_-]+ (\[\])?\S?\[/].some((m) =>
    //   sigEl.textContent.match(m)
    // )
    type,
    isReadonly:
      !query(sigEl!, ".attribute-mode")?.textContent.match(/(W|X)/i) || false,
  });
};
const parseMemberRow = (
  document: Document,
  row: IElement,
  pageMeta: PageMeta
): ClassMember => {
  const [signatureEl, descriptionEl] = row.children;
  if (!signatureEl) throw new Error("unable to find member signature el");
  const description = asUrlCorrectedMarkdown(
    descriptionEl?.textContent || "",
    pageMeta
  );
  return signatureEl.textContent.match(/\[.+\]/)
    ? parseMemberAttr(document, signatureEl, description)
    : parseMemberFunction(document, signatureEl, description);
};
const parseMemberRows = (
  document: Document,
  rows: IElement[],
  pageMeta: PageMeta
) => rows.map((row) => parseMemberRow(document, row, pageMeta));

const prefixDescription = (description: string) => (schema: Cls) => {
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
  ).map((el) => sym(el.textContent.trim()));
  const membersRootEl = rootSiblings.find((it) =>
    it.classList.contains("brief-members")
  );
  if (!membersRootEl) throw new Error(`unable to find class member root el`);

  const members = parseMemberRows(
    document,
    queryAll(membersRootEl, "tr"),
    pageMeta
  );
  return cls({
    name,
    description: getDescription(
      document.body.getElementsByTagName("h1")[0],
      pageMeta
    ),
    members,
    inherits,
  });
};

export const scrapeClassPage = (document: Document, pageMeta: PageMeta) => {
  const classEls = getClassListingEls(document);
  return classEls.map((el) => ofEl(document, el, pageMeta));
};
