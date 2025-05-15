import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_PATH = path.join(process.cwd(), 'app/blog');

export function getBlogPostDirectories() {
  return fs.readdirSync(BLOG_PATH).filter((name) => {
    const fullPath = path.join(BLOG_PATH, name);
    return fs.statSync(fullPath).isDirectory() && !name.startsWith('_') && name !== '[slug]';
  });
}

export function getBlogPosts() {
  const dirs = getBlogPostDirectories();
  return dirs.map((slug) => {
    const mdxPath = path.join(BLOG_PATH, slug, 'page.mdx');
    if (!fs.existsSync(mdxPath)) return null;
    const source = fs.readFileSync(mdxPath, 'utf8');
    const { data } = matter(source);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? '',
      cover: data.cover ?? '',
      date: data.date ?? '',
      author: data.author ?? '',
      tags: Array.isArray(data.tags) ? data.tags : [],
    };
  }).filter(Boolean);
}
