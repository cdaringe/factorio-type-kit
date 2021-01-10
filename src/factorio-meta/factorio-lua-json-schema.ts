import type { JSONSchema6 } from "json-schema";
import { bigBadHacks } from "../hack";
import { unmodeled } from "./unmodeled-entities";

export const definitionTypes: string[] = [];

export const fromLuaType = (ltype_: string): JSONSchema6 => {
  const ltype = ltype_.trim().replace("&rarr;", "→");
  if (!ltype) {
    throw new Error("no type to convert");
  }
  if (ltype.match(/\(optional\)$/)) {
    return {
      anyOf: [
        { type: "null" },
        fromLuaType(ltype.replace(/\(optional\)$/, "")),
      ],
    };
  }
  if (ltype.includes("optional")) debugger;
  if (ltype.match(/^(dictionary|CustomDictionary)(.*)/)) {
    const dictionaryParts = ltype.match(
      /^(dictionary|CustomDictionary)([^→]*)→(.*)/
    );
    if (!dictionaryParts) {
      throw new Error("unable to parse dict types");
    }
    const [, _dict, lhs, rhs] = dictionaryParts.map((v) => v.trim());
    if (!fromLuaType(lhs.trim())) {
      throw new Error(`unexpected dictionary ${ltype}`);
    }
    const ob: JSONSchema6 = {
      type: "object",
      additionalProperties: fromLuaType(rhs.trim()),
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
      items: fromLuaType(rest.trim()),
    };
    return arr;
  }
  switch (ltype) {
    case "int":
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
    case "nil":
      return { type: "null" };
  }
  if (ltype.match(/defines\..+/)) {
    return {
      const: ltype,
    };
  }
  if (unmodeled.includes(ltype)) {
    return { type: "any" };
  }
  if (!definitionTypes.includes(ltype)) {
    definitionTypes.push(ltype.trim());
    console.warn(`:::: Adding type ${ltype}`);
  }
  const ref: JSONSchema6 = {};
  Object.defineProperty(ref, "$ref", {
    get() {
      if (bigBadHacks.isReadingRefs) return `#/definitions/${ltype}`;
      // return a def'n that has no children. such a weak defn has no children,
      // and will create 0 circular refs
      return "#/definitions/LocalisedString";
    },
  });
  Object.defineProperty(ref, "tsType", {
    value: ltype,
    enumerable: false,
  });
  return ref;
};
