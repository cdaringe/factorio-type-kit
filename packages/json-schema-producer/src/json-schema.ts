import type { JSONSchemaType } from "ajv";

export const fromLuaType = (ltype: string): JSONSchemaType<any> => {
  if (ltype.match(/^(array of)(.*)/)) {
    const [, , rest] = ltype.match(/^(array of)(.*)/)!;
    const arr: JSONSchemaType<any> = {
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
    const ob: JSONSchemaType<any> = {
      type: "object",
      additionalProperties: fromLuaType(rhs),
      required: [],
    };
    return ob;
  }
  switch (ltype) {
    case "uint":
    case "double":
    case "float":
      const num: JSONSchemaType<any> = { type: "number" };
      return num;
    case "string":
    case "boolean":
      return { type: ltype };
  }
  if (ltype.match(/Lua/)) {
    const ref: JSONSchemaType<any> = {
      $ref: `#/definitions/${ltype}`,
      nullable: true,
    };
    return ref;
  }
  throw new Error(`unhandled lua => JSONSchema conversion ${ltype}`);
};
