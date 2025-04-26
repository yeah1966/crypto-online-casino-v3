import Link from "next/link";
import { topCasinos } from "../lib/topCasinos";
import affiliateLinks from "../data/affiliateLinks.json";

export default function Top10List() {
  return (
    <section className="space-y-6 px-4">
      {topCasinos.map((casino, index) => (
        <div
          key={casino.slug}
          className="flex items-center gap-4 p-4 rounded-xl shadow-md border border-yellow-300 bg-gradient-to-br from-[#0f0f2f] to-[#1b1b45]"
        >
          <img
            src={`/logos/${casino.image}`}
            alt={`${casino.name} crypto casino logo`}
            width={80}
            height={80}
            className="rounded-md object-contain bg-black p-1"
          />
          <div className="flex-1">
            <div className="text-yellow-400 font-bold text-lg">
              #{index + 1} {casino.name}
            </div>
            <div className="text-pink-400">{casino.description}</div>
            <div className="text-green-400 font-semibold">{casino.bonus}</div>
            <p className="text-white text-sm mt-1">{casino.details}</p>
          </div>
          <a
            href={affiliateLinks[casino.slug]}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-300 to-pink-500 text-white font-bold py-2 px-4 rounded-xl hover:scale-105 transition"
          >
            Play Now
          </a>
        </div>
      ))}
    </section>
  );
}
