"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "why", label: "Why Use Crypto?" },
  { id: "safe", label: "Is It Safe?" },
  { id: "how", label: "How It Works" },
  { id: "coins", label: "What Coins?" },
  { id: "compare", label: "Crypto vs Bank" },
];

const wallets = [
  { name: "MetaMask", icon: "/icons/MetaMask.svg", desc: "Browser wallet, easy for beginners" },
  { name: "Ledger", icon: "/icons/ledger.svg", desc: "Hardware wallet for ultimate security" },
  { name: "Coinbase Wallet", icon: "/icons/Coinbase.svg", desc: "Famous & secure, works with many coins" },
  { name: "Trust Wallet", icon: "/icons/trustwallet.svg", desc: "Mobile, secure and user-friendly" },
];

export default function CryptoPaymentsGuide() {
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
        <title>Crypto Payments at Online Casinos: Fast, Secure & Borderless 💸</title>
        <meta name="description" content="Discover why crypto payments are the fastest, safest, and most private way to play at online casinos. Learn how it works, which coins are accepted, and how to get started." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Guides", href: "/guides" },
              { name: "Crypto Payments Guide", href: "/guides/crypto-payments-guide" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Crypto Payments Guide", href: "/guides/crypto-payments-guide" }
        ]}
      />
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
              <Image src="/icons/Bitcoin.svg" alt="Bitcoin logo" width={60} height={60} className="drop-shadow-lg" />
              <Image src="/casino-icons/Roulette Wheel.svg" alt="Roulette wheel" width={60} height={60} className="drop-shadow-lg animate-bounce" />
              <Image src="/casino-icons/koc.png" alt="Step by step" width={60} height={60} className="drop-shadow-lg" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
              Crypto Payments at Online Casinos: Fast, Secure & Borderless 💸
            </h1>
            <p className="mb-4 text-white/90">
              Crypto payments are taking the online casino world by storm. Why? They’re lightning-fast, ultra-secure, and work worldwide—no banks, no borders, no hassle. Enjoy instant deposits, private play, and total control over your funds. Welcome to the future of casino payments!
            </p>
          </section>
          {/* Section 1: Why Use Crypto to Pay? */}
          <section ref={refs.why} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
              <Image src="/icons/Bitcoin.svg" alt="Bitcoin" width={32} height={32} />
              Why Use Crypto to Pay?
            </h2>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Fast" width={18} height={18} />Instant deposits & withdrawals</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/shib.svg" alt="Privacy" width={18} height={18} />Private & borderless payments</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/casino-icons/Lock.svg" alt="Security" width={18} height={18} />No bank or credit card needed</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/casino-icons/koc.png" alt="No KYC" width={18} height={18} />Often no KYC required</li>
            </ul>
          </section>
          {/* Section 2: Is It Safe? */}
          <section ref={refs.safe} className="rounded-2xl border border-green-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-600">
              <Image src="/casino-icons/Shield.svg" alt="Shield" width={32} height={32} />
              Is It Safe?
            </h2>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Blockchain" width={18} height={18} />Crypto uses blockchain technology</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/casino-icons/Lock.svg" alt="Lock" width={18} height={18} />Transactions are encrypted & secure</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/ledger.svg" alt="Ledger" width={18} height={18} />Use a hardware wallet for max safety</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/Bitcoin.svg" alt="Bitcoin" width={18} height={18} />Choose trusted casinos (see our reviews)</li>
            </ul>
          </section>
          {/* Section 3: How It Works */}
          <section ref={refs.how} className="rounded-2xl border border-blue-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-blue-600">
              <Image src="/casino-icons/Strategy Tips.svg" alt="How" width={32} height={32} />
              How Do Crypto Payments Work?
            </h2>
            <ol className="list-decimal ml-6 text-white/90 mt-2">
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/Bitcoin.svg" alt="Bitcoin" width={18} height={18} />Get crypto (buy on exchange or wallet)</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/casino-icons/Poker Chip.svg" alt="Chip" width={18} height={18} />Go to your casino & click “Deposit”</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Fast" width={18} height={18} />Send coins from your wallet</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/casino-icons/Lock.svg" alt="Lock" width={18} height={18} />Wait for confirmation (seconds–minutes)</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/casino-icons/Roulette Wheel.svg" alt="Play" width={18} height={18} />Play instantly!</li>
            </ol>
          </section>
          {/* Section 4: What Coins? */}
          <section ref={refs.coins} className="rounded-2xl border border-orange-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-orange-600">
              <Image src="/icons/Bitcoin.svg" alt="Bitcoin" width={32} height={32} />
              What Coins Can I Use?
            </h2>
            <div className="flex flex-wrap gap-4 mt-2">
              <Image src="/icons/Bitcoin.svg" alt="Bitcoin" width={38} height={38} />
              <Image src="/icons/eth.svg" alt="Ethereum" width={38} height={38} />
              <Image src="/icons/ltc.svg" alt="Litecoin" width={38} height={38} />
              <Image src="/icons/usdt.svg" alt="USDT" width={38} height={38} />
              <Image src="/icons/doge.svg" alt="Dogecoin" width={38} height={38} />
              <Image src="/icons/shib.svg" alt="Shiba Inu" width={38} height={38} />
              <Image src="/icons/ada.svg" alt="Cardano" width={38} height={38} />
              <Image src="/icons/sol.svg" alt="Solana" width={38} height={38} />
              <Image src="/icons/bnb.svg" alt="BNB" width={38} height={38} />
              <Image src="/icons/matic.svg" alt="Matic" width={38} height={38} />
            </div>
            <p className="text-white/90 mt-4">Most casinos accept Bitcoin, Ethereum, and stablecoins (USDT/USDC). Many also support altcoins like Dogecoin, Cardano, Solana, and more.</p>
          </section>
          {/* Section 5: Crypto vs Bank */}
          <section ref={refs.compare} className="rounded-2xl border border-purple-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-600">
              <Image src="/casino-icons/Bar.svg" alt="Compare" width={32} height={32} />
              Crypto vs. Bank Payments
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left rounded-xl overflow-hidden border border-purple-400">
                <thead className="bg-purple-700 text-white">
                  <tr>
                    <th className="px-4 py-2">Feature</th>
                    <th className="px-4 py-2">Crypto</th>
                    <th className="px-4 py-2">Credit Card</th>
                  </tr>
                </thead>
                <tbody className="bg-white/90 text-black">
                  <tr>
                    <td className="px-4 py-2 font-semibold">Speed</td>
                    <td className="px-4 py-2">Seconds–Minutes <Image src='/icons/bolt.svg' alt='Fast' width='18' className='inline ml-1' /></td>
                    <td className="px-4 py-2">1–5 days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Privacy</td>
                    <td className="px-4 py-2">High <Image src='/icons/shib.svg' alt='Privacy' width='18' className='inline ml-1' /></td>
                    <td className="px-4 py-2">Low</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Availability</td>
                    <td className="px-4 py-2">Global <Image src='/casino-icons/Globe.svg' alt='Global' width='18' className='inline ml-1' /></td>
                    <td className="px-4 py-2">Region-dependent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Reversibility</td>
                    <td className="px-4 py-2">No (final) <Image src='/casino-icons/Lock.svg' alt='Final' width='18' className='inline ml-1' /></td>
                    <td className="px-4 py-2">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Fees</td>
                    <td className="px-4 py-2">Low or none <Image src='/icons/ltc.svg' alt='Litecoin' width='18' className='inline ml-1' /></td>
                    <td className="px-4 py-2">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* Wallets visual block */}
          <section className="mt-8 rounded-2xl border border-green-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-green-600">
              <Image src="/fun/wallet.png" alt="Wallets" width={32} height={32} />
              Trusted Crypto Wallets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center bg-orange-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/MetaMask.svg" alt="MetaMask" width={44} height={44} className="mb-2" />
                <span className="font-bold text-yellow-300 mb-1">MetaMask</span>
                <span className="text-xs text-white/90 text-center">Browser wallet, easy for beginners</span>
                <Link href="https://metamask.io" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit MetaMask</Link>
              </div>
              <div className="flex flex-col items-center bg-gray-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/ledger.svg" alt="Ledger" width={44} height={44} className="mb-2" />
                <span className="font-bold text-gray-300 mb-1">Ledger</span>
                <span className="text-xs text-white/90 text-center">Hardware wallet for ultimate security</span>
                <Link href="https://shop.ledger.com/?r=215ab22dd019" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit Ledger</Link>
              </div>
              <div className="flex flex-col items-center bg-blue-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/Coinbase.svg" alt="Coinbase Wallet" width={44} height={44} className="mb-2" />
                <span className="font-bold text-blue-300 mb-1">Coinbase Wallet</span>
                <span className="text-xs text-white/90 text-center">Famous & secure, works with many coins</span>
                <Link href="https://www.coinbase.com/" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit Coinbase</Link>
              </div>
              <div className="flex flex-col items-center bg-cyan-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/trustwallet.svg" alt="Trust Wallet" width={44} height={44} className="mb-2" />
                <span className="font-bold text-cyan-300 mb-1">Trust Wallet</span>
                <span className="text-xs text-white/90 text-center">Mobile, secure and user-friendly</span>
                <Link href="https://trustwallet.com/" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition">Visit Trust Wallet</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
