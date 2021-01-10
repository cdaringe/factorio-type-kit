import ava, { TestInterface } from "ava";
import { getClassListingEls, ofEl } from "../src/scrape/classes";
import { getFixture } from "./fixture/pages";

const test = ava as TestInterface<{}>;

test("class parse - LuaBurner", async (t) => {
  const { document, pageMeta } = await getFixture("LuaBurner.html");
  const schema = ofEl(document, getClassListingEls(document)[0], pageMeta);
  const expected: any = {
    properties: {
      name: {
        const: "LuaBurner",
      },
      members: {
        type: "object",
        properties: {
          owner: {
            description: "The owner of this burner energy source",
            properties: {
              name: {
                const: "owner",
              },
              type: {
                anyOf: [{}, {}],
              },
              mode: {
                const: ["R"],
              },
            },
          },
          inventory: {
            description: "The fuel inventory.",
            properties: {
              name: {
                const: "inventory",
              },
              type: {},
              mode: {
                const: ["R"],
              },
            },
          },
          burnt_result_inventory: {
            description: "The burnt result inventory.",
            properties: {
              name: {
                const: "burnt_result_inventory",
              },
              type: {},
              mode: {
                const: ["R"],
              },
            },
          },
          heat: {
            description: "",
            properties: {
              name: {
                const: "heat",
              },
              type: {
                type: "number",
              },
              mode: {
                const: ["R", "W"],
              },
            },
          },
          heat_capacity: {
            description: "",
            properties: {
              name: {
                const: "heat_capacity",
              },
              type: {
                type: "number",
              },
              mode: {
                const: ["R"],
              },
            },
          },
          remaining_burning_fuel: {
            description: "",
            properties: {
              name: {
                const: "remaining_burning_fuel",
              },
              type: {
                type: "number",
              },
              mode: {
                const: ["R", "W"],
              },
            },
          },
          currently_burning: {
            description: "",
            properties: {
              name: {
                const: "currently_burning",
              },
              type: {},
              mode: {
                const: ["R", "W"],
              },
            },
          },
          fuel_categories: {
            description: "The fuel categories this burner uses.",
            properties: {
              name: {
                const: "fuel_categories",
              },
              type: {
                type: "object",
                additionalProperties: {
                  type: "boolean",
                },
                required: [],
              },
              mode: {
                const: ["R"],
              },
            },
          },
          valid: {
            description: "Is this object valid?",
            properties: {
              name: {
                const: "valid",
              },
              type: {
                type: "boolean",
              },
              mode: {
                const: ["R"],
              },
            },
          },
          object_name: {
            description: "The class name of this object.",
            properties: {
              name: {
                const: "object_name",
              },
              type: {
                type: "string",
              },
              mode: {
                const: ["R"],
              },
            },
          },
          help: {
            description:
              "All methods, and properties that this object supports.",
            properties: {
              name: {
                const: "help",
              },
              parameters: {
                type: "array",
                items: [],
              },
              return: {
                type: "null",
              },
            },
          },
        },
      },
      inherits: {
        type: "array",
        items: [],
      },
    },
  };
  debugger;
  t.deepEqual(schema, expected);
});
