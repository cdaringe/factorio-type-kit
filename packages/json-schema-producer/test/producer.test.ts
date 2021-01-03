import ava, { TestInterface } from "ava";
import { FactorioApi, FactorioJsonSchema } from "../src/from-website";
import { compile } from "json-schema-to-typescript";
import { writeFileSync } from "fs";

const test = ava as TestInterface<{}>;

test("output schema", async (t) => {
  const api: FactorioApi = {
    defines: {
      alert_type: {
        entity_destroyed: "defines.alert_type.entity_destroyed",
      },
    },
  };
  const schemaOut: FactorioJsonSchema = {
    type: "object",
    properties: {
      defines: {
        type: "object",
        properties: {
          alert_type: {
            type: "object",
            properties: {
              entity_destroyed: { type: "string" },
            },
            required: [],
          },
        },
        required: [],
      },
    },
    required: [],
  };
  const tso = await compile(schemaOut, "huh");
  t.truthy(tso);
  writeFileSync("debug.d.ts", tso);
});
