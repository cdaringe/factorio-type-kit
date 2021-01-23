"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFixture = void 0;
const dom_1 = require("../../src/scrape/dom");
const getFixture = async (pageBasename) => {
  if (!pageBasename.match(/\.html$/)) {
    throw new Error(`pageBasename must end in .html`);
  }
  const pageMeta = {
    baseUrl: `http://testing`,
    pageBasename,
  };
  return {
    document: await dom_1.ofUrl(
      `/fake/${pageBasename}` /* prefix fake to force use of fs cache, not network */
    ),
    pageMeta,
  };
};
exports.getFixture = getFixture;
