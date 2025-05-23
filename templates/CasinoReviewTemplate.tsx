// TEMPLATE: Casino Review Page
// Gebruik deze file als basis voor alle toekomstige casino review pagina's.
// Kopieer deze structuur en styling voor een consistente look & feel.

import React from "react";
import Image from "next/image";
import CasinoSuggestions from "@/components/CasinoSuggestions";

export default function CasinoReviewTemplate({
  logo = "/logos/bitstarz.png",
  casinoName = "BITSTARZ",
  rating = 5.0,
  ratingStars = "★★★★★",
  affiliateUrl = "#",
  affiliateLabel = "Visit BitStarz",
  introText = "BitStarz is one of the top-rated crypto casinos, offering fast Bitcoin withdrawals, generous bonuses and provably fair games. New players can claim an exclusive crypto bonus when registering with BitStarz. Enjoy a trusted Bitcoin casino with fast payouts, a huge game selection, and exclusive crypto bonuses.",
  reviewText = "BitStarz doesn’t just shine, it dominates. From the moment you arrive, the interface and intuitive design make it instantly clear: this is no ordinary crypto casino.\n\nWith over 3,500 games, BitStarz offers an enormous variety of slots, table games, and live dealers. But it’s the performance that really impresses: lightning-fast payouts, instant deposits, and a fully crypto-optimized backend make playing a true pleasure.\n\nThe loyalty program rewards regular players with reload bonuses and exclusive extras, and the support team is top-notch: fast, multilingual, and available 24/7. BitStarz was also one of the first licensed crypto casinos — their reputation is rock solid.\n\nLooking for the gold standard? BitStarz delivers on every front.",
  pros = [],
  cons = [],
  highlights = [],
  children,
}: {
  logo?: string;
  casinoName?: string;
  rating?: number;
  ratingStars?: string;
  affiliateUrl?: string;
  affiliateLabel?: string;
  introText?: string;
  reviewText?: string;
  pros?: string[];
  cons?: string[];
  highlights?: string[];
  children?: React.ReactNode;
}) {
  return (
    <main className="relative z-10 min-h-screen pt-1 pb-16 px-4 text-white">
      <div className="max-w-3xl mx-auto bg-black/60 rounded-2xl shadow-2xl p-8 relative
        border-2 border-transparent
        bg-gradient-to-br from-[#241f6b]/90 via-black/70 to-pink-900/60
        before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:z-10
        before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,0,0.07)_0,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,0,200,0.09)_0,transparent_70%)]
        " style={{boxShadow: '0 0 32px 0 rgba(255, 0, 200, 0.18), 0 0 8px 0 #fff2'}}>
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-6 gap-6">
          {/* Linkerkant: logo, rating, naam, button */}
          <div className="flex flex-col items-center md:items-start gap-2 min-w-[180px] md:min-w-[220px]">
            <Image src={logo} alt={`${casinoName} Logo`} width={96} height={96} className="rounded-xl bg-white shadow-lg mb-1" />
            <div className="flex items-center gap-2 mb-1">
              <span className="text-yellow-300 text-2xl">{ratingStars}</span>
              <span className="text-white/70 text-sm">{rating.toFixed(1)}/5</span>
            </div>
            <h1 className="text-3xl font-extrabold text-yellow-300 drop-shadow mb-1 text-center md:text-left">{casinoName}</h1>
            <a
              href={affiliateUrl}
              className="inline-block mt-2 px-3 py-1.5 bg-yellow-300 text-pink-700 font-bold rounded-full text-sm shadow hover:bg-pink-600 hover:text-white transition-all border border-yellow-400 hover:border-pink-600"
              target="_blank"
              rel="noopener noreferrer nofollow"
              style={{ minWidth: 'fit-content' }}
            >
              {affiliateLabel}
            </a>
          </div>
          {/* Rechterkant: tekst, uitgelijnd met rating */}
          <div className="flex-1 flex items-start justify-center">
            <div className="mt-[40px] md:mt-[40px] w-full">
              <p className="text-pink-300 text-lg font-semibold text-center md:text-left max-w-xl">
                {introText}
              </p>
            </div>
          </div>
        </div>
        {/* OUR REVIEW met extra flash */}
        <div className="my-8 bg-purple-950/80 rounded-xl p-6 shadow-lg border-2 border-yellow-400 relative overflow-hidden">
          <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600 animate-pulse" />
          <h2 className="text-2xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
            <span className="inline-block text-yellow-300 drop-shadow-lg">★</span>
            OUR REVIEW
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            {reviewText && reviewText.split('<br><br>').map((para, idx) => (
              <React.Fragment key={idx}>
                {para}
                {idx < reviewText.split('<br><br>').length - 1 && <br />}
                {idx < reviewText.split('<br><br>').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          <div className="absolute pointer-events-none select-none left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-8 bg-gradient-to-r from-yellow-400/20 via-pink-400/10 to-purple-600/20 blur-2xl opacity-70 animate-pulse" />
        </div>
        {/* PROS & CONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* PROS */}
          <div className="flex-1 bg-green-900/80 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <div className="flex items-center justify-center w-14 h-14 bg-green-700 rounded-xl mb-3">
              <span className="text-3xl">✅</span>
            </div>
            <h2 className="text-green-300 text-xl font-bold mb-2">PROS</h2>
            <ul className="list-disc list-inside space-y-1 text-white/90 text-left w-full">
              {pros.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          {/* CONS */}
          <div className="flex-1 bg-pink-900/80 rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <div className="flex items-center justify-center w-14 h-14 bg-pink-700 rounded-xl mb-3">
              <span className="text-3xl">❌</span>
            </div>
            <h2 className="text-pink-300 text-xl font-bold mb-2">CONS</h2>
            <ul className="list-disc list-inside space-y-1 text-white/90 text-left w-full">
              {cons.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* HIGHLIGHTS */}
        <div className="mt-8 bg-yellow-900/80 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">✨</span>
            <span className="text-yellow-200 font-bold text-xl">HIGHLIGHTS</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-yellow-100">
            {highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Extra content (children) */}
        {children}
        {/* CasinoSuggestions altijd onderaan */}
        <div className="mt-12">
           <CasinoSuggestions />
         </div>
       </div>
     </main>
   );
 }
