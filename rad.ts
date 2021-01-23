// @ts-ignore
import type { Task, Tasks } from "https://deno.land/x/rad/src/mod.ts";

const format: Task = `npx prettier --write .`;
const test: Task = `npx ava --coverage`;
const run: Task = `node -r ts-node/register/transpile-only src/bin.ts`;

const runAndFormat: Task = {
  fn: async ({ sh }: any) => {
    await sh(run);
    await sh(format);
  },
};

const clean: Task =
  'npx del "{src,test}/**/*.js" "./*.js" && rm -rf .factorio-ts-cache';

export const tasks: Tasks = {
  ...{ clean, c: clean },
  ...{ format, f: format },
  ...{ dev: `node -r ts-node/register src/factorio.ts` },
  ...{ debug: `node --inspect-brk -r ts-node/register src/factorio.ts` },
  ...{ run, r: run },
  ...{ test, t: test },
  ...{ runAndFormat, raf: runAndFormat },
};
