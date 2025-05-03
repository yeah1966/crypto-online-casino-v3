// /lib/ogMeta.ts

export function getOgMetaForCasino(slug: string) {
  const titles: Record<string, string> = {
    bitstarz: "BitStarz – Crypto Casino Review 2025",
    "7bit": "7Bit – Crypto Casino Review 2025",
    wildvegas: "Wild Vegas – Crypto Casino Review 2025",
    cloudbet: "Cloudbet – Crypto Casino Review 2025",
    betplay: "Betplay – Crypto Casino Review 2025",
    betzard: "Betzard – Crypto Casino Review 2025",
    dreams: "Dreams – Crypto Casino Review 2025",
    coinpoker: "Coinpoker – Crypto Casino Review 2025",
    "crypto-loko": "Crypto Loko – Crypto Casino Review 2025",
    slotsofvegas: "Slots of Vegas – Crypto Casino Review 2025",
    goldenbilly: "Golden Billy – Crypto Casino Review 2025",
    ninlayplay: "Ninlayplay – Crypto Casino Review 2025",
  };

  const descriptions: Record<string, string> = {
    bitstarz: "Lees onze eerlijke BitStarz casino review: bonussen, games, crypto’s en meer.",
    "7bit": "7Bit Casino review 2025: ontdek bonussen, games en crypto features.",
    wildvegas: "Wild Vegas Casino review: alles over bonussen, games en crypto.",
    cloudbet: "Cloudbet Casino review: crypto, sportweddenschappen en snelle uitbetalingen.",
    betplay: "Betplay Casino review: crypto bonussen, unieke games en snelle support.",
    betzard: "Betzard Casino review: ontdek de nieuwste crypto goksite van 2025.",
    dreams: "Dreams Casino review: crypto, bonussen en unieke promoties.",
    coinpoker: "Coinpoker review: poker met crypto, rakeback en snelle payouts.",
    "crypto-loko": "Crypto Loko review: alles over crypto bonussen en games.",
    slotsofvegas: "Slots of Vegas review: crypto gokkasten en bonussen in 2025.",
    goldenbilly: "Golden Billy review: crypto casino met unieke features.",
    ninlayplay: "Ninlayplay review: crypto casino voor avontuurlijke spelers.",
  };

  const images: Record<string, string> = {
    bitstarz: "https://www.crypto-online-casino.com/og/bitstarz-2.png",
  };

  const imageUrl = images[slug] || `https://www.crypto-online-casino.com/og/${slug}.png`;
  const fallbackImage = "https://www.crypto-online-casino.com/og/default.png";

  return {
    title: titles[slug] || "Crypto Casino Reviews – Beste Sites van 2025",
    description: descriptions[slug] || "Bekijk onafhankelijke crypto casino reviews en ontdek de top goksites van 2025.",
    image: imageUrl,
    fallbackImage,
  };
}

export function getOgMetaForHome() {
  return {
    title: "Crypto Online Casino’s 2025 | Reviews, Bonussen & Gidsen",
    description: "Dé startpagina voor crypto casino’s: actuele reviews, bonussen, gidsen en tips voor veilig en slim spelen met Bitcoin & crypto.",
    image: "https://www.crypto-online-casino.com/og/home-og.jpg"
  };
}
