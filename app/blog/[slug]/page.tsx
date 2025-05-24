import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "app/blog");
  const folders = await fs.readdir(blogDir);
  return folders.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "app/blog", params.slug, "post.mdx");

  try {
    const file = await fs.readFile(filePath, "utf8");
    const { data } = matter(file);

    return (
      <article className="prose dark:prose-invert max-w-full">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </article>
    );
  } catch {
    notFound();
  }
}
