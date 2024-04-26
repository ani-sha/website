import fs from "fs";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), "src/content/posts");

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const DAYJS_DEFAULT_FORMAT = "MMMM D ddd, YYYY";
