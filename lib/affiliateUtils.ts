import { casinos } from '@/data/casinosData';

export function getAffiliateLinkBySlug(slug: string): string {
  const casino = casinos.find(c => c.slug === slug);
  return typeof casino?.affiliateUrl === 'string' ? casino.affiliateUrl : `https://${slug}.com`;
}
