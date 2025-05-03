'use client';
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "what", label: "What is Crypto Gambling" },
  { id: "how", label: "How Bets Work" },
  { id: "provably", label: "Provably Fair" },
  { id: "rng", label: "RNG" },
  { id: "tips", label: "Tips" },
  { id: "advantages", label: "Game Types" },
];

const advantages = [
  { title: "Slots", desc: "RNG-based reels, fast payouts", icon: "/fun/roulette.png" },
  { title: "Dice", desc: "Blockchain-verified, provably fair", icon: "/fun/dice.png" },
  { title: "Blackjack", desc: "RNG or live dealer, instant play", icon: "/fun/cards.png" },
  { title: "Live Games", desc: "Streamed real dealers, visual fairness", icon: "/fun/crypto-flames.png" },
];

export default function CryptoGambling101() {
  const refs = sections.reduce((acc, section) => {
    acc[section.id] = useRef<HTMLDivElement | null>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement | null>>);

  const scrollToSection = (id: string) => {
    refs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Head>
        <title>Crypto Gambling 101: How to Bet Smarter with Bitcoin &amp; More</title>
        <meta name="description" content="Learn how crypto casinos work, from provably fair games to fast deposits, anonymous play and RNG. Bet smarter with Bitcoin and beyond." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Guides", href: "/guides" },
              { name: "Crypto Gambling 101", href: "/guides/crypto-gambling-101" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Crypto Gambling 101", href: "/guides/crypto-gambling-101" }
        ]}
      />
      <div className="min-h-screen flex justify-center py-10 px-2">
        <div className="backdrop-blur-lg rounded-2xl shadow-2xl max-w-3xl w-full mx-auto p-4 md:p-8 flex flex-col gap-8">
          {/* Sticky submenu */}
          <nav className="sticky top-4 z-30 mb-8 flex gap-2 flex-wrap justify-center md:justify-start">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 font-bold text-sm hover:bg-yellow-300 hover:text-pink-700 transition-all border-2 border-purple-300 shadow"
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* Hero/Intro */}
          <div ref={refs.intro} className="flex flex-col items-center mb-8">
            <img src="/fun/roulette.png" alt="Crypto roulette" width={90} height={90} className="mb-2 drop-shadow-lg animate-bounce" />
            <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
              📊 Crypto Gambling 101: Everything You Need to Know to Play Smart
            </h1>
            <p className="text-lg text-center text-white/90 mb-4">
              🧠 New to crypto gambling? This guide gives you the basics — fast, fair, and crypto-ready.
            </p>
          </div>

          {/* Section 1: What Is Crypto Gambling? */}
          <section ref={refs.what} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
              <img src="/fun/cards.png" alt="Casino cards" width={32} height={32} />
              What Is Crypto Gambling?
            </h2>
            <p className="text-white/90">
              Crypto gambling means using cryptocurrencies like Bitcoin or Ethereum to play your favorite casino games online. You get:
            </p>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li>Faster deposits &amp; withdrawals</li>
              <li>More privacy (no bank involved)</li>
              <li>Access to global casinos</li>
            </ul>
            <p className="text-white/90 mt-2">
              You can bet in Bitcoin, Ethereum, Litecoin, USDT, and more — all verified through the blockchain.
            </p>
          </section>

          {/* Section 2: How Do Crypto Bets Work? */}
          <section ref={refs.how} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-pink-600">
              <img src="/fun/dice.png" alt="Dice" width={32} height={32} />
              How Do Crypto Bets Work?
            </h2>
            <p className="text-white/90">
              You choose your crypto, place your bet, and… spin, deal, or roll.
            </p>
            <p className="text-white/90 mt-2">Popular crypto games include:</p>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li>🎰 <b>Slots</b> — same games as fiat casinos, with crypto bets</li>
              <li>🃏 <b>Blackjack</b> — play against the dealer with BTC</li>
              <li>🎥 <b>Live Roulette</b> — real dealers, real tables, crypto in, crypto out</li>
              <li>🎲 <b>Dice</b> — crypto-original, ultra-fast, and provably fair</li>
            </ul>
          </section>

          {/* Section 3: What Is Provably Fair? */}
          <section ref={refs.provably} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-700">
              <img src="/fun/crypto-flames.png" alt="Provably fair" width={32} height={32} />
              What Is Provably Fair?
            </h2>
            <p className="text-white/90">
              Provably fair means you can verify every game result using cryptographic hashes.
            </p>
            <p className="text-white/90 mt-2">
              <b>How it works (simple version):</b>
            </p>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li>Before the round, the casino gives you a “seed” (hash)</li>
              <li>After the round, you get the full result + the method</li>
              <li>You can verify: was it really random?</li>
            </ul>
            <p className="text-white/90 mt-2">
              <b>Result:</b> You don’t just trust the casino — you can check it.
            </p>
          </section>

          {/* Section 4: Understanding RNG */}
          <section ref={refs.rng} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-700">
              <img src="/fun/roulette.png" alt="RNG" width={32} height={32} />
              Understanding RNG (Random Number Generator)
            </h2>
            <p className="text-white/90">
              All modern games (slots, blackjack, roulette) use RNG software to determine outcomes. In crypto casinos:
            </p>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li>RNG is often certified or provably fair</li>
              <li>You can play games from providers like BGaming, Pragmatic Play, or Spribe</li>
              <li>Each spin or roll is mathematically random</li>
            </ul>
            <p className="text-white/90 mt-2">
              📌 <b>Tip:</b> Always check if the game provider is listed at the bottom of the site.
            </p>
          </section>

          {/* Section 5: Final Tips */}
          <section ref={refs.tips} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-pink-700">
              <img src="/fun/tropic-palms.png" alt="Tips" width={32} height={32} />
              Final Tips for Smart Crypto Gamblers
            </h2>
            <ul className="list-disc ml-6 text-white/90">
              <li>🧾 Stick to licensed or well-reviewed casinos</li>
              <li>🔍 Test low-stake games first</li>
              <li>🚀 Use Bitcoin or stablecoins for fastest play</li>
              <li>🔐 Store winnings in your personal wallet</li>
            </ul>
          </section>

          {/* Section 6: Game Types (was summary table) */}
          <section ref={refs.advantages} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-700">
              <img src="/fun/cards.png" alt="Game types" width={32} height={32} />
              Game Types & Advantages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((a) => (
                <div key={a.title} className="flex flex-col items-center bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-100 rounded-xl p-4 border-2 border-yellow-400 shadow hover:scale-105 transition-transform duration-200">
                  <img src={a.icon} alt={a.title} width={36} height={36} className="mb-2" />
                  <span className="font-bold text-black mb-1">{a.title}</span>
                  <span className="text-xs text-black/70 text-center">{a.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: CTA Button */}
          <div className="flex justify-center mt-8">
            <Link
              href="/crypto-casino-reviews"
              className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 hover:from-yellow-300 hover:to-pink-300 transition-all duration-300 hover:shadow-[0_0_30px_#fbbf24]"
            >
              🪙 Explore the Best Crypto Casinos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
