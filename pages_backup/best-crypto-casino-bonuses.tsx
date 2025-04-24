import React, { useState } from "react";
import Head from "next/head";
import Footer from '@/components/Footer';
import { bonuses } from "@/data/bonuses";
import { useTranslation } from "next-i18next";
import { getAffiliateLinkBySlug } from '@/lib/affiliateUtils';

export default function BestCryptoCasinoBonuses() {
  const { i18n } = useTranslation();
  const [filter, setFilter] = useState("all");

  const filteredBonuses = bonuses.filter(bonus =>
    filter === "all" ? true : bonus.tags.includes(filter)
  );

  return (
    <>
      <Head>
        <title>Best Crypto Casino Bonuses (2025) | Top Bitcoin Casino Offers</title>
        <meta
          name="description"
          content="Discover the best crypto casino bonuses in 2025. Compare no deposit bonuses, welcome offers, and free spins from top Bitcoin casinos."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12 text-white">
        {i18n.language === "es" && (
          <div className="bg-yellow-400 text-black rounded-lg px-4 py-2 mb-6 text-center font-semibold text-lg shadow">
            ¡Pronto disponible en español!
          </div>
        )}
        <h1 className="text-4xl font-bold mb-6">Best Crypto Casino Bonuses (2025)</h1>
        <p className="mb-6 text-lg">
          Looking for the biggest and most rewarding bonuses at crypto casinos? Below you'll find a hand-picked selection of the top bonuses in 2025, including no deposit offers, free spins, and massive welcome packages.
        </p>

        {/* Filter dropdown */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold">Filter by bonus type:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
          >
            <option value="all">Show all</option>
            <option value="no-deposit">No Deposit Bonuses</option>
            <option value="free-spins">Free Spins</option>
            <option value="match">Match Bonuses</option>
          </select>
        </div>

        <section className="space-y-8">
          {filteredBonuses.length === 0 ? (
            <div className="text-gray-400">No bonuses found for this filter.</div>
          ) : (
            filteredBonuses.map((bonus) => (
              <div key={bonus.slug} className="bg-gray-900 p-6 rounded shadow">
                <h2 className="text-2xl font-semibold mb-2">
                  {bonus.highlight} {bonus.casino} – {bonus.offer}
                </h2>
                <ul className="list-disc pl-6 mb-4">
                  {bonus.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <a
                  href={getAffiliateLinkBySlug(bonus.slug)}
                  className="btn-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Claim Bonus
                </a>
                <a
                  href={`/crypto-casino-reviews/${bonus.slug}`}
                  className="text-purple-400 underline ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read full review
                </a>
              </div>
            ))
          )}
        </section>

        <p className="mt-12 text-lg">
          Keep checking this page as we update it regularly with the latest and hottest bonus offers from verified crypto casinos. Don’t miss out on your chance to boost your bankroll with Bitcoin, Ethereum, and other cryptocurrencies!
        </p>
      </main>
      <Footer />
    </>
  );
}
