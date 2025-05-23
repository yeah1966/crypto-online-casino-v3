

export interface CasinoCardProps {
  name: string;
  logo: string;
  type: string;
  deal: string;
  bonus: string;
  slug: string;
  flag?: string;
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { affiliateLinks } from "@/data/affiliateLinks";
import CasinoLogo from "./CasinoLogo";

export default function CasinoCard({
  name,
  logo,
  type,
  deal,
  bonus,
  slug,
  flag,
}: CasinoCardProps) {
  // Robuuste kleurtoekenning op basis van dealtype
  const dealLower = deal?.toLowerCase() || '';
  if (!deal) {
    console.warn(`Missing deal value for casino: ${name}`);
  }
  let bonusColor = "text-green-400";
  if (dealLower === "rs" || dealLower === "revenue share") bonusColor = "text-blue-400";
  if (dealLower === "hybrid") bonusColor = "text-purple-400";

  return (
    <div className="flex flex-col items-center justify-between w-full max-w-[400px] rounded-2xl shadow-lg p-6 bg-gradient-to-b from-black/80 to-purple-950 min-h-[410px] transition-all duration-200 ease-in-out hover:scale-[1.02] border border-purple-900">
      {/* Logo */}
      <CasinoLogo src={logo} alt={name} className="object-contain mx-auto mb-3 rounded-xl" width={140} height={140} />
      {/* Naam + vlag */}
      <h3 className="font-bold text-white text-center mb-2 flex items-center justify-center gap-2" style={{fontSize: 30}}>
  {name}
  {/* Duitse vlag als emoji voor Germany */}
  {flag?.toLowerCase().includes('germany') && (
    <span role="img" aria-label="Germany">🇩🇪</span>
  )}
  {/* fallback op bestaande flag prop voor andere landen */}
  {flag && !flag.toLowerCase().includes('germany') && (
    <span className="ml-1">{flag}</span>
  )}
</h3>
      {/* Bonus in 2 regels */}
      {(() => {
        let bonusLine1 = bonus;
        let bonusLine2 = '';
        if (bonus?.includes('+')) {
          [bonusLine1, bonusLine2] = bonus.split('+').map(s => s.trim());
        } else if (bonus?.includes('/')) {
          [bonusLine1, bonusLine2] = bonus.split('/').map(s => s.trim());
        }
        return (
          <div className="text-center mb-2 flex flex-col items-center">
  <div className="flex items-center gap-2">
    <Image src="/casino-icons/Trophy.svg" alt="bonus icon" width={20} height={20} className="w-5 h-5 inline-block" />
    <p className={`${bonusColor} text-2xl font-bold leading-none inline-block`}>{bonusLine1}</p>
  </div>
  {bonusLine2 && <p className="text-white text-sm mt-1">{bonusLine2}</p>}
</div>
        );
      })()}
      {/* Deal type en categorie */}
      <div className="mt-3 text-center space-y-1">
  <span className="bg-gray-800 text-sm px-3 py-1 rounded-md inline-flex items-center gap-1">
    <Image src="/casino-icons/Poker Chip.svg" alt="deal icon" width={16} height={16} className="w-4 h-4 inline-block" />
    {deal}
  </span>
  <div className="text-sm text-white/70 flex items-center gap-1 justify-center">
    <Image src="/casino-icons/Casino.svg" alt="type icon" width={16} height={16} className="w-4 h-4 inline-block" />
    {type}
  </div>
</div>
      {/* CTA knop */}
      <Link
  href={affiliateLinks[slug] ?? "#"}
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-4 w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:scale-[1.02] hover:shadow-yellow-500/40 transition text-center uppercase tracking-wide shadow font-extrabold text-lg"
  style={{textShadow:'0 2px 8px #fff,0 0 2px #ff0'}}
>
  PLAY NOW ➜
</Link>

    </div>
  );
}
