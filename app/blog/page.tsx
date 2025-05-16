import Link from 'next/link';
import { getBlogPostsMeta } from './getBlogPostsMeta';

export default async function BlogPage() {
  // Prevent running on the client (for static export safety)
  if (typeof window !== 'undefined') {
    return (
      <div className="text-white p-10 text-center">
        <h1 className="text-3xl font-bold">Blog Index Coming Soon</h1>
        <p>This page is server-rendered only.</p>
      </div>
    );
  }
  const posts = getBlogPostsMeta();
  return (
    <div className="min-h-screen bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed py-12 px-2 relative overflow-x-hidden">
      {/* Animated Gradient Overlay */}
      <section className="w-full px-4 py-12 md:py-20 lg:py-28 text-white relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold neon-text mb-4 drop-shadow-[0_0_12px_#f0e130] animate-pulse">
            🎲 Casino Crypto Blog
          </h1>
          <p className="text-lg md:text-xl text-white/90">Read our latest posts on crypto gambling, bonuses, guides, and the future of decentralized casinos.</p>
        </div>
        <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2">
          {posts.length === 0 && (
            <div className="col-span-2 text-center text-xl text-gray-200">No blog posts found.</div>
          )}
          {posts.map((post, idx) => (
            <div
              key={post.slug}
              className="relative group bg-gradient-to-br from-purple-900 to-violet-700 p-6 rounded-2xl shadow-xl border border-fuchsia-500/30 transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl hover:border-yellow-400/60"
            >
              {idx === 0 && (
                <span className="absolute -top-3 -left-3 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full font-bold text-xs shadow-lg animate-bounce z-20">Featured</span>
              )}
              <h2 className="text-2xl font-bold mb-2 drop-shadow-[0_0_8px_#f0e130]">{post.title}</h2>
              <p className="text-white/90 mb-3">{post.description}</p>
              <span className="block text-xs text-gray-400 mb-2">{typeof post.date === 'string' ? post.date : new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 px-5 py-2 rounded-lg bg-yellow-400 text-purple-900 font-semibold shadow-md transition-all duration-200 hover:bg-yellow-300 hover:scale-105 focus:ring-2 focus:ring-yellow-400 focus:outline-none neon-button"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

