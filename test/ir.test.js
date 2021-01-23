"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const ir_1 = require("../src/ir/ir");
const test = ava_1.default;
const description = "";
test("ir - all types are WithType", (t) => {
  const name = "number";
  t.truthy(name);
});
test("ir - parse types", (t) => {
  const t1 = ir_1.ofLua("boolean");
  t.snapshot(t1);
  const t2 = ir_1.ofLua("uint");
  t.snapshot(t2);
  const t3 = ir_1.ofLua("dictionary string → string");
  t.snapshot(t3);
  const t4 = ir_1.ofLua("uint or dictionary string → string");
  t.snapshot(t4);
});
test("testIsType", (t) => {
  const b = ir_1.bool({});
  const s = ir_1.str({}); // intentionally widen the type, to narrow it later
  t.true(ir_1.testIsType(b, ir_1.bool));
  t.false(ir_1.testIsType(s, ir_1.bool));
  if (ir_1.testIsType(b, ir_1.bool)) {
    // assert type narrowing
    t.is(b.__type, "boolean");
  }
  if (ir_1.testIsType(s, ir_1.bool)) {
    // case never expected
    // only for type narrowing
    t.is(s.__type, "boolean");
  }
});
