import { IElement } from "happy-dom";
import { intf, property, Property, typdecl, Type, TypeDecl } from "../ir/ir";
import { getParamFromRow } from "./classes";

const parseEventHtml = (el: IElement): TypeDecl => {
  const [headerEl, contentEl] = el.children;
  const name = headerEl!.textContent;
  const [descriptionEl, ...remainingContentEls] = contentEl.children;
  const description = descriptionEl?.innerHTML || "";
  const detailEl = remainingContentEls.find((el) => {
    return el.classList.contains("detail");
  });
  const [_detailHeader, detailContent] = detailEl?.children || [];
  const members = (detailContent?.children || [])
    .filter(Boolean)
    .map((el, i) => getParamFromRow(el, i));
  return typdecl({
    name,
    description,
    type: intf({
      name,
      membersByName: members.reduce((acc, curr) => {
        acc[curr.name] = property(curr);
        return acc;
      }, {} as Record<string, Property>),
    }),
  });
};

export const scrapeEvents = (el: IElement, url: string) => {
  const evtPayloadEls = el.querySelectorAll(`[id*=on_]`);
  return evtPayloadEls.map(parseEventHtml).map((x, i) => {
    const id = evtPayloadEls[i].id;
    const d = x.description;
    x.jsDocDescription = `/**\n * ${
      x.description ? `${x.description}\n * ` : ""
    }{@link ${url}#${id} ${id}}\n */`;
    x.description = "";
    return x;
  });
};
