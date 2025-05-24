import React from "react";
import Image from "next/image";
import Link from "next/link";
import CasinoSuggestions from "@/components/CasinoSuggestions";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("coolcatcasino");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/coolcatcasino",
      images: [{ url: og.image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: og.title,
      description: og.description,
      images: [og.image],
    },
    robots: "index, follow",
  };
};

export default function CoolCatCasinoReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getReviewStructuredData({
              name: "Cool Cat Casino",
              reviewRating: 3.8,
              reviewCount: 312,
              url: "https://www.crypto-online-casino.com/crypto-casino-reviews/coolcatcasino",
              image: "https://www.crypto-online-casino.com/logos/coolcatcasino.png",
              description: "Cool Cat Casino is a classic American online casino with a vintage Vegas vibe, big crypto bonuses, and a loyal player base."
            })
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbListStructuredData([
            { name: "Home", href: "/" },
            { name: "Casino Reviews", href: "/crypto-casino-reviews" },
            { name: "Cool Cat Casino", href: "/crypto-casino-reviews/coolcatcasino" }
          ], "https://www.crypto-online-casino.com"))
        }}
      />
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-1 pb-16 px-4 text-white">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Casino Reviews", href: "/crypto-casino-reviews" },
            { name: "Cool Cat Casino", href: "/crypto-casino-reviews/coolcatcasino" }
          ]}
        />
        <div className="max-w-3xl mx-auto bg-black/60 rounded-2xl shadow-2xl p-8 relative border-2 border-transparent bg-gradient-to-br from-[#241f6b]/90 via-black/70 to-pink-900/60 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:z-10 before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,0,0.07)_0,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,0,200,0.09)_0,transparent_70%)]" style={{boxShadow: '0 0 32px 0 rgba(255, 0, 200, 0.18), 0 0 8px 0 #fff2'}}>
          {/* HEADER */}
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6 gap-6">
            {/* Linkerkant: logo, rating, naam, button */}
            <div className="flex flex-col items-center md:items-start gap-2 min-w-[180px] md:min-w-[220px]">
              <Image src="/logos/coolcatcasino.png" alt="Cool Cat Casino Logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-1" />
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-300 text-2xl">★★★★☆</span>
                <span className="text-white/70 text-sm">3.8/5</span>
              </div>
              <h1 className="text-3xl font-extrabold text-yellow-300 drop-shadow mb-1 text-center md:text-left">COOL CAT CASINO</h1>
              <a
                href="https://www.coolcatlinks.com/click/7/3936/15512/1"
                className="inline-block mt-2 px-3 py-1.5 bg-yellow-300 text-blue-900 font-bold rounded-full text-sm shadow hover:bg-blue-700 hover:text-white transition-all border border-yellow-400 hover:border-blue-700"
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{ minWidth: 'fit-content' }}
              >
                🟡 Visit Cool Cat Casino
              </a>
            </div>
            {/* Rechterkant: tekst, uitgelijnd met rating */}
            <div className="flex-1 flex items-start justify-center">
              <div className="mt-[40px] md:mt-[40px] w-full">
                <p className="text-blue-200 text-lg font-semibold text-center md:text-left max-w-xl">
                  Cool Cat Casino is a veteran name in online gambling, known for its vintage Vegas style and generous promotions. While it may look classic, it accepts crypto and delivers fast-paced fun with slots and table games.<br /><br />
                  Players looking for no-nonsense casino action with proven games and crypto options will feel right at home. Despite its retro design, Cool Cat is still alive and kicking, with regular bonuses and tournaments to keep players engaged.
                </p>
              </div>
            </div>
          </div>

          {/* OUR REVIEW */}
          <div className="bg-white/5 rounded-2xl p-6 shadow-lg mb-6">
            <h2 className="text-yellow-400 text-xl font-bold mb-2">OUR REVIEW</h2>
            <p className="text-white/90">
              Cool Cat Casino blends old-school charm with modern rewards. The interface is simple, the games are quick to load, and the overall vibe is nostalgic — but that’s what gives it its appeal.<br /><br />
              Slot fans will find plenty of choices from RealTime Gaming (RTG), including progressive jackpots and unique bonus rounds. Table game lovers aren’t left out either, with blackjack, baccarat, and roulette all available in crypto-friendly formats.<br /><br />
              Where Cool Cat really shines is in its bonus department: new players are greeted with a large match bonus, and regulars get ongoing offers via email and promotions.<br /><br />
              If you’re into casinos with a retro soul and modern payment options, Cool Cat Casino is a hidden gem worth a spin.
            </p>
          </div>

          {/* PROS & CONS */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1 bg-green-900/80 rounded-2xl p-6 shadow-lg flex flex-col items-center">
              <div className="flex items-center justify-center w-14 h-14 bg-green-700 rounded-xl mb-3">
                <span className="text-3xl">✅</span>
              </div>
              <h2 className="text-green-300 text-xl font-bold mb-2">PROS</h2>
              <ul className="list-disc list-inside space-y-1 text-white/90 text-left w-full">
                <li>Big welcome bonuses for new players</li>
                <li>Accepts Bitcoin and other cryptos</li>
                <li>Easy-to-use classic interface</li>
                <li>RealTime Gaming slots & table games</li>
                <li>VIP program with monthly perks</li>
              </ul>
            </div>
            <div className="flex-1 bg-pink-900/80 rounded-2xl p-6 shadow-lg flex flex-col items-center">
              <div className="flex items-center justify-center w-14 h-14 bg-pink-700 rounded-xl mb-3">
                <span className="text-3xl">❌</span>
              </div>
              <h2 className="text-pink-300 text-xl font-bold mb-2">CONS</h2>
              <ul className="list-disc list-inside space-y-1 text-white/90 text-left w-full">
                <li>Website design feels outdated</li>
                <li>Some withdrawal methods can be slow</li>
                <li>No sportsbook</li>
              </ul>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="flex items-start bg-yellow-900/80 rounded-2xl p-6 shadow-lg mb-6">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-yellow-700 rounded-xl mr-5">
              <span className="text-3xl">✨</span>
            </div>
            <div>
              <h2 className="text-yellow-300 text-xl font-bold mb-2">HIGHLIGHTS</h2>
              <ul className="list-disc list-inside space-y-1 text-white/90">
                <li>Up to 330% welcome bonus for new users</li>
                <li>Slot-heavy selection with daily competitions</li>
                <li>Frequent free chip promos</li>
                <li>Loyalty rewards & VIP events</li>
                <li>US-friendly casino with 24/7 live chat</li>
              </ul>
            </div>
          </div>

          {/* CRYPTO & PAYMENT OPTIONS */}
          <div className="flex items-start bg-purple-900/80 rounded-2xl p-6 shadow-lg mb-6">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-purple-700 rounded-xl mr-5">
              <span className="text-3xl">🪙</span>
            </div>
            <div>
              <h2 className="text-purple-300 text-xl font-bold mb-2">Crypto & Payment Options</h2>
              <ul className="space-y-2 text-white/90">
                <li>
                  <span className="text-lg mr-2">💱</span>
                  <span className="font-bold">Crypto Deposits:</span> Players can deposit using Bitcoin and start playing instantly — no third-party wallet delays.
                </li>
                <li>
                  <span className="text-lg mr-2">💳</span>
                  <span className="font-bold">Traditional Payments:</span> Visa, Mastercard, Neteller, and more are available for fiat users.
                </li>
                <li>
                  <span className="text-lg mr-2">🔒</span>
                  <span className="font-bold">Security:</span> All transactions are SSL-encrypted and processed securely.
                </li>
                <li>
                  <span className="text-lg mr-2">🪙</span>
                  <span className="font-bold">Accepted Cryptocurrencies:</span> Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC)
                </li>
              </ul>
            </div>
          </div>

          {/* CALL TO ACTION BUTTONS */}
          <div className="flex flex-col gap-4 mt-8 mb-4">
            <a
              href="https://www.coolcatlinks.com/click/7/3936/15512/1"
              className="w-full inline-block text-center text-white bg-yellow-500 hover:bg-yellow-400 px-6 py-4 rounded-full transition font-bold shadow-lg text-lg"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              🟡 Claim your Cool Cat Casino bonus now!
            </a>
            <a
              href="https://www.coolcatlinks.com/click/7/3936/15512/1"
              className="w-full inline-block text-center text-white bg-blue-700 hover:bg-blue-600 px-6 py-4 rounded-full transition font-bold shadow-lg text-lg"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              🪙 Visit Cool Cat Casino
            </a>
          </div>

          <p className="text-center text-xs text-gray-400 mt-2">
            18+ | Gamble responsibly. Cool Cat Casino may not be available in all jurisdictions.
          </p>

          <CasinoSuggestions />
        </div>
      </main>
    </>
  );
}
