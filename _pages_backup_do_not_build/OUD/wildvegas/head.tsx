// Dynamisch gegenereerde metadata voor Wild Vegas
import { generateCasinoMetadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateCasinoMetadata(params.slug || "wildvegas");
}
