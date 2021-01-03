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
});
