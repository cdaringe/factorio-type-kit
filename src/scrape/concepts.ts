import { IDocument, IElement } from "happy-dom";
import { JSONSchema6 } from "json-schema";
import { query } from "../batteries/dom/dom-extensions";
import { withType } from "../langs/typescript";
import { asMarkdown } from "../batteries/markdown";
import { parseParam } from "./classes";

export const scrapeConcept = (el: IElement) => {
  const content = query(el, ".element-content", "missing content el");
  let description = "";
  let descriptionEl = content.firstElementChild;
  // descriptions may be something like <p></p><p></p><p>actual-description</p>
  // :shrug:
  while (descriptionEl?.tagName.match(/^p$/i)) {
    description += asMarkdown(descriptionEl.textContent);
    descriptionEl = descriptionEl.nextElementSibling;
  }
  const name = content.previousElementSibling.textContent.trim();
  const fieldListEl = query(content, ".field-list");
  const fields = fieldListEl
    ? fieldListEl.children.filter((el) => el.textContent).map(parseParam)
    : [];
  const schema: JSONSchema6 = {
    description,
    properties: {
      name: {
        const: name,
      },
      members: {
        type: "object",
        properties: fields.reduce((acc, field) => {
          const memberName = (field.properties as any)?.name?.const;
          if (typeof memberName !== "string") {
            // @todo, actually parse these child structs
            // hack! dirty workaround for inconsistent dom structure in Concepts.html
            console.warn(
              `dropping concept ${name} member: ${JSON.stringify(field)}`
            );
            return acc;
          }
          acc[memberName] = field;
          return acc;
        }, {} as Record<string, JSONSchema6>),
      },
    },
  };
  Object.defineProperty(schema, "tsType", {
    enumerable: false,
    value: withType.class(schema, { asStruct: true }),
  });

  return schema;
};

export const scrapeConcepts = (document: IDocument) => {
  const roots = Array.from(document.body.children).filter((el) =>
    el?.classList.contains("element")
  );
  return roots.map(scrapeConcept);
};
