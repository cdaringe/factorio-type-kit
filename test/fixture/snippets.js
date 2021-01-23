"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFixture = void 0;
const dom_1 = require("../../src/scrape/dom");
const fs_1 = require("fs");
const path_1 = require("path");
const getFixture = async (name) => {
  const document = dom_1.toDocument(
    await fs_1.promises.readFile(path_1.resolve(__dirname, name), "utf-8")
  );
  return { document, el: document.body.firstElementChild };
};
exports.getFixture = getFixture;
