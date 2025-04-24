import Link from "next/link";

const casinos = [
  {
    name: "Cloudbet",
    emoji: "🌩",
    slug: "cloudbet",
    tagline: "Sportsbook & Live crypto betting",
  },
  {
    name: "BitStarz",
    emoji: "🎰",
    slug: "bitstarz",
    tagline: "Award-winning crypto slots",
  },
  {
    name: "7Bit",
    emoji: "🎮",
    slug: "7bit",
    tagline: "Classic slots & free spins",
  },
  {
    name: "WildVegas",
    emoji: "🦁",
    slug: "wildevegas",
    tagline: "Big wins & wild jackpots",
  },
  {
    name: "Crypto Loko",
    emoji: "🌀",
    slug: "crypto-loko",
    tagline: "Unique crypto games & bonuses",
  },
  {
    name: "Coinpoker",
    emoji: "🃏",
    slug: "coinpoker",
    tagline: "Provably fair crypto poker",
  },
];

export default function CasinoSuggestions() {
  return (
    <div className="mt-12 border-t border-purple-700 pt-6">
      <h2 className="text-yellow-400 text-2xl font-bold text-center mb-4">
        Explore Other Crypto Casino Reviews 🎲
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {casinos.map((casino) => (
          <Link href={`/crypto-casino-reviews/${casino.slug}`} key={casino.slug}>
            <div className="bg-purple-900 p-4 rounded-lg hover:bg-purple-800 transition cursor-pointer h-full flex flex-col justify-center">
              <p className="font-bold text-white text-lg">{casino.emoji} {casino.name}</p>
              <p className="text-sm text-gray-300">{casino.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
