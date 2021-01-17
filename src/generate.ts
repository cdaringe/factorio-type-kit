import Bluebird from "bluebird";
import { promises as fs } from "fs";
import { Cls, printer } from "./ir/ir";
import { scrapeClassPage } from "./scrape/classes";
import { scrapeConcepts } from "./scrape/concepts";
import { scrapeDefines } from "./scrape/defines";
import { ofUrl } from "./scrape/dom";

export const produce = async ({
  urls,
}: {
  urls: {
    apiRoot: string;
  };
}) => {
  const classLinks = await enumerateClassUrlsFromUrl(urls.apiRoot);
  const nonDedupedclassSchemas = await getClassesFromUrl(
    classLinks
  ).then((pageSchemas) => pageSchemas.flat());
  const classSchemas = Object.values(
    nonDedupedclassSchemas.reduce((byName, curr) => {
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
  const [defines, concepts] = await Promise.all([
    getDefinesFromUrl(urls.apiRoot),
    getConceptsFromUrl(urls.apiRoot),
  ]);
  const printed = [
    `/** @noSelfInFile */`,
    printer.print(defines),
    ...concepts.map(printer.print),
    ...classSchemas.map(printer.print),
    // @todo make global classes global, non-global classes ...not
    // @todo add global libs https://lua-api.factorio.com/latest/Libraries.html
  ].join("\n");
  await fs.writeFile("factorio.schema.d.ts", printed);
};

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

const enumerateClassUrlsFromUrl = async (url: string) => {
  const document = await ofUrl(url);
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
