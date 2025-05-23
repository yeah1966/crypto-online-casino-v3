'use client';

import React from "react";

export default function BlogPostLayout({
  meta,
  children,
}: {
  meta: { title: string; description: string };
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-black via-purple-900 to-purple-800 text-white min-h-screen p-4">
      <article className="max-w-3xl mx-auto prose prose-invert">
        {children}
      </article>
    </div>
  );
}
