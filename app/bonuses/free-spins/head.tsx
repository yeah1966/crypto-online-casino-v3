import { generateBonusMetadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateBonusMetadata(params.slug || "free-spins");
}
