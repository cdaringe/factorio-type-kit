import { IElement, Document } from "happy-dom";

export const siblings = (el: IElement): IElement[] =>
  el.nextElementSibling ? [el, ...siblings(el.nextElementSibling)] : [];

export const queryAll = (el: IElement | Document, query: string) =>
  Array.from(el.querySelectorAll(query));

export const query = (
  el: IElement | Document,
  query: string,
  assertMessage?: string
) => {
  const res = el.querySelector(query);
  if (assertMessage && !res) {
    throw new Error(assertMessage);
  }
  return res;
};
