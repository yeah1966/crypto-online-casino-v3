import { generateSlotsMetadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateSlotsMetadata(params.slug || "best-litecoin-casinos");
}
