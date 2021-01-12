import ava, { TestInterface } from "ava";
import { parseImplEl } from "../src/scrape/classes";
import { getFixture } from "./fixture/snippets";

const test = ava as TestInterface<{}>;

test("parse method params - set_controller", async (t) => {
  const { el } = await getFixture("class-params-table-arg-set_controller.html");
  const parsed = parseImplEl(el, "test-description");
  t.snapshot(parsed);
});

test("parse method params - create_local_flying_text", async (t) => {
  const { el } = await getFixture(
    "class-params-table-arg-create_local_flying_text.html"
  );
  const parsed = parseImplEl(el, "test-description");
  t.snapshot(parsed);
});

test("parse method params - set_allows_action", async (t) => {
  const { el } = await getFixture(
    "class-params-mismatched-params-set_allows_action.html"
  );
  const parsed = parseImplEl(el, "test-description");
  t.snapshot(parsed);
});
