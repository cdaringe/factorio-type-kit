import { writeFileSync } from "fs";
import { Window } from "happy-dom";
import { JSONSchema4 } from "json-schema";
import { compile } from "json-schema-to-typescript";
import pup from "puppeteer";
import { fromLuaType } from "./json-schema";
import TurndownService from "turndown";

type PageMeta = { baseUrl: string; pageBasename: string };
const asUrlCorrectedMarkdown = (
  s: string,
  { baseUrl, pageBasename }: PageMeta
) => {
  const turndown = new TurndownService({});
  // turndown.addRule("correct-urls", {
  //   filter: "a",
  //   replacement: (content) => {

  //     return content;
  //   },
  // });
  let md = turndown.turndown(s);
  if (s.match(/href/)) {
    // cases
    // 0. absolute rules
    // no op. the following rules should not meddle with http(s):// urls
    // 1. on-page-urls/anchors
    md = md.replace(new RegExp(`\\]\\(${pageBasename}`, "gi"), `](${baseUrl}`);
    // 2. relative urls
    const relmatches = md.match(new RegExp(`\\]\\((?!http)(\.+.html)`));
    if (relmatches?.length) {
      md = md.replace(
        new RegExp(`\\]\\((?!http)\.+.html`, "gi"),
        `](${baseUrl.replace(pageBasename, relmatches[1])}`
      );
    }
  }
  return md;
};

export type FactorioApi = {
  defines: Record<string, Record<string, string>>;
};

export type FactorioJsonSchema = JSONSchema4;

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

const loadVirtualPage = (html: string) => {
  const window = new Window();
  const document = window.document;
  document.write(html);
  return { document, window };
};

const scrapeDefines = (html: string, pageMeta: PageMeta) => {
  const { document } = loadVirtualPage(html);
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

export const produce = async ({
  urls,
  toScrape,
}: {
  urls: {
    apiRoot: string;
  };
  toScrape: Record<
    string,
    {
      slug: string;
      parse: (page: pup.Page) => JSONSchema4;
    }
  >;
}) => {
  const browser = await pup.launch({ headless: true });
  const page = await browser.newPage();
  const pageBasename = "defines.html";
  const baseUrl = `${urls.apiRoot}/${pageBasename}`;
  await page.goto(baseUrl, {
    waitUntil: "networkidle2",
  });
  const defines = await scrapeDefines(await page.content(), {
    baseUrl,
    pageBasename,
  });
  const schema: FactorioJsonSchema = {
    type: "object",
    description: "Factorio Lua API",
    required: ["defines"],
    properties: {
      defines,
    },
    additionalProperties: false,
  };
  const tso = await compile(schema, "FactorioApi");
  writeFileSync("debug.d.ts", tso);
  browser.close();
};

export const parseArgText = (text: string) => {
  const [name, r1] = text.split("::").map((s) => s.trim());
  const [_, type] = r1.match(/^([a-zA-Z0-9]+)\s*/)!;
  const r2 = r1.replace(type, "").trim();
  const optional = !!r2.match(/^\(optional/);
  const description = r2.replace("(optional):", "").trim();
  return {
    name,
    optional,
    type: fromLuaType(type),
    description,
  };
};

const parseEventHtml = (el: Element) => {
  const [c1, c2] = Array.from(el.children) || [];
  const name = c1!.textContent;
  const [descriptionEl, _empty, detailEl] = Array.from(c2.children) || [];
  const description = descriptionEl?.innerHTML || "";
  const [_detailHeader, detailContent] = Array.from(detailEl.children) || [];
  const args = (Array.from(detailContent?.children) || [])
    .filter(Boolean)
    .map((node) => parseArgText((node as HTMLElement).innerText));
  return {
    name,
    description,
    args,
  };
};

const parseEvents = (page: pup.Page) => {
  Array.from(document.querySelectorAll(`[id*=on_]`)).map(parseEventHtml);
};
