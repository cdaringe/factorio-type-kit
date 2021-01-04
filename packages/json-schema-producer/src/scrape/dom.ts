import { Window } from "happy-dom";

export const loadVirtualPage = (html: string) => {
  const window = new Window();
  const document = window.document;
  document.write(html);
  return { document, window };
};

export const toDocument = (html: string) => loadVirtualPage(html).document;
