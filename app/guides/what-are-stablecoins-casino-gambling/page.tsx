"use client";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "what", label: "What Is a Stablecoin?" },
  { id: "why", label: "Why Use Stablecoins?" },
  { id: "how", label: "How to Deposit" },
  { id: "popular", label: "Popular Stablecoins" },
  { id: "proscons", label: "Pros & Cons" },
  { id: "final", label: "Final Tip" },
];

export default function StablecoinsGuide() {
  const refs = sections.reduce((acc, section) => {
    acc[section.id] = useRef<HTMLDivElement | null>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement | null>>);

  const scrollToSection = (id: string) => {
    refs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Head>
        <title>What Are Stablecoins & Why Use Them in Crypto Casinos?</title>
        <meta name="description" content="Discover how stablecoins like USDT, USDC and DAI work in crypto gambling. Lower risk, fast payments, and greater control over your bankroll." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Guides", href: "/guides" },
              { name: "Stablecoins", href: "/guides/what-are-stablecoins-casino-gambling" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Stablecoins", href: "/guides/what-are-stablecoins-casino-gambling" }
        ]}
      />
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full text-white">
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
            <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
              What Are Stablecoins in Crypto Gambling? 📀
            </h1>
            <p className="mb-4 text-white/90">
              Stablecoins are digital currencies pegged to a stable asset (like the US dollar). They’re becoming increasingly popular in crypto casinos for their stability, speed, and simplicity—combining the benefits of crypto with the peace of mind of fiat.
            </p>
          </div>

          {/* Section 1: What Is a Stablecoin? */}
          <section ref={refs.what} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
              <span className="text-2xl">🪙</span>
              What Is a Stablecoin?
            </h2>
            <ul className="list-disc pl-5 mb-4 text-white/90">
              <li className="mb-2 text-white/90">A stablecoin is a cryptocurrency designed to maintain a fixed value (usually 1 USD).</li>
              <li className="mb-2 text-white/90">Common examples: <b>USDT (Tether)</b>, <b>USDC (USD Coin)</b>, <b>DAI</b>.</li>
              <li className="mb-2 text-white/90">These coins are backed by real-world assets or algorithmic systems.</li>
            </ul>
          </section>

          {/* Section 2: Why Use Stablecoins for Gambling? */}
          <section ref={refs.why} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-pink-600">
              <span className="text-2xl">🎲</span>
              Why Use Stablecoins for Gambling?
            </h2>
            <ul className="list-disc pl-5 mb-4 text-white/90">
              <li className="mb-2 text-white/90">No price volatility like BTC/ETH — your balance stays stable.</li>
              <li className="mb-2 text-white/90">Faster transactions than banks or credit cards.</li>
              <li className="mb-2 text-white/90">Often lower fees than BTC or ETH.</li>
              <li className="mb-2 text-white/90">Easier bankroll management (especially for budgeting).</li>
            </ul>
          </section>

          {/* Section 3: How to Deposit with Stablecoins */}
          <section ref={refs.how} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-700">
              <span className="text-2xl">💳</span>
              How to Deposit with Stablecoins
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-white/90">
              <li className="mb-2 text-white/90">Buy USDT or USDC on a crypto exchange (Binance, Coinbase, etc.)</li>
              <li className="mb-2 text-white/90">Transfer to your wallet (e.g., MetaMask, Trust, Ledger)</li>
              <li className="mb-2 text-white/90">Go to the casino → choose USDT/USDC deposit</li>
              <li className="mb-2 text-white/90">Copy wallet address or scan QR</li>
              <li className="mb-2 text-white/90">Send → wait for confirmation (typically under 1 minute)</li>
            </ol>
            <p className="mb-2 text-white/90 flex items-center gap-2 text-sm">
              <span className="text-xl">📌</span>
              <span>Tip: Always double-check the address and network (ERC20, TRC20, etc.)</span>
            </p>
          </section>

          {/* Section 4: Popular Stablecoins in Online Casinos */}
          <section ref={refs.popular} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-700">
              <span className="text-2xl">🧠</span>
              Popular Stablecoins in Online Casinos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left rounded-xl overflow-hidden border border-purple-400">
                <thead className="bg-purple-700 text-white">
                  <tr>
                    <th className="px-4 py-2">Coin</th>
                    <th className="px-4 py-2">Backed By</th>
                    <th className="px-4 py-2">Network(s)</th>
                    <th className="px-4 py-2">Best For</th>
                  </tr>
                </thead>
                <tbody className="bg-white/90 text-black">
                  <tr>
                    <td className="px-4 py-2 font-semibold">USDT</td>
                    <td className="px-4 py-2">USD Reserves</td>
                    <td className="px-4 py-2">Ethereum, Tron</td>
                    <td className="px-4 py-2">Fast, widely accepted</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">USDC</td>
                    <td className="px-4 py-2">USD Reserves</td>
                    <td className="px-4 py-2">Ethereum, Solana</td>
                    <td className="px-4 py-2">Transparency, regulated option</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">DAI</td>
                    <td className="px-4 py-2">Crypto assets</td>
                    <td className="px-4 py-2">Ethereum</td>
                    <td className="px-4 py-2">Decentralized and non-custodial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Pros & Cons of Stablecoin Gambling */}
          <section ref={refs.proscons} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
              <span className="text-2xl">⚖️</span>
              Pros & Cons of Stablecoin Gambling
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left rounded-xl overflow-hidden border border-purple-400">
                <thead className="bg-purple-700 text-white">
                  <tr>
                    <th className="px-4 py-2">✅ Pros</th>
                    <th className="px-4 py-2">⚠️ Cons</th>
                  </tr>
                </thead>
                <tbody className="bg-white/90 text-black">
                  <tr>
                    <td className="px-4 py-2">No value fluctuations</td>
                    <td className="px-4 py-2">Still depends on stablecoin issuer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Faster than bank methods</td>
                    <td className="px-4 py-2">Can be delisted or unsupported</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Lower transaction fees</td>
                    <td className="px-4 py-2">Some require KYC (depending on exchange)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Final Tip */}
          <section ref={refs.final} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-700">
              <span className="text-2xl">🎯</span>
              Final Tip
            </h2>
            <div className="bg-yellow-300/90 border-l-4 border-yellow-600 p-4 rounded">
              Use stablecoins if you want to avoid crypto volatility — perfect for casual players, budget-minded gamblers, or consistent staking strategies.
            </div>
          </section>

          {/* CTA Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 mb-4">
            <Link
              href="/crypto-casino-reviews"
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 hover:from-purple-300 hover:to-yellow-300 transition-all duration-300 hover:shadow-[0_0_30px_#a78bfa]"
            >
              📀 View Casinos That Accept Stablecoins
            </Link>
            <Link
              href="/spin-to-win"
              className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 hover:from-yellow-300 hover:to-pink-300 transition-all duration-300 hover:shadow-[0_0_30px_#fbbf24]"
            >
              🎡 Spin the Wheel for a Bonus
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
