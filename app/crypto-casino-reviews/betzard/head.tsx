// Dynamisch gegenereerde metadata voor Betzard
import { generateCasinoMetadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateCasinoMetadata(params.slug || "betzard");
}
