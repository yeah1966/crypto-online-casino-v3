// Dynamisch gegenereerde metadata voor Coinpoker
import { generateCasinoMetadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateCasinoMetadata(params.slug || "coinpoker");
}
