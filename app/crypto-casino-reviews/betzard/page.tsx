import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Betzard Casino Review 2025 | Modern Crypto Casino & Sportsbook",
    description: "Read our Betzard review: modern casino & sportsbook, big bonuses, 1000+ games, fast crypto payouts. Trusted since 2020.",
    alternates: {
      canonical: "https://crypto-online-casino.com/crypto-casino-reviews/betzard",
    },
    openGraph: {
      title: "Betzard Casino Review 2025 | Modern Crypto Casino & Sportsbook",
      description: "Read our Betzard review: modern casino & sportsbook, big bonuses, 1000+ games, fast crypto payouts. Trusted since 2020.",
      url: "https://crypto-online-casino.com/crypto-casino-reviews/betzard",
      type: "website",
      images: [
        {
          url: "https://crypto-online-casino.com/og/betzard.png",
          width: 1200,
          height: 630,
          alt: "Betzard Casino OG Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Betzard Casino Review 2025 | Modern Crypto Casino & Sportsbook",
      description: "Read our Betzard review: modern casino & sportsbook, big bonuses, 1000+ games, fast crypto payouts. Trusted since 2020.",
      images: ["https://crypto-online-casino.com/og/betzard.png"],
    },
  };
};

import React from "react";

const data = {
  introduction: `Betzard Casino is a rising star in the online gaming world, offering a vibrant platform with a focus on both casino games and sports betting. Known for its modern interface and wide array of payment options, Betzard caters to players seeking variety and convenience. The casino is fully licensed and places a strong emphasis on player safety and fair play.`,
  bonuses: `New players at Betzard are welcomed with an attractive bonus package, often including a matched deposit bonus and free spins. Ongoing promotions, tournaments, and a rewarding VIP program ensure there’s always something extra for regular players.`,
  games: `Betzard boasts a rich selection of slots, live casino, table games, and virtual sports from top providers like NetEnt, Evolution, and Pragmatic Play. The intuitive lobby and advanced search features make it easy to explore thousands of titles.`,
  support: `Customer support is available 24/7 via live chat and email. The Betzard support team is known for its friendly and effective service, helping players with any questions or issues. A detailed FAQ section is also available for quick answers.`,
  mobile: `Betzard’s mobile site is fully responsive, allowing players to enjoy all features and games on smartphones and tablets without needing to download an app. The mobile experience is smooth, secure, and feature-complete.`,
  security: `Betzard operates under a reputable gaming license and uses advanced SSL encryption to protect player data. The site promotes responsible gambling and is regularly audited for fairness and transparency.`,
  payments: `Betzard supports a wide range of payment methods, including major credit cards, e-wallets, and popular cryptocurrencies. Deposits and withdrawals are processed quickly and securely, with minimal fees and a strong focus on user convenience.`,
  verdict: `With its modern platform, generous bonuses, and extensive game library, Betzard is a top choice for players looking for a fresh and reliable online casino experience. The combination of security, variety, and user-friendly design makes it stand out in a crowded market.`,
  facts: {
    founded: "2020",
    license: "Curacao eGaming",
    cryptoAccepted: "BTC, ETH, LTC, USDT",
  },
};

export default function BetzardPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Betzard"
    },
    author: {
      "@type": "Person",
      name: "Crypto Online Casino Team"
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.3",
      bestRating: "5"
    },
    publisher: {
      "@type": "Organization",
      name: "Crypto Online Casino",
      url: "https://crypto-online-casino.com/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/crypto-casino-online.webp')",
      }}
    >
      <div className="max-w-screen-xl mx-auto py-10 px-4 bg-black bg-opacity-70 rounded-2xl">
    {/* First Impressions */}
    <section id="first-impressions" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">First Impressions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <img src="/screenshots/betzard1.jpg" alt="Screenshot 1" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <img src="/screenshots/betzard2.jpg" alt="Screenshot 2" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <img src="/screenshots/betzard3.jpg" alt="Screenshot 3" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <img src="/screenshots/betzard4.jpg" alt="Screenshot 4" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
      </div>
      <div className="text-center text-sm text-gray-300 mt-2">
        Screenshots are indicative and show what a typical Betzard Casino experience looks like.
      </div>
    </section>

    {/* Title Bar */}
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 border-2 border-pink-500 shadow-[0_0_20px_#ff00ff] rounded-xl px-6 py-4 mb-8 grid grid-cols-1 sm:grid-cols-3 items-center">
      {/* Logo left */}
      <div className="flex justify-start items-center mb-4 sm:mb-0">
        <img src="/logos/betzard.png" alt="Betzard logo" className="w-16 h-auto mr-4" />
      </div>
      {/* Title centered */}
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold text-white text-center">BETZARD CASINO REVIEW</h2>
        <img src="/mascot.png" alt="Mascot" className="w-16 h-16 ml-4 animate-pulse" />
      </div>
      {/* Button right */}
      <div className="flex justify-end items-center mt-4 sm:mt-0">
        <a
          href="https://betzard.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#ff0] whitespace-nowrap"
        >
          Play at Betzard
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
      <section id="bonuses" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <img src="/casino-icons/Bonus.svg" alt="Bonus icon" className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Bonuses & Promotions</h3>
        <p className="text-white">{data.bonuses}</p>
      </section>
      <section id="games" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <img src="/casino-icons/Poker.svg" alt="Poker icon" className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Games & Providers</h3>
        <p className="text-white">{data.games}</p>
      </section>
      <section id="support" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <img src="/casino-icons/Support.svg" alt="Support icon" className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Customer Support</h3>
        <p className="text-white">{data.support}</p>
      </section>
      <section id="mobile" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <img src="/casino-icons/Smartphone.svg" alt="Smartphone icon" className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Mobile Experience</h3>
        <p className="text-white">{data.mobile}</p>
      </section>
      <section id="security" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <img src="/casino-icons/Shield.svg" alt="Shield icon" className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Security & Licensing</h3>
        <p className="text-white">{data.security}</p>
      </section>
      <section className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <img src="/casino-icons/Credit.svg" alt="Credit icon" className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Crypto Supported</h3>
        <p>
          Betzard supports a variety of cryptocurrencies and digital payment methods for convenient and secure transactions. Supported coins include:
        </p>
        <div className="flex gap-4 items-center mt-4 flex-wrap">
          <img src="/icons/btc.svg" alt="Bitcoin" className="w-8 h-8" title="Bitcoin (BTC)" />
          <img src="/icons/eth.svg" alt="Ethereum" className="w-8 h-8" title="Ethereum (ETH)" />
          <img src="/icons/ltc.svg" alt="Litecoin" className="w-8 h-8" title="Litecoin (LTC)" />
          <img src="/icons/usdt.svg" alt="Tether" className="w-8 h-8" title="Tether (USDT)" />
        </div>
        <p className="mt-4">
          These options enable fast deposits and withdrawals with low fees. Traditional payment methods are also available for convenience.
        </p>
      </section>
      <section id="verdict" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
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
      <p className="text-white">Sign up now and claim your Betzard Casino bonus!</p>
      <a
        href="https://betzard.com/"
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play at Betzard
      </a>
    </section>
      </div>
    </div>
    </>
  );
}
