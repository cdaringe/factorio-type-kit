import { IDocument, IElement } from "happy-dom";
import { query } from "../batteries/dom/dom-extensions";
import { asMarkdown } from "../batteries/markdown";
import {
  fn,
  intf,
  num,
  ofLua,
  property,
  struct,
  testIsType,
  typdecl,
  Type,
  union,
} from "../ir/ir";
import { parseParam } from "./classes";

/**
 *
 * As a SimpleItemStack
 * As a LuaTechnologyPrototype: If you have a reference to LuaTechnologyPrototype, you may pass it directly.
 * As a LuaForce: If you have a reference to LuaForce, you may pass it directly.
 */
export const parseSpecificationConceptOption = (el: IElement) => {
  const noAsA = el.textContent.replace(/As an? /, "");
  const [t, ...descriptionParts] = noAsA.split(":");
  const description = descriptionParts.join(":");
  const type = ofLua(t);
  type.description = description;
  return type;
};

export const parseSpecificationConcept = ({
  name,
  description,
  el,
}: {
  name: string;
  description: string;
  el: IElement;
}) => {
  let members: Type[] = [];
  // edge-case - Position
  // position only has examples. damn it! but it's so ubiquitous we need to support it
  if (name === "Position") {
    members = [
      intf({
        name: "Position",
        membersByName: {
          x: property({ name: "x", type: num({ description: "x coord" }) }),
          y: property({ name: "y", type: num({ description: "x coord" }) }),
        },
      }),
    ];
  } else {
    const ul = query(el, ".element-content ul", "failed to find content el");
    members = ul.children.map(parseSpecificationConceptOption);
  }
  return typdecl({
    name,
    description,
    type: union({
      members,
    }),
  });
};

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
  if (description.match(/may be specified/))
    return parseSpecificationConcept({
      name,
      description,
      el,
    });
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
