import type { JSONSchema6 } from "json-schema";

export const fromLuaType = (ltype: string): JSONSchema6 => {
  if (ltype.match(/^(array of)(.*)/)) {
    const [, , rest] = ltype.match(/^(array of)(.*)/)!;
    const arr: JSONSchema6 = {
      type: "array",
      items: fromLuaType(rest),
    };
    return arr;
  }
  if (ltype.match(/^(dictionary|CustomDictionary)(.*)/)) {
    const [, _dict, lhs, rhs] = ltype.match(
      /^(dictionary|CustomDictionary)([^→]*)→(.*)/
    )!;
    if (lhs !== "string") throw new Error(`unexpected dictionary ${ltype}`);
    const ob: JSONSchema6 = {
      type: "object",
      additionalProperties: fromLuaType(rhs),
      required: [],
    };
    return ob;
  }
  switch (ltype) {
    case "int8":
    case "int16":
    case "int32":
    case "int64":
    case "uint":
    case "double":
    case "float":
      const num: JSONSchema6 = { type: "number" };
      return num;
    case "string":
    case "boolean":
      return { type: ltype };
  }
  if (ltype.match(/(Lua|LocalisedString)/)) {
    const ref: JSONSchema6 = {
      $ref: `#/definitions/${ltype}`,
    };
    return ref;
  }
  if (ltype.match(/defines\..+/)) {
    return {
      const: ltype,
    };
  }
  throw new Error(`unhandled lua => JSONSchema conversion ${ltype}`);
};
