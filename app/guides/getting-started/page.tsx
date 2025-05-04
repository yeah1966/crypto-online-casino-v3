'use client';
import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";

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
        <title>Getting Started at Crypto Casinos</title>
        <meta name="description" content="A practical beginner's guide: how to start safely with crypto casinos, wallets, coins and your first deposit." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Guides", href: "/guides" },
              { name: "Getting Started", href: "/guides/getting-started" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Getting Started", href: "/guides/getting-started" }
        ]}
      />
      <main>
        <div className="relative rounded-3xl bg-black/65 shadow-2xl border-2 border-yellow-400 p-8 md:p-12 space-y-10 max-w-6xl mx-auto mt-6">
          <nav className="flex flex-wrap gap-2 justify-center mb-8">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="px-4 py-1 rounded-full bg-yellow-300/80 text-purple-900 font-bold text-sm hover:bg-yellow-400 transition-all border-2 border-yellow-400 shadow"
              >
                {s.label.replace('Stap', 'Step')}
              </button>
            ))}
          </nav>
          <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
            <section className="w-full flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Image src="/casino-icons/Big Win.svg" alt="Big Win" width={48} height={48} className="mb-2" />
                <Image src="/casino-icons/777.svg" alt="777" width={44} height={44} className="mb-2" />
                <span className="text-yellow-300 text-3xl md:text-5xl font-black drop-shadow">Getting Started at Crypto Casinos</span>
                <Image src="/casino-icons/Bonus.svg" alt="Bonus" width={44} height={44} className="mb-2" />
                <Image src="/casino-icons/Cherry.svg" alt="Cherry" width={40} height={40} className="mb-2" />
              </div>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">New to crypto casinos? This guide explains exactly how to create an account, deposit safely with crypto, and start playing — in minutes.</p>
            </section>
            <section ref={refs.step1} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="font-extrabold text-lg text-yellow-200">Step 1: Account</h2>
              <p className="text-white/90">Sign up with just an email — no KYC, no hassle. Choose a trusted crypto casino from our <Link href="/crypto-casino-reviews" className="underline text-pink-400 hover:text-yellow-300">reviews</Link>.</p>
            </section>
            <section ref={refs.step2} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="font-extrabold text-lg text-yellow-200">Step 2: Deposit</h2>
              <p className="text-white/90">Make a deposit in BTC, ETH or LTC. Blockchain transactions are fast and secure. See our <Link href="/crypto-payments-guide" className="underline text-pink-400 hover:text-yellow-300">crypto payments guide</Link>.</p>
            </section>
            <section ref={refs.safety} className="rounded-2xl border border-green-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="font-extrabold text-lg text-green-300">Safety</h2>
              <p className="text-white/90">Crypto casinos use end-to-end encryption and blockchain verification. Always choose a trusted site and keep your seed phrase safe.</p>
            </section>
            <section ref={refs.play} className="rounded-2xl border border-blue-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="font-extrabold text-lg text-blue-300">Play</h2>
              <p className="text-white/90">Play instantly after your deposit. Most crypto casinos offer thousands of slots, live games and table games.</p>
            </section>
            <section ref={refs.tips} className="rounded-2xl border border-purple-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="font-extrabold text-lg text-purple-300">Tips</h2>
              <ul className="list-disc pl-5 mb-4 text-white/90">
                <li className="mb-2">Choose a casino with a good reputation</li>
                <li className="mb-2">Use a hardware wallet for large amounts</li>
                <li className="mb-2">Always read the bonus terms</li>
              </ul>
            </section>
            <section ref={refs.advantages} className="rounded-2xl border border-orange-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="font-extrabold text-lg text-orange-300">Advantages</h2>
              <ul className="list-disc pl-5 mb-4 text-white/90">
                {advantages.map((adv) => (
                  <li key={adv.title} className="mb-2">{adv.title}: {adv.desc}</li>
                ))}
              </ul>
            </section>
            <section ref={refs.wallets} className="rounded-2xl border border-teal-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
              <h2 className="font-extrabold text-lg text-teal-300">Wallets</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex flex-col items-center gap-1 bg-purple-800/60 rounded-lg p-3 shadow">
                  <Image src="/icons/metamask.svg" alt="MetaMask" width={32} height={32} />
                  <span className="font-bold text-yellow-300 mb-1">MetaMask</span>
                  <span className="text-xs text-white/90 text-center">Browser wallet, easy for beginners</span>
                  <Link href="https://metamask.io" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit MetaMask</Link>
                </div>
                <div className="flex flex-col items-center gap-1 bg-purple-800/60 rounded-lg p-3 shadow">
                  <Image src="/icons/coinbase.svg" alt="Coinbase Wallet" width={32} height={32} />
                  <span className="font-bold text-yellow-300 mb-1">Coinbase Wallet</span>
                  <span className="text-xs text-white/90 text-center">Well-known and secure, works with many coins</span>
                  <Link href="https://www.coinbase.com/" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit Coinbase</Link>
                </div>
                <div className="flex flex-col items-center gap-1 bg-purple-800/60 rounded-lg p-3 shadow">
                  <Image src="/icons/trustwallet.svg" alt="Trust Wallet" width={32} height={32} />
                  <span className="font-bold text-yellow-300 mb-1">Trust Wallet</span>
                  <span className="text-xs text-white/90 text-center">Mobile, secure and user-friendly</span>
                  <Link href="https://trustwallet.com/" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit Trust Wallet</Link>
                </div>
                <div className="flex flex-col items-center gap-1 bg-purple-800/60 rounded-lg p-3 shadow">
                  <Image src="/icons/ledger.svg" alt="Ledger" width={32} height={32} />
                  <span className="font-bold text-yellow-300 mb-1">Ledger</span>
                  <span className="text-xs text-white/90 text-center">Hardware wallet for ultimate security</span>
                  <Link href="https://shop.ledger.com/?r=215ab22dd019" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit Ledger (aff.)</Link>
                </div>
                <div className="flex flex-col items-center gap-1 bg-purple-800/60 rounded-lg p-3 shadow">
                  <Image src="/icons/binance.svg" alt="Binance Wallet" width={32} height={32} />
                  <span className="font-bold text-yellow-300 mb-1">Binance Wallet</span>
                  <span className="text-xs text-white/90 text-center">Popular in EU/Asia, easy deposits</span>
                  <Link href="https://www.binance.com/en/binancewallet" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit Binance Wallet</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
