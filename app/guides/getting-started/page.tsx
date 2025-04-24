'use client';
import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "step1", label: "Step 1: Account" },
  { id: "step2", label: "Step 2: Deposit" },
  { id: "safety", label: "Safety" },
  { id: "play", label: "Play" },
  { id: "tips", label: "Tips" },
  { id: "advantages", label: "Advantages" },
  { id: "wallets", label: "Wallets" },
];

const wallets = [
  { name: "MetaMask", icon: "/icons/metamask.svg", desc: "Browser wallet, easy for beginners" },
  { name: "Coinbase Wallet", icon: "/icons/coinbase.svg", desc: "Well-known and secure, works with many coins" },
  { name: "Trust Wallet", icon: "/icons/trustwallet.svg", desc: "Mobile, secure and user-friendly" },
  { name: "Ledger", icon: "/icons/ledger.svg", desc: "Hardware wallet for ultimate security" },
  { name: "Binance Wallet", icon: "/icons/binance.svg", desc: "Popular in EU/Asia, easy deposits" },
];

const advantages = [
  { title: "No KYC (usually)", desc: "Sign up with just an email", icon: "/fun/wallet.png" },
  { title: "Fast Deposits", desc: "Blockchain transactions = seconds", icon: "/fun/dice.png" },
  { title: "Instant Play", desc: "No credit card delays, no banking hours", icon: "/fun/roulette.png" },
  { title: "Anonymous", desc: "Privacy by default", icon: "/fun/crypto-flames.png" },
  { title: "Big Bonuses", desc: "Casinos reward crypto players better", icon: "/fun/cards.png" },
];

export default function GettingStartedGuide() {
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
        <title>How to Start Playing at a Crypto Casino (Getting Started Guide)</title>
        <meta name="description" content="New to crypto casinos? This guide explains exactly how to create an account, deposit safely with crypto, and start playing — in minutes." />
      </Head>
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full text-white">
          {/* VEGAS BACKGROUND + OVERLAY */}
          <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat animate-pulse" aria-hidden="true" />
          <div className="fixed inset-0 -z-10 backdrop-blur-[2px]" aria-hidden="true" />
          {/* HERO SECTION */}
          <section className="w-full pt-24 pb-10 flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image src="/casino-icons/Big Win.svg" alt="Big Win" width={48} height={48} className="mb-2 drop-shadow-lg animate-bounce" />
              <Image src="/casino-icons/777.svg" alt="777" width={44} height={44} className="mb-2 drop-shadow-lg animate-spin-slow" />
              <span className="text-yellow-300 text-3xl md:text-5xl font-black drop-shadow">Getting Started at Crypto Casinos</span>
              <Image src="/casino-icons/Bonus.svg" alt="Bonus" width={44} height={44} className="mb-2 drop-shadow-lg animate-wiggle" />
              <Image src="/casino-icons/Cherry.svg" alt="Cherry" width={40} height={40} className="mb-2 drop-shadow-lg animate-bounce" />
            </div>
            <p className="mb-4 text-white/90 max-w-2xl mx-auto">
              New to crypto casinos? This guide explains exactly how to create an account, deposit safely with crypto, and start playing — in minutes.
            </p>
          </section>
          {/* Sticky submenu */}
          <nav className="sticky top-4 z-30 mb-8 flex gap-2 flex-wrap justify-center md:justify-start">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="px-3 py-1 rounded-full bg-purple-800/80 text-yellow-300 font-bold text-sm hover:bg-yellow-300 hover:text-pink-700 transition-all border-2 border-yellow-300 shadow"
              >
                {s.label}
              </button>
            ))}
          </nav>
          {/* Content blocks */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1: Account */}
            <section ref={refs.step1} className="bg-purple-900/80 rounded-2xl shadow-2xl p-6 flex flex-col items-center border-4 border-yellow-400/60">
              <Image src="/casino-icons/Ace of Spades Card.svg" alt="Ace of Spades" width={40} height={40} className="mb-2 animate-wiggle" />
              <h2 className="text-yellow-300 font-extrabold text-xl mb-2 uppercase tracking-wide">Step 1: Account</h2>
              <p className="text-white/90 text-center">Sign up with just an email — no KYC, no hassle. Choose a trusted crypto casino from onze <Link href="/crypto-casino-reviews" className="text-pink-400 underline hover:text-yellow-300">reviews</Link>.</p>
            </section>
            {/* Step 2: Deposit */}
            <section ref={refs.step2} className="bg-purple-900/80 rounded-2xl shadow-2xl p-6 flex flex-col items-center border-4 border-pink-400/60">
              <Image src="/casino-icons/Dices.svg" alt="Dices" width={40} height={40} className="mb-2 animate-bounce" />
              <h2 className="text-yellow-300 font-extrabold text-xl mb-2 uppercase tracking-wide">Step 2: Deposit</h2>
              <p className="text-white/90 text-center">Maak een storting in BTC, ETH of LTC. Blockchain-transacties zijn snel en veilig. Zie onze <Link href="/guides/crypto-payments-guide" className="text-pink-400 underline hover:text-yellow-300">crypto payments guide</Link>.</p>
            </section>
            {/* Safety */}
            <section ref={refs.safety} className="bg-purple-900/80 rounded-2xl shadow-2xl p-6 flex flex-col items-center border-4 border-green-400/60">
              <Image src="/casino-icons/Crown.svg" alt="Crown" width={40} height={40} className="mb-2 animate-spin-slow" />
              <h2 className="text-yellow-300 font-extrabold text-xl mb-2 uppercase tracking-wide">Safety</h2>
              <p className="text-white/90 text-center">Crypto casinos gebruiken end-to-end encryptie en blockchain-verificatie. Kies altijd voor een betrouwbare site en bewaar je seed phrase veilig.</p>
            </section>
            {/* Play */}
            <section ref={refs.play} className="bg-purple-900/80 rounded-2xl shadow-2xl p-6 flex flex-col items-center border-4 border-blue-400/60">
              <Image src="/casino-icons/Slot Machine.svg" alt="Slot Machine" width={40} height={40} className="mb-2 animate-bounce" />
              <h2 className="text-yellow-300 font-extrabold text-xl mb-2 uppercase tracking-wide">Play</h2>
              <p className="text-white/90 text-center">Speel direct na je storting. De meeste crypto casino’s bieden duizenden slots, live games en tafelspellen.</p>
            </section>
            {/* Tips */}
            <section ref={refs.tips} className="bg-purple-900/80 rounded-2xl shadow-2xl p-6 flex flex-col items-center border-4 border-purple-400/60 md:col-span-2">
              <Image src="/casino-icons/Lucky Charm.svg" alt="Lucky Charm" width={40} height={40} className="mb-2 animate-wiggle" />
              <h2 className="text-yellow-300 font-extrabold text-xl mb-2 uppercase tracking-wide">Tips</h2>
              <ul className="list-disc pl-5 mb-4 text-white/90">
                <li className="mb-2 text-white/90">Kies een casino met een goede reputatie</li>
                <li className="mb-2 text-white/90">Gebruik een hardware wallet voor grote bedragen</li>
                <li className="mb-2 text-white/90">Lees de bonusvoorwaarden goed</li>
              </ul>
            </section>
            {/* Advantages */}
            <section ref={refs.advantages} className="bg-purple-900/80 rounded-2xl shadow-2xl p-6 flex flex-col items-center border-4 border-orange-400/60 md:col-span-2">
              <Image src="/casino-icons/Diamond 1.svg" alt="Diamond" width={40} height={40} className="mb-2 animate-bounce" />
              <h2 className="text-yellow-300 font-extrabold text-xl mb-2 uppercase tracking-wide">Advantages</h2>
              <ul className="list-disc pl-5 mb-4 text-white/90">
                {advantages.map((adv) => (
                  <li key={adv.title} className="mb-2 text-white/90">{adv.title}: {adv.desc}</li>
                ))}
              </ul>
            </section>
            {/* Wallets */}
            <section ref={refs.wallets} className="bg-purple-900/80 rounded-2xl shadow-2xl p-6 flex flex-col items-center border-4 border-teal-400/60 md:col-span-2">
              <Image src="/casino-icons/Credit Card.svg" alt="Credit Card" width={40} height={40} className="mb-2 animate-spin-slow" />
              <h2 className="text-yellow-300 font-extrabold text-xl mb-2 uppercase tracking-wide">Wallets</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {wallets.map((w) => (
                  <div key={w.name} className="flex flex-col items-center gap-1 bg-purple-800/60 rounded-lg p-3 shadow">
                    <Image src={w.icon} alt={w.name} width={32} height={32} />
                    <span className="font-bold text-yellow-300 mb-1">{w.name}</span>
                    <span className="text-xs text-white/90 text-center">{w.desc}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
