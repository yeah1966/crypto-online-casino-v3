// Dynamisch gegenereerde metadata voor Dreams
import { generateCasinoMetadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateCasinoMetadata(params.slug || "dreams");
}
