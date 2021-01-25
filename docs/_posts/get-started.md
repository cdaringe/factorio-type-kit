---
title: Get started modding Factorio in TypeScript
excerpt: Factorio mods use Lua, but Lua is dynamically typed. Fear not--static typing is here for factorio.
# coverImage: "/factorio-type-kit/assets/blog/dynamic-routing/cover.jpg"
date: "2021-01-24T05:35:07.322Z"
author:
  name: cdaringe
  picture: "/factorio-type-kit/assets/blog/authors/cdaringe.jpeg"
# ogImage:
#   url: "/factorio-type-kit/assets/blog/dynamic-routing/cover.jpg"
---


Programming with type safety is in. **Of course** we want type safety when programming inside of Factorio! While TypeScript doesn't offer
the strongest safety guarantees of any language under the sun, it does offer moderate safety, and works well
as a Lua replacement. The following steps are required to author factorio mods in TS:

## Factorio in TypeScript - Outline

We will execute the following steps later, but at a glance, here are the general steps in TS Factorio mod development:

1. Install [node](https://nodejs.org/). I recommend using [fnm](https://github.com/Schniz/fnm#using-a-script-macoslinux) for installing and managing nodejs installations.
2. (optional) Install [yarn](https://classic.yarnpkg.com/en/docs/install). `npm` is the default package manager for nodejs, but the following document uses `yarn`. It takes only moments to install.
3. Setup a `nodejs` project
4. Install `factorio-type-kit`, [typescript](https://www.typescriptlang.org/#installation), and [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua)
5. Configure the typescript compiler to use TypeScriptToLua
6. Code
7. Package & deploy the mod

It is assumed that the reader has installed node & yarn before proceeding further.

Let's get to work.

## Bootstrapping a barebones mod

The following command can be run to bootstrap a fresh mod project _automatically_:

<!-- <Shell children='$ yarn create factorio-mod <mod-name>' /> -->
```shell
$ yarn create factorio-mod <mod-name>
```

For demonstration purposes, I will create a mod called `vroom`. This mod will make the character accelerate as he runs, allowing the player to travel at warp speed!

```shell
$ yarn create factorio-mod vroom
...
Victory! Your mod is ready to roll. Execute the following commands to get going:
  - cd "/Users/cdaringe/src/vroom"
  - yarn start
✨  Done in 5.75s.
```

This step automatically installs the aforementioned dependencies and sets up the compiler toolchain.
If you want to do these steps manually, please see the [vroom](https://github.com/cdaringe/vroom) codebase, and replicate the artifacts hosted there. [@mods.factorio.com](https://mods.factorio.com/mod/vroom)

## Understanding the barebones mod

Let us `cd "path/to/vroom"`, and study the content. If you
are familiar with the [factorio mod directory stucture](https://wiki.factorio.com/Tutorial:Mod_structure),
this should look quite familiar.

```shell
~/src/vroom via ⬢ v15.0.1
❯ ls -alh
Permissions Size User     Date Modified Name
.rw-r--r--   167 cdaringe 24 Jan 11:37  control.ts
.rw-r--r--   183 cdaringe 24 Jan 11:37  info.json
drwxr-xr-x     - cdaringe 24 Jan 11:37  node_modules
.rw-r--r--   247 cdaringe 24 Jan 11:37  package.json
.rw-r--r--   131 cdaringe 24 Jan 11:37  readme.md
.rw-r--r--   331 cdaringe 24 Jan 11:37  tsconfig.json
.rw-r--r--   35k cdaringe 24 Jan 11:37  yarn.lock
```
 <!-- `.trim()} /> -->

- `info.json` - the entrypont to all factorio mods, pre-populated with some essentials
- `control.ts` - this file will compile to `control.lua`, which Factorio uses to run your mod!
- `tsconfig.json` - typescript configuration, critically including [TypescriptToLua configuration](https://typescripttolua.github.io/docs/configuration)
- `package.json` & `node_modules` - resources to support your TS development experience :)

Let's open up `control.ts`:

```typescript
const onTick = (_evt: OnTickPayload) => {
  game.print(serpent.block({
    hello: "world",
    its_nice: "to see you"
  }));
};

script.on_event(defines.events.on_tick, onTick);
```

- `script.on_event` - typed
- `game` - typed
- `serpent` - typed
- `evt` - typed, via casting

Boom! Types for everything!

...but not quite. The Factorio Lua documentation is _lossy_, and has many cases where we simply _cannot_ parse correct type definitions from the Factorio website. Until the factorio development team publicly supports  machine-readable API documentation, `factorio-type-kit` TypeScript provisions will generally only be 70-80%+ complete. Thus, TypeScript users will be periodically disappointed to find `any` or `unknown` types in various interfaces. With that said, `factorio-type-kit` users are welcome to manually backfill essential definitions to make our community's development kit better.

## Starting the mod compiler

```shell
$ yarn start
```

Momentarily after launching the watching compiler, `control.lua` should be emitted. Open it up:


```lua
onTick = function(_evt)
    game.print(
        serpent.block({hello = "world", its_nice = "to see you"})
    )
end
script.on_event(defines.events.on_tick, onTick)
```

The TypeScriptToLua compiler does a fanstastic job on producing readable Lua.

## Implementing vroom

The very first thing the `vroom` mod needs to do is detect when the player is in motion.

Rather that pull up the documentation, I'll just open up another call `script.on_event`, then
begin typing in `defines.events.`. After intellisense presents me options, I will select `on_player_changed_position`. The type definitions tell me a callback is also required. I will enter in `onPositionChanged`.

```typescript
script.on_event(
  defines.events.on_player_changed_position,
  onPositionChange
);
```

`onPositionChange` is not defined yet. Let's discuss what it needs to do then draft it.
First, it needs to get the player's current speed. Next, the speed needs to increase when running. Because the purpose of the mod is to accelerate the user, we multiply the previous speed by a scalar every so often.

```typescript
const onPositionChange = (evt: OnPlayerChangedPositionPayload) => {
  const player = game.get_player(evt.player_index);
  if (player.walking_state.walking) {
    // ...
  }
};
```

Immediately take note that we have manually specified the type of `evt` as `OnPlayerChangedPositionPayload`. All factorio script event types follow the event naming convention: `<CamelCased-EventName>Payload`. A future version may automatically apply types to the `on_event` callback, so you not need cast.

The first thing I noticed was that `evt` did not have a reference directly to the player I needed.
It does contain the `player_id` however, and with that ID we can call the `get_player` method on the global `game` instance. `get_player` returns an instance of a `LuaPlayer`, which is a class instance with many methods and properties. We know that we _only_ want to speed up the player if he is in motion, so let's wrap our logic inside a conditional--`if (player.walking_state.walking) { ... }`.

After searching the API documentation, I concluded that there was not a direct value specifying a velocity of the character. However, I did come across `character_running_speed_modifier`, which the type definitions told me is of type `number`. Unexpectedly though, through trial and error, I learned that `character_running_speed_modifier` could be zero. Typescript did not help me here! Of course `number`s can be zero--defensive programmers everywhere are saying "you should have seen this coming", and they would be correct :). Equipped with this knowledge, let's fill in the rest.

```typescript
const onPositionChange = (evt: OnPlayerChangedPositionPayload) => {
  const player = game.get_player(evt.player_index);
  if (player.walking_state.walking) {
    const lastSpeed = player.character_running_speed_modifier;
    const baseSpeed = lastSpeed == 0 ? 1 : lastSpeed;
    player.character_running_speed_modifier = baseSpeed * 1.01;
  }
};
```

When our player stops running, we want to restart the acceleration process for the next time he runs.
My original approach was to listen for `keyup` events. Alas, Factorio has no key events. How else could I determine if the player has stopped running, and thus safely reset the speed modifier? Easy! On every tick of the game, I can check all players for motion--and turn off the multiplier if they are stopped!

```typescript
const onTick = (_evt: OnTickPayload) => {
  Object.entries(game.players).forEach(([_id, player]) => {
    if (
      player.character_running_speed_modifier > 0 &&
      !player.walking_state.walking
    ) {
      player.character_running_speed_modifier = 0;
    }
  });
};
```

That is, for every player, if there is a positive speed modifier and and the player is not walking, zero out the modifier.

Why didn't we just do a `game.players.forEach`? `game.players` isn't an array, so that won't work. TypeScript protected us from making that mistake! What about `Object.entries(game.players).forEach`? Yep, that worked! Why did we not do `Object.values(...)`? Because `game.players` is a [special dictionary](https://lua-api.factorio.com/latest/LuaGameScript.html#LuaGameScript.players) in Lua. Not all iterables map cleanly between languages. `Object.values(...)` wouldn't have given us compiler error, but still would have failed. Improved typing is needed to protect against these failures. While TypeScriptToLua generally helps out a great deal protect us from writing erroneous code, it is only as good as its applied type constraints.

When using JS standard library provisions, as we did above, the compiler will add a typescript-lua polyfill, `lualib_bundle`. The emitted Lua perhaps is not as elegant:

```lua
require("lualib_bundle");
-- ...
onTick = function(_evt)
    __TS__ArrayForEach(
        __TS__ObjectEntries(game.players),
        function(____, ____bindingPattern0)
            local _id = ____bindingPattern0[1]
            local player
            player = ____bindingPattern0[2]
            if (player.character_running_speed_modifier > 0) and (not player.walking_state.walking) then
                player.character_running_speed_modifier = 0
            end
        end
    )
end
```

Even with the extra boilerplate generated, the code is still quite readable. Could be cleaner! Surely as the TypeScriptToLua compiler evolves in time, it will be.

## Deploy it

I do not yet have clean, polished package & deploy scripts, but I do have functional ones.
Do your best to cover your eyes. Running `yarn install_mod` syncs the mod into the local Factorio installation. Coupled with a watch script, every code change immediately syncs in the game folder, and requires only a scenario reload to exercise the new scripts.

```json
"scripts": {
  "clean:install": "rm -rf ~/Library/Application\\ Support/factorio/mods/vroom*",
  "copy:install": "VERSION=$(cat info.json | jq -r .version) && rsync -r --exclude node_modules --exclude '.git*' --exclude build --exclude 'npm*' --exclude README.md --exclude package.json --exclude '*.lock'  ./ ~/Library/Application\\ Support/factorio/mods/vroom_$VERSION/",
  "install_mod": "run-s clean:install copy:install",
  "watch": "chokidar 'locale/**/*.cfg' '**/*.lua' '**/*.json' -c 'yarn install_mod'"
}
```

Feel free to open an issue and collab on tidying the above in [create-factorio-mod](https://github.com/cdaringe/create-factorio-mod/). With very little work, surely some cross-platform tooling could make the bundling and syncing nice for community, even for those not using `factorio-type-kit`.

## Enjoy it

The most important part of modding. Have fun playing:

<iframe width="560" height="315" src="https://www.youtube.com/embed/5cfHPHv6jS0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
