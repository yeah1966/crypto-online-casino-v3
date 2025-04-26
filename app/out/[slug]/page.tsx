// app/out/[slug]/page.tsx
import { redirect } from 'next/navigation';
import affiliateLinks from '../../../data/affiliateLinks.json';

export function generateStaticParams() {
  return Object.keys(affiliateLinks).map(slug => ({ slug }));
}

export default function OutPage({ params }) {
  const url = (affiliateLinks as Record<string, string>)[params.slug];
  if (url) redirect(url);
  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: 80 }}>
      <h1>Casino niet gevonden: {params.slug}</h1>
      <p>Geen affiliate link beschikbaar.</p>
    </div>
  );
}
