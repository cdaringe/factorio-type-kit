import type { Document, IElement } from "happy-dom";
import { queryAll } from "../batteries/dom/dom-extensions";
import { asUrlCorrectedMarkdown } from "../batteries/markdown";
import { PageMeta } from "../interfaces";
import {
  any,
  intf,
  literal,
  objectLiteral,
  ObjectLiteral,
  property,
  str,
  Struct,
  struct,
  Sym,
  sym,
  testIsType,
  testIsTypeObjectLiteral,
  Type,
} from "../ir/ir";

const scrapeNestedDefines = (rootEl: IElement, pageMeta: PageMeta): Sym[] => {
  const [headerEl, contentEl] = rootEl.children;
  if (!headerEl || !contentEl) {
    throw new Error(`unexpected defines HTML structure ${rootEl.innerHTML}`);
  }
  const descriptionEl = Array.from(contentEl.children).find(
    (el) => el.tagName === "p"
  ) as HTMLElement | undefined;

  const memberRows = Array.from(
    queryAll(contentEl, ".brief-members")
  ).flatMap((el) => el.querySelectorAll("tr"));
  return memberRows.map((el) => {
    if (!el.id) throw new Error("missing id");
    return sym({
      text: el.id,
      description: asUrlCorrectedMarkdown(
        el.querySelector(".description")?.innerHTML.trim() || "",
        pageMeta
      ),
    });
  });
};

const guardObjectLiteral = (o: Type): o is ObjectLiteral => {
  if (!testIsTypeObjectLiteral(o)) throw new Error("whoops, bad obj lit");
  return true;
};

export const ofDefines = (definesSyms: Sym[]) => {
  const root = intf({
    name: "Defines",
    isRoot: true,
    membersByName: {},
    description:
      "Factorio constants, persistent handles.\n@{see https://lua-api.factorio.com/latest/defines.html}\nFactorio does not include types associated with defines :/",
  });
  return definesSyms.reduce((defines, curr) => {
    const [_, ...parts] = curr.text.split(".");
    parts.reduce((prevIntf, name, i, _arr) => {
      const isFinalPart = parts[i] === parts[parts.length - 1];
      if (isFinalPart) {
        prevIntf.membersByName[name] = property({ name, type: any({}) });
        return root;
      }
      const existing = prevIntf.membersByName[name];
      if (existing) {
        if (testIsType(existing.type, intf)) {
          return existing.type;
        } else {
          throw new Error("expected interface");
        }
      }
      const next = intf({ name, membersByName: {} });
      prevIntf.membersByName[name] = property({ name, type: next });
      return next;
    }, defines);
    return defines;
  }, root);
};

export const scrapeDefines = (document: Document, pageMeta: PageMeta) =>
  ofDefines(
    document
      .querySelectorAll("body > .element")
      .flatMap((l1) => scrapeNestedDefines(l1, pageMeta))
      .sort((a, b) => a.text.localeCompare(b.text))
  );
