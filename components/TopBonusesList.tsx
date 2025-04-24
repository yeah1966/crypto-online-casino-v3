import Link from "next/link";
import Image from "next/image";
import { topBonuses } from "../lib/topBonuses";

export default function TopBonusesList() {
  return (
    <section className="space-y-6 px-4">
      {topBonuses.map((bonus, index) => (
        <div
          key={bonus.slug}
          className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl shadow-md border border-yellow-300 bg-gradient-to-br from-[#0f0f2f] to-[#1b1b45]"
        >
          <Image
            src={`/logos/${bonus.image}`}
            alt={`${bonus.name} logo`}
            width={80}
            height={80}
            className="rounded-md object-contain bg-black p-1"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/logos/placeholder.png";
            }}
          />
          <div className="flex-1 w-full">
            <div className="text-yellow-400 font-bold text-lg">
              #{index + 1} {bonus.name}
            </div>
            <div className="text-green-400 font-semibold">{bonus.bonusTitle}</div>
            <div className="text-pink-400">{bonus.description}</div>
            <p className="text-white text-sm mt-1">{bonus.details}</p>
          </div>
          <div className="flex flex-col gap-2 min-w-[140px] w-full md:w-auto">
            <Link href={`/out/${bonus.slug}`} passHref legacyBehavior>
              <a className="bg-gradient-to-r from-yellow-300 to-pink-500 text-white font-bold py-2 px-4 rounded-xl hover:scale-105 transition shadow-lg text-center w-full block">
                Claim Bonus
              </a>
            </Link>
            <Link href={`/bonussen/${bonus.slug}`} passHref legacyBehavior>
              <a className="bg-gradient-to-r from-[#1b1b45] to-[#0f0f2f] border border-yellow-400 text-yellow-300 font-semibold py-2 px-4 rounded-xl hover:scale-105 transition shadow text-center w-full block">
                More info
              </a>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
