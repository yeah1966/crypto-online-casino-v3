import type { Metadata } from "next";
import React from "react";
import Image from "next/image";

export const generateMetadata = (): Metadata => {
  return {
    title: "Wild Vegas Casino Review 2025 | Classic RTG Slots & Crypto Bonuses",
    description: "Read our Slots of Vegas review: 250% bonus, classic RTG slots, fast Bitcoin payouts, and 20+ years of trusted Vegas action.",
    alternates: {
      canonical: "https://crypto-online-casino.com/crypto-casino-reviews/wildvegas",
    },
    openGraph: {
      title: "Wild Vegas Casino Review 2025 | Classic RTG Slots & Crypto Bonuses",
      description: "Read our Slots of Vegas review: 250% bonus, classic RTG slots, fast Bitcoin payouts, and 20+ years of trusted Vegas action.",
      url: "https://crypto-online-casino.com/crypto-casino-reviews/wildvegas",
      type: "website",
      images: [
        {
          url: "/og/wildvegas.png",
          width: 1200,
          height: 630,
          alt: "Wild Vegas Casino OG Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Wild Vegas Casino Review 2025 | Classic RTG Slots & Crypto Bonuses",
      description: "Read our Slots of Vegas review: 250% bonus, classic RTG slots, fast Bitcoin payouts, and 20+ years of trusted Vegas action.",
      images: ["/og/wildvegas.png"],
    },
  };
};

const data = {
  introduction: `Wild Vegas is a vibrant online casino with a classic Las Vegas vibe. Since its launch in 2004, it has been known for its generous bonuses, fast payouts, and a unique atmosphere for fans of RTG slots.`,
  bonuses: `New players receive a 250% welcome bonus on their first deposit, plus free spins on popular slots. There are regular promotions such as cashback, reload bonuses, and exclusive tournaments. The loyalty program rewards regular players with extra benefits.`,
  games: `Wild Vegas runs entirely on RealTime Gaming (RTG) and offers more than 200 games, mainly classic and video slots. Popular titles include Achilles, Cash Bandits, and Bubble Bubble. Table games like blackjack and video poker are also available, but the main focus is on slots.`,
  support: `Customer support is available 24/7 via live chat and email. The help center provides quick answers to questions about deposits, withdrawals, and bonuses. Response times are usually within 2 minutes.`,
  mobile: `Wild Vegas works perfectly on mobile browsers without a separate app. The mobile site is fast, user-friendly, and offers access to all games and features on both iOS and Android.`,
  security: `The casino operates under a Costa Rica license and uses SSL encryption for all data. Although the regulation is not the strictest, Wild Vegas has built a stable reputation.`,
  payments: `Wild Vegas accepts both crypto and fiat. Supported methods are Bitcoin, Ethereum, credit cards, and bank transfer. Withdrawals are usually processed within 48 hours for verified accounts, with no hidden fees.`,
  verdict: `For players who enjoy simplicity, quick bonuses, and a vintage Vegas atmosphere, Wild Vegas is an excellent choice. The generous promotions and user-friendly mobile site make it attractive for both new and experienced gamblers.`,
  facts: {
    founded: "2004",
    license: "Costa Rica",
    cryptoAccepted: "BTC, ETH, LTC, USDT, Credit Cards",
  },
};

export default function WildVegasPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Wild Vegas"
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

      <div className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/crypto-casino-online.webp')" }}>
        <div className="max-w-screen-xl mx-auto py-10 px-4 bg-black bg-opacity-70 rounded-2xl">
        {/* Hero Section */}
    <section id="first-impressions" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">First Impressions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <img src="/screenshots/wildvegas1.jpg" alt="Screenshot 1" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <img src="/screenshots/wildvegas2.jpg" alt="Screenshot 2" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <img src="/screenshots/wildvegas3.jpg" alt="Screenshot 3" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <img src="/screenshots/wildvegas4.jpg" alt="Screenshot 4" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <div className="bg-dark text-white rounded-xl p-4"></div>
      </div>
    </section>

    {/* Titelbalk */}
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 border-2 border-pink-500 shadow-[0_0_20px_#ff00ff] rounded-xl px-6 py-4 mb-8 grid grid-cols-1 sm:grid-cols-3 items-center">
      {/* Logo links */}
      <div className="flex justify-start items-center mb-4 sm:mb-0">
        <img src="/logos/wildvegas.png" alt="Slots of Vegas logo" className="w-16 h-auto mr-4" />
      </div>
      {/* Titel + mascotte */}
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold text-white text-center">Wild Vegas Casino Review</h2>
        <img src="/mascot.png" alt="Mascot" className="w-16 h-16 ml-4" />
      </div>
      {/* Button rechts */}
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

    {/* Info-grid */}
    <div id="info-grid" className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <section className="p-6 bg-[#0e1a46] rounded-xl border border-yellow-500 shadow-md text-white">
  <div className="flex items-center mb-4">
    <Image src="/casino-icons/Credit.svg" alt="Credit icon" width={56} height={56} className="w-14 h-14 mb-2" />
    <h3 className="text-yellow-400 font-semibold uppercase">Crypto Supported</h3>
  </div>
  <p>
    Wild Vegas accepteert verschillende cryptovaluta en betaalmethoden voor snelle, veilige transacties. Ondersteunde coins zijn:
  </p>
  <div className="flex gap-4 items-center mt-4 flex-wrap">
    <Image src="/icons/btc.svg" alt="Bitcoin" width={32} height={32} className="w-8 h-8" title="Bitcoin (BTC)" />
    <Image src="/icons/eth.svg" alt="Ethereum" width={32} height={32} className="w-8 h-8" title="Ethereum (ETH)" />
    <Image src="/icons/ltc.svg" alt="Litecoin" width={32} height={32} className="w-8 h-8" title="Litecoin (LTC)" />
    <Image src="/icons/usdt.svg" alt="Tether" width={32} height={32} className="w-8 h-8" title="Tether (USDT)" />
  </div>
  <p className="mt-4">
    Deze opties zorgen voor snelle stortingen en uitbetalingen zonder hoge kosten. Je kunt ook kiezen voor creditcards of bankoverschrijving.
  </p>
</section>
        <section id="verdict" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <Image src="/casino-icons/Trophy.svg" alt="Trophy icon" width={56} height={56} className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Final Verdict</h3>
          <p className="text-white">{data.verdict}</p>
        </section>
      </div>
    </div>

    {/* At a Glance */}
    <section id="at-a-glance" className="mb-8">
      <h2 className="text-2xl font-bold mb-3 text-white">At a Glance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-500 rounded-xl p-6 text-white shadow-lg shadow-yellow-500/10 flex flex-col justify-between h-24 text-center">
          <span className="block text-yellow-400 text-lg font-semibold mb-2">Founded</span>
          <span className="text-white">{data.facts.founded}</span>
        </div>
        <div className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-500 rounded-xl p-6 text-white shadow-lg shadow-yellow-500/10 flex flex-col justify-between h-24 text-center">
          <span className="block text-yellow-400 text-lg font-semibold mb-2">License</span>
          <span className="text-white">{data.facts.license}</span>
        </div>
        <div className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-500 rounded-xl p-6 text-white shadow-lg shadow-yellow-500/10 flex flex-col justify-between h-24 text-center">
          <span className="block text-yellow-400 text-lg font-semibold mb-2">Crypto Accepted</span>
          <span className="text-white">{data.facts.cryptoAccepted}</span>
        </div>
      </div>
    </section>

    {/* CTA met mascotte */}
    <section id="cta" className="mt-10 text-center flex flex-col items-center justify-center gap-4">
      <Image src="/mascot.png" alt="Mascot" width={48} height={48} className="w-12 h-12 mb-2" />
      <h2 className="text-xl font-bold text-yellow-400">READY TO GET STARTED?</h2>
      <a
        href="https://www.wildvegaslinks.com/click/11/4315/15512/1"
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play at Wild Vegas
      </a>
    </section>
    </div>
  </div>
</>
);
}

