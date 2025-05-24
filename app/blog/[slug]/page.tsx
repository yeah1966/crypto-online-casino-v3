import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "app", "blog");
  const entries = await fs.readdir(dir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({ slug: entry.name }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "app", "blog", params.slug, "post.mdx");

  try {
    const file = await fs.readFile(filePath, "utf8");
    const { data } = matter(file);

    return {
      title: data.title,
      description: data.description,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "app", "blog", params.slug, "post.mdx");

  let html = "";
  try {
    const file = await fs.readFile(filePath, "utf8");
    const { content } = matter(file);
    html = content;
  } catch (e) {
    notFound();
  }

  // Split content into logical blocks
  const blocks: { type: string; html: string; key: string }[] = [];
  const regex = /(<h2.*?>.*?<\/h2>)|(<h3.*?>.*?<\/h3>)|(<table[\s\S]*?<\/table>)|(🧠\s*<strong>Final Word<\/strong>)/gi;

  let match;
  let lastIndex = 0;
  let idx = 0;

  while ((match = regex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      blocks.push({
        type: "content",
        html: html.slice(lastIndex, match.index),
        key: `content-${idx}`,
      });
      idx++;
    }

    if (match[1] || match[2]) {
      blocks.push({ type: "heading", html: match[0], key: `heading-${idx}` });
    } else if (match[3]) {
      blocks.push({ type: "table", html: match[0], key: `table-${idx}` });
    } else if (match[4]) {
      blocks.push({ type: "final", html: match[0], key: `final-${idx}` });
    }

    lastIndex = regex.lastIndex;
    idx++;
  }

  if (lastIndex < html.length) {
    blocks.push({
      type: "content",
      html: html.slice(lastIndex),
      key: `content-${idx}`,
    });
  }

  return (
    <>
      {blocks.map((block) => {
        if (block.type === "table") {
          return (
            <div
              className="vegas-table-card"
              key={block.key}
              aria-label="Comparison Table"
              dangerouslySetInnerHTML={{ __html: block.html }}
            />
          );
        } else if (block.type === "final") {
          return (
            <div
              className="vegas-card"
              key={block.key}
              aria-label="Final Word"
              dangerouslySetInnerHTML={{ __html: block.html }}
            />
          );
        } else {
          return (
            <div
              className="vegas-card"
              key={block.key}
              dangerouslySetInnerHTML={{ __html: block.html }}
            />
          );
        }
      })}
    </>
  );
}
