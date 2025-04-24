import React from 'react';

interface BlogPostPreviewProps {
  title: string;
  excerpt: string;
  date: string;
  href: string;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ title, excerpt, date, href }) => (
  <article className="bg-white rounded-xl shadow p-5 mb-6 hover:shadow-lg transition">
    <h2 className="text-xl font-bold mb-2">
      <a href={href} className="hover:underline text-blue-700">{title}</a>
    </h2>
    <div className="text-sm text-gray-500 mb-2">{date}</div>
    <p className="mb-3 text-gray-700">{excerpt}</p>
    <a href={href} className="text-blue-600 hover:underline font-medium">Lees verder →</a>
  </article>
);

export default BlogPostPreview;
