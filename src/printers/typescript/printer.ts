import { cls, optional, testIsType, Type } from "../../ir/ir";

const printInner = (t: Type): string => {
  switch (t.__type) {
    case "and":
      return t.members.map((tp) => print(tp)).join(" & ");
    case "array":
      return `${print(t.valueType)}[]`;
    case "field":
      // description should be accessed by object literal
      return print(t.type);
    case "function":
      const paramStrs = t.parameters.map(print);
      return `(${paramStrs.join(", ")}) => ${print(t.return)}`;
    case "literal":
      return `${t.value}`;
    case "map":
      let key = print(t.keyType);
      const [_, defMatch] = key.match(/typeof (defines.*)/) || [];
      if (defMatch) {
        key = `(typeof ${defMatch})[keyof (${key})]`;
      }
      return `Record<${key}, ${print(t.valueType)}>`;
    case "object-literal":
      return `{ ${Object.entries(t.value)
        .map(([key, tp_]) => {
          const tp = tp_ as Type;
          let isOptional = false;
          let typeToPrint = tp;
          if ("type" in tp && testIsType(tp.type, optional)) {
            typeToPrint = tp.type.type;
            isOptional = true;
          }
          if (key.match(/surface/)) debugger;
          return `"${key}"${isOptional ? "?" : ""}: ${print(typeToPrint)},`;
        })
        .join(" ")} }`;
    case "optional":
      return `(null | ${print(t.type)})`;
    case "param":
      if (t.isVariadic) {
        return `...args: ${print(t.type)}[]`;
      }
      let innerType = t.type;
      if (testIsType(innerType, optional)) {
        t.isOptional = true;
        innerType.type;
      }
      return `${t.name}${t.isOptional ? "?" : ""}: ${print(t.type)}`;
    case "property":
      return `${t.isReadonly ? "readonly " : ""}"${t.name}": ${print(t.type)}`;
    case "interface":
      const inner = `{ ${Object.entries(t.membersByName)
        .map(([propName, prop]) => {
          return `${print(prop)};\n`;
        })
        .join(" ")} }`;
      if (!t.isRoot) return `/** @noSelf **/\n${inner}`;
      return `/** @noSelf **/\ninterface ${t.name} \n${inner} `;
    case "class":
    case "struct":
      let inhertsStr = "";
      if (testIsType(t, cls)) {
        if (t.inherits?.length) {
          inhertsStr = ` extends ${t.inherits
            .map((sym) => sym.text)
            .join(", ")} `;
        }
      }
      return `/** @noSelf **/\ninterface ${
        t.name
      } ${inhertsStr} { \n  ${t.members
        .map((member) => {
          return `${print(member)};\n`;
        })
        .join(" ")} }`;
    case "sym":
      return `${t.text}`;
    case "union":
      return `(${t.members.map(print).join(" | ")})`;
    case "nil":
      return "null";
    case "number":
    case "string":
    case "boolean":
    case "any":
      return t.__type;
    case "typedecl":
      return `type ${t.name} = ${print(t.type)}`;
    default:
      // exhaustive match check
      return ((arg: never) => {
        throw new Error(`unhandled: ${JSON.stringify(t)}`);
      })(t);
  }
};

export const print = (t: Type): string => {
  if (t.jsDocDescription) return `\n${t.jsDocDescription}\n${printInner(t)}`;
  if (t.description) `\n/** ${t.description} */\n${printInner(t)}`;
  return printInner(t);
};
