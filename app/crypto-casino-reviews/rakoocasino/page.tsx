import type { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: "Rakoocasino Review 2025 | Crypto Casino, Fast Payouts & 4000+ Games",
    description: "Read our Rakoocasino review: 100% bonus, instant crypto payouts, 4000+ games, and top-tier security. Play with BTC, ETH, DOGE & more.",
    alternates: {
      canonical: "https://crypto-online-casino.com/crypto-casino-reviews/rakoocasino",
    },
    openGraph: {
      title: "Rakoocasino Review 2025 | Crypto Casino, Fast Payouts & 4000+ Games",
      description: "Read our Rakoocasino review: 100% bonus, instant crypto payouts, 4000+ games, and top-tier security. Play with BTC, ETH, DOGE & more.",
      url: "https://crypto-online-casino.com/crypto-casino-reviews/rakoocasino",
      type: "website",
      images: [
        {
          url: "/og/rakoocasino.png",
          width: 1200,
          height: 630,
          alt: "Rakoocasino OG Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Rakoocasino Review 2025 | Crypto Casino, Fast Payouts & 4000+ Games",
      description: "Read our Rakoocasino review: 100% bonus, instant crypto payouts, 4000+ games, and top-tier security. Play with BTC, ETH, DOGE & more.",
      images: ["/og/rakoocasino.png"],
    },
  };
};

const data = {
  introduction: "Rakoocasino is a next-generation crypto casino founded in 2023. With a strong focus on player experience, Rakoocasino offers a sleek interface, instant crypto payments, and a wide range of exclusive games. The platform is designed for both casual players and high rollers who value privacy, speed, and variety.",
  bonuses: "New players at Rakoocasino can claim a generous welcome package including a 100% deposit bonus and up to 100 free spins on top slots. Daily reload bonuses, cashback on losses, and regular tournaments offer ongoing value. The VIP program rewards loyal players with exclusive perks, higher withdrawal limits, and personal account managers.",
  games: "Rakoocasino boasts a massive library of over 4,000 games, including slots, live dealer tables, provably fair crypto games, and jackpot titles. Top providers like Pragmatic Play, Evolution, and Play'n GO ensure high-quality gameplay. Unique features include instant search, favorites, and exclusive in-house games only available at Rakoocasino.",
  support: "Customer support is available 24/7 via live chat and email. The multilingual team responds within minutes and can assist with account issues, bonuses, payments, and technical questions. An extensive help center and FAQ section provide answers to common queries, making it easy to find information quickly.",
  mobile: "The Rakoocasino website is fully responsive and optimized for all devices. Whether you use iOS, Android, or desktop, you can enjoy fast loading times, touch-friendly navigation, and access to all games and features. No app download required—just play instantly in your browser.",
  security: "Rakoocasino operates under a Curacao eGaming license and uses advanced SSL encryption to protect player data and funds. Responsible gaming tools, two-factor authentication, and strict KYC procedures ensure a safe and fair gaming environment for all users.",
  payments: "Rakoocasino supports Bitcoin, Ethereum, Litecoin, Tether, Bitcoin Cash, and Dogecoin for instant deposits and withdrawals. All transactions are processed on-chain for maximum transparency and security. There are no hidden fees, and most withdrawals are completed within minutes.",
  verdict: "Rakoocasino is a standout choice for crypto casino fans seeking a modern platform, quick payouts, and a vast selection of games. The site excels in bonuses, support, and security, making it a reliable option for both new and experienced players. Try Rakoocasino for a seamless and rewarding crypto gambling experience.",
  facts: {
    founded: "2023",
    license: "Curacao eGaming",
    cryptoAccepted: "BTC, ETH, LTC, USDT, BCH, DOGE",
  },
};

export default function RakoocasinoPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Rakoocasino",
      url: "https://crypto-online-casino.com/crypto-casino-reviews/rakoocasino",
      logo: "https://crypto-online-casino.com/logos/rakoocasino.png",
    },
    author: {
      "@type": "Person",
      name: "Crypto Casino Expert",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.7",
      bestRating: "5",
    },
    reviewBody: data.verdict,
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
        <img src="/screenshots/rakoocasino1.jpg" alt="Screenshot 1" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <img src="/screenshots/rakoocasino2.jpg" alt="Screenshot 2" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <img src="/screenshots/rakoocasino3.jpg" alt="Screenshot 3" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
        <img src="/screenshots/rakoocasino4.jpg" alt="Screenshot 4" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
      </div>
    </section>

    {/* Titelbalk */}
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 border-2 border-pink-500 shadow-[0_0_20px_#ff00ff] rounded-xl px-6 py-4 mb-8 grid grid-cols-1 sm:grid-cols-3 items-center">
      {/* Logo links */}
      <div className="flex justify-start items-center mb-4 sm:mb-0">
        <img src="/logos/rakoocasino.png" alt="Rakoocasino logo" className="w-16 h-auto mr-4" />
      </div>
      {/* Titel + mascotte */}
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold text-white text-center">Rakoocasino Review</h2>
        <img src="/mascot.png" alt="Mascot" className="w-16 h-16 ml-4" />
      </div>
      {/* Button rechts */}
      <div className="flex justify-end items-center mt-4 sm:mt-0">
        <a
          href="https://rakoolink.com/ha03e587d"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#ff0] whitespace-nowrap"
        >
          Play at Rakoocasino
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
          <img src="/casino-icons/Slot Machine.svg" alt="Slots icon" className="w-14 h-14 mb-4" />
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">Games & Software</h3>
          <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">{data.games}</p>
        </section>
        <section id="support" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Support.svg" alt="Support icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">Customer Support</h3>
          <p className="text-white">{data.support}</p>
        </section>
        <section id="mobile" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Mobile Casino.svg" alt="Mobile icon" className="w-14 h-14 mb-4" />
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">Mobile Experience</h3>
          <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">{data.mobile}</p>
        </section>
        <section id="security" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Shield.svg" alt="Security icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">Security & Fairness</h3>
          <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">{data.security}</p>
        </section>
        <section id="payments" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
          <img src="/casino-icons/Credit.svg" alt="Credit icon" className="w-14 h-14 mb-2" />
          <h3 className="text-yellow-400 font-semibold uppercase ml-4">Crypto Supported</h3>
          <p>Rakoocasino supports a variety of cryptocurrencies and digital payment methods for convenient and secure transactions. Supported coins include:</p>
          <div className="flex gap-4 items-center mt-4 flex-wrap">
            <img src="/icons/btc.svg" alt="Bitcoin" className="w-8 h-8" title="Bitcoin (BTC)" />
            <img src="/icons/eth.svg" alt="Ethereum" className="w-8 h-8" title="Ethereum (ETH)" />
            <img src="/icons/ltc.svg" alt="Litecoin" className="w-8 h-8" title="Litecoin (LTC)" />
            <img src="/icons/bch.svg" alt="Bitcoin Cash" className="w-8 h-8" title="Bitcoin Cash (BCH)" />
            <img src="/icons/doge.svg" alt="Dogecoin" className="w-8 h-8" title="Dogecoin (DOGE)" />
            <img src="/icons/usdt.svg" alt="Tether" className="w-8 h-8" title="Tether (USDT)" />
          </div>
          <p className="mt-4">These options enable fast deposits and withdrawals with low fees. No traditional banking required.</p>
        </section>
        <section id="verdict" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out mb-10">
          <img src="/casino-icons/Trophy.svg" alt="Trophy icon" className="w-14 h-14 mb-4" />
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">Final Verdict</h3>
          <p className="text-white text-lg md:text-xl leading-relaxed">{data.verdict}</p>
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
      <img src="/mascot.png" alt="Mascot" className="w-12 h-12 mb-2" />
      <h2 className="text-xl font-bold text-yellow-400">READY TO GET STARTED?</h2>
      <a
        href="https://rakoolink.com/ha03e587d"
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play at Rakoocasino
      </a>
    </section>
    </div>
  </div>
</>
);
}

