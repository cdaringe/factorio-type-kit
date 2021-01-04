import { JSONSchema4 } from "json-schema";
import { PageMeta } from "../interfaces";
import { asUrlCorrectedMarkdown } from "../markdown";
import type { Document } from "happy-dom";

const scrapeNestedDefines = (rootEl: Element, pageMeta: PageMeta) => {
  const [headerEl, contentEl] = Array.from(rootEl.children) as [
    HTMLElement,
    HTMLElement
  ];
  if (!headerEl || !contentEl) {
    throw new Error(`unexpected defines HTML structure ${rootEl.innerHTML}`);
  }
  const name = headerEl.innerText.trim();
  const descriptionEl = Array.from(contentEl.children).find(
    (el) => el.tagName === "p"
  ) as HTMLElement | undefined;

  const briefMembersEl = Array.from(contentEl.children).find(
    (el) => el.className === "brief-members"
  );
  if (!briefMembersEl) {
    throw new Error(`unable to locate brief-members el`);
  }
  const localFields = Array.from(briefMembersEl.querySelectorAll("tr")).map(
    (el) => {
      const parts = el.id.split(".");
      return {
        name: parts[parts.length - 1],
        description: asUrlCorrectedMarkdown(
          el.querySelector(".description")?.innerHTML.trim() || "",
          pageMeta
        ),
      };
    }
  );

  const localProperties = localFields.reduce((acc, { name, description }) => {
    const subschema: JSONSchema4 = {
      type: "string",
      description,
      // type: "object",
    };
    // hack for ts mapping support
    Object.defineProperty(subschema, "tsType", {
      enumerable: false,
      get: () => "unknown",
    });
    return {
      ...acc,
      [name]: subschema,
    };
  }, {} as Required<JSONSchema4>["properties"]);

  const nestedProperties = Array.from(contentEl.children)
    .filter((el) => el.className === "element")
    .map((v) => scrapeNestedDefines(v, pageMeta))
    .reduce((acc, { name, schema }) => {
      return {
        ...acc,
        [name]: schema,
      };
    }, {} as Required<JSONSchema4>["properties"]);

  const schema: JSONSchema4 = {
    type: "object",
    description: descriptionEl?.innerText.trim() || "",
    properties: {
      ...localProperties,
      ...nestedProperties,
    },
    required: [
      ...Object.keys(localProperties),
      ...Object.keys(nestedProperties),
    ],
    additionalProperties: false,
  };
  return { name, schema };
};

export const scrapeDefines = (document: Document, pageMeta: PageMeta) => {
  const l2s = Array.from(document.querySelectorAll("body > .element")).map(
    (l1) => {
      const { name, schema } = scrapeNestedDefines(
        (l1 as any) as Element,
        pageMeta
      );
      return { name, schema };
    }
  );
  const schema: JSONSchema4 = {
    type: "object",
    description:
      "Factorio constants, persistent handles.\n@{see https://lua-api.factorio.com/latest/defines.html}\nFactorio does not include types associated with defines :/",
    properties: l2s.reduce(
      (acc, { name, schema }) => ({
        ...acc,
        [name]: schema,
      }),
      {}
    ),
    required: l2s.map(({ name }) => name),
    additionalProperties: false,
  };
  return schema;
};
