"use client";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "how", label: "How It Works" },
  { id: "why", label: "Why It Matters" },
  { id: "where", label: "Where You'll See It" },
  { id: "check", label: "Check Fairness" },
  { id: "proscons", label: "Pros & Cons" },
  { id: "bonus", label: "Bonus Tip" },
];

export default function ProvablyFairGuide() {
  const refs = sections.reduce((acc, section) => {
    acc[section.id] = useRef<HTMLDivElement | null>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement | null>>);

  const scrollToSection = (id: string) => {
    refs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full text-white">
        <Head>
          <title>Provably Fair Explained – How Crypto Casinos Ensure Fair Play</title>
          <meta name="description" content="What does ‘provably fair’ mean at crypto casinos? Learn how blockchain-based games guarantee fairness with open algorithms and transparency." />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getBreadcrumbListStructuredData([
                { name: "Home", href: "/" },
                { name: "Guides", href: "/guides" },
                { name: "Provably Fair", href: "/guides/provably-fair" }
              ], "https://www.yourdomain.com"))
            }}
          />
        </Head>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: "Provably Fair", href: "/guides/provably-fair" }
          ]}
        />
        {/* Sticky submenu */}
        <nav className="sticky top-4 z-30 mb-8 flex gap-2 flex-wrap justify-center md:justify-start">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 font-bold text-sm hover:bg-yellow-300 hover:text-pink-700 transition-all border-2 border-purple-300 shadow"
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* Intro */}
        <div ref={refs.intro} className="flex flex-col items-center mb-8">
          <img src="/fun/roulette.png" alt="Provably fair" width={90} height={90} className="mb-2 drop-shadow-lg animate-bounce" />
          <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
            What Is “Provably Fair”? 🎲
          </h1>
          <p className="text-lg text-center text-white/90 mb-4 max-w-2xl">
            “Provably fair” is a unique concept in crypto casinos—players can independently verify that every game result is truly fair, thanks to cryptographic algorithms and blockchain technology. This means total transparency and trust, with no need to blindly rely on the casino.
          </p>
        </div>

        {/* Section 1: How Does Provably Fair Work? */}
        <section ref={refs.how} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
            <span className="text-2xl">🔍</span>
            How Does Provably Fair Work?
          </h2>
          <ul className="list-disc pl-5 mb-4 text-white/90">
            <li className="mb-2 text-white/90">Every game result is generated in advance with a cryptographic algorithm.</li>
            <li className="mb-2 text-white/90">The result can be verified afterwards using a cryptographic hash.</li>
            <li className="mb-2 text-white/90">Both player and casino may contribute to the random seed (in some systems).</li>
            <li className="mb-2 text-white/90">No manipulation possible—transparency is built in.</li>
          </ul>
          <div className="bg-yellow-300/90 border-l-4 border-yellow-600 p-4 mt-4 rounded">
            <span className="font-bold text-white/90">Example:</span> In a dice game, the outcome (e.g., 53) is pre-encrypted in a hash. After the round, you can check the hash to confirm it matches the result.
          </div>
        </section>

        {/* Section 2: Why It Matters */}
        <section ref={refs.why} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-700">
            <span className="text-2xl">🔐</span>
            Why It Matters
          </h2>
          <ul className="list-disc pl-5 mb-4 text-white/90">
            <li className="mb-2 text-white/90">No house edge abuse</li>
            <li className="mb-2 text-white/90">Fairness is provable by you, the player</li>
            <li className="mb-2 text-white/90">No need to trust the software—you can check it yourself</li>
          </ul>
        </section>

        {/* Section 3: Where You'll See It */}
        <section ref={refs.where} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-700">
            <span className="text-2xl">🧠</span>
            Where You'll See Provably Fair
          </h2>
          <ul className="list-disc pl-5 mb-4 text-white/90">
            <li className="mb-2 text-white/90">Dice games</li>
            <li className="mb-2 text-white/90">Crash games</li>
            <li className="mb-2 text-white/90">Card games (like blackjack)</li>
            <li className="mb-2 text-white/90">Some slots (crypto-enabled slots)</li>
          </ul>
        </section>

        {/* Section 4: Can You Check Fairness Yourself? */}
        <section ref={refs.check} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-pink-700">
            <span className="text-2xl">👀</span>
            Can You Check Fairness Yourself?
          </h2>
          <p className="text-white/90 mb-2">Yes! Most crypto casinos provide:</p>
          <ul className="list-disc pl-5 mb-4 text-white/90">
            <li className="mb-2 text-white/90">A “Verify” button next to the game result</li>
            <li className="mb-2 text-white/90">Access to the seed + hash</li>
            <li className="mb-2 text-white/90">An easy verification tool on their site or an external checker</li>
          </ul>
        </section>

        {/* Section 5: Pros & Cons Table */}
        <section ref={refs.proscons} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-700">
            <span className="text-2xl">✅</span>
            Pros & Cons of Provably Fair
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left rounded-xl overflow-hidden border border-purple-400">
              <thead className="bg-purple-700 text-white">
                <tr>
                  <th className="px-4 py-2">Benefit</th>
                  <th className="px-4 py-2">Explanation</th>
                </tr>
              </thead>
              <tbody className="bg-white/90 text-black">
                <tr>
                  <td className="px-4 py-2 font-semibold text-black">Full transparency</td>
                  <td className="px-4 py-2 text-black">You can verify every outcome</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-black">No third-party needed</td>
                  <td className="px-4 py-2 text-black">No auditors required</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-black">Available instantly</td>
                  <td className="px-4 py-2 text-black">Works with every bet, every game</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-black">Requires tech knowledge</td>
                  <td className="px-4 py-2 text-black">Some users may not understand how it works</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Bonus Tip */}
        <section ref={refs.bonus} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
            <span className="text-2xl">💡</span>
            Bonus Tip
          </h2>
          <div className="bg-green-400/90 border-l-4 border-green-700 p-4 rounded">
            <span className="text-white/90">Combine provably fair with a VPN + anonymous play for ultimate control and privacy.</span>
          </div>
        </section>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 mb-4">
          <Link
            href="/crypto-casino-reviews"
            className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 hover:from-purple-300 hover:to-yellow-300 transition-all duration-300 hover:shadow-[0_0_30px_#a78bfa]"
          >
            🎰 Explore Provably Fair Casinos
          </Link>
          <Link
            href="/spin-to-win"
            className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 hover:from-yellow-300 hover:to-pink-300 transition-all duration-300 hover:shadow-[0_0_30px_#fbbf24]"
          >
            🎡 Try Your Luck on the Bonus Wheel
          </Link>
        </div>
      </div>
    </main>
  );
}
