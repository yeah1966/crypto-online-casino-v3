import { generateBlogMetadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateBlogMetadata(params.slug || "top-crypto-tokens");
}
