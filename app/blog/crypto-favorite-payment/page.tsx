"use server";

'use client';

import dynamic from 'next/dynamic';
import BlogPostLayout from '@/components/BlogPostLayout';

const PostContent = dynamic(() => import('./post.mdx'), { ssr: false });

export default function Page() {
  return (
    <BlogPostLayout meta={{
      title: "Why Crypto is Becoming the World’s Favorite Payment Option",
      description: "How cryptocurrency is becoming the preferred way to pay — from privacy to speed, discover why the shift is happening now.",
    }}>
      <PostContent />
    </BlogPostLayout>
  );
}
