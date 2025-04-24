"use client";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "why", label: "Why Use Crypto?" },
  { id: "safe", label: "Is It Safe?" },
  { id: "how", label: "How It Works" },
  { id: "coins", label: "What Coins?" },
  { id: "compare", label: "Crypto vs Bank" },
];

const wallets = [
  { name: "MetaMask", icon: "/icons/metamask.svg", desc: "Browser wallet, easy for beginners" },
  { name: "Ledger", icon: "/icons/ledger.svg", desc: "Hardware wallet for ultimate security" },
  { name: "Coinbase Wallet", icon: "/icons/coinbase.svg", desc: "Famous & secure, works with many coins" },
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
      </Head>
      <div className="min-h-screen flex justify-center py-10 px-2">
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
            <img src="/fun/roulette.png" alt="Crypto roulette" width={90} height={90} className="mb-2 drop-shadow-lg animate-bounce" />
            <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
              Crypto Payments at Online Casinos: Fast, Secure & Borderless 💸
            </h1>
            <p className="mb-4 text-white/90">
              Crypto payments are taking the online casino world by storm. Why? They’re lightning-fast, ultra-secure, and work worldwide—no banks, no borders, no hassle. Enjoy instant deposits, private play, and total control over your funds. Welcome to the future of casino payments!
            </p>
          </div>

          {/* Section 1: Why Use Crypto to Pay? */}
          <section ref={refs.why} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
              <img src="/fun/wallet.png" alt="Wallet" width={32} height={32} />
              Why Use Crypto to Pay?
            </h2>
            <ul className="list-disc pl-5 mb-4 text-white/90">
              <li className="mb-2 text-white/90">Instant deposits & fast withdrawals</li>
              <li className="mb-2 text-white/90">No banks, no fees, no delays</li>
              <li className="mb-2 text-white/90">Worldwide accessibility (even in restricted countries)</li>
              <li className="mb-2 text-white/90">Greater privacy (no card data, no banking info)</li>
              <li className="mb-2 text-white/90">Works 24/7 — even on holidays</li>
            </ul>
          </section>

          {/* Section 2: Is It Safe? */}
          <section ref={refs.safe} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-700">
              <img src="/fun/crypto-flames.png" alt="Safe" width={32} height={32} />
              Is It Safe?
            </h2>
            <ul className="list-disc pl-5 mb-4 text-white/90">
              <li className="mb-2 text-white/90">End-to-end encryption</li>
              <li className="mb-2 text-white/90">Transparent transactions on the blockchain</li>
              <li className="mb-2 text-white/90">Trusted wallets (MetaMask, Ledger, Coinbase Wallet)</li>
              <li className="mb-2 text-white/90">Reputable casinos only use secure payment methods</li>
            </ul>
          </section>

          {/* Section 3: How It Works – Step-by-Step */}
          <section ref={refs.how} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-pink-600">
              <img src="/fun/dice.png" alt="How it works" width={32} height={32} />
              How It Works – Step-by-Step
            </h2>
            <ol className="list-decimal pl-5 mb-4 text-white/90">
              <li className="mb-2 text-white/90">Create a crypto wallet</li>
              <li className="mb-2 text-white/90">Buy crypto (BTC, ETH, USDT, etc.)</li>
              <li className="mb-2 text-white/90">Copy the casino’s deposit address</li>
              <li className="mb-2 text-white/90">Send from your wallet</li>
              <li className="mb-2 text-white/90">Your casino balance updates within seconds or minutes</li>
            </ol>
            <p className="mb-4 text-white/90">
              <span className="text-2xl">➕</span>
              <span className="text-white/90">Tip: always double-check the casino address before sending.</span>
            </p>
          </section>

          {/* Section 4: What Coins Are Accepted? */}
          <section ref={refs.coins} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-700">
              <img src="/fun/cards.png" alt="Coins" width={32} height={32} />
              What Coins Are Accepted?
            </h2>
            <ul className="list-disc pl-5 mb-4 text-white/90">
              <li className="mb-2 text-white/90">Bitcoin (BTC)</li>
              <li className="mb-2 text-white/90">Ethereum (ETH)</li>
              <li className="mb-2 text-white/90">Litecoin (LTC)</li>
              <li className="mb-2 text-white/90">USDT (Tether)</li>
              <li className="mb-2 text-white/90">BNB / DOGE / XRP (some casinos)</li>
            </ul>
            <p className="mb-4 text-white/90">
              <span className="text-xl">💡</span>
              <span className="text-white/90">Each coin has different speed & cost. USDT = stable, ETH = fast, BTC = most popular.</span>
            </p>
          </section>

          {/* Section 5: Crypto vs Bank Payments Table */}
          <section ref={refs.compare} className="mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-700">
              <img src="/fun/roulette.png" alt="Compare" width={32} height={32} />
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
                    <td className="px-4 py-2">Seconds–Minutes</td>
                    <td className="px-4 py-2">1–5 days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Privacy</td>
                    <td className="px-4 py-2">High</td>
                    <td className="px-4 py-2">Low</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Availability</td>
                    <td className="px-4 py-2">Global</td>
                    <td className="px-4 py-2">Region-dependent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Reversibility</td>
                    <td className="px-4 py-2">No (final)</td>
                    <td className="px-4 py-2">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold">Fees</td>
                    <td className="px-4 py-2">Low or none</td>
                    <td className="px-4 py-2">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA Block */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 mb-4">
            <Link
              href="/bonus-wheel"
              className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 hover:from-yellow-300 hover:to-pink-300 transition-all duration-300 hover:shadow-[0_0_30px_#fbbf24]"
            >
              🎡 Spin the Bonus Wheel
            </Link>
            <Link
              href="/crypto-casino-reviews"
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 hover:from-purple-300 hover:to-yellow-300 transition-all duration-300 hover:shadow-[0_0_30px_#a78bfa]"
            >
              🏆 View Top Crypto Casinos
            </Link>
          </div>

          {/* Wallets visual block */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-green-600">
              <img src="/fun/wallet.png" alt="Wallets" width={32} height={32} />
              Trusted Crypto Wallets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
        </div>
      </div>
    </>
  );
}
