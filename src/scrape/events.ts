import { fromLuaType } from "../factorio-meta/factorio-lua-json-schema";

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

const parseEventHtml = (el: Element) => {
  const [c1, c2] = Array.from(el.children) || [];
  const name = c1!.textContent;
  const [descriptionEl, _empty, detailEl] = Array.from(c2.children) || [];
  const description = descriptionEl?.innerHTML || "";
  const [_detailHeader, detailContent] = Array.from(detailEl.children) || [];
  const args = (Array.from(detailContent?.children) || [])
    .filter(Boolean)
    .map((node) => parseArgText((node as HTMLElement).innerText));
  return {
    name,
    description,
    args,
  };
};

// const parseEvents = (page: Page) => {
//   Array.from(document.querySelectorAll(`[id*=on_]`)).map(parseEventHtml);
// };
