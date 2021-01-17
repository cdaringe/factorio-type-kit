import ava, { TestInterface } from "ava";
import {
  bool,
  IRMap,
  num,
  ofLua,
  str,
  Union,
  Type,
  testIsType,
} from "../src/ir/ir";
const test = ava as TestInterface<{}>;

const description = "";

test("ir - all types are WithType", (t) => {
  type TName = Type["__type"];
  const name: TName = "number";
  t.truthy(name);
});

test("ir - parse types", (t) => {
  const t1 = ofLua("boolean");
  t.snapshot(t1);

  const t2 = ofLua("uint");
  t.snapshot(t2);

  const t3 = ofLua("dictionary string → string") as IRMap;
  t.snapshot(t3);

  const t4 = ofLua("uint or dictionary string → string") as Union;
  t.snapshot(t4);
});

test("testIsType", (t) => {
  const b = bool({});
  const s = str({}) as any; // intentionally widen the type, to narrow it later
  t.true(testIsType(b, bool));
  t.false(testIsType(s, bool));
  if (testIsType(b as any, bool)) {
    // assert type narrowing
    t.is(b.__type, "boolean");
  }
  if (testIsType(s, bool)) {
    // case never expected
    // only for type narrowing
    t.is(s.__type, "boolean");
  }
});
