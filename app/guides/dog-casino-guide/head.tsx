import { generateGuideMetadata } from "@/lib/generateMetadata";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return generateGuideMetadata(params.slug || "dog-casino-guide");
}