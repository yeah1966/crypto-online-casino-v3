import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Loki Casino Review 2025 | Norse Crypto Casino & Fast Payouts",
    description: "Read our Loki Casino review: bonuses, 100s of games, fast crypto payouts, and Norse mythology theme. Trusted, mobile-friendly & secure.",
    alternates: {
      canonical: "https://crypto-online-casino.com/crypto-casino-reviews/lokicasino",
    },
    openGraph: {
      title: "Loki Casino Review 2025 | Norse Crypto Casino & Fast Payouts",
      description: "Read our Loki Casino review: bonuses, 100s of games, fast crypto payouts, and Norse mythology theme. Trusted, mobile-friendly & secure.",
      url: "https://crypto-online-casino.com/crypto-casino-reviews/lokicasino",
      type: "website",
      images: [
        {
          url: "https://crypto-online-casino.com/og/lokicasino.png",
          width: 1200,
          height: 630,
          alt: "Loki Casino OG Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Loki Casino Review 2025 | Norse Crypto Casino & Fast Payouts",
      description: "Read our Loki Casino review: bonuses, 100s of games, fast crypto payouts, and Norse mythology theme. Trusted, mobile-friendly & secure.",
      images: ["https://crypto-online-casino.com/og/lokicasino.png"],
    },
  };
};

import React from "react";
import Image from "next/image";

const data = {
  introduction: `Loki Casino is a modern, crypto-friendly online casino known for its playful Norse theme and wide selection of slots and table games. Since its launch, Loki has built a reputation for fast payouts, strong bonuses, and a user-friendly platform.`,
  bonuses: `New players at Loki Casino are welcomed with a generous deposit match and free spins. The casino regularly features reload bonuses, tournaments, and a VIP program with exclusive perks for loyal players.`,
  games: `Loki Casino offers hundreds of slots, live dealer games, and table classics from top providers like NetEnt, Microgaming, and Evolution. The site is easy to navigate, making it simple to find your favorite games or try something new.`,
  support: `Customer support is available 24/7 via live chat and email. The Loki team is responsive and knowledgeable, ensuring players get help whenever they need it.`,
  mobile: `Loki Casino is fully optimized for mobile, allowing players to enjoy all games and features on smartphones and tablets, with no app download required.`,
  security: `Loki Casino operates under a reputable Curacao license and uses SSL encryption to protect player data. The platform is committed to responsible gambling and fair play.`,
  payments: `Loki Casino specializes in fast and secure crypto payments, supporting Bitcoin, Ethereum, Litecoin, and more. Deposits and withdrawals are processed quickly, with no extra fees.`,
  verdict: `With its fun Norse theme, strong game selection, and reliable crypto payments, Loki Casino is a great choice for players looking for a trustworthy and entertaining online casino experience.`,
  facts: {
    founded: "2016",
    license: "Curacao",
    cryptoAccepted: "BTC, ETH, LTC, BCH, DOGE, USDT",
  },
};

export default function LokiCasinoPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Loki Casino"
    },
    author: {
      "@type": "Person",
      name: "Crypto Online Casino Team"
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.2",
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
        <Image src="/screenshots/lokicasino1.jpg" alt="Screenshot 1" width={640} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/lokicasino2.jpg" alt="Screenshot 2" width={640} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/lokicasino3.jpg" alt="Screenshot 3" width={640} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/lokicasino4.jpg" alt="Screenshot 4" width={640} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
      </div>
      <div className="text-center text-sm text-gray-300 mt-2">
        Screenshots are indicative and show what a typical Loki Casino experience looks like.
      </div>
    </section>

    {/* Title Bar */}
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 border-2 border-pink-500 shadow-[0_0_20px_#ff00ff] rounded-xl px-6 py-4 mb-8 grid grid-cols-1 sm:grid-cols-3 items-center">
      {/* Logo left */}
      <div className="flex justify-start items-center mb-4 sm:mb-0">
        <Image src="/logos/lokicasino.png" alt="Loki Casino logo" width={64} height={64} className="w-16 h-auto mr-4" />
      </div>
      {/* Title centered */}
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold text-white text-center">LOKI CASINO REVIEW</h2>
        <Image src="/mascot.png" alt="Mascot" width={64} height={64} className="w-16 h-16 ml-4 animate-pulse" />
      </div>
      {/* Button right */}
      <div className="flex justify-end items-center mt-4 sm:mt-0">
        <a
          href="https://lokicasinolink.com/hd8471080"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#ff0] whitespace-nowrap"
        >
          Play at Loki Casino
        </a>
      </div>
    </div>

    {/* Info grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <section id="introduction" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Crown.svg" alt="Crown icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Introduction</h3>
        <p className="text-white">{data.introduction}</p>
      </section>
      <section id="bonuses" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Bonus.svg" alt="Bonus icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Bonuses & Promotions</h3>
        <p className="text-white">{data.bonuses}</p>
      </section>
      <section id="games" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Poker.svg" alt="Poker icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Games & Providers</h3>
        <p className="text-white">{data.games}</p>
      </section>
      <section id="support" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
        <Image src="/casino-icons/Support.svg" alt="Support icon" width={56} height={56} className="w-14 h-14 mb-2" />
        <h3 className="text-yellow-400 text-lg font-semibold mb-2">Customer Support</h3>
        <p className="text-white">{data.support}</p>
      </section>
      <section id="mobile" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
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
          Loki Casino supports a variety of cryptocurrencies and digital payment methods for convenient and secure transactions. Supported coins include:
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
      <a
        href="https://lokicasinolink.com/hd8471080"
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play at Loki Casino
      </a>
    </section>
    </div>
  </div>
</>
);
}

