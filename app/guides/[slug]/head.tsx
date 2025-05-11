import { generateGuideMetadata } from '@/lib/generateMetadata';

import { generateGuideMetadata } from '@/lib/generateMetadata';

export function generateMetadata({ params }: { params: { slug: string } }) {
  console.log(">>> generateGuideMetadata CALLED for", params.slug);
  return generateGuideMetadata(params.slug);
}

