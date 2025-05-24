import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogPath = path.join(process.cwd(), "app", "blog");
  const entries = await fs.readdir(blogPath, { withFileTypes: true });

  const slugs = entries
    .filter((entry) => entry.isDirectory() && entry.name !== "[slug]")
    .map((entry) => ({ slug: entry.name }));

  return slugs;
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
) {
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

export default async function BlogPostPage(
  { params }: { params: { slug: string } }
) {
  const filePath = path.join(process.cwd(), "app", "blog", params.slug, "post.mdx");

  try {
    const file = await fs.readFile(filePath, "utf8");
    console.log("✅ post.mdx gevonden en gelezen op pad:", filePath);
    const { content, data } = matter(file);

    const compiledHtml = typeof marked === 'function' ? marked(content) : '';

    return (
      <div className="relative w-full max-w-4xl mx-auto px-2 md:px-0 py-10">
        {/* Blog Hero */}
        <div className="relative w-full mb-8">
          <div className="rounded-3xl w-full h-40 md:h-56 bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-800 shadow-xl border-2 border-fuchsia-400/30 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_#facc15] text-center">
              {data.title}
            </h1>
            {/* Mascotte rechtsboven, alleen desktop */}
            <div className="hidden md:block absolute top-0 right-0 -mt-8 mr-[-60px] z-20">
              <Image src="/favicon-512.png" alt="Mascotte" width={90} height={90} className="drop-shadow-xl" />
            </div>
          </div>
          <p className="absolute left-1/2 -bottom-5 -translate-x-1/2 px-4 py-1 rounded-full bg-fuchsia-700/90 text-yellow-200 font-bold text-base shadow border border-yellow-400/40">
            {typeof data.date === 'string' ? data.date : (data.date instanceof Date ? data.date.toLocaleDateString() : String(data.date))}
          </p>
        </div>
        {/* Blog meta info */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-fuchsia-950/80 px-4 py-2 rounded-full text-yellow-200 font-bold text-lg mb-2 border border-fuchsia-400/40">
            {data.date || ""}
          </div>
          {data.highlight && (
            <div className="bg-fuchsia-900/80 px-6 py-3 rounded-2xl text-yellow-100 font-medium text-md text-center border border-fuchsia-400/20 max-w-2xl mb-2">
              ✨ <span className="font-bold">Highlight</span><br />
              {data.highlight}
            </div>
          )}
        </div>

        {/* Blog excerpt */}
        {data.excerpt && (
          <div className="bg-fuchsia-900/70 px-6 py-3 rounded-2xl text-yellow-100 font-semibold text-md mb-8 border border-fuchsia-400/10 max-w-2xl mx-auto">
            <span className="text-yellow-300">🗝️ {data.title}</span><br />
            {data.excerpt}
          </div>
        )}

        {/* Blog body/content */}
        <div className="prose prose-invert mx-auto mt-8" dangerouslySetInnerHTML={{ __html: compiledHtml }} />

        {/* Highlight Card */}
        {data.description && (
          <div className="mb-8 bg-gradient-to-br from-purple-800 via-violet-900 to-fuchsia-900 rounded-xl shadow-lg border border-fuchsia-400/30 p-5 text-center">
            <span className="block text-yellow-300 font-bold text-base mb-1">✨ Highlight</span>
            <span className="text-white/90 text-lg">{data.description}</span>
          </div>
        )}
        {/* Blog Content Card */}
        <section aria-label="Blog article content" className="space-y-7">
          {/* Vegas-style table styling & card layout */}
          <style>{`
            .vegas-card {
              background: linear-gradient(120deg, #2e1065 60%, #a21caf 100%);
              border-radius: 1.2em;
              box-shadow: 0 2px 32px 0 #a21caf22, 0 0 0 2px #facc1530;
              padding: 1.8em 1.3em;
              margin-bottom: 0.5em;
              color: #fde68a;
              border: 1.5px solid #a21caf55;
            }
            .vegas-card h2, .vegas-card h3 {
              color: #facc15;
              margin-top: 0;
              margin-bottom: 0.7em;
              text-shadow: 0 2px 12px #fff3;
            }
            .vegas-card strong { color: #fff; }
            .vegas-card ul, .vegas-card ol { margin-left: 1.2em; }
            .vegas-table-card {
              background: linear-gradient(120deg, #facc15 0%, #a21caf 120%);
              border-radius: 1.2em;
              box-shadow: 0 2px 32px 0 #a21caf22, 0 0 0 2px #facc1530;
              padding: 1.2em 0.7em 1.7em 0.7em;
              margin-bottom: 0.5em;
              color: #2e1065;
              border: 1.5px solid #facc1566;
            }
            .vegas-table-card table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 0;
              background: rgba(38, 0, 65, 0.97);
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 0 16px 0 #d946ef44;
            }
            .vegas-table-card th, .vegas-table-card td {
              padding: 0.7em 1em;
              text-align: center;
              border-bottom: 1px solid #a21caf44;
              color: #fde68a;
              font-size: 1.05em;
            }
            .vegas-table-card th {
              background: linear-gradient(90deg, #a21caf 0%, #facc15 100%);
              color: #2e1065;
              font-weight: bold;
              text-shadow: 0 0 8px #fff8;
            }
            .vegas-table-card tr:last-child td {
              border-bottom: none;
            }
          `}</style>
          {/* Split content into cards */}
          {/* Dynamically split content into cards */}
          {(() => {
            // Split the compiledHtml into logical blocks based on h2/h3/table/final word
            type Block =
  | { type: 'content'; html: string; key: string }
  | { type: 'heading'; html: string; key: string }
  | { type: 'table'; html: string; key: string }
  | { type: 'final'; html: string; key: string };
const blocks: Block[] = [];
            const html: string = compiledHtml as string;
            let lastIndex = 0;
            // Regex to find h2, h3, table, and final word
            const regex = /(<h2.*?>.*?<\/h2>)|(<h3.*?>.*?<\/h3>)|(<table[\s\S]*?<\/table>)|(🧠\s*<strong>Final Word<\/strong>)/gi;
            let match;
            let idx = 0;
            while ((match = regex.exec(html)) !== null) {
              if (match.index > lastIndex) {
                blocks.push({
                  type: 'content',
                  html: html.slice(lastIndex, match.index),
                  key: `content-${idx}`
                });
                idx++;
              }
              if (match[1] || match[2]) {
                // Heading
                blocks.push({
                  type: 'heading',
                  html: match[0],
                  key: `heading-${idx}`
                });
              } else if (match[3]) {
                // Table
                blocks.push({
                  type: 'table',
                  html: match[0],
                  key: `table-${idx}`
                });
              } else if (match[4]) {
                // Final word
                blocks.push({
                  type: 'final',
                  html: match[0],
                  key: `final-${idx}`
                });
              }
              lastIndex = regex.lastIndex;
              idx++;
            }
            // Add any remaining content
            if (lastIndex < html.length) {
              blocks.push({
                type: 'content',
                html: html.slice(lastIndex),
                key: `content-${idx}`
              });
            }
            // Render blocks in cards
            return blocks.map((block) => {
              if (block.type === 'table') {
                return (
                  <div className="vegas-table-card" key={block.key} aria-label="Comparison Table" dangerouslySetInnerHTML={{ __html: block.html }} />
                );
              } else if (block.type === 'final') {
                return (
                  <div className="vegas-card" key={block.key} aria-label="Final Word" dangerouslySetInnerHTML={{ __html: block.html }} />
                );
              } else {
                return (
                  <div className="vegas-card" key={block.key} dangerouslySetInnerHTML={{ __html: block.html }} />
                );
              }
            });
          })()}
        </section>
        {/* Vegas-Style CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="/blog"
            className="font-bold text-base px-6 py-2 rounded-full bg-gradient-to-r from-yellow-300 via-pink-400 to-fuchsia-500 shadow-lg border border-fuchsia-200/50 drop-shadow-xl hover:scale-105 hover:shadow-yellow-400/60 transition-all focus:outline-none"
          >
            ← Back to all blogposts
          </a>
        </div>
      </div>
    );
  } catch (err) {
    console.error("❌ Fout bij lezen van post.mdx op pad:", filePath, err);
    return notFound();
  }
}



