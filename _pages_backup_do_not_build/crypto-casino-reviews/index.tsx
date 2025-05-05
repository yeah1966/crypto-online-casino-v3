import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const casinos = [
  {
    slug: "bitstarz",
    name: "BitStarz",
    description: "Award-winning crypto casino with 3,500+ games and instant payouts.",
    features: ["Fast Payouts", "Huge Game Library", "Top Rated"],
    rating: 4.8
  },
  {
    slug: "betplay",
    name: "Betplay",
    description: "Fast-growing crypto platform with generous bonuses and quick withdrawals.",
    features: ["Quick Payments", "Regular Promos", "Modern Platform"],
    rating: 4.6
  },
  {
    slug: "betzard",
    name: "Betzard",
    description: "Rising star in crypto gambling with exciting promotions and growing game selection.",
    features: ["New Casino", "Great Bonuses", "Easy to Use"],
    rating: 4.4
  },
  {
    slug: "7bit",
    name: "7Bit Casino",
    description: "Retro-styled crypto casino with 4,000+ games and classic arcade feel.",
    features: ["Retro Theme", "Huge Selection", "Bitcoin Slots"],
    rating: 4.5
  },
  {
    slug: "coinpoker",
    name: "CoinPoker",
    description: "Dedicated crypto poker platform with tournaments and anonymous play.",
    features: ["Poker Focus", "Anonymous", "Active Community"],
    rating: 4.7
  },
  {
    slug: "cloudbet",
    name: "Cloudbet",
    description: "Premium crypto casino and sportsbook with high betting limits.",
    features: ["High Stakes", "Sports Betting", "Since 2013"],
    rating: 4.6
  },
  {
    slug: "crypto-loko",
    name: "Crypto Loko",
    description: "Wild and fun crypto casino with massive welcome bonuses.",
    features: ["Huge Bonuses", "Fun Design", "Daily Rewards"],
    rating: 4.3
  },
  {
    slug: "dreams",
    name: "Dreams Casino",
    description: "Classic Vegas-style crypto casino with traditional gaming experience.",
    features: ["Classic Style", "Trusted", "Great Support"],
    rating: 4.2
  }
];

export default function CasinoReviews() {
  const [sortOption, setSortOption] = useState("default");

  const sortedCasinos = [...casinos].sort((a, b) => {
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "alpha") return a.name.localeCompare(b.name);
    return 0; // default
  });

  return (
    <>
      <Head>
        <title>Best Crypto Casino Reviews 2025 | Honest & Detailed Reviews</title>
        <meta
          name="description"
          content="Compare the best crypto casinos of 2025. In-depth reviews of BitStarz, Cloudbet, CoinPoker and more. Find bonuses, payment methods, and honest ratings."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-6">
          Best Crypto Casino Reviews (2025)
        </h1>
        
        <p className="text-lg text-gray-300 mb-8">
          Looking for the perfect crypto casino? We've reviewed the top Bitcoin gambling sites for 2025. 
          Compare features, bonuses, and payment methods to find your ideal match.
        </p>

        <div className="mb-8">
          <label className="block mb-2 text-sm font-semibold">Sort by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
          >
            <option value="default">Default</option>
            <option value="rating">Highest Rating</option>
            <option value="alpha">Alphabetical (A–Z)</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCasinos.map((casino) => (
            <div
              key={casino.slug}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition"
            >
              <h2 className="text-2xl font-bold text-white mb-2">{casino.name}</h2>
              <div className="flex items-center mb-3">
                <div className="text-yellow-400 text-lg font-semibold">
                  ★ {casino.rating}
                </div>
                <span className="text-gray-400 text-sm ml-2">/ 5.0</span>
              </div>
              <p className="text-gray-300 mb-4">{casino.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {casino.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-purple-600 text-white text-sm px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                href={`/crypto-casino-reviews/${casino.slug}`}
                className="inline-block w-full text-center bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition"
              >
                Read Full Review
              </Link>
            </div>
          ))}
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": sortedCasinos.map((casino, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Review",
                "itemReviewed": {
                  "@type": "Organization",
                  "name": casino.name
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": casino.rating,
                  "bestRating": "5"
                }
              }
            }))
          })
        }}
      />
    </>
  );
}
