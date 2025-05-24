import { Metadata } from "next";

export function generateCasinoMetadata(slug: string): Metadata {
  const name = slug.replace(/-/g, " ");
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  const isBookmaker = [
    "cloudbet", "coinpoker", "betplay" // voeg hier jouw bookmakers toe
  ].includes(slug.toLowerCase());

  const label = isBookmaker ? "Sportsbook" : "Casino";
  const focus = isBookmaker ? "Betting Platform" : "Crypto Casino";

  // OG & Twitter meta (custom per casino)
  const ogImage = `https://www.crypto-online-casino.com/og/${slug}.png`;
  const url = `https://www.crypto-online-casino.com/crypto-casino-reviews/${slug}`;
  const siteName = "Crypto Casino Online";

  return {
    title: `${capitalized} ${label} Review 2025 – Top ${focus} with Bonuses`,
    description: `Read our ${capitalized} ${label} review for 2025: discover fast crypto payouts, top bonuses, and safe play with Bitcoin, Ethereum, and more.`,
    openGraph: {
      title: `${capitalized} ${label} Review 2025 – Top ${focus} with Bonuses`,
      description: `Read our ${capitalized} ${label} review for 2025: discover fast crypto payouts, top bonuses, and safe play with Bitcoin, Ethereum, and more.`,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${capitalized} ${label} Review 2025 – Top ${focus} with Bonuses`,
      description: `Read our ${capitalized} ${label} review for 2025: discover fast crypto payouts, top bonuses, and safe play with Bitcoin, Ethereum, and more.`,
      images: [ogImage],
    },
  };
}



export function generateGuideMetadata(slug: string): Metadata {
  // Titel netjes opbouwen
  const name = slug.replace(/-/g, " ");
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  // OG & Twitter meta (zelfde als casino, maar guide-tekst)
  const ogImage = `https://www.crypto-online-casino.com/og/${slug}.png`;
  const url = `https://www.crypto-online-casino.com/guides/${slug}`;
  const siteName = "Crypto Casino Online";

  return {
    title: `${capitalized} Guide 2025 – Crypto Tips & Safe Play`,
    description: `Read our ${capitalized} guide for 2025: discover safe gambling, payments, and how to use crypto at online casinos.`,
    openGraph: {
      title: `${capitalized} Guide 2025 – Crypto Tips & Safe Play`,
      description: `Read our ${capitalized} guide for 2025: discover safe gambling, payments, and how to use crypto at online casinos.`,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${capitalized} Guide 2025 – Crypto Tips & Safe Play`,
      description: `Read our ${capitalized} guide for 2025: discover safe gambling, payments, and how to use crypto at online casinos.`,
      images: [ogImage],
    },
  };
}

export function generateBonusMetadata(slug: string): Metadata {
  const formatTitle = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const title = `Bonus: ${formatTitle(slug)} – Beste Crypto Casino Bonussen 2025`;
  const description = `Bekijk de ${formatTitle(slug)} bonus: voorwaarden, hoogte, en hoe je deze claimt bij de beste crypto casino’s van 2025.`;
  return { title, description };
}

export function generate101Metadata(slug: string): Metadata {
  const formatTitle = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const title = `Crypto Gambling 101: ${formatTitle(slug)} – Uitleg & Tips (2025)`;
  const description = `Alles over ${formatTitle(slug)} voor crypto gokken: uitleg, tips en veelgestelde vragen voor beginners (2025).`;
  return { title, description };
}

// --- SLOTS & GAMES ---
export function generateSlotsMetadata(slug: string): Metadata {
  const formatTitle = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const title = `Slots & Games: ${formatTitle(slug)} – Beste Crypto Gokkasten 2025`;
  const description = `Alles over ${formatTitle(slug)}: ontdek de populairste crypto slots, spelregels, RTP en waar je gratis kunt spelen in 2025.`;
  return { title, description };
}

// --- SPORTS BETTING ---
export function generateSportsMetadata(slug: string): Metadata {
  const formatTitle = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const title = `Sportsbetting: ${formatTitle(slug)} – Wedden met Crypto in 2025`;
  const description = `Lees alles over ${formatTitle(slug)} in crypto sportsbetting: tips, strategieën, odds en de beste bookmakers van 2025.`;
  return { title, description };
}

// --- BLOG ---
export function generateBlogMetadata(slug: string): Metadata {
  const formatTitle = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const title = `Blog: ${formatTitle(slug)} – Crypto Casino Nieuws & Trends 2025`;
  const description = `Lees het laatste nieuws, trends en tips over crypto casino’s: ${formatTitle(slug)}. Blijf up-to-date in 2025!`;
  return { title, description };
}
