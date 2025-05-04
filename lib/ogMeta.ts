// /lib/ogMeta.ts

// Utility to resolve OG image path with aliasing and fallback
type ImageMap = Record<string, string>;

const imageMap: ImageMap = {
  bitstarz: "bitstarz-2.png",
  // Add more aliases here if needed
};

export function resolveOgImageForSlug(slug: string): string {
  const filename = imageMap[slug] || `${slug}.png`;
  return `https://www.crypto-online-casino.com/og/${filename}`;
}

export function getOgMetaForCasino(slug: string) {
  const titles: Record<string, string> = {
    bitstarz: "BitStarz – Crypto Casino Review 2025 | Bonuses, Games & Fast Payouts",
    "7bit": "7Bit – Crypto Casino Review 2025 | Classic Slots & Crypto Bonuses",
    wildvegas: "Wild Vegas – Crypto Casino Review 2025 | Wild Bonuses & Vegas Action",
    cloudbet: "Cloudbet – Crypto Casino Review 2025 | Sportsbook & Instant Payouts",
    betplay: "Betplay – Crypto Casino Review 2025 | Sports, Casino & Fast Crypto",
    betzard: "Betzard – Crypto Casino Review 2025 | Newest Crypto Casino",
    dreams: "Dreams – Crypto Casino Review 2025 | Big Jackpots & Live Dealers",
    coinpoker: "Coinpoker – Crypto Casino Review 2025 | Poker, Rakeback & Crypto",
    cryptoloko: "Crypto Loko – Crypto Casino Review 2025 | Unique Rewards & Fast Games",
    slotsofvegas: "Slots of Vegas – Crypto Casino Review 2025 | Classic Vegas Slots Online",
    goldenbilly: "Golden Billy – Crypto Casino Review 2025 | Modern Crypto Casino",
    ninlayplay: "Ninlayplay – Crypto Casino Review 2025 | Adventure & Crypto Slots",
  };

  const descriptions: Record<string, string> = {
    bitstarz: "Discover bonuses, top crypto games, fast payouts, and why BitStarz is a trusted name in crypto gambling.",
    "7bit": "Explore 7Bit Casino: classic slots, crypto bonuses, fast withdrawals, and a wide game selection for every player.",
    wildvegas: "Get wild with Wild Vegas: claim exclusive bonuses, spin top slots, and enjoy fast crypto payouts.",
    cloudbet: "Bet on sports & play 2000+ casino games at Cloudbet. Enjoy instant crypto payouts and high bonuses.",
    betplay: "Betplay offers crypto sports betting, slots, instant payouts, and exclusive bonuses for all crypto players.",
    betzard: "Betzard is the newest crypto casino of 2025. Discover top-tier slots, live casino, and sports betting.",
    dreams: "Dreams Casino: experience Vegas-style jackpots, live dealers, and big crypto bonuses in 2025.",
    coinpoker: "Play poker with crypto at Coinpoker. Enjoy rakeback, fast payouts, and unique promotions.",
    cryptoloko: "Crypto Loko: colorful new crypto casino with unique rewards, fast games, and LOKO token cashback.",
    slotsofvegas: "Spin the reels at Slots of Vegas. Classic Vegas-style crypto slots, exclusive bonuses, and fast payouts.",
    goldenbilly: "Golden Billy: brand-new modern crypto casino with fast payouts, big bonuses, and a sleek interface.",
    ninlayplay: "Ninlayplay: adventure-themed crypto casino with a wide range of games, fast crypto payments, and 24/7 support.",
  };

  const fallbackImage = "https://www.crypto-online-casino.com/og/default.png";
  const imageUrl = resolveOgImageForSlug(slug);

  return {
    title: titles[slug] || "Crypto Casino Reviews 2025 | Best Bitcoin & Crypto Sites",
    description: descriptions[slug] || "Read independent crypto casino reviews and discover the top gambling sites for 2025. Bonuses, games, fast payouts & more.",
    image: imageUrl,
    fallbackImage,
  };
}

export function getOgMetaForHome() {
  return {
    title: "Crypto Online Casino’s 2025 | Reviews, Bonuses & Guides",
    description: "Your starting point for crypto casinos: up-to-date reviews, bonuses, guides, and tips for safe & smart Bitcoin/crypto gambling.",
    image: "https://www.crypto-online-casino.com/og/home-og.jpg"
  };
}
