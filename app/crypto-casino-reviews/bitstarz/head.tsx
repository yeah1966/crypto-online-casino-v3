// Dynamisch gegenereerde metadata voor BitStarz
import { generateCasinoMetadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateCasinoMetadata(params.slug || "bitstarz");
}
