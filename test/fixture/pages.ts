import { PageMeta } from "../../src/interfaces";
import { ofUrl } from "../../src/scrape/dom";

export const getFixture = async (pageBasename: string) => {
  if (!pageBasename.match(/\.html$/)) {
    throw new Error(`pageBasename must end in .html`);
  }
  const pageMeta: PageMeta = {
    baseUrl: `https://lua-api.factorio.com/latest`,
    pageBasename,
  };
  return {
    document: await ofUrl(
      `${pageMeta.baseUrl}/${pageBasename}` /* prefix fake to force use of fs cache, not network */
    ),
    pageMeta,
  };
};
