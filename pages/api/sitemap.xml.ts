import { NextApiRequest, NextApiResponse } from 'next';
import { casinos } from '../../app/crypto-casino-reviews/casinosData';

const BASE_URL = 'https://www.jouwsite.nl';

function generateSitemap() {
  const staticPages = [
    '',
    '/crypto-casino-reviews',
    '/reviews',
    '/sports/bookmakers',
    // Voeg hier andere belangrijke routes toe
  ];

  const dynamicCasinoPages = casinos.map((casino) => `/crypto-casino-reviews/${casino.slug}`);

  const allPages = [...staticPages, ...dynamicCasinoPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map(
          (url) => `
            <url>
              <loc>${BASE_URL}${url}</loc>
              <changefreq>weekly</changefreq>
              <priority>${url === '' ? '1.0' : '0.7'}</priority>
            </url>
          `
        )
        .join('')}
    </urlset>
  `;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(generateSitemap());
}
