"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const classes_1 = require("../src/scrape/classes");
const snippets_1 = require("./fixture/snippets");
const test = ava_1.default;
test("parse method params - set_controller", async (t) => {
  const { el } = await snippets_1.getFixture(
    "class-params-table-arg-set_controller.html"
  );
  const parsed = classes_1.parseMemberFnFromImplEl(el, "test-description");
  t.snapshot(parsed);
});
test("parse method params - create_local_flying_text", async (t) => {
  const { el } = await snippets_1.getFixture(
    "class-params-table-arg-create_local_flying_text.html"
  );
  const parsed = classes_1.parseMemberFnFromImplEl(el, "test-description");
  t.snapshot(parsed);
});
test("parse method params - set_allows_action", async (t) => {
  const { el } = await snippets_1.getFixture(
    "class-params-mismatched-params-set_allows_action.html"
  );
  const parsed = classes_1.parseMemberFnFromImplEl(el, "test-description");
  t.snapshot(parsed);
});
