'use client';

import React, { useRef, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "step1", label: "Step 1: Choose Casino" },
  { id: "step2", label: "Step 2: Deposit with Bitcoin" },
  { id: "wallets", label: "Best Wallets" },
  { id: "tips", label: "Tips" },
];

const wallets = [
  {
    name: "MetaMask",
    icon: "/icons/metamask.svg",
    desc: "Browser wallet, easy for beginners",
  },
  {
    name: "Coinbase Wallet",
    icon: "/icons/coinbase.svg",
    desc: "Well-known and secure, works with many coins",
  },
  {
    name: "Trust Wallet",
    icon: "/icons/trustwallet.svg",
    desc: "Mobile, secure and user-friendly",
  },
];

const advantages = [
  {
    title: "Fast Deposits",
    desc: "Blockchain transactions are instant, no bank delays.",
    icon: "/fun/dice.png",
  },
  {
    title: "No KYC",
    desc: "Deposit and play without identity checks.",
    icon: "/fun/wallet.png",
  },
  {
    title: "Privacy",
    desc: "Your data stays private at crypto casinos.",
    icon: "/fun/crypto-flames.png",
  },
];

export default function DepositWithBitcoinGuide() {
  // For sticky nav scroll
  const refs: Record<string, React.RefObject<HTMLDivElement | null>> = useMemo(
    () =>
      sections.reduce((acc, section) => {
        acc[section.id] = { current: null };
        return acc;
      }, {} as Record<string, React.RefObject<HTMLDivElement | null>>),
    []
  );

  const scrollToSection = (id) => {
    refs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full text-white">
        <Head>
          <title>How to Deposit with Bitcoin at a Crypto Casino</title>
          <meta name="description" content="Learn how to fund your crypto casino account with Bitcoin in just 5 minutes. Follow our step-by-step guide and discover the best wallets and tips!" />
        </Head>
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

        {/* Hero image */}
        <div ref={refs.intro} className="flex flex-col items-center mb-8">
          <img src="/fun/roulette.png" alt="Bitcoin roulette" width={90} height={90} className="mb-2 drop-shadow-lg animate-bounce" />
          <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
            ₿ Deposit with Bitcoin: How to Fund Your Crypto Casino Account
          </h1>
          <p className="mb-4 text-white/90">
            Learn how to start playing with crypto in just 5 minutes! Follow the steps, pick a wallet, and play instantly.
          </p>
        </div>

        {/* Step 1 */}
        <section ref={refs.step1} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
            <img src="/fun/cards.png" alt="Casino cards" width={32} height={32} />
            Step 1: Choose a Trusted Crypto Casino
          </h2>
          <ul className="list-disc pl-5 mb-4 text-white/90">
            <li className="mb-2 text-white/90">Pick a casino from our <Link href="/crypto-casino-reviews" className="text-purple-600 underline hover:text-pink-600">top list</Link></li>
            <li className="mb-2 text-white/90">Create your account (usually just email required)</li>
            <li className="mb-2 text-white/90">No KYC? Most sites let you play instantly!</li>
          </ul>
        </section>

        {/* Step 2 */}
        <section ref={refs.step2} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-pink-600">
            <img src="/fun/wallet.png" alt="Wallet" width={32} height={32} />
            Step 2: Deposit with Bitcoin or Another Coin
          </h2>
          <ol className="list-decimal pl-5 mb-4 text-white/90">
            <li className="mb-2 text-white/90">Click “Deposit” in the casino</li>
            <li className="mb-2 text-white/90">Select Bitcoin or another crypto</li>
            <li className="mb-2 text-white/90">Copy the wallet address or scan the QR code</li>
            <li className="mb-2 text-white/90">Send crypto from your own wallet (see below)</li>
            <li className="mb-2 text-white/90">Wait for blockchain confirmation (usually <b>seconds</b> to a few minutes)</li>
          </ol>
        </section>

        {/* Wallets */}
        <section ref={refs.wallets} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-green-600">
            <img src="/fun/crypto-flames.png" alt="Wallets" width={32} height={32} />
            Best Wallets for Crypto Deposits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {wallets.map((w) => (
              <div
                key={w.name}
                className="flex flex-col items-center bg-white/90 rounded-xl p-4 border-2 border-purple-300 shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <img src={w.icon} alt={w.name} width={44} height={44} className="mb-2" />
                <span className="font-bold text-black mb-1">{w.name}</span>
                <span className="text-xs text-black/70 text-center">{w.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-700">
            <img src="/fun/dice.png" alt="Dice" width={32} height={32} />
            Why Deposit with Crypto?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {advantages.map((a) => (
              <div key={a.title} className="flex flex-col items-center bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-100 rounded-xl p-4 border-2 border-yellow-400 shadow hover:scale-105 transition-transform duration-200">
                <img src={a.icon} alt={a.title} width={36} height={36} className="mb-2" />
                <span className="font-bold text-black mb-1">{a.title}</span>
                <span className="text-xs text-black/70 text-center">{a.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section ref={refs.tips} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-pink-700">
            <img src="/fun/tropic-palms.png" alt="Tips" width={32} height={32} />
            Tips for Fast & Secure Deposits
          </h2>
          <ul className="list-disc pl-5 mb-4 text-white/90">
            <li className="mb-2 text-white/90">Always double-check the wallet address before sending</li>
            <li className="mb-2 text-white/90">Use a trusted wallet (see above)</li>
            <li className="mb-2 text-white/90">Try a small test deposit first</li>
            <li className="mb-2 text-white/90">Watch out for network fees during busy times</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <Link
            href="/crypto-casino-reviews"
            className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 hover:from-yellow-300 hover:to-pink-300 transition-all duration-300 hover:shadow-[0_0_30px_#fbbf24]"
          >
            🎰 View Top Crypto Casinos
          </Link>
        </div>
      </div>
    </main>
  );
}
