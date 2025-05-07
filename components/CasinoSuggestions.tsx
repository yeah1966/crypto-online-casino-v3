import Link from "next/link";
import Image from "next/image";

const casinos = [
  {
    name: "Cloudbet",
    logo: "/logos/cloudbet.png",
    slug: "cloudbet",
    tagline: "Sportsbook & Live crypto betting",
  },
  {
    name: "Slots of Vegas",
    logo: "/logos/slotsofvegas.png",
    slug: "slotsofvegas",
    tagline: "Classic slots & big bonuses",
  },
  {
    name: "7Bit",
    logo: "/logos/7bit.png",
    slug: "7bit",
    tagline: "Classic slots & free spins",
  },
  {
    name: "WildVegas",
    logo: "/logos/wildvegas.png",
    slug: "wildevegas",
    tagline: "Big wins & wild jackpots",
  },
  {
    name: "Crypto Loko",
    logo: "/logos/cryptoloko.png",
    slug: "crypto-loko",
    tagline: "Unique crypto games & bonuses",
  },
  {
    name: "Coinpoker",
    logo: "/logos/coinpoker.png",
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
            <div className="bg-purple-900 p-4 rounded-lg hover:bg-purple-800 transition cursor-pointer h-full flex items-center gap-4">
              <Image src={casino.logo} alt={`${casino.name} logo`} width={56} height={56} className="rounded-xl bg-white shadow-md flex-shrink-0" />
              <div>
                <p className="font-bold text-white text-lg">{casino.name}</p>
                <p className="text-sm text-gray-300">{casino.tagline}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
