// Dynamisch gegenereerde metadata voor Slots of Vegas
import { generateCasinoMetadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateCasinoMetadata(params.slug || "slotsofvegas");
}
