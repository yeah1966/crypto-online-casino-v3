"use client";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "Is Wild Vegas Casino legit?",
    a: "Yes, Wild Vegas is a licensed crypto casino and sportsbook, offering provably fair games and fast payouts.",
  },
  {
    q: "Which cryptocurrencies can I use at Wild Vegas?",
    a: "You can play and bet with Bitcoin, Ethereum, Litecoin, USDT, and more.",
  },
  {
    q: "Does Wild Vegas offer a welcome bonus?",
    a: "Yes, new players can claim a 100% welcome bonus up to $5000 or crypto equivalent.",
  },
  {
    q: "Is KYC required?",
    a: "No, Wild Vegas allows you to play and withdraw crypto without mandatory KYC for most users.",
  },
  {
    q: "Can I bet on sports at Wild Vegas?",
    a: "Yes, Wild Vegas offers a wide range of sports betting markets, including live betting and esports.",
  },
];

export default function WildVegasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Head>
        <title>Wild Vegas Review 2025 – Crypto Casino & Sportsbook</title>
        <meta name="description" content="Read our in-depth Wild Vegas review: discover bonuses, crypto options, sports, reliability, and real user experiences. Find out if Wild Vegas is the best crypto casino and sportsbook for you!" />
        <meta name="keywords" content="Wild Vegas review, Wild Vegas experiences, crypto casino, Wild Vegas bonus, sports betting, bitcoin casino" />
        <link rel="canonical" href="https://www.yoursite.com/sports/bookmakers/wildvegas" />
      </Head>
      {/* Background image and overlay */}
      <div className="fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <div className="fixed inset-0 -z-10 bg-black/80" />
      <main className="relative min-h-screen py-12 px-2 md:px-0">
        <div className="max-w-3xl mx-auto bg-black/70 rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-yellow-400/20 text-white">
          {/* Header with logo and mascot */}
          <div className="flex items-center justify-center md:justify-between gap-4 mb-6">
            {/* Wild Vegas Logo */}
            <div className="flex-shrink-0 hidden md:block">
              <Image src="/logos/wildvegas.png" alt="Wild Vegas Logo" width={80} height={80} className="rounded-xl shadow bg-white/10" />
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg">Wild Vegas Review 2025 – Crypto Casino & Sportsbook</h1>
            </div>
            {/* Mascot */}
            <div className="flex-shrink-0 hidden md:block">
              <Image src="/mascot.png" alt="Mascot" width={72} height={72} className="rounded-full shadow-xl bg-white/10" />
            </div>
          </div>
          <p className="text-lg text-zinc-200 text-center mb-8">Wild Vegas is a new crypto casino and sportsbook with provably fair games, instant payouts, and a huge welcome bonus. Read our expert verdict and FAQ below.</p>

          {/* Pros & Cons */}
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="flex-1 bg-black/60 rounded-2xl p-5 shadow-lg">
              <h2 className="text-xl font-bold text-green-400 mb-2">Pros</h2>
              <ul className="list-disc list-inside space-y-1 text-green-100">
                <li>No KYC for crypto players</li>
                <li>Huge welcome bonus</li>
                <li>Provably fair games</li>
                <li>Fast crypto payouts</li>
                <li>Sportsbook & esports</li>
              </ul>
            </div>
            <div className="flex-1 bg-black/60 rounded-2xl p-5 shadow-lg">
              <h2 className="text-xl font-bold text-red-400 mb-2">Cons</h2>
              <ul className="list-disc list-inside space-y-1 text-red-200">
                <li>New brand, less reputation</li>
                <li>Some country restrictions</li>
                <li>No native mobile app yet</li>
              </ul>
            </div>
          </div>

          {/* Bonus & Promotions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">🎁</span>Wild Vegas Bonus & Promotions</h2>
            <p className="mb-3">New players can claim a <span className="font-bold text-yellow-200">100% welcome bonus up to $5000</span> (or crypto equivalent). Plus, enjoy reload bonuses and tournaments for loyal players.</p>
            <Link href="https://www.wildvegaslinks.com/click/11/4315/15512/1" passHref legacyBehavior>
  <a target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition text-lg mt-2">Claim your Wild Vegas Bonus</a>
</Link>
          </section>

          {/* Sports & Markets */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">🏟️</span>Sports & Markets</h2>
            <p className="mb-3">Bet on football, basketball, boxing, esports, and more. Wild Vegas offers live betting, high odds, and unique markets for crypto players.</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Football</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Basketball</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Boxing</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Esports</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Tennis</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Table Tennis</span>
            </div>
          </section>

          {/* Crypto & Payment Options */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">₿</span>Crypto & Payment Options</h2>
            <p className="mb-3">Deposit and withdraw with Bitcoin, Ethereum, Litecoin, USDT, and more. Payouts are instant and require no KYC for most users.</p>
            <div className="flex gap-5 mt-3">
              <Image src="/icons/btc.svg" alt="BTC" width={48} height={48} />
              <Image src="/icons/eth.svg" alt="ETH" width={48} height={48} />
              <Image src="/icons/ltc.svg" alt="LTC" width={48} height={48} />
              <Image src="/icons/usdt.svg" alt="USDT" width={48} height={48} />
            </div>
          </section>

          {/* User Experience & Mobile */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">📱</span>User Experience & Mobile</h2>
            <p>The Wild Vegas website is fast, mobile-friendly, and easy to use. A dedicated mobile app is in development, but the site works great on all devices.</p>
          </section>

          {/* Customer Support & Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">🔒</span>Customer Support & Security</h2>
            <p>24/7 live chat, email support, and a helpful FAQ. Wild Vegas uses advanced encryption and provably fair technology for player safety.</p>
          </section>

          {/* Our Wild Vegas Verdict */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">⭐</span>Our Wild Vegas Verdict</h2>
            <p>Wild Vegas is a promising new crypto casino and sportsbook. The combination of a huge bonus, no KYC, and provably fair games makes it a top pick for 2025.</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-3xl">8.8</span>
              <span className="text-yellow-300 font-bold">/ 10</span>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center"><span className="mr-2">❓</span>Frequently Asked Questions about Wild Vegas</h2>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={faq.q} className="border border-yellow-300/40 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center px-5 py-4 bg-black/40 hover:bg-yellow-400/10 transition text-left font-semibold text-lg"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    {faq.q}
                    <span className="ml-2 text-yellow-300">{openFaq === idx ? "–" : "+"}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-4 text-base text-zinc-200 bg-black/70">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Sticky CTA */}
          <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
            <Link href="https://www.wildvegaslinks.com/click/11/4315/15512/1" passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto bg-yellow-400 text-black font-bold px-10 py-4 rounded-full shadow-2xl text-xl hover:bg-yellow-300 transition border-4 border-yellow-300 animate-bounce"
              >
                🎯 Claim your Wild Vegas Bonus
              </a>
            </Link>
          </div>
        </div>
        {/* Schema.org FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(faq => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            })
          }}
        />
      </main>
    </>
  );
}
