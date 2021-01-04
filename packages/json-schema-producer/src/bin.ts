import { produce } from "./from-website";

produce({
  urls: {
    apiRoot: "https://lua-api.factorio.com/latest",
  },
  toScrape: {
    // events: {
    //   slug: 'events.html',
    //   parse: parseEvents
    // }
  },
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
