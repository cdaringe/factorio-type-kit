import Bluebird from "bluebird";
import { scrapeClassPage } from "./scrape/classes";
import { scrapeConcepts } from "./scrape/concepts";
import { scrapeDefines } from "./scrape/defines";
import { ofUrl } from "./scrape/dom";
import { printer } from "./ir/ir";
import { promises as fs } from "fs";

export const produce = async ({
  urls,
}: {
  urls: {
    apiRoot: string;
  };
}) => {
  const classLinks = await enumerateClassUrlsFromUrl(urls.apiRoot);
  const classSchemas = await getClassesFromUrl(classLinks).then((pageSchemas) =>
    pageSchemas.flat()
  );
  const [defines, concepts] = await Promise.all([
    getDefinesFromUrl(urls.apiRoot),
    getConceptsFromUrl(urls.apiRoot),
  ]);
  const printed = [
    `/** @noSelfInFile */`,
    printer.print(defines),
    ...concepts.map(printer.print),
  ].join("\n");
  // const definitions = [
  //   ...classSchemas.map(({ schema, className }) => ({
  //     key: className,
  //     schema,
  //   })),
  //   ...concepts.map((c) => {
  //     const key = (c.properties?.name as JSONSchema6).const;
  //     if (typeof key !== "string") throw new Error("missing concept name");
  //     return {
  //       key,
  //       schema: c,
  //     };
  //   }),
  // ].reduce((acc, { schema, key }) => {
  //   acc[key] = schema;
  //   return acc;
  // }, {} as Required<JSONSchema6>["definitions"]);

  // // reveal the types we do not have schemas for
  // const rootDtTypes = new Set(Object.keys(definitions));
  // const dtTypes = new Set(definitionTypes);
  // rootDtTypes.forEach((t) => dtTypes.delete(t));
  // if (dtTypes.size) {
  //   throw new Error(
  //     `missing schemas for ${JSON.stringify(
  //       Array.from(dtTypes.values()),
  //       null,
  //       2
  //     )}`
  //   );
  // }

  // const schema: JSONSchema6 = {
  //   type: "object",
  //   description: "Factorio Lua API",
  //   required: [...globalClassNames, "defines"],
  //   definitions,
  //   properties: sortKeys({
  //     ...definitions,
  //     defines,
  //   }),
  //   additionalProperties: false,
  // };
  // await fs.writeFile("factorio.schema.json", JSON.stringify(schema));
  // bigBadHacks.isReadingRefs = false;
  // const tso = await compile(schema as any, "FactorioApi", {
  //   format: false,
  //   $refOptions: {
  //     resolve: {
  //       external: false,
  //       file: false,
  //     } as any,
  //     dereference: {
  //       circular: "ignore",
  //     },
  //   },
  // });
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
