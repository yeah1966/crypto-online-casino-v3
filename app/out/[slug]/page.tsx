import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export default async function OutPage({ params }: { params: { slug: string } }) {
  // Pad naar affiliateLinks.json
  const filePath = path.join(process.cwd(), 'data', 'affiliateLinks.json');
  let links = {};

  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    links = JSON.parse(raw);
  } catch (e) {
    // Fallback: geen bestand gevonden
    return (
      <div style={{ color: 'white', textAlign: 'center', marginTop: 80 }}>
        <h1>Affiliate links niet gevonden</h1>
      </div>
    );
  }

  const url = (links as Record<string, string>)[params.slug];

  if (url) {
    // Server-side redirect naar affiliate link
    redirect(url);
  }

  // Geen link gevonden
  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: 80 }}>
      <h1>Casino niet gevonden: {params.slug}</h1>
      <p>Geen affiliate link beschikbaar.</p>
    </div>
  );
}