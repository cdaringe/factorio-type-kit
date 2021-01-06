import type { JSONSchema6 } from "json-schema";

const definitions: string[] = [];

export const fromLuaType = (ltype: string): JSONSchema6 => {
  if (ltype.match(/^(dictionary|CustomDictionary)(.*)/)) {
    const dictionaryParts = ltype.match(
      /^(dictionary|CustomDictionary)([^→]*)→(.*)/
    );
    if (!dictionaryParts) {
      throw new Error("unable to parse dict types");
    }
    const [, _dict, lhs, rhs] = dictionaryParts.map((v) => v.trim());
    if (!fromLuaType(lhs)) {
      throw new Error(`unexpected dictionary ${ltype}`);
    }
    const ob: JSONSchema6 = {
      type: "object",
      additionalProperties: fromLuaType(rhs),
      required: [],
    };
    return ob;
  }
  if (ltype.match(" or ")) {
    return {
      anyOf: ltype.split(" or ").map((v) => fromLuaType(v.trim())),
    };
  }
  if (ltype.match(/^(array of)(.*)/)) {
    const [, , rest] = ltype.match(/^(array of)(.*)/)!;
    const arr: JSONSchema6 = {
      type: "array",
      items: fromLuaType(rest),
    };
    return arr;
  }
  switch (ltype) {
    case "uint8":
    case "uint16":
    case "uint32":
    case "uint64":
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
  if (ltype.match(/defines\..+/)) {
    return {
      const: ltype,
    };
  }
  if (!definitions.includes(ltype)) {
    definitions.push(ltype.trim());
    console.warn(`:::: Adding type ${ltype} to definitions`);
  }
  const ref: JSONSchema6 = {
    $ref: `#/definitions/${ltype}`,
  };
  return ref;
};
