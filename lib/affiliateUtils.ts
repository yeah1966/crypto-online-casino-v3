import affiliateLinks from '@/data/affiliateLinks.json';

export function getAffiliateLinkBySlug(slug: string): string {
  return affiliateLinks[slug] || `https://${slug}.com`;
}
