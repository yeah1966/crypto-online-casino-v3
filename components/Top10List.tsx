import Link from "next/link";
import { topCasinos } from "../lib/topCasinos";
import affiliateLinks from "../data/affiliateLinks.json";

export default function Top10List() {
  return (
    <section className="space-y-6 px-4">
      {topCasinos.map((casino, index) => (
        <div
          key={casino.slug}
          className={`flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl shadow-lg border-2 ${
            index === 0 ? "border-yellow-400" : index === 1 ? "border-pink-400" : index === 2 ? "border-green-400" : "border-purple-600"
          } bg-gradient-to-br from-[#0f0f2f] to-[#1b1b45] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_gold]`}
        >
          {/* Logo */}
          <img
            src={`/logos/${casino.image}`}
            alt={`${casino.name} crypto casino logo`}
            width={80}
            height={80}
            className="rounded-lg object-contain bg-black p-2"
          />

          {/* Casino Details */}
          <div className="flex-1 text-center md:text-left">
            {/* Special badge voor top 3 */}
            {index === 0 && (
              <div className="text-pink-300 text-sm font-bold mb-1">🥇 Best Crypto Bonus</div>
            )}
            {index === 1 && (
              <div className="text-pink-300 text-sm font-bold mb-1">🚀 Fastest Payouts</div>
            )}
            {index === 2 && (
              <div className="text-pink-300 text-sm font-bold mb-1">🌟 Top-Rated Support</div>
            )}

            {/* Naam en ranking */}
            <div className="text-yellow-400 font-extrabold text-2xl">
              #{index + 1} {casino.name}
            </div>

            {/* Beschrijving, bonus en details */}
            <div className="text-pink-400 mt-1">{casino.description}</div>
            <div className="text-green-400 font-semibold mt-1">{casino.bonus}</div>
            <p className="text-white/80 text-sm mt-2">{casino.details}</p>
          </div>

          {/* Play Now Button */}
          <div className="mt-4 md:mt-0">
            <a
              href={affiliateLinks[casino.slug]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
            >
              Play Now
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
