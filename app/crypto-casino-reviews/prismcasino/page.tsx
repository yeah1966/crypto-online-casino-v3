import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Prism Casino Review 2025 | Big Bonuses & Fast Crypto Payouts",
    description: "Read our Prism Casino review: discover up to $3,000 welcome bonuses, fast Bitcoin payouts, no KYC, and RTG-powered slot games. Crypto-friendly and trusted.",
    alternates: {
      canonical: "https://crypto-online-casino.com/crypto-casino-reviews/prismcasino",
    },
    openGraph: {
      title: "Prism Casino Review 2025 | Big Bonuses & Fast Crypto Payouts",
      description: "Discover Prism Casino: generous crypto bonuses, RTG slots, and no KYC withdrawals. Up to $3,000 bonus!",
      url: "https://crypto-online-casino.com/crypto-casino-reviews/prismcasino",
      type: "website",
      images: [
        {
          url: "https://crypto-online-casino.com/og/prismcasino.png",
          width: 1200,
          height: 630,
          alt: "Prism Casino OG Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Prism Casino Review 2025 | Big Bonuses & Fast Crypto Payouts",
      description: "Discover Prism Casino: generous crypto bonuses, RTG slots, and no KYC withdrawals. Up to $3,000 bonus!",
      images: ["https://crypto-online-casino.com/og/prismcasino.png"],
    },
  };
};

import React from "react";
import Head from "next/head";
import Image from "next/image";


const data = {
  introduction: `PrismCasino is a vibrant and modern crypto casino, welcoming players with a sleek interface and a vast selection of games. Known for its generous bonuses and fast crypto payments, PrismCasino stands out as a top choice for both new and experienced players.`,
  bonuses: `New players at PrismCasino are treated to a massive welcome bonus and free spins. Ongoing reloads, cashback offers, and a rewarding VIP program ensure there’s always something extra for loyal players.`,
  games: `Enjoy thousands of slots, live dealer tables, and provably fair crypto games from the industry’s leading providers. The intuitive game lobby makes it easy to find your favorites or discover new hits.`,
  support: `PrismCasino provides 24/7 live chat and email support. The friendly and professional team is always ready to help, and the FAQ section covers most common questions for instant answers.`,
  mobile: `The site is fully optimized for all smartphones and tablets, offering seamless gameplay without the need for an app. Simply visit in your mobile browser and enjoy the full experience.`,
  security: `PrismCasino utilizes advanced SSL encryption and operates under a Curacao license, ensuring your data and funds are always protected. Provably fair games add transparency and trust.`,
  payments: `PrismCasino specializes in fast, secure crypto payments, supporting Bitcoin, Ethereum, Litecoin, Bitcoin Cash, Dogecoin, and Tether. Deposits and withdrawals are processed quickly and without extra fees.`,
  verdict: `With its exciting bonuses, huge game selection, and crypto-friendly approach, PrismCasino is a fantastic destination for anyone seeking a fun, secure, and rewarding online casino experience.`,
  facts: {
    founded: "2022",
    license: "Curacao",
    cryptoAccepted: "BTC, ETH, LTC, BCH, DOGE, USDT",
  },
};

export default function PrismCasinoPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/crypto-casino-online.webp')",
      }}
    >
      <div className="max-w-screen-xl mx-auto py-10 px-4 bg-black bg-opacity-70 rounded-2xl">
        <Head>
          <title>PrismCasino Review 2025 | Crypto Bonuses, Games & Fast Payouts</title>
        <meta name="description" content="Read our in-depth PrismCasino review for 2025: discover all bonuses, crypto payment options, game selection and why PrismCasino is a top choice for crypto gamblers." />
        <link rel="canonical" href="https://crypto-online-casino.com/crypto-casino-reviews/prismcasino" />
        <meta property="og:title" content="PrismCasino Review 2025 | Crypto Bonuses, Games & Fast Payouts" />
        <meta property="og:description" content="All about PrismCasino: welcome bonuses, crypto payments, huge slots & live games, and fast cashouts. Read our full PrismCasino review!" />
        <meta property="og:image" content="https://crypto-online-casino.com/og/prismcasino.png" />
        <meta property="og:url" content="https://crypto-online-casino.com/crypto-casino-reviews/prismcasino" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PrismCasino Review 2025 | Crypto Bonuses, Games & Fast Payouts" />
        <meta name="twitter:description" content="All about PrismCasino: welcome bonuses, crypto payments, huge slots & live games, and fast cashouts. Read our full PrismCasino review!" />
        <meta name="twitter:image" content="https://crypto-online-casino.com/og/prismcasino.png" />
      </Head>


    {/* Hero Section */}
    <section id="hero" className="mb-8">
      <h1 className="text-4xl font-bold mb-4">PrismCasino Review</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Image src="/screenshots/prismcasino1.jpg" alt="Screenshot 1" width={640} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/prismcasino2.jpg" alt="Screenshot 2" width={640} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/prismcasino3.jpg" alt="Screenshot 3" width={640} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/prismcasino4.jpg" alt="Screenshot 4" width={640} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
      </div>
      <div className="text-center text-sm text-[#1a2c8b] mt-2">
        Screenshots are indicative and show what a typical PrismCasino experience looks like.
      </div>
    </section>

    {/* Title Bar */}
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 border-2 border-pink-500 shadow-[0_0_20px_#ff00ff] rounded-xl px-6 py-4 mb-8 grid grid-cols-1 sm:grid-cols-3 items-center">
      {/* Logo left */}
      <div className="flex justify-start items-center mb-4 sm:mb-0">
        <Image src="/logos/prismcasino.png" alt="PrismCasino logo" width={64} height={64} className="w-16 h-auto mr-4" />
      </div>
      {/* Title centered */}
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold text-white text-center">PRISMCASINO REVIEW</h2>
        <Image src="/mascot.png" alt="Mascot" width={64} height={64} className="w-16 h-16 ml-4 animate-pulse" />
      </div>
      {/* Button right */}
      <div className="flex justify-end items-center mt-4 sm:mt-0">
        <a
          href="https://www.prismlinks.com/click/6/4305/15512/1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#ff0]"
        >
          Play at PrismCasino
        </a>
      </div>
    </div>

    {/* Info grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <section id="introduction" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Crown.svg" alt="Crown icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Introduction</h3>
        <p className="text-white">{data.introduction}</p>
      </section>
      <section id="bonuses" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Bonus.svg" alt="Bonus icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Bonuses & Promotions</h3>
        <p className="text-white">{data.bonuses}</p>
      </section>
      <section id="games" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Poker.svg" alt="Poker icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Games & Providers</h3>
        <p className="text-white">{data.games}</p>
      </section>
      <section id="support" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Support.svg" alt="Support icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Customer Support</h3>
        <p className="text-white">{data.support}</p>
      </section>
      <section id="mobile" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Smartphone.svg" alt="Smartphone icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Mobile Experience</h3>
        <p className="text-white">{data.mobile}</p>
      </section>
      <section id="security" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Shield.svg" alt="Shield icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Security & Licensing</h3>
        <p className="text-white">{data.security}</p>
      </section>
      <section className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Credit.svg" alt="Credit icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Crypto Supported</h3>
        <p>
          PrismCasino supports a variety of cryptocurrencies and digital payment methods for convenient and secure transactions. Supported coins include:
        </p>
        <div className="flex gap-4 items-center mt-4 flex-wrap">
          <Image src="/icons/btc.svg" alt="Bitcoin" width={32} height={32} title="Bitcoin (BTC)" className="w-8 h-8" />
          <Image src="/icons/eth.svg" alt="Ethereum" width={32} height={32} title="Ethereum (ETH)" className="w-8 h-8" />
          <Image src="/icons/ltc.svg" alt="Litecoin" width={32} height={32} title="Litecoin (LTC)" className="w-8 h-8" />
          <Image src="/icons/bch.svg" alt="Bitcoin Cash" width={32} height={32} title="Bitcoin Cash (BCH)" className="w-8 h-8" />
          <Image src="/icons/doge.svg" alt="Dogecoin" width={32} height={32} title="Dogecoin (DOGE)" className="w-8 h-8" />
          <Image src="/icons/usdt.svg" alt="Tether" width={32} height={32} title="Tether (USDT)" className="w-8 h-8" />
        </div>
        <p className="mt-4">
          These options enable fast deposits and withdrawals with low fees. No traditional banking required.
        </p>
      </section>
      <section id="verdict" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Trophy.svg" alt="Trophy icon" width={56} height={56} className="w-14 h-14 mb-2" />
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
      <Image src="/mascot.png" alt="Mascot" width={48} height={48} className="w-12 h-12 mb-2" />
      <h2 className="text-xl font-bold text-yellow-400">READY TO GET STARTED?</h2>
      <p className="text-white">Sign up now and claim your PrismCasino bonus!</p>
      <a
        href="https://www.prismlinks.com/click/6/4305/15512/1"
        className="bg-gradient-to-r from-[#7f1bff] to-[#e71bff] text-yellow-400 font-semibold py-2 px-6 rounded-xl shadow-lg border-2 border-pink-500 hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play at PrismCasino
      </a>
    </section>
      </div>
    </div>
  );
}