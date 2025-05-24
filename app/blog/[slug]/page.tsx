import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'blog');
  const files = fs.readdirSync(blogDir);

  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'blog', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    title: data.title || 'Blog Post',
    description: data.description || '',
  };
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'blog', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContent);

  return (
    <div className="prose prose-invert max-w-4xl mx-auto px-4 py-10">
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
