"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
    // useRef cannot be used inside a callback. Refactor needed below.
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
        <div className="relative rounded-3xl bg-black/65 shadow-2xl border-2 border-yellow-400 p-8 md:p-12 space-y-10 max-w-6xl mx-auto mt-6">
          <nav className="flex flex-wrap gap-2 justify-center mb-8">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="px-4 py-1 rounded-full bg-yellow-300/80 text-purple-900 font-bold text-sm hover:bg-yellow-400 transition-all border-2 border-yellow-400 shadow"
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
            {/* Intro */}
            <section ref={refs.intro} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col items-center gap-2">
              <div className="flex flex-row items-center gap-4 mb-2">
                <Image src="/icons/USDT.svg" alt="USDT" width={60} height={60} className="drop-shadow-lg" />
                <Image src="/icons/USDC.svg" alt="USDC" width={60} height={60} className="drop-shadow-lg" />
                <Image src="/icons/DAI.svg" alt="DAI" width={60} height={60} className="drop-shadow-lg" />
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
                What Are Stablecoins in Crypto Gambling? 📀
              </h1>
              <p className="mb-4 text-white/90 text-center max-w-2xl">
                Stablecoins are digital currencies pegged to a stable asset (like the US dollar). They’re becoming increasingly popular in crypto casinos for their stability, speed, and simplicity—combining the benefits of crypto with the peace of mind of fiat.
              </p>
            </section>
            {/* Section 1: What Is a Stablecoin? */}
            <section ref={refs.what} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
                <Image src="/icons/USDT.svg" alt="Stablecoin" width={32} height={32} />
                What Is a Stablecoin?
              </h2>
              <ul className="list-disc ml-6 text-white/90 mt-2">
                <li className="flex items-center gap-2 mb-1"><Image src="/icons/lock.svg" alt="Lock" width={18} height={18} />A stablecoin is a cryptocurrency designed to maintain a fixed value (usually 1 USD).</li>
                <li className="flex items-center gap-2 mb-1"><Image src="/icons/USDT.svg" alt="USDT" width={18} height={18} />Common examples: <b>USDT (Tether)</b>, <b>USDC (USD Coin)</b>, <b>DAI</b>.</li>
                <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Bolt" width={18} height={18} />These coins are backed by real-world assets or algorithmic systems.</li>
              </ul>
            </section>
            {/* Section 2: Why Use Stablecoins? */}
            <section ref={refs.why} className="rounded-2xl border border-green-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-600">
                <Image src="/icons/bolt.svg" alt="Why stablecoins" width={32} height={32} />
                Why Use Stablecoins?
              </h2>
              <ul className="list-disc ml-6 text-white/90 mt-2">
                <li className="flex items-center gap-2 mb-1"><Image src="/icons/lock.svg" alt="Lock" width={18} height={18} />No value fluctuations (no wild swings like Bitcoin/Ethereum)</li>
                <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Bolt" width={18} height={18} />Faster and cheaper than fiat bank transfers</li>
                <li className="flex items-center gap-2 mb-1"><Image src="/icons/shib.svg" alt="Privacy" width={18} height={18} />More privacy and control over your bankroll</li>
              </ul>
            </section>
            {/* Section 3: How to Deposit */}
            <section ref={refs.how} className="rounded-2xl border border-blue-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-blue-600">
                <Image src="/icons/bolt.svg" alt="Deposit" width={32} height={32} />
                How to Deposit with Stablecoins
              </h2>
              <ul className="list-disc ml-6 text-white/90 mt-2">
                <li className="flex items-center gap-2 mb-1"><Image src="/icons/USDT.svg" alt="USDT" width={18} height={18} />Choose a casino that supports stablecoins (USDT, USDC, DAI, etc.)</li>
                <li className="flex items-center gap-2 mb-1"><Image src="/icons/lock.svg" alt="Lock" width={18} height={18} />Send stablecoins from your wallet to the casino address</li>
                <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Bolt" width={18} height={18} />Funds are credited instantly—ready to play!</li>
              </ul>
            </section>
            {/* Section 4: Popular Stablecoins */}
            <section ref={refs.popular} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
                <Image src="/icons/USDT.svg" alt="Popular stablecoins" width={32} height={32} />
                Popular Stablecoins
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left rounded-xl overflow-hidden border border-purple-400">
                  <thead className="bg-purple-700 text-white">
                    <tr>
                      <th className="px-4 py-2">Coin</th>
                      <th className="px-4 py-2">Backing</th>
                      <th className="px-4 py-2">Networks</th>
                      <th className="px-4 py-2">Feature</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/90 text-black">
                    <tr>
                      <td className="px-4 py-2 font-semibold">USDT</td>
                      <td className="px-4 py-2">USD Reserves</td>
                      <td className="px-4 py-2">Ethereum, Tron, BSC</td>
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
            <section ref={refs.proscons} className="rounded-2xl border border-purple-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-600">
                <Image src="/icons/bolt.svg" alt="Pros & Cons" width={32} height={32} />
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
            <section ref={refs.final} className="rounded-2xl border border-green-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-700">
                <Image src="/icons/bolt.svg" alt="Final Tip" width={32} height={32} />
                Final Tip
              </h2>
              <div className="bg-yellow-300/90 border-l-4 border-yellow-600 p-4 rounded">
                Use stablecoins if you want to avoid crypto volatility — perfect for casual players, budget-minded gamblers, or consistent staking strategies.
              </div>
            </section>
          </div>
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
