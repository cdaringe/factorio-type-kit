// @ts-ignore
import type { Task, Tasks } from "https://deno.land/x/rad/src/mod.ts";

const format: Task = `npx prettier --write .`;
const test: Task = `npx ava --coverage`;
const run: Task = `node -r ts-node/register/transpile-only src/bin.ts -l ts -o factorio.d.ts`;

const clean: Task =
  'npx del "{src,test}/**/*.js" "./*.js" && rm -rf .factorio-ts-cache';

const runAndFormat: Task = {
  dependsOn: [clean],
  fn: async ({ sh }: any) => {
    await sh(run);
    await sh(format);
  },
};

export const tasks: Tasks = {
  ...{ clean, c: clean },
  ...{ debug: `node --inspect-brk -r ts-node/register src/factorio.ts` },
  ...{ dev: `node -r ts-node/register src/factorio.ts` },
  ...{ format, f: format },
  ...{ run, r: run },
  ...{ runAndFormat, raf: runAndFormat },
  ...{ test, t: test },
};
