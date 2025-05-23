import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "1xBet Casino Review 2025 | International Crypto Casino & Sportsbook",
    description: "Read our 1xBet review: 5000+ games, huge sportsbook, fast crypto payouts, top bonuses. Trusted since 2007.",
    alternates: {
      canonical: "https://crypto-online-casino.com/crypto-casino-reviews/1xbet",
    },
    openGraph: {
      title: "1xBet Casino Review 2025 | International Crypto Casino & Sportsbook",
      description: "Read our 1xBet review: 5000+ games, huge sportsbook, fast crypto payouts, top bonuses. Trusted since 2007.",
      url: "https://crypto-online-casino.com/crypto-casino-reviews/1xbet",
      type: "website",
      images: [
        {
          url: "/og/7bit.png", // Correcte bestandsnaam en pad
          width: 1200,
          height: 630,
          alt: "1xBet Casino OG Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "1xBet Casino Review 2025 | International Crypto Casino & Sportsbook",
      description: "Read our 1xBet review: 5000+ games, huge sportsbook, fast crypto payouts, top bonuses. Trusted since 2007.",
      images: ["/og/7bit.png"], // Correcte bestandsnaam en pad
    },
  };
};

import React from "react";
import Image from "next/image";

// --- PAS DEZE DATA AAN VOOR 1XBET ---
const data = {
  introduction: `1xBet is a globally recognized online betting platform founded in 2007. With one of the largest sportsbooks and casino libraries, the platform serves millions of players worldwide. Thanks to its strong focus on crypto, fast payouts, and international support, 1xBet is one of the most innovative operators in the market.`,
  bonuses: `New players receive a 100% welcome bonus up to €100 plus 30 free spins. There are also daily promotions such as Accumulator of the Day, cashback, birthday bonuses, and a VIP loyalty program with exclusive rewards and fast payouts.`,
  games: `The game selection includes over 5,000 titles: slots, live casino, table games, and virtual sports from top providers like NetEnt, Play’n GO, Pragmatic Play, and Evolution. Seamlessly switch between sportsbook and casino via an intuitive interface.`,
  support: `1xBet offers 24/7 customer service via live chat, email, and phone. The helpdesk is multilingual and typically responds within minutes. The extensive help center and FAQ provide quick answers to common questions.`,
  mobile: `The 1xBet app is available for Android and iOS, providing full access to deposits, games, and withdrawals. The mobile site is also optimized so you can play and bet anytime, anywhere.`,
  security: `1xBet operates under a Curaçao eGaming license and uses advanced SSL encryption for maximum security. Responsible gaming tools and strict verification policies protect players worldwide.`,
  payments: `1xBet supports a wide range of payment methods, including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Tether (USDT), and TRON (TRX). Traditional payment options and e-wallets are also available. Crypto transactions are fast, secure, and often processed within minutes.`,
  verdict: `If you’re looking for an all-in-one platform with a massive game selection, crypto support, and sharp bonuses, 1xBet is one of the best choices in the international gambling world. Both sports bettors and casino players benefit from modern features and fast payouts.`,
  facts: {
    founded: "2007",
    license: "Curaçao eGaming",
    cryptoAccepted: "BTC, ETH, LTC, USDT, TRX",
  },
};

export default function OneXBetPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "1xBet"
    },
    author: {
      "@type": "Person",
      name: "Crypto Online Casino Team"
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.1",
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
        <Image src="/screenshots/1xbet1.jpg" alt="Screenshot 1" width={800} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/1xbet2.jpg" alt="Screenshot 2" width={800} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/1xbet3.jpg" alt="Screenshot 3" width={800} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <Image src="/screenshots/1xbet4.jpg" alt="Screenshot 4" width={800} height={160} className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
      </div>
      <div className="text-center text-sm text-gray-300 mt-2">
        Screenshots are indicative and show what a typical 1xBet experience looks like.
      </div>
    </section>

    {/* Titelbalk */}
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 border-2 border-pink-500 shadow-[0_0_20px_#ff00ff] rounded-xl px-6 py-4 mb-8 grid grid-cols-1 sm:grid-cols-3 items-center">
      {/* Logo links */}
      <div className="flex justify-start items-center mb-4 sm:mb-0">
        <Image src="/logos/1xbet.png" alt="1xBet logo" width={64} height={64} className="w-16 h-auto mr-4" />
      </div>
      {/* Titel gecentreerd */}
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold text-white text-center">1XBET CASINO REVIEW</h2>
        <Image src="/mascot.png" alt="Mascot" width={64} height={64} className="w-16 h-16 ml-4 animate-pulse" />
      </div>
      {/* Button rechts */}
      <div className="flex justify-end items-center mt-4 sm:mt-0">
        <a
          href="https://refpa3740576.top/L?tag=d_3915280m_1599c_&site=3915280&ad=1599"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#ff0] whitespace-nowrap"
        >
          Play at 1xBet
        </a>
      </div>
    </div>

    {/* Info grid met reviewblokken */}
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
          1xBet accepts a variety of cryptocurrencies and digital payment methods for convenient and secure transactions. Supported coins include:
        </p>
        <div className="flex gap-4 items-center mt-4 flex-wrap">
          <Image src="/icons/btc.svg" alt="Bitcoin" width={32} height={32} className="w-8 h-8" title="Bitcoin (BTC)" />
          <Image src="/icons/eth.svg" alt="Ethereum" width={32} height={32} className="w-8 h-8" title="Ethereum (ETH)" />
          <Image src="/icons/ltc.svg" alt="Litecoin" width={32} height={32} className="w-8 h-8" title="Litecoin (LTC)" />
          <Image src="/icons/usdt.svg" alt="Tether" width={32} height={32} className="w-8 h-8" title="Tether (USDT)" />
          <Image src="/icons/trx.svg" alt="TRON" width={32} height={32} className="w-8 h-8" title="TRON (TRX)" />
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

    {/* CTA met mascotte */}
    <section id="cta" className="mt-10 text-center flex flex-col items-center justify-center gap-4">
      <Image src="/mascot.png" alt="Mascot" width={48} height={48} className="w-12 h-12 mb-2" />
      <h2 className="text-xl font-bold text-yellow-400">READY TO GET STARTED?</h2>
      <p className="text-white">Sign up now and claim your 1xBet bonus!</p>
      <a
        href="https://refpa3740576.top/L?tag=d_3915280m_1599c_&site=3915280&ad=1599"
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play at 1xBet
      </a>
      
    </section>
      </div>
    </div>
    </>
  );
}
