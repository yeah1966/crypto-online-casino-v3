'use client';

import React, { useRef, useMemo } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "step1", label: "Step 1: Choose Casino" },
  { id: "step2", label: "Step 2: Deposit with Bitcoin" },
  { id: "wallets", label: "Best Wallets" },
  { id: "tips", label: "Tips" },
];

const advantages = [
  {
    title: "Fast Deposits",
    desc: "Blockchain transactions are instant, no bank delays.",
    icon: "/icons/bolt.svg",
  },
  {
    title: "No KYC",
    desc: "Deposit and play without identity checks.",
    icon: "/casino-icons/koc.png",
  },
  {
    title: "Privacy",
    desc: "Your data stays private at crypto casinos.",
    icon: "/icons/shib.svg",
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
          {/* Hero image */}
          <section ref={refs.intro} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col items-center gap-2">
            <div className="flex flex-row items-center gap-4 mb-2">
              <Image src="/icons/Bitcoin.svg" alt="Bitcoin logo" width={60} height={60} className="drop-shadow-lg" />
              <Image src="/casino-icons/Roulette Wheel.svg" alt="Roulette wheel" width={60} height={60} className="drop-shadow-lg animate-bounce" />
              <Image src="/casino-icons/koc.png" alt="Step by step" width={60} height={60} className="drop-shadow-lg" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
              ₿ Deposit with Bitcoin: How to Fund Your Crypto Casino Account
            </h1>
            <p className="mb-4 text-white/90">
              Learn how to start playing with crypto in just 5 minutes! Follow the steps, pick a wallet, and play instantly.
            </p>
          </section>
          {/* Step 1 */}
          <section ref={refs.step1} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
              <Image src="/casino-icons/Poker Chip.svg" alt="Casino chip" width={32} height={32} />
              Step 1: Choose a Crypto Casino
            </h2>
            <p className="text-white/90">
              Pick a trusted crypto casino that accepts Bitcoin. Check our <Link href="/crypto-casino-reviews" className="underline text-pink-400 hover:text-yellow-300">reviews</Link> for the best options.
            </p>
          </section>
          {/* Step 2 */}
          <section ref={refs.step2} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-blue-600">
              <Image src="/icons/Bitcoin.svg" alt="Bitcoin" width={32} height={32} />
              <Image src="/fun/wallet.png" alt="Wallet" width={32} height={32} />
              Step 2: Deposit with Bitcoin or Another Coin
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-white/90">
              <li className="mb-2 text-white/90 flex items-center gap-2"><Image src="/casino-icons/Diamond 1.svg" alt="Diamond" width={18} height={18} />Click “Deposit” in the casino</li>
              <li className="mb-2 text-white/90 flex items-center gap-2"><Image src="/icons/Bitcoin.svg" alt="Bitcoin" width={18} height={18} />Select Bitcoin or another crypto</li>
              <li className="mb-2 text-white/90 flex items-center gap-2"><Image src="/casino-icons/Poker Chip.svg" alt="Chip" width={18} height={18} />Copy the wallet address or scan the QR code</li>
              <li className="mb-2 text-white/90 flex items-center gap-2"><Image src="/icons/MetaMask.svg" alt="Wallet" width={18} height={18} />Send crypto from your own wallet (see below)</li>
              <li className="mb-2 text-white/90 flex items-center gap-2"><Image src="/icons/bolt.svg" alt="Lightning" width={18} height={18} />Wait for blockchain confirmation (usually <b>seconds</b> to a few minutes)</li>
            </ol>
          </section>
          {/* Wallets */}
          <section ref={refs.wallets} className="rounded-2xl border border-green-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-green-600">
              <Image src="/fun/crypto-flames.png" alt="Wallets" width={32} height={32} />
              Best Wallets for Crypto Deposits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-orange-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/MetaMask.svg" alt="MetaMask" width={44} height={44} className="mb-2" />
                <span className="font-bold text-yellow-300 mb-1">MetaMask</span>
                <span className="text-xs text-white/90 text-center">Browser wallet, easy for beginners</span>
                <Link href="https://metamask.io" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit MetaMask</Link>
              </div>
              <div className="flex flex-col items-center bg-blue-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/Coinbase.svg" alt="Coinbase Wallet" width={44} height={44} className="mb-2" />
                <span className="font-bold text-blue-300 mb-1">Coinbase Wallet</span>
                <span className="text-xs text-white/90 text-center">Well-known and secure, works with many coins</span>
                <Link href="https://www.coinbase.com/" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit Coinbase</Link>
              </div>
              <div className="flex flex-col items-center bg-cyan-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/Trust Wallet.svg" alt="Trust Wallet" width={44} height={44} className="mb-2" />
                <span className="font-bold text-cyan-300 mb-1">Trust Wallet</span>
                <span className="text-xs text-white/90 text-center">Mobile, secure and user-friendly</span>
                <Link href="https://trustwallet.com/" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit Trust Wallet</Link>
              </div>
            </div>
          </section>
          {/* Advantages */}
          <section className="rounded-2xl border border-orange-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-700">
              <Image src="/icons/bolt.svg" alt="Lightning" width={32} height={32} />
              Why Deposit with Crypto?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-100 rounded-xl p-4 border-2 border-yellow-400 shadow hover:scale-105 transition-transform duration-200">
                <Image src="/icons/bolt.svg" alt="Fast" width={36} height={36} className="mb-2" />
                <span className="font-bold text-black mb-1">Fast Deposits</span>
                <span className="text-xs text-black/70 text-center">Blockchain transactions are instant, no bank delays.</span>
              </div>
              <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-100 rounded-xl p-4 border-2 border-yellow-400 shadow hover:scale-105 transition-transform duration-200">
                <Image src="/casino-icons/koc.png" alt="No KYC" width={36} height={36} className="mb-2" />
                <span className="font-bold text-black mb-1">No KYC</span>
                <span className="text-xs text-black/70 text-center">Deposit and play without identity checks.</span>
              </div>
              <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 via-pink-100 to-purple-100 rounded-xl p-4 border-2 border-yellow-400 shadow hover:scale-105 transition-transform duration-200">
                <Image src="/icons/shib.svg" alt="Privacy" width={36} height={36} className="mb-2" />
                <span className="font-bold text-black mb-1">Privacy</span>
                <span className="text-xs text-black/70 text-center">Your data stays private at crypto casinos.</span>
              </div>
            </div>
          </section>
          {/* Tips */}
          <section ref={refs.tips} className="rounded-2xl border border-purple-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-pink-700">
              <Image src="/casino-icons/Lock.svg" alt="Tips" width={32} height={32} />
              Tips for Fast & Secure Deposits
            </h2>
            <ul className="list-disc pl-5 mb-4 text-white/90">
              <li className="mb-2 text-white/90 flex items-center gap-2"><Image src="/casino-icons/Lock.svg" alt="Lock" width={18} height={18} />Always double-check the wallet address before sending</li>
              <li className="mb-2 text-white/90 flex items-center gap-2"><Image src="/icons/MetaMask.svg" alt="Wallet" width={18} height={18} />Use a trusted wallet (see above)</li>
              <li className="mb-2 text-white/90 flex items-center gap-2"><Image src="/icons/bolt.svg" alt="Lightning" width={18} height={18} />Try a small test deposit first</li>
              <li className="mb-2 text-white/90 flex items-center gap-2"><Image src="/icons/eth.svg" alt="Ethereum" width={18} height={18} />Watch out for network fees during busy times</li>
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
      </div>
    </main>
  );
}
