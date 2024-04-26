import { POSTS_PATH, postFilePaths } from "@/constants";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

export const getPostMetadata = ({ limit = 10 }: { limit?: number }) => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  const sortedPosts = posts.sort((a, b) => {
    if (a.data.publishedOn < b.data.publishedOn) {
      return -1;
    } else {
      return 1;
    }
  });

  return { posts: sortedPosts.slice(0, limit) };
};
