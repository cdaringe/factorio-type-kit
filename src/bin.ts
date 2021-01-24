import * as fs from "fs/promises";
import { produce, GenerateResult, printTs } from ".";
import meow from "meow";

const printLang = (lang: string, ir: GenerateResult) => {
  switch (lang) {
    case "ts":
    case "typescript":
      return printTs(ir);
    case "json":
    case "json-ir":
      return JSON.stringify(ir, null, 2);
    default:
      throw new Error(`unsupported lang: ${lang}. did you mean ts or json?`);
  }
};

async function go() {
  const cli = meow(
    `
    Usage
      $ factorio-type-kit --language=[...]

    Options
      --language, -l  ts,json
      --output, -o  path/to/filename/outupt.[ts|json]

    Examples
      $ factorio-type-kit -l ts -o factorio.d.ts
  `,
    {
      flags: {
        language: {
          type: "string",
          alias: "l",
        },
        out: {
          type: "string",
          alias: "o",
        },
      },
    }
  );
  try {
    const ir = await produce();
    const output = await printLang(cli.flags.language!, ir);
    if (cli.flags.out) {
      await fs.writeFile(cli.flags.out, output);
    } else {
      console.log(output);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

go();
