import { IDocument, IElement } from "happy-dom";
import { query } from "../batteries/dom/dom-extensions";
import { asMarkdown } from "../batteries/markdown";
import { fn, property, struct, testIsType } from "../ir/ir";
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
  return struct({
    name,
    description,
    members: fields.map((field) => {
      return property(field);
    }),
  });
};

export const scrapeConcepts = (document: IDocument) => {
  const roots = Array.from(document.body.children).filter((el) =>
    el?.classList.contains("element")
  );
  return roots.map(scrapeConcept);
};
