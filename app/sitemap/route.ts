import { casinos } from "@/data/casinosData";
import {
  staticPages,
  bonusPages,
  guidePages,
  blogPages,
  sportsPages,
  slotsPages,
  infoPages,
  specialPages,
} from "@/data/siteRoutes";

export async function GET() {
  const BASE_URL = "https://crypto-online-casino.com";

  // Dynamische casino review pagina's
  const casinoPages = casinos.map((casino) => `/crypto-casino-reviews/${casino.slug}`);

  // Alle unieke pagina's samenvoegen
  const allPages = Array.from(
    new Set([
      ...staticPages,
      ...casinoPages,
      ...bonusPages,
      ...guidePages,
      ...blogPages,
      ...sportsPages,
      ...slotsPages,
      ...infoPages,
      ...specialPages,
    ])
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
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

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
