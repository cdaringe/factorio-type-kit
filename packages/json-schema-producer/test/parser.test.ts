import ava, { TestInterface } from "ava";
import { parseArgText } from "../src/from-website";

const test = ava as TestInterface<{}>

test("parseArg", t => {
  const cases = [
    ["unit :: LuaEntity (optional): The unit the command was assigned to.", { name: "unit", type: { $ref: "#/definitions/LuaEntity", nullable: true }, optional: true, description: "The unit the command was assigned to."}] as const,
    ["group :: LuaUnitGroup (optional): The unit group the command was assigned to.", { name: "group", type: { $ref: "#/definitions/LuaUnitGroup", nullable: true  }, optional: true, description: "The unit group the command was assigned to."}] as const,
    ["created_entity :: LuaEntity", { name: "created_entity", type: { $ref: "#/definitions/LuaEntity", nullable: true  }, optional: false, description: ""}] as const,
    ["player_index :: uint", { name: "player_index", type: { type: "number" }, optional: false, description: ""}] as const,
  ]
  cases.forEach(([input, output]) => {
    const res = parseArgText(input)
    t.deepEqual(res, output)
  })
})
