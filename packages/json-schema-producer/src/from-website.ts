import { writeFileSync } from "fs";
import { Window } from 'happy-dom';
import { JSONSchema4 } from "json-schema";
import { compile } from 'json-schema-to-typescript';
import pup from "puppeteer";
import { fromLuaType } from "./json-schema";

export type FactorioApi = {
  defines: Record<string, Record<string, string>>
}

export type FactorioJsonSchema = JSONSchema4

const scrapeL2Defines = (l1: Element) => {
  const nameEl = l1.querySelector('.element-header')
  const name = nameEl?.textContent?.trim()
  if (!nameEl || !name) throw new Error(`failed to find name for el ${l1.innerHTML}`)
  const metas = Array.from(l1.querySelectorAll('tr')).map(el => {
    return {
      name: el.id.split('.')[2]!,
      description: el.querySelector('.description')?.innerHTML.trim() || ""
    }
  })
  const properties = metas
    .reduce((acc, {name, description}) => {
      const subschema = {
        type: "object",
        description,
      } as JSONSchema4
      // hack for ts
      // Object.defineProperty(subschema, 'tsType', {
      //   enumerable: false,
      //   get: () => "unknown"
      // })
      return {
      ...acc,
      [name]: subschema
    }}, {} as JSONSchema4)
    const schema: JSONSchema4 = {
    type: "object",
    description: l1.querySelector('p')?.innerText.trim(),
    properties,
    required: metas.map(m => m.name),
    additionalProperties: false
  }
  return { name, schema }
}

const loadVirtualPage = (html: string) => {
  const window = new Window();
  const document = window.document;
  document.write(html)
  return { document, window }
}

const scrapeDefines = (html: string) => {
  const { document } = loadVirtualPage(html)
  const l2s = Array.from(document.querySelectorAll('body > .element')).map(l1 => {
    const { name, schema }= scrapeL2Defines((l1 as any) as Element)
    return { name, schema }
  })
  const schema: JSONSchema4 = {
    type: 'object',
    description: "Factorio constants, persistent handles.\n@{see https://lua-api.factorio.com/latest/defines.html}\nFactorio does not include types associated with defines :/",
    properties: l2s.reduce((acc, { name, schema }) => ({
        ...acc,
        [name]: schema
      }), {}),
    required: l2s.map( ({ name }) => name ),
    additionalProperties: false
  }
  return schema
}

export const produce = async ({ urls, toScrape }: {
  urls: {
    apiRoot: string
  },
  toScrape: Record<string, {
    slug: string,
    parse: (page: pup.Page) => JSONSchema4
  }>
}) => {
  const browser = await pup.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(`${urls.apiRoot}/defines.html`, { waitUntil: 'networkidle2' })
  const defines = await scrapeDefines(await page.content())
  const schema: FactorioJsonSchema = {
    type: "object",
    description: "Factorio Lua API",
    required: ["defines"],
    properties: {
      defines
    },
    additionalProperties: false
  }
  const tso = await compile(schema, "FactorioApi")
  writeFileSync("debug.d.ts", tso)
  browser.close()
}


export const parseArgText = (text: string) => {
  const [name, r1] =  text.split("::").map(s => s.trim())
  const [_, type] =  r1.match(/^([a-zA-Z0-9]+)\s*/)!
  const r2 = r1.replace(type, "").trim()
  const optional = !!r2.match(/^\(optional/)
  const description = r2.replace("(optional):", "").trim()
  return {
    name,
    optional,
    type: fromLuaType(type),
    description
  }

}

const parseEventHtml = (el: Element) => {
  const [c1, c2] = Array.from(el.children) || []
  const name = c1!.textContent
  const [descriptionEl, _empty, detailEl] = Array.from(c2.children) || []
  const description = descriptionEl?.innerHTML || ""
  const [_detailHeader, detailContent] = Array.from(detailEl.children) || []
  const args = (Array.from(detailContent?.children) || []).filter(Boolean).map(node => parseArgText((node as HTMLElement).innerText))
  return {
    name,
    description,
    args
  }
}

const parseEvents = (page: pup.Page) => {
  Array.from(document.querySelectorAll(`[id*=on_]`)).map(parseEventHtml)
}
