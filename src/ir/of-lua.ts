import { definitionTypes } from "../factorio-meta/factorio-lua-json-schema";
import { unmodeled } from "../factorio-meta/unmodeled-entities";
import { union, map, optional, Type, arr, sym } from "./ir";
export const ofLua = (ltype_: string): Type => {
  const ltype = ltype_.trim().replace("&rarr;", "→");
  if (!ltype) {
    throw new Error("no type to convert");
  }
  if (ltype.match(/\(optional\)$/)) {
    return optional(ofLua(ltype.replace(/\(optional\)$/, "")));
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
    return map(ofLua(lhs), ofLua(rhs.trim()));
  }
  if (ltype.match(" or ")) {
    return union(...ltype.split(" or ").map(ofLua));
  }
  if (ltype.match(/^(array of)(.*)/)) {
    const [, , rest] = ltype.match(/^(array of)(.*)/)!;
    return arr(ofLua(rest.trim()));
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
      return "number";
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "nil":
      return "null";
  }
  if (ltype.match(/defines\..+/)) {
    return sym(ltype);
  }
  if (unmodeled.includes(ltype)) {
    return "any";
  }
  if (!definitionTypes.includes(ltype)) {
    definitionTypes.push(ltype.trim());
    console.warn(`:: Adding type ${ltype}`);
  }
  return sym(ltype);
};
