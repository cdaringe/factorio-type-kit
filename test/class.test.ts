import ava, { TestInterface } from "ava";
import { getClassListingEls, ofEl } from "../src/scrape/classes";
import { getFixture } from "./fixture/pages";

const test = ava as TestInterface<{}>;

test("class parse - case props only, no inheritance - LuaBurner", async (t) => {
  const { document, pageMeta } = await getFixture("LuaBurner.html");
  const schema = ofEl(document, getClassListingEls(document)[0], pageMeta);
  t.snapshot(schema);
});

test("class parse - case many methods, inheritance - LuaPlayer", async (t) => {
  const { document, pageMeta } = await getFixture("LuaPlayer.html");
  const classEl = getClassListingEls(document)[0];
  const schema = ofEl(document, classEl, pageMeta);
  t.snapshot(schema);
});
