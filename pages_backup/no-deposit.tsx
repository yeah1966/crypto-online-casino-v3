import { useState } from "react";
import Head from "next/head";
import { bonuses } from "@/data/bonuses";
import BonusCard from "@/components/BonusCard";
import { useTranslation } from "next-i18next";

export default function NoDepositBonuses() {
  // Filter alleen bonussen met de tag 'no-deposit'
  const noDepositBonuses = bonuses.filter(bonus => bonus.tags?.includes("no-deposit"));
  const [filter, setFilter] = useState("all");
  const { i18n } = useTranslation();

  // Eventueel extra filteren op andere tags binnen de no-deposit selectie
  const filteredBonuses = noDepositBonuses.filter(bonus =>
    filter === "all" ? true : bonus.tags?.includes(filter)
  );

  return (
    <>
      <Head>
        <title>Best No Deposit Crypto Casino Bonuses (2025) | Free Bitcoin Bonus</title>
        <meta
          name="description"
          content="Find the best no deposit crypto casino bonuses for 2025. Claim free spins and Bitcoin bonuses at top BTC casinos without making a deposit."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12 text-white">
        {i18n.language === "es" && (
          <div className="bg-yellow-400 text-black rounded-lg px-4 py-2 mb-6 text-center font-semibold text-lg shadow">
            ¡Pronto disponible en español!
          </div>
        )}
        <h1 className="text-4xl font-bold mb-6">Best No Deposit Crypto Casino Bonuses (2025)</h1>
        <p className="mb-6 text-lg">
          Instantly claim free spins and no deposit bonuses at the best crypto casinos. No deposit required – just sign up and play with Bitcoin or other cryptocurrencies!
        </p>

        {/* Filter dropdown voor extra filtering binnen de no deposit bonussen */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold">Filter by bonus type:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
          >
            <option value="all">Show all</option>
            <option value="free-spins">Free Spins</option>
            <option value="match">Match Bonuses</option>
          </select>
        </div>

        <section className="space-y-8">
          {filteredBonuses.length === 0 ? (
            <div className="text-gray-400">No no-deposit bonuses found for this filter.</div>
          ) : (
            filteredBonuses.map((bonus) => (
              <BonusCard key={bonus.slug} {...bonus} />
            ))
          )}
        </section>

        <p className="mt-12 text-lg">
          This page is updated regularly with the latest no deposit offers from trusted crypto casinos. Play for free and win real Bitcoin today!
        </p>
      </main>
    </>
  );
}
