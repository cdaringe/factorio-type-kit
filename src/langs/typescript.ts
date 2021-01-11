/**
 * Exploit the https://www.npmjs.com/package/json-schema-to-typescript
 * tsType for usable TS definitions
 */
import type { JSONSchema6, JSONSchema6Object } from "json-schema";

declare module "json-schema" {
  interface JSONSchema6 {
    tsType?: string;
  }
}

const getDocBlock = (schema: JSONSchema6) =>
  schema.description ? `/* ${schema.description} */\n  ` : "";

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
  // abstract`
  if (jtt === "array") {
    const items = jtype.items;
    if (Array.isArray(items)) {
      throw new Error("unexpected array");
    }
    return `${toTsType(items as JSONSchema6)}[]`;
  }
  if (jtt === "object") {
    const props = jtype.properties as Record<string, JSONSchema6>;
    const additionalProps = jtype.additionalProperties as Record<
      string,
      JSONSchema6
    >;
    if (!props && !additionalProps) {
      throw new Error(
        "missing properties/additionalProperties field on object"
      );
    }
    const kvs = Object.entries(props || []).map(
      ([k, v]) => `"${k}": ${toTsType(v)}`
    );
    const kvsStr = kvs.length ? `{ ${kvs.join(";") + ";"} }` : "";
    const adpStr = additionalProps
      ? `Record<string, ${toTsType(additionalProps)}>`
      : "";

    return [kvsStr, adpStr].filter(Boolean).join("&");
  }
  if (jtype.anyOf) {
    return `(${jtype.anyOf
      .map((t) => toTsType(t as JSONSchema6))
      .join(" | ")})`;
  }
  if (typeof jtype.const === "string") return jtype.const;
  if (typeof jtype.$ref === "string") {
    const parts = jtype.$ref.split("/");
    return parts[parts.length - 1];
  }
  throw new Error(`unknown type ${jtt} from ${JSON.stringify(jtype)}`);
};

export const withType = {
  classProperty: (
    name: string,
    schema: JSONSchema6,
    opts: { parseMode: boolean }
  ) => {
    const mode = (schema.properties?.mode as JSONSchema6)?.const as string[];
    if (opts.parseMode) {
      if (!mode) {
        throw new Error("property has no mode");
      }
      if (!Array.isArray(mode)) throw new Error("expected mode array");
    }
    const isRO = opts.parseMode
      ? !mode.some((rw: string) => !!rw.match(/w/i))
      : false;
    if (!schema.properties?.type) debugger;
    return `${getDocBlock(schema)}${
      isRO ? "readonly " : ""
    }"${name}": ${toTsType(schema.properties?.type as JSONSchema6)}`;
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
    return `(${args}) => ${toTsType(retSchema)}`;
  },
  class: (schema: JSONSchema6, opts: { asStruct?: boolean }) => {
    const members = schema.properties!.members as JSONSchema6;
    const membersProperties = members.properties as Record<string, JSONSchema6>;
    const { properties: propNames, methods: methodNames } = Object.entries(
      membersProperties
    ).reduce(
      (acc, [name, aSchema]) => {
        if (aSchema.properties?.return) acc.methods.push(name);
        else acc.properties.push(name);
        return acc;
      },
      { properties: [] as string[], methods: [] as string[] }
    );
    const sort = (a: string, b: string) => a.localeCompare(b);
    const propStrs = propNames.sort(sort).map((name) => {
      return withType.classProperty(name, membersProperties[name], {
        parseMode: !opts?.asStruct,
      });
    });
    const methodStrs = methodNames.sort(sort).map((name) => {
      const mSchema = membersProperties[name];
      return `${getDocBlock(mSchema)}${name}: ${withType.method(mSchema)}`;
    });
    const inheritsTypes: string[] =
      (schema.properties as any)?.inherits?.items.map((it: any) => it?.const) ||
      [];
    const inheritsStr = inheritsTypes.length
      ? ` & ${inheritsTypes.join(" & ")}`
      : "";
    return `
{
  ${propStrs.length ? "/* properties */" : ""}
  ${propStrs.map((it) => `  ${it};`).join("\n")}

  ${methodStrs.length ? "/* methods */" : ""}
  ${methodStrs.map((it) => `  ${it};`).join("\n")}
}${inheritsStr}`;
  },
};
