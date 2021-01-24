---
title: Get started modding in TypeScript
excerpt: Factorio mods use Lua, but Lua is dynamically typed. Fear not--static typing is here for factorio.
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2021-01-24T05:35:07.322Z"
author:
  name: cdaringe
  picture: "/assets/blog/authors/cdaringe.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Type safety is in. In fact, it always has been! While typescript doesn't offer
the strongest safety guarantees, it _does_ offer moderate safety, and works well
as a Lua replacement. The following steps are required to author factorio mods in TS:

1. Install [node](https://nodejs.org/). I recommend using [fnm](https://github.com/Schniz/fnm#using-a-script-macoslinux) for installing nodejs installations.
2. (optional) Install [yarn](https://classic.yarnpkg.com/en/docs/install). `npm` is the default package manager for nodejs, but the following document uses `yarn`. It takes only moments to install.
3. Setup a `nodejs` project with typescript installed
4. Install & configure [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua)
5. Install & configure `factorio-type-kit`
6. Code
7. Deploy

Let's get to work.

Assuming the reader has installed node & yarn, to expedite a handful of intermediate steps, the following command can be run to bootstrap a fresh mod project _automatically_:

```sh
$ yarn create factorio-mod <mod-name>
```

I will create a mod called `vroom`. This mod will make the character accelerate as he runs, allowing the player to travel at warp speeds!

```sh
$ yarn create factorio-mod vroom

...

Victory! Your mod is ready to roll. Execute the following commands to get going:
  - cd "/Users/cdaringe/src/vroom"
  - yarn start
✨  Done in 5.75s.
```

Nice! After I `cd "/Users/cdaringe/src/vroom"`, I'll open my editor (`code .`),
and study the layout.
