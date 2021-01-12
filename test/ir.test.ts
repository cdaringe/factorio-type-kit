import ava, { TestInterface } from "ava";
import { IRMap, ofLua, Union } from "../src/ir/ir";
const test = ava as TestInterface<{}>;

test("ir - parse types", (t) => {
  const t1 = ofLua("boolean");
  t.is(t1, "boolean");

  const t2 = ofLua("uint");
  t.is(t2, "number");

  const t3 = ofLua("dictionary string → string") as IRMap<string, string>;
  const expectedIRStrStrMap: IRMap<string, string> = {
    __type: "map",
    keyType: "string",
    valueType: "string",
  };
  t.deepEqual(t3, expectedIRStrStrMap);

  const t4 = ofLua("uint or dictionary string → string") as Union;
  t.deepEqual(t4, {
    __type: "union",
    members: ["number", expectedIRStrStrMap],
  });
});
