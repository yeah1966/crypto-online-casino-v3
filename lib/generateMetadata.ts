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
