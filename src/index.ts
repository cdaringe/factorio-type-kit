import Bluebird from "bluebird";
import { promises as fs } from "fs";
import { Cls } from "./ir/ir";
import { scrapeClassPage } from "./scrape/classes";
import { scrapeConcepts } from "./scrape/concepts";
import { scrapeDefines } from "./scrape/defines";
import { ofUrl } from "./scrape/dom";
import { resolve } from "path";
import { IDocument } from "happy-dom";
import { scrapeEvents } from "./scrape/events";
import { skipClasses } from "./factorio-meta/entities";

export { print as printTs } from "./printers/typescript/factorio";

export const produce = async (opts?: {
  urls: {
    apiRoot: string;
  };
}) => {
  const { urls } = opts || {
    urls: {
      apiRoot: "https://lua-api.factorio.com/latest",
    },
  };
  const [rootDocument] = await Promise.all([ofUrl(urls.apiRoot)]);
  const classLinks = await enumerateClassUrlsFromUrl(
    rootDocument,
    urls.apiRoot
  );
  const nonDedupedClassSchemas = await getClassesFromUrl(
    classLinks
  ).then((pageSchemas) => pageSchemas.flat());
  const classSchemas = Object.values(
    nonDedupedClassSchemas.reduce((byName, curr) => {
      if (skipClasses.some((skip) => skip === curr.name)) return byName;
      if (byName[curr.name]) {
        if (JSON.stringify(curr) !== JSON.stringify(byName[curr.name])) {
          throw new Error(
            `class ${curr.name} varies depending from where it is parsed! :|`
          );
        }
      }
      byName[curr.name] = curr;
      return byName;
    }, {} as Record<string, Cls>)
  );
  const [defines, concepts, events] = await Promise.all([
    getDefinesFromUrl(urls.apiRoot),
    getConceptsFromUrl(urls.apiRoot),
    getEventsFromUrl(urls.apiRoot),
  ]);

  return { defines, concepts, events, classSchemas };
};

type Awaited<T> = T extends Promise<infer U> ? U : never;
export type GenerateResult = Awaited<ReturnType<typeof produce>>;

const getDefinesFromUrl = async (urlRoot: string) => {
  const pageBasename = "defines.html";
  const url = `${urlRoot}/${pageBasename}`;
  return scrapeDefines(await ofUrl(url), {
    baseUrl: url,
    pageBasename,
  });
};

const getConceptsFromUrl = async (urlRoot: string) => {
  const pageBasename = "Concepts.html";
  const url = `${urlRoot}/${pageBasename}`;
  return scrapeConcepts(await ofUrl(url));
};

const getEventsFromUrl = async (urlRoot: string) => {
  const url = `${urlRoot}/events.html`;
  const document = await ofUrl(url);
  return scrapeEvents(document.body, url);
};

const getClassesFromUrl = async (classLinks: { href: string }[]) =>
  Bluebird.map(
    classLinks,
    async ({ href }) => {
      const parts = href.split("/");
      return scrapeClassPage(await ofUrl(href), {
        baseUrl: href,
        pageBasename: parts[parts.length - 1],
      });
    },
    {
      concurrency: 10,
    }
  );

const enumerateClassUrlsFromUrl = async (document: IDocument, url: string) => {
  const classRootEls = document.getElementById("Classes");
  const classEls =
    classRootEls.nextElementSibling.nextElementSibling.nextElementSibling
      .nextElementSibling.firstChild.firstChild.childNodes;
  return classEls.map((el) => {
    const classAnchor = el.firstChild.firstChild as any;
    if (!classAnchor) throw new Error("no class anchor element found");
    const href: string = classAnchor.getAttribute("href");
    if (!href) throw new Error(`unable to find text or href`);
    return { href: `${url}/${href}` };
  });
};
