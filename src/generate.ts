import Bluebird from "bluebird";
import { promises as fs } from "fs";
import { Cls, printer } from "./ir/ir";
import { scrapeClassPage } from "./scrape/classes";
import { scrapeConcepts } from "./scrape/concepts";
import { scrapeDefines } from "./scrape/defines";
import { ofUrl } from "./scrape/dom";
import { resolve } from "path";
import { IDocument } from "happy-dom";
import { scrapeEvents } from "./scrape/events";
import { skipClasses } from "./factorio-meta/entities";

export const produce = async ({
  urls,
}: {
  urls: {
    apiRoot: string;
  };
}) => {
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

  const printed = [
    `/** @noSelfInFile */`,

    // defines
    `/** defines */`,
    `declare const defines: Defines;`,
    printer.print(defines),

    // concepts
    `/** concepts */`,
    ...concepts.map(printer.print),

    // classes
    `/** classes */`,
    // @todo consider applying a nominal typing hack to classes: https://github.com/andnp/SimplyTyped/blob/85fb9cdb7655ac921f38f6e21027dc27d76dcf80/src/types/utils.ts
    ...classSchemas.map(printer.print),

    // events
    `/** events */`,
    ...events.map((evt) => {
      evt.name =
        evt.name
          .split("_")
          .map((chars) => {
            const [first, ...rest] = chars.split("");
            return [first.toLocaleUpperCase(), ...rest].join("");
          })
          .join("") + "Payload";
      return printer.print(evt);
    }),

    /**
     * expose global instances
     * @see {https://lua-api.factorio.com/latest/ api}
     */
    `/** globals */`,
    ...[
      [
        "game",
        "LuaGameScript",
        "This is the main object, through which most of the API is accessed. It is, however, not available inside handlers registered with LuaBootstrap::on_load.",
      ],
      [
        "script",
        "LuaBootstrap",
        "Provides an interface for registering event handlers.",
      ],
      [
        "remote",
        "LuaRemote",
        "Allows inter-mod communication by way of providing a repository of interfaces that is shared by all mods.",
      ],
      [
        "commands",
        "LuaCommandProcessor",
        "Allows registering custom commands for the in-game console accessible via the grave key.",
      ],
      ["settings", "LuaSettings", "Allows reading the current mod settings."],
      [
        "rcon",
        "LuaRCON",
        "Allows printing messages to the calling RCON instance if any.",
      ],
      [
        "rendering",
        "LuaRendering",
        "Allows rendering of geometric shapes, text and sprites in the game world.",
      ],
    ].map(
      ([symbol, type, description]) =>
        `/** ${description} */\ndeclare const ${symbol}: ${type};`
    ),

    // libs
    // @todo add global libs https://lua-api.factorio.com/latest/Libraries.html
    `/** libs */`,
    ...(await Promise.all([
      fs.readFile(resolve(__dirname, "factorio-meta/typedefs/libs/serpent.ts")),
      fs.readFile(
        resolve(__dirname, "factorio-meta/typedefs/libs/factorio-new-fns.ts")
      ),
      fs.readFile(
        resolve(__dirname, "factorio-meta/typedefs/LazyLoadedValue.ts")
      ),
      fs.readFile(resolve(__dirname, "factorio-meta/typedefs/Waypoint.ts")),
    ])),

    // hacks
    // @todo parse real Filter objects (not correctly x-reffed by consuming type signatures in HTML)
    `/** hacks */`,
    `/** unimplented!\n * @see {https://lua-api.factorio.com/latest/Event-Filters.html Filters} */\ntype Filters = unknown;`,
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
