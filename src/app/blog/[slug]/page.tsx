import { MdxContent } from "@/app/_lib/MdxContent";
import { DAYJS_DEFAULT_FORMAT, POSTS_PATH } from "@/constants";
import dayjs from "dayjs";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { twMerge } from "tailwind-merge";

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { serialized, frontmatter } = await getPost({
    slug: params.slug,
  });

  return (
    <div className="flex flex-col">
      <div>
        <h1>{frontmatter.title}</h1>
        {frontmatter.description && (
          <p className="!leading-relaxed !text-[0.9375rem]">
            {frontmatter.description}
          </p>
        )}
        {frontmatter.publishedOn && (
          <div className="mt-5 flex flex-row items-start gap-x-1">
            {dayjs(frontmatter.publishedOn).format(DAYJS_DEFAULT_FORMAT)}
          </div>
        )}
        <hr className="my-10 border-border-primary-light dark:border-border-primary-dark border-[0.2px]" />
      </div>
      <article
        className={twMerge(
          "prose dark:prose-invert",
          "prose-headings:text-text-primary-light dark:prose-headings:text-text-primary-dark prose-headings:font-semibold",
          "leading-relaxed text-[0.9375rem]",
          "prose-img:rounded-sm dark:prose-img:opacity-90",
          "prose-a:font-normal prose-a:underline-offset-4 prose-a:text-text-primary-light dark:prose-a:text-text-primary-dark prose-a:!decoration-red-500"
        )}
      >
        <MdxContent source={serialized} />
      </article>
    </div>
  );
}

async function getPost({ slug }: { slug: string }): Promise<any> {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  // Read the file from the filesystem
  const raw = fs.readFileSync(postFilePath, "utf-8");

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter;

  // Return the serialized content and frontmatter
  return {
    frontmatter,
    serialized,
  };
}
