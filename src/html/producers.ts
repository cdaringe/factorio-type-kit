import {
  maybeProduce as maybeProduceDisk,
  writeToCache,
} from "./producer-disk";
import { produce as produceHttp } from "./producer-http";

export type GetHtml = { url: string; useCache?: boolean };
export const getHtml = async ({ url, useCache = true }: GetHtml) => {
  if (useCache) {
    const cached = await maybeProduceDisk(url);
    if (cached) return cached;
  }
  const html = await produceHttp(url);
  if (useCache) await writeToCache(url, html);
  return html;
};
