import { generateSportsMetadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateSportsMetadata(params.slug || "1xbet");
}
