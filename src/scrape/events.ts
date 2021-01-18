import { IElement } from "happy-dom";
import { fromLuaType } from "../factorio-meta/factorio-lua-json-schema";
import { intf, property, Property, typdecl, Type, TypeDecl } from "../ir/ir";
import { getParamFromRow } from "./classes";

export const parseArgText = (text: string) => {
  const [name, r1] = text.split("::").map((s) => s.trim());
  const [_, typeStrRaw] = r1.match(/^([a-zA-Z0-9]+)\s*/)!;
  const r2 = r1.replace(typeStrRaw, "").trim();
  const optional = !!r2.match(/^\(optional/);
  const description = r2.replace("(optional):", "").trim();
  const typeStr = typeStrRaw.trim();
  if (!typeStr) throw new Error(`arg missing type`);
  const type = fromLuaType(typeStr);
  return {
    name,
    optional,
    type,
    description,
  };
};

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

export const scrapeEvents = (el: IElement) => {
  const evtPayloadEls = el.querySelectorAll(`[id*=on_]`);
  return evtPayloadEls.map(parseEventHtml);
};
