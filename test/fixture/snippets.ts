import { toDocument } from "../../src/scrape/dom";
import { promises as fs } from "fs";
import { resolve } from "path";

export const getFixture = async (
  name:
    | "class-params-table-arg-set_controller.html"
    | "class-params-table-arg-create_local_flying_text.html"
    | "class-params-mismatched-params-set_allows_action.html"
) => {
  const document = toDocument(
    await fs.readFile(resolve(__dirname, name), "utf-8")
  );
  return { document, el: document.body.firstElementChild };
};
