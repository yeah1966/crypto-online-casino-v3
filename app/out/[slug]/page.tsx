import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

type Props = {
  params: { slug: string }
};

export default async function OutPage({ params }: Props) {
  const filePath = path.join(process.cwd(), 'data', 'affiliateLinks.json');
  let links = {};

  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    links = JSON.parse(raw);
  } catch (e) {
    return (
      <div style={{ color: 'white', textAlign: 'center', marginTop: 80 }}>
        <h1>Affiliate links niet gevonden</h1>
      </div>
    );
  }

  const url = (links as Record<string, string>)[params.slug];

  if (url) {
    redirect(url);
  }

  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: 80 }}>
      <h1>Casino niet gevonden: {params.slug}</h1>
      <p>Geen affiliate link beschikbaar.</p>
    </div>
  );
}
