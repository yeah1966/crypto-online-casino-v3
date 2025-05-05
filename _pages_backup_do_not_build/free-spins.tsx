import { useState } from "react";
import Head from "next/head";
import { bonuses } from "@/data/bonuses";
import BonusCard from "@/components/BonusCard";
import { useTranslation } from "next-i18next";

export default function FreeSpinsBonuses() {
  // Filter alleen bonussen met de tag 'free-spins'
  const freeSpinsBonuses = bonuses.filter(bonus => bonus.tags?.includes("free-spins"));
  const [filter, setFilter] = useState("all");
  const { i18n } = useTranslation();

  // Eventueel extra filteren op andere tags binnen de free spins selectie
  const filteredBonuses = freeSpinsBonuses.filter(bonus =>
    filter === "all" ? true : bonus.tags?.includes(filter)
  );

  return (
    <>
      <Head>
        <title>Best Free Spins Crypto Casino Bonuses (2025) | Free Bitcoin Spins</title>
        <meta
          name="description"
          content="Find the best free spins crypto casino bonuses for 2025. Claim free Bitcoin spins and no deposit offers at top BTC casinos."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12 text-white">
        {i18n.language === "es" && (
          <div className="bg-yellow-400 text-black rounded-lg px-4 py-2 mb-6 text-center font-semibold text-lg shadow">
            ¡Pronto disponible en español!
          </div>
        )}
        <h1 className="text-4xl font-bold mb-6">Best Free Spins Crypto Casino Bonuses (2025)</h1>
        <p className="mb-6 text-lg">
          Claim free spins on the best crypto slots! No deposit required at many casinos – just sign up and spin for free with Bitcoin or other cryptocurrencies.
        </p>

        {/* Filter dropdown voor extra filtering binnen de free spins bonussen */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold">Filter by bonus type:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
          >
            <option value="all">Show all</option>
            <option value="no-deposit">No Deposit Bonuses</option>
            <option value="match">Match Bonuses</option>
          </select>
        </div>

        <section className="space-y-8">
          {filteredBonuses.length === 0 ? (
            <div className="text-gray-400">No free spins bonuses found for this filter.</div>
          ) : (
            filteredBonuses.map((bonus) => (
              <BonusCard key={bonus.slug} {...bonus} />
            ))
          )}
        </section>

        <p className="mt-12 text-lg">
          This page is updated regularly with the latest free spins offers from trusted crypto casinos. Spin for free and win real Bitcoin today!
        </p>
      </main>
    </>
  );
}
