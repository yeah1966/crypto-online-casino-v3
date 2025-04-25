import { redirect } from 'next/navigation';
import affiliateLinks from '../../../data/affiliateLinks.json';

export default function OutPage({ params }) {
  const url = (affiliateLinks as Record<string, string>)[params.slug];

  if (url) {
    redirect(url); // server-side redirect
  }

  // Geen geldige affiliate link gevonden
  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: 80 }}>
      <h1>Casino niet gevonden: {params.slug}</h1>
      <p>Geen affiliate link beschikbaar.</p>
    </div>
  );
}
