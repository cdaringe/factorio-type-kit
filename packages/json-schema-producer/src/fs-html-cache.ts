import { dirname, resolve } from "path";
import { readFile, stat, writeFile, mkdir } from "fs/promises";

export const exists = (filename: string) =>
  stat(filename)
    .then((stat) => stat.isFile())
    .catch((err) => {
      if (err.code === "ENOENT") return false;
      throw err;
    });

export const maybeReadFromCache = (filename: string) =>
  exists(filename).then((isExisting) =>
    isExisting ? readFile(filename, "utf-8") : null
  );

export const writeToCache = async (filename: string, content: string) => {
  await mkdir(dirname(filename), { recursive: true });
  return writeFile(filename, content);
};

export const getCacheFilenameFromUrl = (url: string) => {
  const parts = url.split("/");
  const slug = parts[parts.length - 1];
  return resolve(
    process.env.FACTORIO_TS_CACHE_DIRNAME ||
      resolve(process.cwd(), ".factorio-ts-cache"),
    slug.replace(/#.*/, "")
  );
};
