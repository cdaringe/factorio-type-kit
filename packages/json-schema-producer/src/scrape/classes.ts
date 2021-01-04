import type { Document } from "happy-dom";
import { JSONSchema4 } from "json-schema";
import { PageMeta } from "../interfaces";

export const scrapeClass = (
  document: Document,
  className: string,
  pageMeta: PageMeta
): JSONSchema4 => {
  // get description
  // get inheritance
  // get members
  debugger;
  const properties = {};
  const schema: JSONSchema4 = {
    description: "",
    allOf: [
      // https://github.com/bcherny/json-schema-to-typescript/issues/196#issuecomment-438072373
      {
        properties,
      },
    ],
    required: properties.map((prop) => prop.name),
    additionalItems: false,
  };
  return schema;
};
