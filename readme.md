🚨 **Please use https://github.com/GlassBricks/typed-factorio** instead.

This project was released before factorio exposed structured data about all of the modeles/entities in a machine format from their website. This project was only ever 80% complete because it relied on scraping, which simply was not reliable. They guys at https://github.com/GlassBricks/typed-factorio generated typescript now in a much more sane way. It's a better system. Use that instead! Thanks for looking!

# factorio-type-kit



![main](https://github.com/cdaringe/factorio-type-kit/workflows/main/badge.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Generate type definitions for the [Factorio Lua API](https://lua-api.factorio.com/latest/).

Currently supports typescript and a JSON [IR](<https://en.wikipedia.org/wiki/Intermediate_representation#:~:text=An%20intermediate%20representation%20(IR)%20is,such%20as%20optimization%20and%20translation.>).

Docs @ https://cdaringe.github.io/factorio-type-kit

## Usage

`factorio-type-kit` is generally used to write mods. It can also be used to generate code based on the Factorio API.

- **Writing a factorio mod in TypeScript?**

  - `npm install factorio-type-kit` or `yarn add factorio-type-kit`
  - [see the guide for writing statically typed factorio mods](https://cdaringe.github.io/factorio-type-kit/posts/get-started)

- **Generate API definitions**
  - as a library?
    - install via the npm/yarn steps above. you can now `import * from "factorio-type-kit"` directly into your JS or TS application
    - the API exports a few functions, namely `produce` & `printTs`, etc. Please see `src/bin.ts` to see them in self-documenting action :)
  - as a cli?
    - install [nodejs](https://nodejs.org/), which also installs `npx`
    - run `npx factorio-type-kit --help` to use the CLI

```
$ npx factorio-type-kit --help

Usage
  $ factorio-type-kit --language=[...]

Options
  --language, -l  ts,json
  --output, -o  path/to/filename/outupt.[ts|json]

Examples
  $ factorio-type-kit -l ts -o factorio.schema.d.ts
```

## Motivation

### Problem

- factorio API is hard to explore, because it is both _wide_ and _deep_
  - many classes/events to interact with
  - many methods/props drilled into nested data-models used during model
- iteration is slow
  - lua is dynamically typed
  - **objective** iterate less & have higher quality by applying typechecking on mod

### Solution

`factorio-type-kit` is an essential part of the solution. FTK does or supports the following:

- scrape factorio API
- convert scraped API datas into an [intermediate representation (IR)](<https://en.wikipedia.org/wiki/Intermediate_representation#:~:text=An%20intermediate%20representation%20(IR)%20is,such%20as%20optimization%20and%20translation.>)
- convert the IR to typed language target, or just JSON

With your programming tools of choice, hopefully, you can now author factorio greatness with more power than Lua. Lua is a fine scripting language--but mods can be challenging without sufficient static analysis. Types can help!
