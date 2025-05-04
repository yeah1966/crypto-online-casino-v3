"use client";

import Link from "next/link";
import Head from 'next/head';
import { FaStar, FaBolt, FaGift, FaShieldAlt, FaTrophy, FaDice, FaCoins } from "react-icons/fa";
import { useState } from "react";
import { casinos } from '@/data/casinosData';

const getStars = (rating: number) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="text-yellow-300 text-xl">
      {Array(full).fill("★").join("")}{half ? "½" : ""}
    </span>
  );
}

export default function ReviewsPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleCasinos = showAll ? casinos : casinos.slice(0, 20);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Crypto Casino Reviews 2025",
    "itemListElement": casinos.map((casino, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://www.jouwsite.nl/crypto-casino-reviews/${casino.slug}`,
      "name": casino.name,
      "image": casino.logo,
      "description": casino.description
    }))
  };
  return (
    <>
      <Head>
        <title>Crypto Casino Reviews 2025 | Top Bitcoin &amp; Crypto Casinos</title>
        <meta name="description" content="Discover the best crypto casinos of 2025. Indepth reviews, bonuses, instant payouts, and full transparency. Only the top-rated make our list!" />
        <link rel="canonical" href="https://www.jouwsite.nl/crypto-casino-reviews" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Crypto Casino Reviews 2025" />
        <meta property="og:description" content="The best crypto casinos reviewed. Bonuses, instant payouts &amp; full transparency." />
        <meta property="og:image" content="https://www.jouwsite.nl/images/crypto-casino-online.png" />
        <meta property="og:url" content="https://www.jouwsite.nl/crypto-casino-reviews" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto Casino Reviews 2025" />
        <meta name="twitter:description" content="The best crypto casinos reviewed. Bonuses, instant payouts &amp; full transparency." />
        <meta name="twitter:image" content="https://www.jouwsite.nl/images/crypto-casino-online.png" />
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main className="relative min-h-screen pt-0 pb-16 px-4 text-white overflow-hidden">
      {/* VEGAS BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* HERO SECTION + FEATURE ROW in container */}
      <div className="w-full max-w-6xl mx-auto bg-black/60 rounded-3xl shadow-2xl px-4 md:px-16 py-10 md:py-16 mt-8 animate-fade-in-down">
        <section className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaDice className="text-yellow-300 text-4xl drop-shadow-neon animate-float" />
            <span className="text-yellow-300 text-4xl md:text-5xl font-black drop-shadow-neon neon-glow">CRYPTO CASINO REVIEWS</span>
            <FaCoins className="text-yellow-300 text-4xl drop-shadow-neon animate-float-reverse" />
          </div>
          <p className="mb-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-down">
            Discover the best crypto casinos of 2025. All sites are independently reviewed for bonuses, fairness, crypto support, and player experience. Vegas vibes, instant payouts, and full transparency — only the top-rated make our list!
          </p>
          {/* Feature highlights row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 w-full max-w-4xl mx-auto animate-fade-in-down">
            <div className="flex flex-col items-center bg-black/60 rounded-xl p-5 shadow-lg border border-yellow-400">
              <FaBolt className="text-yellow-300 text-2xl mb-2" />
              <span className="font-bold text-yellow-200 text-base">Instant Payouts</span>
              <span className="text-white/80 text-xs mt-1 text-center">Crypto wins paid in minutes.</span>
            </div>
            <div className="flex flex-col items-center bg-black/60 rounded-xl p-5 shadow-lg border border-pink-400">
              <FaGift className="text-pink-400 text-2xl mb-2" />
              <span className="font-bold text-pink-200 text-base">Big Bonuses</span>
              <span className="text-white/80 text-xs mt-1 text-center">Exclusive offers for crypto players.</span>
            </div>
            <div className="flex flex-col items-center bg-black/60 rounded-xl p-5 shadow-lg border border-green-400">
              <FaShieldAlt className="text-green-300 text-2xl mb-2" />
              <span className="font-bold text-green-200 text-base">Safe & Fair</span>
              <span className="text-white/80 text-xs mt-1 text-center">Fully licensed, provably fair.</span>
            </div>
            <div className="flex flex-col items-center bg-black/60 rounded-xl p-5 shadow-lg border border-blue-400">
              <FaTrophy className="text-blue-300 text-2xl mb-2" />
              <span className="font-bold text-blue-200 text-base">Top Rated</span>
              <span className="text-white/80 text-xs mt-1 text-center">Only the best make our list.</span>
            </div>
          </div>
        </section>
        {/* Casino review cards */}
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {casinos.map((casino) => (
              <Link
                href={`/crypto-casino-reviews/${casino.slug}`}
                key={casino.slug}
                className="bg-purple-700 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
              >
                <img src={casino.logo} alt={casino.name + ' logo'} width={64} height={64} className="mb-3 rounded-xl bg-white shadow" />
                <span className="font-bold text-lg text-yellow-200 mb-1 text-center">{casino.name}</span>
                <span className="text-yellow-300 text-base mb-1">{getStars(casino.rating)}</span>
                <span className="text-sm text-purple-100 mb-2 text-center">{casino.description}</span>
                <span className="text-pink-200 hover:underline mt-2">Read the full review →</span>
              </Link>
            ))}
          </div>
          {casinos.length > 20 && !showAll && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2 bg-yellow-300 text-black font-semibold rounded-lg hover:scale-105 transition"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
    </>
  );
}
