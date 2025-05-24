import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; // added import
import { blogPosts } from "@/data/blogPosts";
import { useState } from "react";

export default function BlogIndex() {
  const [tag, setTag] = useState("all");
  const tags = Array.from(new Set(blogPosts.flatMap(p => p.tags)));

  const filteredPosts = blogPosts.filter(post =>
    tag === "all" ? true : post.tags.includes(tag)
  );

  return (
    <>
      <Head>
        <title>Crypto Casino Blog & Guides (2025)</title>
        <meta name="description" content="Read the latest crypto casino articles, guides, and trends. Learn about provably fair gaming, wallets, and more." />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-white">
        <h1 className="text-4xl font-bold mb-8">Crypto Casino Blog & Guides</h1>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold">Filter by tag:</label>
          <select
            value={tag}
            onChange={e => setTag(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
          >
            <option value="all">All topics</option>
            {tags.map(t => (
              <option key={t} value={t}>{t.replace("-", " ")}</option>
            ))}
          </select>
        </div>
        <div className="space-y-8">
          {filteredPosts.map(post => (
            <div key={post.slug} className="bg-gray-900 rounded-lg p-6 shadow">
              <Image src={post.cover} alt={post.title} width={800} height={160} className="w-full h-40 object-cover rounded mb-4" />
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="text-purple-400 underline">{post.title}</Link>
              </h2>
              <p className="mb-2 text-gray-300">{post.excerpt}</p>
              <div className="text-xs text-gray-400 mb-2">{post.date} • {post.author}</div>
              <div>
                {post.tags.map(tag => (
                  <span key={tag} className="inline-block bg-purple-700 text-white text-xs px-2 py-1 rounded mr-2 mb-2">{tag.replace('-', ' ')}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
