import { FactorioPrinter } from "../printerfaces";
import * as fs from "fs/promises";
import * as printer from "./printer";
import { resolve } from "path";

const srcDirname = resolve(__dirname, "..", "..");

export const print: FactorioPrinter = async ({
  defines,
  concepts,
  events,
  classSchemas,
}) => {
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
    await Promise.all([
      fs.readFile(
        resolve(srcDirname, "factorio-meta/typedefs/libs/serpent.ts"),
        "utf-8"
      ),
      fs.readFile(
        resolve(srcDirname, "factorio-meta/typedefs/libs/factorio-new-fns.ts"),
        "utf-8"
      ),
      fs.readFile(
        resolve(srcDirname, "factorio-meta/typedefs/LazyLoadedValue.ts"),
        "utf-8"
      ),
      fs.readFile(
        resolve(srcDirname, "factorio-meta/typedefs/Waypoint.ts"),
        "utf-8"
      ),
    ]).then((files) => files.join("\n")),
    // hacks
    // @todo parse real Filter objects (not correctly x-reffed by consuming type signatures in HTML)
    `/** hacks */`,
    `/** unimplented!\n * @see {https://lua-api.factorio.com/latest/Event-Filters.html Filters} */\ntype Filters = unknown;`,
  ].join("\n");
  return printed;
};
