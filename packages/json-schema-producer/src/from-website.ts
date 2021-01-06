import Bluebird from "bluebird";
import { promises as fs } from "fs";
import { JSONSchema6 } from "json-schema";
import { compile } from "json-schema-to-typescript";
import { Page, Browser, launch } from "puppeteer";
import {
  exists,
  getCacheFilenameFromUrl,
  maybeReadFromCache,
  writeToCache,
} from "./fs-html-cache";
import { classNames as globalClassNames } from "./globals";
import { fromLuaType } from "./json-schema";
import { scrapeClassPage } from "./scrape/classes";
import { scrapeDefines } from "./scrape/defines";
import { loadVirtualPage, toDocument } from "./scrape/dom";

const createGetDefines = (urlRoot: string, browser: Browser) => async () => {
  const pageBasename = "defines.html";
  const baseUrl = `${urlRoot}/${pageBasename}`;
  const page = await browser.newPage();
  await page.goto(baseUrl, {
    waitUntil: "networkidle2",
  });
  return scrapeDefines(toDocument(await page.content()), {
    baseUrl,
    pageBasename,
  });
};

export const getHtml = async ({
  browser,
  url,
  useCache,
}: {
  browser: Browser;
  url: string;
  useCache?: boolean;
}) => {
  const cacheFilename = getCacheFilenameFromUrl(url);
  if (useCache) {
    const cached = await maybeReadFromCache(cacheFilename);
    if (cached) return cached;
  }
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  const html = await page.content();
  if (useCache) await writeToCache(cacheFilename, html);
  return html;
};

const getClasses = async (
  browser: Browser,
  classLinks: { text: string; href: string }[]
) =>
  Bluebird.map(
    classLinks,
    async ({ text, href }) => {
      const parts = href.split("/");
      const html = await getHtml({ url: href, browser, useCache: true });
      return scrapeClassPage(toDocument(html), {
        baseUrl: href,
        pageBasename: parts[parts.length - 1],
      }).map((schema) => {
        const classNameSchema = schema?.properties?.name;
        if (typeof classNameSchema === "boolean")
          throw new Error("invalid classNameSchema");
        if (!classNameSchema) throw new Error(`class schema missing name prop`);
        const className = classNameSchema.const;
        if (typeof className !== "string")
          throw new Error("invalid class schema, property `name` Schema");
        return {
          className,
          schema,
        };
      });
    },
    {
      concurrency: 1, // 5,
    }
  );

const enumerateClasses = async (page: Page, baseUrl: string) => {
  const { document } = loadVirtualPage(await page.content());
  return Array.from(
    document.getElementById("Classes").nextElementSibling.nextElementSibling
      .nextElementSibling.nextElementSibling.nextElementSibling.firstChild
      .firstChild.childNodes
  ).map((el) => {
    const classAnchor = el.firstChild.firstChild as any;
    if (!classAnchor) throw new Error("no class anchor element found");
    const text = classAnchor.textContent;
    const href: string = classAnchor.getAttribute("href");
    if (!text || !href) throw new Error(`unable to find text or href`);
    return { text, href: `${baseUrl}/${href}` };
  });
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
      parse: (page: Page) => JSONSchema6;
    }
  >;
}) => {
  const browser = await launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(urls.apiRoot, { waitUntil: "networkidle2" });
    const classLinks = await enumerateClasses(page, urls.apiRoot);
    const classSchemas = await getClasses(
      browser,
      classLinks
    ).then((pageSchemas) => pageSchemas.flat());
    const globalClasses = classSchemas.filter(({ className }) =>
      globalClassNames.some((gcn) => gcn === className)
    );
    const defines = await createGetDefines(urls.apiRoot, browser)();
    const schema: JSONSchema6 = {
      type: "object",
      description: "Factorio Lua API",
      required: [...globalClassNames, "defines"],
      properties: {
        defines,
        ...globalClasses.reduce((acc, { className, schema }) => {
          return {
            [className]: schema,
            ...acc,
          };
        }, {} as Required<JSONSchema6>["properties"]),
      },
      additionalProperties: false,
    };
    const tso = await compile(schema as any, "FactorioApi");
    await Promise.all([
      fs.writeFile("factorio.schema.json", JSON.stringify(schema, null, 2)),
      fs.writeFile("factorio.schema.d.ts", tso),
    ]);
  } finally {
    browser.close();
  }
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

const parseEvents = (page: Page) => {
  Array.from(document.querySelectorAll(`[id*=on_]`)).map(parseEventHtml);
};
