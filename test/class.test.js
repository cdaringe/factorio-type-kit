"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const classes_1 = require("../src/scrape/classes");
const pages_1 = require("./fixture/pages");
const test = ava_1.default;
test("class parse - case props only, no inheritance - LuaBurner", async (t) => {
  const { document, pageMeta } = await pages_1.getFixture("LuaBurner.html");
  const schema = classes_1.ofEl(
    document,
    classes_1.getClassListingEls(document)[0],
    pageMeta
  );
  t.snapshot(schema);
});
test("class parse - case many methods, inheritance - LuaPlayer", async (t) => {
  const { document, pageMeta } = await pages_1.getFixture("LuaPlayer.html");
  const classEl = classes_1.getClassListingEls(document)[0];
  const schema = classes_1.ofEl(document, classEl, pageMeta);
  t.snapshot(schema);
});
