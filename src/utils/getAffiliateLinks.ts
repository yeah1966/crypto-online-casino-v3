// DEZE FILE IS VERVANGEN
// Gebruik voortaan alleen `casinosData.ts` in /data/ voor affiliate info.

import { casinos } from '@/data/casinosData';

export function getAffiliateLinks() {
  return casinos.map(({ slug, affiliateUrl }) => ({
    slug,
    affiliateUrl,
  }));
}
