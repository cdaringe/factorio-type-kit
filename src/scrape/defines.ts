import type { Document, IElement } from "happy-dom";
import { queryAll } from "../batteries/dom/dom-extensions";
import { asUrlCorrectedMarkdown } from "../batteries/markdown";
import { PageMeta } from "../interfaces";
import { Sym, sym } from "../ir/ir";

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
    return sym(el.id, {
      description: asUrlCorrectedMarkdown(
        el.querySelector(".description")?.innerHTML.trim() || "",
        pageMeta
      ),
    });
  });
};

// "Factorio constants, persistent handles.\n@{see https://lua-api.factorio.com/latest/defines.html}\nFactorio does not include types associated with defines :/",
export const scrapeDefines = (document: Document, pageMeta: PageMeta) =>
  document
    .querySelectorAll("body > .element")
    .flatMap((l1) => scrapeNestedDefines(l1, pageMeta))
    .sort((a, b) => a.text.localeCompare(b.text));
