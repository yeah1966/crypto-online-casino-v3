import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export function getBlogPostsMeta(): PostMeta[] {
  const blogDir = path.join(process.cwd(), 'app/blog');
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  const postDirs = entries.filter(
    (entry) => entry.isDirectory() && fs.existsSync(path.join(blogDir, entry.name, 'post.mdx'))
  );

  const posts: PostMeta[] = postDirs.map((entry) => {
    const folder = entry.name;
    const filePath = path.join(blogDir, folder, 'post.mdx');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: folder,
      title: data.title || folder,
      description: data.description || '',
      date: data.date || '',
    };
  });

  // Sort by date (desc)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}
