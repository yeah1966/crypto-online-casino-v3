import { Metadata } from "next";

export function generateCasinoMetadata(slug: string): Metadata {
  const name = slug.replace(/-/g, " ");
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  const isBookmaker = [
    "cloudbet", "coinpoker", "betplay" // voeg hier jouw bookmakers toe
  ].includes(slug.toLowerCase());

  const label = isBookmaker ? "Sportsbook" : "Casino";
  const focus = isBookmaker ? "Betting Platform" : "Crypto Casino";

  return {
    title: `${capitalized} ${label} Review 2025 – Top ${focus} with Bonuses`,
    description: `Lees onze ${capitalized} ${label} review van 2025: ontdek snelle crypto-uitbetalingen, topbonussen, en veilig spelen met Bitcoin, Ethereum en meer.`,
  };
}

export function generateGuideMetadata(slug: string): Metadata {
  const formatTitle = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const title = `Crypto Guide: ${formatTitle(slug)} – Alles wat je moet weten in 2025`;
  const description = `Ontdek alles over ${formatTitle(slug)} in onze crypto gids. Leer veilig gokken, betalingen doen, en crypto gebruiken bij online casino’s.`;
  return { title, description };
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
