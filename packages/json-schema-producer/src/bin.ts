import { produce } from "./from-website";

produce({
  urls: {
    apiRoot: "https://lua-api.factorio.com/latest",
  },
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
