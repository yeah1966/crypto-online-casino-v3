import React from "react";

interface BlogPostLayoutProps {
  title: string;
  date?: string;
  children: React.ReactNode;
  imageUrl?: string;
}

export default function BlogPostLayout({ title, date, children, imageUrl }: BlogPostLayoutProps) {
  return (
    <section className="w-full px-4 py-12 md:py-20 lg:py-28 text-white">
      <div className="max-w-3xl mx-auto">
        {imageUrl && (
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img src={imageUrl} alt={title} className="w-full object-cover max-h-72" />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold neon-text mb-2">{title}</h1>
        {date && <p className="text-gray-400 mb-6">{date}</p>}
        <article className="bg-gradient-to-br from-purple-900 to-violet-700 p-8 rounded-2xl shadow-md text-lg leading-relaxed">
          {children}
        </article>
      </div>
    </section>
  );
}
