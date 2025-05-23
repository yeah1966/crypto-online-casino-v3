"use client";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "Is Cloudbet a trustworthy crypto sportsbook?",
    a: "Yes, Cloudbet has been operating since 2013, is fully licensed, and is known for its reliability and fast crypto payouts.",
  },
  {
    q: "Which cryptocurrencies does Cloudbet accept?",
    a: "You can bet with Bitcoin, Ethereum, Litecoin, USDT, USDC, BNB, TRX, and more.",
  },
  {
    q: "Is there a welcome bonus for new players?",
    a: "Yes, new players can claim a 100% deposit bonus up to 5 BTC or equivalent in other cryptocurrencies.",
  },
  {
    q: "Is KYC mandatory at Cloudbet?",
    a: "For most crypto deposits and withdrawals, KYC is not required unless you reach high withdrawal limits.",
  },
  {
    q: "Can I place live bets at Cloudbet?",
    a: "Yes, Cloudbet offers live betting and HD streaming for a wide range of sports events.",
  },
];

export default function CloudbetSportsbookPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Cloudbet Review 2025 – Best Crypto Sportsbook?</title>
        <meta name="description" content="Read our in-depth Cloudbet review: discover bonuses, crypto options, sports markets, reliability, and real user experiences. Find out if Cloudbet is the best crypto sportsbook for you!" />
        <meta name="keywords" content="Cloudbet review, Cloudbet experiences, crypto sportsbook, Cloudbet bonus, sports betting, bitcoin betting" />
        <link rel="canonical" href="https://www.yoursite.com/sports/bookmakers/cloudbet" />
      </Head>
      {/* Background image and overlay */}
      <div className="fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <div className="fixed inset-0 -z-10 bg-black/80" />
      <main className="relative min-h-screen py-12 px-2 md:px-0">
        <div className="max-w-3xl mx-auto bg-black/70 rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-yellow-400/20 text-white">
          {/* Header with logo and mascot */}
          <div className="flex items-center justify-center md:justify-between gap-4 mb-6">
            {/* Cloudbet Logo */}
            <div className="flex-shrink-0 hidden md:block">
              <Image src="/logos/cloudbet.png" alt="Cloudbet Logo" width={80} height={80} className="rounded-xl shadow bg-white/10" />
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg">Cloudbet Review 2025 – Best Crypto Sportsbook?</h1>
            </div>
            {/* Mascot */}
            <div className="flex-shrink-0 hidden md:block">
              <Image src="/mascot.png" alt="Mascot" width={72} height={72} className="rounded-full shadow-xl bg-white/10" />
            </div>
          </div>
          <p className="text-lg text-zinc-200 text-center mb-8">Cloudbet is one of the world’s most established crypto sportsbooks. Read all about bonuses, crypto options, sports markets, reliability, and our expert verdict.</p>

          {/* Pros & Cons */}
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="flex-1 bg-black/60 rounded-2xl p-5 shadow-lg">
              <h2 className="text-xl font-bold text-green-400 mb-2">Pros</h2>
              <ul className="list-disc list-inside space-y-1 text-green-100">
                <li>Instant crypto deposits & payouts</li>
                <li>Wide range of sports & markets</li>
                <li>Generous welcome bonus</li>
                <li>Live betting & HD streaming</li>
                <li>No KYC for crypto players</li>
              </ul>
            </div>
            <div className="flex-1 bg-black/60 rounded-2xl p-5 shadow-lg">
              <h2 className="text-xl font-bold text-red-400 mb-2">Cons</h2>
              <ul className="list-disc list-inside space-y-1 text-red-200">
                <li>Some country restrictions</li>
                <li>Bonus terms can be strict</li>
                <li>Interface can be overwhelming for beginners</li>
              </ul>
            </div>
          </div>

          {/* Bonus & Promotions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">🎁</span>Cloudbet Bonus & Promotions</h2>
            <p className="mb-3">New players can claim a <span className="font-bold text-yellow-200">100% deposit bonus up to 5 BTC</span> or equivalent in other crypto. Plus, enjoy regular free bets, reload bonuses, and exclusive tournaments.</p>
            <Link href="https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo" passHref legacyBehavior>
  <a target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition text-lg mt-2">Claim your Cloudbet Bonus</a>
</Link>
          </section>

          {/* Sports & Markets */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">🏟️</span>Sports & Markets</h2>
            <p className="mb-3">Cloudbet offers betting on 30+ sports, from football and tennis to esports and MMA. Enjoy live betting, high odds, and unique markets.</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Football</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Tennis</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Basketball</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Esports</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">MMA</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Horse Racing</span>
              <span className="bg-purple-700/60 px-4 py-2 rounded-full text-white font-semibold">Table Tennis</span>
            </div>
          </section>

          {/* Crypto & Payment Options */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">₿</span>Crypto & Payment Options</h2>
            <p className="mb-3">Deposit and withdraw with Bitcoin, Ethereum, Litecoin, USDT, USDC, BNB, TRX, and more. Payouts are fast and usually require no KYC. No extra fees for crypto transactions.</p>
            <div className="flex gap-5 mt-3">
              <Image src="/icons/btc.svg" alt="BTC" width={48} height={48} />
              <Image src="/icons/eth.svg" alt="ETH" width={48} height={48} />
              <Image src="/icons/ltc.svg" alt="LTC" width={48} height={48} />
              <Image src="/icons/usdt.svg" alt="USDT" width={48} height={48} />
              <Image src="/icons/usdc.svg" alt="USDC" width={48} height={48} />
              <Image src="/icons/bnb.svg" alt="BNB" width={48} height={48} />
              <Image src="/icons/trx.svg" alt="TRX" width={48} height={48} />
            </div>
          </section>

          {/* User Experience & Mobile */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">📱</span>User Experience & Mobile</h2>
            <p>The Cloudbet website and app are fast, mobile-friendly, and offer a smooth experience for both beginners and advanced players. Live betting and streaming work flawlessly on mobile.</p>
          </section>

          {/* Customer Support & Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">🔒</span>Customer Support & Security</h2>
            <p>24/7 live chat, a comprehensive helpdesk, and fast support. Cloudbet holds an international license and uses modern security technology.</p>
          </section>

          {/* Our Cloudbet Verdict */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">⭐</span>Our Cloudbet Verdict</h2>
            <p>We consider Cloudbet one of the best crypto sportsbooks right now. The combination of high odds, fast payouts, and a huge selection makes it ideal for crypto bettors.</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-3xl">9.1</span>
              <span className="text-yellow-300 font-bold">/ 10</span>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center"><span className="mr-2">❓</span>Frequently Asked Questions about Cloudbet</h2>
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
            <Link href="https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo" passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto bg-yellow-400 text-black font-bold px-10 py-4 rounded-full shadow-2xl text-xl hover:bg-yellow-300 transition border-4 border-yellow-300 animate-bounce"
              >
                🎯 Claim your Cloudbet Bonus
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
            }),
          }}
        />
      </main>
    </>
  );
}