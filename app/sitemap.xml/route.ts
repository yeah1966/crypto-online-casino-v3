import { casinos } from "@/data/casinosData";

export async function GET() {
  const BASE_URL = "https://crypto-online-casino.com";

  // Statische pagina's
  const staticPages = [
    "",
    "/crypto-casino-reviews",
    "/reviews",
    "/sports/bookmakers",
    "/bonuses",
    "/guides",
    "/crypto-gambling-101",
  ];

  // Dynamische casino review pagina's
  const casinoPages = casinos.map((casino) => `/crypto-casino-reviews/${casino.slug}`);

  // Dynamische bonus subpagina's
  const bonusPages = [
    "/bonuses/best-bonuses",
    "/bonuses/welcome-bonus",
    "/bonuses/free-spins",
    "/bonuses/no-deposit",
  ];

  // Dynamische gidsen (voorbeeld, voeg hier je echte gids-slugs toe)
  const guidePages = [
    "/guides/crypto-payments-guide",
    "/guides/fair-play-provably-fair",
    "/guides/getting-started",
    "/guides/how-to-deposit-with-bitcoin",
    "/guides/how-to-use-a-vpn-for-gambling",
    "/guides/what-are-stablecoins-casino-gambling",
  ];

  // Crypto Gambling 101
  const oneOOnePages = [
    "/crypto-gambling-101",
  ];

  // --- Blogposts ---
  const blogPages = [
    "/blog/biggest-wins",
    "/blog/provably-fair",
    "/blog/top-crypto-tokens",
    "/blog/trends-2025",
  ];

  // --- Sportsbetting ---
  const sportsPages = [
    "/sports/bookmakers",
    "/sports/bookmakers/1xbet",
    "/sports/bookmakers/cloudbet",
    "/sports/bookmakers/wildvegas",
  ];

  // --- Slots & Games ---
  const slotsPages = [
    "/top-10",
    "/top-5-slots-with-highest-rtp",
    "/best-litecoin-casinos",
  ];

  // --- FAQ, About, Reviews ---
  const infoPages = [
    "/faq",
    "/about",
    "/reviews",
  ];

  // Extra publieke pagina's die ontbreken in de sitemap
  const extraPages = [
    "/about",
    "/vip-deals",
    "/free-spins",
    "/no-deposit",
    "/welcome-bonus",
    "/spin-to-win",
    "/wheel",
    "/sports",
    "/best-crypto-casino-bonuses",
    "/best-litecoin-casinos",
    "/top-5-slots-with-highest-rtp",
    "/how-to-deposit-with-bitcoin",
    "/how-to-use-a-vpn-for-gambling",
    "/fair-play-provably-fair",
    "/getting-started",
    "/what-are-stablecoins-casino-gambling",
    "/blog",
    "/crypto-payments-guide"
  ];

  const allPages = [
    ...staticPages,
    ...casinoPages,
    ...bonusPages,
    ...guidePages,
    ...oneOOnePages,
    ...blogPages,
    ...sportsPages,
    ...slotsPages,
    ...infoPages,
    ...extraPages,
  ];

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
