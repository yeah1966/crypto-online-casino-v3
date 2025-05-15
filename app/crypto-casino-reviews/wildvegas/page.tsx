import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Wild Vegas Casino Review 2025 | Crypto Bonuses & RTG Slots",
    description: "Read our Wild Vegas review: get a 350% bonus, discover RTG slots, fast Bitcoin payouts, and VIP rewards. Trusted since 2008.",
    alternates: {
      canonical: "https://crypto-online-casino.com/crypto-casino-reviews/wildvegas",
    },
    openGraph: {
      title: "Wild Vegas Casino Review 2025 | Crypto Bonuses & RTG Slots",
      description: "Read our Wild Vegas review: get a 350% bonus, discover RTG slots, fast Bitcoin payouts, and VIP rewards. Trusted since 2008.",
      url: "https://crypto-online-casino.com/crypto-casino-reviews/wildvegas",
      type: "website",
      images: [
        {
          url: "https://crypto-online-casino.com/og/wildvegas.png",
          width: 1200,
          height: 630,
          alt: "Wild Vegas Casino OG Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Wild Vegas Casino Review 2025 | Crypto Bonuses & RTG Slots",
      description: "Read our Wild Vegas review: get a 350% bonus, discover RTG slots, fast Bitcoin payouts, and VIP rewards. Trusted since 2008.",
      images: ["https://crypto-online-casino.com/og/wildvegas.png"],
    },
  };
};

import React from "react";

const data = {
  introduction: "Wild Vegas is a legendary crypto-friendly online casino, famous for its vibrant Las Vegas theme, exciting slots, and big win potential. With a long-standing reputation, Wild Vegas attracts both new and seasoned players from around the world.",
  bonuses: "New players at Wild Vegas are welcomed with a massive 350% deposit bonus on slots, plus free spins on top games. Ongoing promotions include daily reloads, cashback, and exclusive tournaments. The VIP program offers tailored rewards, higher limits, and personal account managers.",
  games: "Wild Vegas features a curated selection of over 250 slots, classic table games like blackjack and roulette, and video poker. Powered by RealTime Gaming (RTG), the casino ensures fair play and a smooth gaming experience. Progressive jackpots and bonus rounds add extra excitement.",
  support: "24/7 customer support is available via live chat, phone, and email. The professional team assists with bonuses, payments, technical issues, and more. An extensive FAQ section provides instant answers to common questions.",
  mobile: "Wild Vegas is fully optimized for mobile play. Enjoy all slots and table games directly in your mobile browser—no app needed. The site loads quickly and offers intuitive navigation on any device.",
  security: "Wild Vegas operates under a reputable gaming license and uses advanced SSL encryption to protect player data. Responsible gaming tools and strict verification procedures ensure a safe environment.",
  payments: "Wild Vegas supports Bitcoin and major credit cards for deposits and withdrawals. Crypto payments are processed quickly and securely, with no hidden fees. Fast payouts are a top priority.",
  verdict: "Wild Vegas is a trusted choice for players seeking a classic Vegas vibe, generous bonuses, and crypto-friendly features. The casino excels in support, security, and game variety—making it a top pick for both new and loyal players.",
  facts: {
    founded: "2008",
    license: "Costa Rica",
    cryptoAccepted: "BTC"
  }
};

export default function WildVegasPage() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 bg-[#0a0f40] text-white">
      {/* Hero Section */}
      <section id="hero" className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Wild Vegas Review</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <img src="/screenshots/wildvegas1.jpg" alt="Screenshot 1" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
          <img src="/screenshots/wildvegas2.jpg" alt="Screenshot 2" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
          <img src="/screenshots/wildvegas3.jpg" alt="Screenshot 3" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
          <img src="/screenshots/wildvegas4.jpg" alt="Screenshot 4" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        </div>
        <div className="text-center text-sm text-[#1a2c8b] mt-2">
          Screenshots are indicative and show what a typical Wild Vegas experience looks like.
        </div>
      </section>

      {/* Title Bar */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 border-2 border-pink-500 shadow-[0_0_20px_#ff00ff] rounded-xl px-6 py-4 mb-8 grid grid-cols-1 sm:grid-cols-3 items-center">
        {/* Logo left */}
        <div className="flex justify-start items-center mb-4 sm:mb-0">
          <img src="/logos/wildvegas.png" alt="Wild Vegas logo" className="w-16 h-auto mr-4" />
        </div>
        {/* Title centered */}
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-bold text-white text-center">WILD VEGAS REVIEW</h2>
          <img src="/mascot.png" alt="Mascot" className="w-16 h-16 ml-4 animate-pulse" />
        </div>
        {/* Button right */}
        <div className="flex justify-end items-center mt-4 sm:mt-0">
          <a
            href="https://www.wildvegaslinks.com/click/11/4315/15512/1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#ff0] whitespace-nowrap"
          >
            Play at Wild Vegas
          </a>
        </div>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <section id="introduction" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Crown.svg" alt="Crown icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Introduction</h3>
          <p className="text-white">{data.introduction}</p>
        </section>
        <section id="bonuses" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Bonus.svg" alt="Bonus icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Bonuses & Promotions</h3>
          <p className="text-white">{data.bonuses}</p>
        </section>
        <section id="games" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Poker.svg" alt="Poker icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Games & Providers</h3>
          <p className="text-white">{data.games}</p>
        </section>
        <section id="support" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Support.svg" alt="Support icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Customer Support</h3>
          <p className="text-white">{data.support}</p>
        </section>
        <section id="mobile" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Smartphone.svg" alt="Smartphone icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Mobile Experience</h3>
          <p className="text-white">{data.mobile}</p>
        </section>
        <section id="security" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Shield.svg" alt="Shield icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Security & Licensing</h3>
          <p className="text-white">{data.security}</p>
        </section>
        <section id="payments" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Credit.svg" alt="Credit icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Crypto Supported</h3>
          <p>
            Wild Vegas accepts Bitcoin for fast, secure deposits and withdrawals. Major credit cards are also supported for convenience. All crypto transactions are processed quickly, with no hidden fees or delays.
          </p>
          <div className="flex gap-4 items-center mt-4 flex-wrap">
            <img src="/icons/btc.svg" alt="Bitcoin" className="w-8 h-8" title="Bitcoin (BTC)" />
          </div>
          <p className="mt-4">
            Crypto payments enable instant access to your winnings and ensure privacy. Traditional payment options are also available for flexibility.
          </p>
        </section>
        <section id="verdict" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Trophy.svg" alt="Trophy icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Final Verdict</h3>
          <p className="text-white">{data.verdict}</p>
        </section>
      </div>

      {/* At a Glance */}
      <section id="at-a-glance" className="mb-8">
        <h2 className="text-2xl font-bold mb-3 text-white">At a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-500 rounded-xl p-6 text-white shadow-lg shadow-yellow-500/10">
            <span className="block text-yellow-400 text-lg font-semibold mb-2">Founded</span>
            <span className="text-white">{data.facts.founded}</span>
          </div>
          <div className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-500 rounded-xl p-6 text-white shadow-lg shadow-yellow-500/10">
            <span className="block text-yellow-400 text-lg font-semibold mb-2">License</span>
            <span className="text-white">{data.facts.license}</span>
          </div>
          <div className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-500 rounded-xl p-6 text-white shadow-lg shadow-yellow-500/10">
            <span className="block text-yellow-400 text-lg font-semibold mb-2">Crypto Accepted</span>
            <span className="text-white">{data.facts.cryptoAccepted}</span>
          </div>
        </div>
      </section>

      {/* CTA with mascot */}
      <section id="cta" className="mt-10 text-center flex flex-col items-center justify-center gap-4">
        <img src="/mascot.png" alt="Mascot" className="w-12 h-12 mb-2" />
        <h2 className="text-xl font-bold text-yellow-400">READY TO GET STARTED?</h2>
        <a
          href="https://www.wildvegaslinks.com/click/11/4315/15512/1"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#ff0]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play at Wild Vegas
        </a>
      </section>
    </div>
  );
}
