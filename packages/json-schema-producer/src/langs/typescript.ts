/**
 * Exploit the https://www.npmjs.com/package/json-schema-to-typescript
 * tsType for usable TS definitions
 */
import { JSONSchema6 } from "json-schema";

declare module "json-schema" {
  interface JSONSchema6 {
    tsType?: string;
  }
}

const toTsType = (jtype: JSONSchema6): string => {
  // primitives
  const jtt = jtype.type;
  if (
    jtt === "any" ||
    jtt === "null" ||
    jtt === "number" ||
    jtt === "boolean" ||
    jtt === "integer" ||
    jtt === "string"
  ) {
    return jtt;
  }
  // abstract
  if (jtt === "array") {
    const items = jtype.items;
    if (!Array.isArray(items)) throw new Error("invalid array");
    return `${items.map((it) => toTsType(it as JSONSchema6)).join(" | ")}[]`;
  }
  if (jtt === "object") {
    const props = jtype.properties as Record<string, JSONSchema6>;
    if (!props) throw new Error("missing properties field on object");
    const kvs = Object.entries(props).map(([k, v]) => `"${k}": ${toTsType(v)}`);
    return `{ ${kvs.join(";")} }`;
  }
  if (jtype.anyOf) {
    return `(${jtype.anyOf
      .map((t) => toTsType(t as JSONSchema6))
      .join(" | ")})`;
  }
  throw new Error(`unknown type ${jtt}`);
};

export const withType = {
  classProperty: (name: string, schema: JSONSchema6) => {
    const mode = (schema.properties?.mode as JSONSchema6)?.const as string[];
    if (!mode) throw new Error("property has no mode");
    if (!Array.isArray(mode)) throw new Error("expected mode array");
    const isRO = !mode.some((rw: string) => !!rw.match(/w/i));
    return `${isRO ? "readonly " : ""}${name}: ${toTsType(
      schema.properties?.type as JSONSchema6
    )}`;
  },
  method: (schema: JSONSchema6) => {
    const args = ((schema.items as JSONSchema6[]) || [])
      .map((aSchema, i) => {
        const name =
          (aSchema.properties?.name as JSONSchema6).const || `arg${i}`;
        const tsType = toTsType(aSchema);
        return `${name}: ${tsType}`;
      })
      .join(", ");
    const retSchema = schema.properties?.return as JSONSchema6;
    if (!retSchema) {
      throw new Error("missing return value");
    }
    const ret = toTsType(retSchema);
    return `(${args}) => ${ret}`;
  },
  class: (schema: JSONSchema6) => {
    const members = (schema.properties!.members as JSONSchema6)
      .properties as Record<string, JSONSchema6>;
    const memberStrs = Object.entries(
      members as Record<string, JSONSchema6>
    ).map(([name, aSchema]) => {
      if (aSchema.properties?.return)
        return `${name}: ${withType.method(aSchema)}`;
      return withType.classProperty(name, aSchema);
    });
    return `\{\n${memberStrs.map((it) => `  ${it}`).join(";\n")}\n}`;
  },
};
