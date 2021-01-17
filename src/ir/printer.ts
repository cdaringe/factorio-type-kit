import { intf, testIsType, Type } from "./ir";

export const printInner = (t: Type): string => {
  switch (t.__type) {
    case "and":
      return t.members.map((tp) => print(tp)).join(" & ");
    case "array":
      return `${print(t.valueType)}[]`;
    case "field":
      // description should be accessed by object literal
      return print(t.type);
    case "function":
      return `(${t.parameters.map((p) => print(p)).join(", ")}) => ${print(
        t.return
      )}`;
    case "literal":
      return `${t.value}`;
    case "map":
      return `Map<${print(t.keyType)}, ${print(t.valueType)}>`;
    case "object-literal":
      return `{ ${Object.entries(t.value)
        .map(([key, tp]) => `"${key}": ${print(tp as Type)},`)
        .join(" ")} }`;
    case "optional":
      return `(null | ${print(t.type)})`;
    case "param":
      if (t.isVariadic) {
        return `...args: ${print(t.type)}[]`;
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
      if (!t.isRoot) return inner;
      return `interface ${t.name} \n${inner} `;
    case "struct":
      return `interface ${t.name} { \n  ${t.members
        .map((member) => {
          return `${print(member)};\n`;
        })
        .join(" ")} }`;
    case "sym":
      return `${t.text}`;
    case "union":
      return `(${t.members.map(print).join(" | ")})`;
    case "number":
    case "nil":
    case "string":
    case "boolean":
    case "any":
      return t.__type;
    default:
      // exhaustive match check
      return ((arg: never) => {
        throw new Error(`unhandled: ${JSON.stringify(t)}`);
      })(t);
  }
};

export const print = (t: Type): string => {
  if (!t.description) return printInner(t);
  return `/** ${t.description} */\n${printInner(t)}`;
};
