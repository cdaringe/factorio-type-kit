import { Window } from "happy-dom";
import { getHtml } from "../html/producers";

export const loadVirtualPage = (html: string) => {
  const window = new Window();
  const document = window.document;
  document.write(html);
  return { document, window };
};

export const toDocument = (html: string) => loadVirtualPage(html).document;

export const ofUrl = (url: string) =>
  getHtml({ url, useCache: true }).then(toDocument);
