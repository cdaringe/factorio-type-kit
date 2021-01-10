import fetch from "node-fetch";
import {
  getCacheFilenameFromUrl,
  maybeReadFromCache,
  writeToCache,
} from "./fs-html-cache";

export const getHtml = async ({
  url,
  useCache = true,
}: {
  url: string;
  useCache?: boolean;
}) => {
  const cacheFilename = getCacheFilenameFromUrl(url);
  if (useCache) {
    const cached = await maybeReadFromCache(cacheFilename);
    if (cached) return cached;
  }
  const html = await fetch(url, {
    headers: { accept: "text/html" },
  }).then((r) => r.text());
  if (useCache) await writeToCache(cacheFilename, html);
  return html;
};
