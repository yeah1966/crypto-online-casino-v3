import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "BitStarz Casino Review 2025 | Award-Winning Crypto Casino",
    description: "Read our BitStarz review: 4000+ games, lightning-fast crypto payouts, huge bonuses, and award-winning support. Trusted since 2014.",
    alternates: {
      canonical: "https://crypto-online-casino.com/crypto-casino-reviews/bitstarz",
    },
    openGraph: {
      title: "BitStarz Casino Review 2025 | Award-Winning Crypto Casino",
      description: "Read our BitStarz review: 4000+ games, lightning-fast crypto payouts, huge bonuses, and award-winning support. Trusted since 2014.",
      url: "https://crypto-online-casino.com/crypto-casino-reviews/bitstarz",
      type: "website",
      images: [
        {
          url: "/og/bitstarz.png",
          width: 1200,
          height: 630,
          alt: "BitStarz Casino OG Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "BitStarz Casino Review 2025 | Award-Winning Crypto Casino",
      description: "Read our BitStarz review: 4000+ games, lightning-fast crypto payouts, huge bonuses, and award-winning support. Trusted since 2014.",
      images: ["/og/bitstarz.png"],
    },
  };
};

import React from "react";
import Image from "next/image";

const data = {
  introduction: `BitStarz is one of the most acclaimed crypto casinos worldwide, established in 2014 and renowned for its fast payouts, huge game selection, and player-first approach. Licensed and trusted, BitStarz has won multiple industry awards and is a favorite among both crypto and fiat casino fans.`,
  bonuses: `New players at BitStarz can claim a generous welcome package: up to 5 BTC or €500 plus 180 free spins over the first four deposits. There are frequent promotions, slot races, table battles, and a rewarding VIP program for loyal players.`,
  games: `BitStarz offers over 4,000 games from top providers including NetEnt, Evolution, BGaming, Pragmatic Play, and more. The selection covers slots, live casino, jackpots, table games, and provably fair crypto games. Navigation is easy with advanced filters and search.`,
  support: `BitStarz provides 24/7 live chat and email support with a reputation for quick, friendly, and knowledgeable service. The help center offers answers to common questions, and the support team is always ready to assist with any issue.`,
  mobile: `The BitStarz website is fully mobile-optimized, delivering a seamless experience on iOS and Android devices. All features, including deposits, gameplay, and withdrawals, are accessible on mobile without the need for an app.`,
  security: `BitStarz operates under a Curacao eGaming license and uses advanced SSL encryption to keep player data safe. The casino promotes responsible gambling and is regularly audited for fairness and transparency.`,
  payments: `BitStarz is a pioneer in crypto gambling, supporting Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Dogecoin (DOGE), and Tether (USDT). Fiat options such as credit cards and e-wallets are also available. Payments are processed quickly and securely.`,
  verdict: `With its stellar reputation, vast game library, and lightning-fast payouts, BitStarz is a top-tier choice for anyone seeking a premium crypto casino experience. The platform’s focus on player satisfaction and innovation sets it apart from the competition.`,
  facts: {
    founded: "2014",
    license: "Curacao eGaming",
    cryptoAccepted: "BTC, ETH, LTC, DOGE, USDT",
  },
};

export default function BitStarzPage() {
  // Dynamische review structured data
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "BitStarz Casino"
    },
    author: {
      "@type": "Person",
      name: "Crypto Online Casino Team"
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.5",
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
      {/* Review structured data for rich results */}
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
        <Image src="/screenshots/bitstarz1.jpg" alt="Screenshot 1" width={800} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/bitstarz2.jpg" alt="Screenshot 2" width={800} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/bitstarz3.jpg" alt="Screenshot 3" width={800} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/bitstarz4.jpg" alt="Screenshot 4" width={800} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
      </div>
      <div className="text-center text-sm text-gray-300 mt-2">
        Screenshots are indicative and show what a typical BitStarz Casino experience looks like.
      </div>
    </section>

    {/* Title Bar */}
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 border-2 border-pink-500 shadow-[0_0_20px_#ff00ff] rounded-xl px-6 py-4 mb-8 grid grid-cols-1 sm:grid-cols-3 items-center">
      {/* Logo left */}
      <div className="flex justify-start items-center mb-4 sm:mb-0">
        <Image src="/logos/bitstarz.png" alt="BitStarz logo" width={64} height={64} className="w-16 h-auto mr-4" />
      </div>
      {/* Title centered */}
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold text-white text-center">BITSTARZ CASINO REVIEW</h2>
        <Image src="/mascot.png" alt="Mascot" width={64} height={64} className="w-16 h-16 ml-4 animate-pulse" />
      </div>
      {/* Button right */}
      <div className="flex justify-end items-center mt-4 sm:mt-0">
        <a
          href="https://b1t5t4rz.com/b2b7d0ed7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#ff0] whitespace-nowrap"
        >
          Play at BitStarz
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
          BitStarz supports a variety of cryptocurrencies and digital payment methods for convenient and secure transactions. Supported coins include:
        </p>
        <div className="flex gap-4 items-center mt-4 flex-wrap">
          <Image src="/icons/btc.svg" alt="Bitcoin" width={32} height={32} className="w-8 h-8" title="Bitcoin (BTC)" />
          <Image src="/icons/eth.svg" alt="Ethereum" width={32} height={32} className="w-8 h-8" title="Ethereum (ETH)" />
          <Image src="/icons/ltc.svg" alt="Litecoin" width={32} height={32} className="w-8 h-8" title="Litecoin (LTC)" />
          <Image src="/icons/doge.svg" alt="Dogecoin" width={32} height={32} className="w-8 h-8" title="Dogecoin (DOGE)" />
          <Image src="/icons/usdt.svg" alt="Tether" width={32} height={32} className="w-8 h-8" title="Tether (USDT)" />
        </div>
        <p className="mt-4">
          These options enable fast deposits and withdrawals with low fees. Fiat alternatives like credit cards and e-wallets are also available.
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
        href="https://b1t5t4rz.com/b2b7d0ed7"
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play at BitStarz
      </a>
    </section>
      </div>
    </div>
    </>
  );
}
