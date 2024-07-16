import { getPostMetadata } from "@/helper";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
export default function Blog() {
  const { posts } = getPostMetadata({ limit: 10 });
  return (
    <main>
      <div className="flex flex-col p-16">
        <div className="flex flex-col">
          <h2>Articles</h2>
          <span className="text-sm">
            Backend, DevOps, Cloud and Open Source
          </span>
        </div>
      </div>
      <ol className="flex flex-col">
        {posts.map((post) => (
          <Link
            as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/[slug]`}
          >
            <li
              key={post.filePath}
              className="flex flex-col hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-md p-3"
            >
              <div
                className={twMerge(
                  "flex justify-between items-start gap-3",
                  "rounded-md",
                  "cursor-pointer"
                )}
              >
                <span className="max-w-6/12 font-medium text-lg tracking-tight flex flex-wrap shrink">
                  {post.data.title}
                </span>
              </div>
              {post.data.publishedOn && (
                <time
                  dateTime={post.data.publishedOn}
                  className="shrink-0 whitespace-nowrap text-sm text-text-secondary-light dark:text-text-secondary-dark"
                >
                  {new Date(post.data.publishedOn).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              )}
            </li>
          </Link>
        ))}
      </ol>
    </main>
  );
}
