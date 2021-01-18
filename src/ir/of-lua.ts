import { definitionTypes } from "../factorio-meta/factorio-lua-json-schema";
import { unmodeled } from "../factorio-meta/entities";
import {
  any,
  arr,
  bool,
  fn,
  map,
  nil,
  num,
  optional,
  param,
  str,
  sym,
  Type,
  union,
} from "./ir";
import * as printer from "./printer";

const description = "";

export const ofLua = (ltype_: string): Type => {
  const ltype = ltype_.trim().replace("&rarr;", "→");
  if (!ltype) {
    throw new Error("no type to convert");
  }
  if (ltype.match(/\(optional\)$/)) {
    return optional({
      type: ofLua(ltype.replace(/\(optional\)$/, "")),
      description,
    });
  }
  // if (ltype.includes("optional")) debugger;
  if (ltype.match(/^(dictionary|CustomDictionary)(.*)/)) {
    const dictionaryParts = ltype.match(
      /^(dictionary|CustomDictionary)([^→]*)→(.*)/
    );
    if (!dictionaryParts) {
      throw new Error("unable to parse dict types");
    }
    const [, _dict, lhs, rhs] = dictionaryParts.map((v) => v.trim());
    return map({
      keyType: ofLua(lhs),
      valueType: ofLua(rhs.trim()),
      description,
    });
  }
  if (ltype.match(" or ")) {
    return union({ members: ltype.split(" or ").map(ofLua), description });
  }
  if (ltype.match(/^(array of)(.*)/)) {
    const [, , rest] = ltype.match(/^(array of)(.*)/)!;
    return arr({ valueType: ofLua(rest.trim()), description });
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
      return num({ description });
    case "string":
      return str({ description });
    case "boolean":
      return bool({ description });
    case "nil":
      return nil({ description });
  }

  // factorio types
  const [_, llv] = ltype.match(/LazyLoadedValue\s+\((.*)\)/) || [];
  if (llv) {
    return sym({ text: `LazyLoadedValue<${printer.print(ofLua(llv))}>` });
  }
  if (ltype.match(/defines\..+/)) {
    return sym({ text: `typeof ${ltype}` });
  }
  if (unmodeled.includes(ltype)) {
    return any({});
  }
  /**
   * @todo
   * docs sometimes yield just the word `function` with no type details :/.
   * sometimes it does have mediocre type details. let's improve it
   */
  if (ltype === "function" || ltype.match(/function\([^)]*\)/)) {
    return fn({
      name: "fn",
      parameters: [
        param({
          name: "args",
          isVariadic: true,
          type: any({}),
        }),
      ],
      return: any({}),
    });
  }
  if (!definitionTypes.includes(ltype)) {
    definitionTypes.push(ltype.trim());
    console.warn(`:: Adding type ${ltype}`);
  }
  return sym({ text: ltype });
};
