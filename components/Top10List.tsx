import Image from "next/image";
import { topCasinos } from "../lib/topCasinos";
import { casinos, CasinoCard } from "../data/casinosData";

function getAffiliateUrl(slug: string) {
  const found = casinos.find(c => c.slug === slug);
  return found?.affiliateUrl || '';
}

export default function Top10List() {
  const badges = [
    "🥇 Best Crypto Bonus",
    "🚀 Fastest Payouts",
    "🌟 Top-Rated Support",
  ];

  return (
    <section className="space-y-8 px-4">
      {(topCasinos as CasinoCard[]).map((casino) => (
        <div
          key={casino.slug}
          className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl shadow-lg border-2 transition-all duration-300 ${
            index === 0
              ? "border-yellow-400 hover:scale-105 hover:shadow-[0_0_30px_#facc15]"
              : index === 1
              ? "border-pink-400 hover:scale-105 hover:shadow-[0_0_30px_#f472b6]"
              : index === 2
              ? "border-green-400 hover:scale-105 hover:shadow-[0_0_30px_#34d399]"
              : "border-purple-700 hover:scale-102 hover:shadow-[0_0_20px_#a855f7]"
          } bg-gradient-to-br from-[#0f0f2f] to-[#1b1b45]`}
        >
          {/* Logo */}
          <Image
            src={casino.logo}
            alt={`${casino.name} crypto casino logo`}
            width={90}
            height={90}
            className="rounded-lg object-contain bg-black p-2"
          />

          {/* Casino Details */}
          <div className="flex-1 text-center md:text-left">
            {index < 3 && (
              <div className="text-pink-300 text-sm font-bold mb-1">{badges[index]}</div>
            )}
            <div className="text-yellow-400 font-extrabold text-2xl">
            #{index + 1} {index === 0 ? '👑' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''} {casino.name}
            </div>
            <div className="text-pink-400 mt-1">{casino.description}</div>
            <div className="text-green-400 font-semibold mt-1">{casino.bonus}</div>
            <p className="text-white/80 text-sm mt-2">{casino.details}</p>
          </div>

          {/* Play Now Button */}
          <div className="mt-4 md:mt-0">
            {(() => {
              const affiliateLink = getAffiliateUrl(casino.slug);
              return affiliateLink ? (
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block font-extrabold py-3 px-6 rounded-full transition-all duration-300 shadow-lg border-2 ${
                    index === 0
                      ? "bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-black hover:scale-110 hover:shadow-[0_0_30px_#facc15]"
                      : index === 1
                      ? "bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white hover:scale-110 hover:shadow-[0_0_30px_#c084fc]"
                      : index === 2
                      ? "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white hover:scale-110 hover:shadow-[0_0_30px_#5eead4]"
                      : "bg-gradient-to-r from-yellow-300 to-pink-500 text-white hover:scale-105 hover:shadow-[0_0_20px_#f9a8d4]"
                  }`}
                >
                  Play Now
                </a>
              ) : null;
            })()}
          </div>
        </div>
      ))}
    </section>
  );
}
