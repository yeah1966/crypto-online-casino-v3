import { generate101Metadata } from "@/lib/generateMetadata";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generate101Metadata(params.slug || "crypto-gambling-101");
}
