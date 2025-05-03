// /lib/ogMeta.ts

export function getOgMetaForCasino(slug: string) {
  // Voorbeelddata voor BitStarz, uitbreidbaar voor andere casino's
  const metaMap: Record<string, { title: string; description: string; image: string }> = {
    bitstarz: {
      title: "BitStarz Casino Review 2025 | Beste Crypto Casino van het Jaar!",
      description: "Lees onze BitStarz review: bonussen, games, uitbetalingen & ervaringen. Waarom BitStarz hét crypto casino is voor Nederlandse spelers in 2025.",
      image: "https://www.yourdomain.com/og/bitstarz-og.jpg" // Vervang door je eigen OG-image URL
    },
    // Voeg hier andere casino's toe
  };

  const fallback = {
    title: "Crypto Casino Reviews 2025 | Beste Casino’s & Bonussen",
    description: "Bekijk onafhankelijke reviews van de beste crypto casino’s. Actuele bonussen, ervaringen en tips voor veilig spelen in 2025.",
    image: "https://www.yourdomain.com/og/crypto-casino-default-og.jpg"
  };

  return metaMap[slug] || fallback;
}

export function getOgMetaForHome() {
  return {
    title: "Crypto Online Casino’s 2025 | Reviews, Bonussen & Gidsen",
    description: "Dé startpagina voor crypto casino’s: actuele reviews, bonussen, gidsen en tips voor veilig en slim spelen met Bitcoin & crypto.",
    image: "https://www.yourdomain.com/og/home-og.jpg"
  };
}
