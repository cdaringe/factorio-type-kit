import Bluebird from "bluebird";
import { promises as fs } from "fs";
import { JSONSchema4 } from "json-schema";
import { compile } from "json-schema-to-typescript";
import { Page, Browser, launch } from "puppeteer";
import { classNames } from "./globals";
import { scrapeClass } from "./scrape/classes";
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

const createGetClasses = (
  browser: Browser,
  classLinks: { text: string; href: string }[]
) =>
  classLinks.map(({ text: className, href }) => async () => {
    const page = await browser.newPage();
    await page.goto(href, {
      waitUntil: "networkidle2",
    });
    const parts = href.split("/");
    return {
      className,
      schema: scrapeClass(toDocument(await page.content()), className, {
        baseUrl: href,
        pageBasename: parts[parts.length - 1],
      }),
    };
  });

const enumerateClasses = async (page: Page, baseUrl: string) => {
  const { document } = loadVirtualPage(await page.content());
  debugger;
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
      parse: (page: Page) => JSONSchema4;
    }
  >;
}) => {
  const browser = await launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(urls.apiRoot, { waitUntil: "networkidle2" });
  const classLinks = await enumerateClasses(page, urls.apiRoot);
  const [defines, ...classes] = Bluebird.map(
    [
      createGetDefines(urls.apiRoot, browser),
      ...createGetClasses(browser, classLinks),
    ],
    (fn) => fn(),
    {
      concurrency: 5,
    }
  );
  const schema: JSONSchema4 = {
    type: "object",
    description: "Factorio Lua API",
    required: [...classNames, "defines"],
    properties: {
      defines,
      ...globalClasses,
    },
    additionalProperties: false,
  };
  const tso = await compile(schema, "FactorioApi");
  await Promise.all([
    fs.writeFile("factorio.schema.json", JSON.stringify(schema, null, 2)),
    fs.writeFile("factorio.schema.d.ts", tso),
  ]);
  browser.close();
};

// export const parseArgText = (text: string) => {
//   const [name, r1] = text.split("::").map((s) => s.trim());
//   const [_, type] = r1.match(/^([a-zA-Z0-9]+)\s*/)!;
//   const r2 = r1.replace(type, "").trim();
//   const optional = !!r2.match(/^\(optional/);
//   const description = r2.replace("(optional):", "").trim();
//   return {
//     name,
//     optional,
//     type: fromLuaType(type),
//     description,
//   };
// };

// const parseEventHtml = (el: Element) => {
//   const [c1, c2] = Array.from(el.children) || [];
//   const name = c1!.textContent;
//   const [descriptionEl, _empty, detailEl] = Array.from(c2.children) || [];
//   const description = descriptionEl?.innerHTML || "";
//   const [_detailHeader, detailContent] = Array.from(detailEl.children) || [];
//   const args = (Array.from(detailContent?.children) || [])
//     .filter(Boolean)
//     .map((node) => parseArgText((node as HTMLElement).innerText));
//   return {
//     name,
//     description,
//     args,
//   };
// };

// const parseEvents = (page: pup.Page) => {
//   Array.from(document.querySelectorAll(`[id*=on_]`)).map(parseEventHtml);
// };
