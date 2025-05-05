import React from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import { useTranslation } from "next-i18next";

export default function GettingStarted() {
  const { i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>Getting Started with Crypto Casinos (2025) | Step-by-Step Guide</title>
        <meta name="description" content="Learn how to start with crypto casinos: set up a wallet, buy crypto, claim bonuses, and play safely. Step-by-step guide for beginners and advanced players." />
      </Head>
      <div className="min-h-screen bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed text-white px-4 pt-24 pb-10">
        <div className="bg-black/65 backdrop-blur-lg max-w-3xl mx-auto rounded-2xl p-6 md:p-10 shadow-xl text-white/90">
          <main className="max-w-3xl mx-auto px-4 py-12 text-white">
            {i18n.language === "es" && (
              <div className="bg-yellow-400 text-black rounded-lg px-4 py-2 mb-6 text-center font-semibold text-lg shadow">
                ¡Pronto disponible en español!
              </div>
            )}
            <h1 className="text-4xl font-bold mb-8">Getting Started with Crypto Casinos</h1>
            <p className="mb-6 text-lg text-gray-200">
              New to crypto casinos? This guide explains everything you need to know to get started—safe, fast, and with the best bonuses. Whether you’re a beginner or an experienced player, follow these steps to play with Bitcoin, Ethereum, and more.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 1: Set Up a Crypto Wallet</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Choose a wallet (hardware, software, or mobile app). <Link href="/blog/crypto-wallets-101" className="text-purple-400 underline">Read our wallet guide</Link>.</li>
              <li>Write down your recovery phrase and keep it safe.</li>
              <li>Never share your private key or seed phrase.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 2: Buy Cryptocurrency</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Buy Bitcoin, Ethereum, or another supported coin on a trusted exchange (e.g. Coinbase, Binance).</li>
              <li>Transfer your crypto from the exchange to your own wallet address.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 3: Choose a Crypto Casino</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Pick a reputable casino with good reviews and a license. <Link href="/crypto-casino-reviews" className="text-purple-400 underline">See our reviews</Link>.</li>
              <li>Look for provably fair games and strong security.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 4: Claim Your Bonus</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Check out the latest <Link href="/best-crypto-casino-bonuses" className="text-purple-400 underline">crypto casino bonuses</Link> for new players.</li>
              <li>Want a free start? <Link href="/no-deposit" className="text-purple-400 underline">No deposit bonuses</Link> and <Link href="/free-spins" className="text-purple-400 underline">free spins</Link> are available!</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Step 5: Deposit & Play</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Go to the casino’s cashier, choose your crypto, and send the amount from your wallet.</li>
              <li>Start playing provably fair slots, live games, or poker.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips for Safe & Smart Gambling</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Always use 2FA and strong passwords.</li>
              <li>Set a budget and stick to it.</li>
              <li>Check out our <Link href="/faq" className="text-purple-400 underline">FAQ</Link> for more tips and answers.</li>
            </ul>

            <div className="bg-yellow-900 rounded p-6 mt-8 text-center">
              <h3 className="text-lg font-bold mb-2">Ready to start?</h3>
              <Link href="/best-crypto-casino-bonuses" className="inline-block bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-300 transition">Claim your bonus now</Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
