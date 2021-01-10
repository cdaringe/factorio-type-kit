import TurndownService from "turndown";
import { PageMeta } from "../interfaces";

export const asMarkdown = (s: string) => new TurndownService({}).turndown(s);

export const asUrlCorrectedMarkdown = (
  s: string,
  { baseUrl, pageBasename }: PageMeta
) => {
  const turndown = new TurndownService({});
  let md = turndown.turndown(s);
  if (s.match(/href/)) {
    // cases
    // 0. absolute rules
    // no op. the following rules should not meddle with http(s):// urls
    // 1. on-page-urls/anchors
    md = md.replace(new RegExp(`\\]\\(${pageBasename}`, "gi"), `](${baseUrl}`);
    // 2. relative urls
    const relmatches = md.match(new RegExp(`\\]\\((?!http)(\.+.html)`));
    if (relmatches?.length) {
      md = md.replace(
        new RegExp(`\\]\\((?!http)\.+.html`, "gi"),
        `](${baseUrl.replace(pageBasename, relmatches[1])}`
      );
    }
  }
  return md;
};
