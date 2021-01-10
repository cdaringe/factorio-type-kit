import fetch from "node-fetch";

export const produce = (url: string) =>
  fetch(url, {
    headers: { accept: "text/html" },
  }).then((r) => r.text());
