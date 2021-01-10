import type { Task, Tasks } from "https://deno.land/x/rad/src/mod.ts";

const generateApiJson: Task = `docker run --rm -v $PWD:/app cdaringe/factorio-api-scraper:latest`;

const bootstrap: Task = `yarn && npx lerna bootstrap`;
const format: Task = `npx prettier --write .`;
export const tasks: Tasks = {
  ...{ generateApiJson, gaj: generateApiJson },
  ...{ format, f: format },
  ...{ dev: `node -r ts-node/register src/factorio.ts` },
  ...{ debug: `node --inspect-brk -r ts-node/register src/factorio.ts` },
  ...{ bootstrap, b: bootstrap },
  r: `$(cd packages/json-schema-producer/ && node -r ts-node/register/transpile-only src/bin.ts)`,
};
