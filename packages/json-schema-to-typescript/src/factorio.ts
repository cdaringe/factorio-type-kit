import { promises as fs } from "fs";
import { resolve } from "path";
import { ClassSchema, JsonClasses, jsonClassSchema } from "./schema";

const ofJson = <T>(json: string) => JSON.parse(json) as T;

async function parseFromDisk<T>(opts: { filename: string }) {
  return ofJson<T>(await fs.readFile(opts.filename, "utf-8"));
}

const testIsReadonly = (mode?: string) => {
  if (!mode) return false;
  return mode === "[R]";
};

const toDocString = (doc?: string) => {
  if (!doc) return "";
  return `
  /**
   * ${doc}
   */
  `;
};

const factorioTypeToTsType = (s?: string): string => {
  if (!s) return "unknown";
  if (s.match(/(int|double|float)/)) return "number";
  const [, arr] = s.match(/array of([a-zA-Z]+)/) || [];
  if (arr) return `${arr}[]`;

  const [, , dict] = s.match(/(dictionary|CustomDictionary)(.+)/) || [];
  if (dict) {
    const [a, ...b] = dict.split("→");
    if (!a || !b.length) {
      debugger;
      throw new Error(`could not parse dict type ${s}`);
    }
    return `Record<${factorioTypeToTsType(a)}, ${factorioTypeToTsType(
      b.join("→")
    )}>`;
  }
  return s;
};

const cleanScrapedInherits = (s: string) => {
  const [_, className] = s.match(/Inherited from\s+([a-zA-Z]+)/) || [];
  if (!className) throw new Error(`could not extract classname from ${s}`);
  return className;
};

const classSchemaToInterfaceString = (name: string, schema: ClassSchema) => {
  const extendo = schema.inherits?.length
    ? `extends ${schema.inherits.map(cleanScrapedInherits).join(", ")} `
    : "";
  if (schema.returns) throw new Error("classes should not return");
  if (schema.type && schema.type !== name) {
    throw new Error("classes should have same name");
  }
  if (schema.mode) throw new Error("classes should not have mode");
  if (!schema.properties || !Object.keys(schema.properties).length) {
    throw new Error(`empty class found: ${name}`);
  }
  const { properties, methods } = Object.entries(schema.properties).reduce(
    (acc, curr) => {
      const [propName, propSchema] = curr;
      if (propName.match(/operator/)) {
        console.warn(
          `dropping custom operator ${propName} on ${name}. https://typescripttolua.github.io/docs/advanced/compiler-annotations`
        );
        return acc;
      }
      if (propSchema.type === "function") acc.methods.push(curr);
      else acc.properties.push(curr);
      return acc;
    },
    {
      properties: [] as [string, ClassSchema][],
      methods: [] as [string, ClassSchema][],
    }
  );
  const propertyStrings = properties.map(([name, schema]) => {
    return `
      ${toDocString(schema.doc)}
      ${
        testIsReadonly(schema.mode) ? "readonly " : ""
      }${name}: ${factorioTypeToTsType(schema.type)};
      `;
  });
  return `
  ${toDocString(schema.doc)}
  declare interface ${name} ${extendo}{
${propertyStrings.map((s) => `\t${s}`).join("\n")}
  }
  `;
};

const toClassesInterfaces = (classes: JsonClasses) =>
  Object.entries(classes)
    .sort(([a], [b]) => (b > a ? 1 : -1))
    .map(([className, schema]) =>
      classSchemaToInterfaceString(className, schema)
    )
    .join("\n");

async function go() {
  const classes = jsonClassSchema.check(
    await parseFromDisk({
      filename: resolve(process.cwd(), "classes.json"),
    })
  );
  const out = toClassesInterfaces(classes);
  await fs.writeFile("classes.d.ts", out);
  console.log("ok");
}

go();
