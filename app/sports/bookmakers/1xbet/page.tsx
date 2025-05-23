"use client";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "Is 1xBet trustworthy for sports betting?",
    a: "Yes, 1xBet operates worldwide, is fully licensed, and is known for fast crypto payouts.",
  },
  {
    q: "Which cryptocurrencies does 1xBet accept?",
    a: "You can bet with Bitcoin, Ethereum, Litecoin, USDT, Dogecoin, and many more.",
  },
  {
    q: "Is there a welcome bonus for new players?",
    a: "Yes, new players receive a generous welcome bonus, often including free bets or deposit matches.",
  },
  {
    q: "Is KYC mandatory at 1xBet?",
    a: "For crypto deposits, KYC is usually not required unless you withdraw large amounts.",
  },
  {
    q: "Can I place live bets at 1xBet?",
    a: "Yes, 1xBet offers live betting on hundreds of sports events, including cashout options.",
  },
];

export default function OneXBetBookmaker() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Head>
        <title>1xBet Review 2025 – Best Crypto Sportsbook?</title>
        <meta name="description" content="Read our in-depth 1xBet review: discover bonuses, crypto options, sports markets, reliability, and real user experiences. Find out if 1xBet is the best crypto sportsbook for you!" />
        <meta name="keywords" content="1xBet review, 1xBet experiences, crypto sportsbook, 1xBet bonus, sports betting, bitcoin betting" />
        <link rel="canonical" href="https://www.yoursite.com/sports/bookmakers/1xbet" />
      </Head>
      {/* Achtergrondafbeelding */}
      <div className="fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      {/* Donkere overlay voor leesbaarheid */}
      <div className="fixed inset-0 -z-10 bg-black/80" />
      <main className="relative min-h-screen py-12 px-2 md:px-0">
        <div className="max-w-3xl mx-auto bg-black/70 rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-yellow-400/20 text-white">
          {/* H1 & Intro */}
          <div className="flex items-center justify-center md:justify-between gap-4 mb-6">
            {/* 1xBet Logo */}
            <div className="flex-shrink-0 hidden md:block">
              <Image src="/logos/1xbet.png" alt="1xBet Logo" width={80} height={80} className="rounded-xl shadow bg-white/10" />
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg">1xBet Review 2025 – Best Crypto Sportsbook?</h1>
            </div>
            {/* Mascot */}
            <div className="flex-shrink-0 hidden md:block">
              <Image src="/mascot.png" alt="Mascot" width={72} height={72} className="rounded-full shadow-xl bg-white/10" />
            </div>
          </div>
          <p className="text-lg text-zinc-200 text-center mb-8">1xBet is one of the world’s largest crypto sportsbooks. Read all about bonuses, crypto options, sports markets, reliability, and our expert verdict.</p> 

          {/* Voordelen & Nadelen */}
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="flex-1 bg-black/60 rounded-2xl p-5 shadow-lg">
              <h2 className="text-xl font-bold text-green-400 mb-2">Pros</h2>
              <ul className="list-disc list-inside space-y-1 text-green-100">
                <li>Fast crypto payouts</li>
                <li>Huge selection of sports & markets</li>
                <li>Generous bonuses & promotions</li>
                <li>Live betting & cashout</li>
                <li>No KYC for crypto deposits</li>
              </ul>
            </div>
            <div className="flex-1 bg-black/60 rounded-2xl p-5 shadow-lg">
              <h2 className="text-xl font-bold text-red-400 mb-2">Cons</h2>
              <ul className="list-disc list-inside space-y-1 text-red-200">
                <li>Website can be busy and complex</li>
                <li>Not available in all countries</li>
                <li>Bonus terms can be strict</li>
              </ul>
            </div>
          </div>

          {/* Bonus & Promoties */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">🎁</span>1xBet Bonus & Promotions</h2>
            <p className="mb-3">New players receive a <span className="font-bold text-yellow-200">welcome bonus up to €100</span> or the equivalent in crypto. Plus, enjoy regular reload bonuses, free bets, and cashback offers.</p>
            <Link href="https://refpa3740576.top/L?tag=d_3915280m_1599c_&site=3915280&ad=1599" passHref legacyBehavior>
  <Link href="https://refpa3740576.top/L?tag=d_3915280m_1599c_&site=3915280&ad=1599" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition text-lg mt-2">Claim your 1xBet Bonus</Link>
</Link>
          </section>

          {/* Beschikbare sporten & markten */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">🏟️</span>Sports & Markets</h2>
            <p className="mb-3">1xBet offers betting on over 40 sports, from football and tennis to esports and MMA. Enjoy live betting, high odds, and unique markets.</p>
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

          {/* Crypto & betaalopties */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">₿</span>Crypto & Payment Options</h2>
            <p className="mb-3">Deposit and withdraw with Bitcoin, Ethereum, Litecoin, USDT, Dogecoin, and more. Payouts are fast and usually require no KYC. No extra fees for crypto transactions.</p>
            <div className="flex gap-5 mt-3">
              <Image src="/icons/btc.svg" alt="BTC" width={48} height={48} />
              <Image src="/icons/eth.svg" alt="ETH" width={48} height={48} />
              <Image src="/icons/ltc.svg" alt="LTC" width={48} height={48} />
              <Image src="/icons/usdt.svg" alt="USDT" width={48} height={48} />
              <Image src="/icons/doge.svg" alt="DOGE" width={48} height={48} />
            </div>
          </section>

          {/* Gebruikerservaring & mobiel */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">📱</span>User Experience & Mobile</h2>
            <p>The 1xBet website and app are fast, mobile-friendly, and offer a smooth experience for both beginners and advanced players. Live betting works flawlessly on mobile.</p>
          </section>

          {/* Klantenservice & veiligheid */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">🔒</span>Customer Support & Security</h2>
            <p>24/7 live chat, a comprehensive helpdesk, and fast support. 1xBet holds an international license and uses modern security technology.</p>
          </section>

          {/* Onze ervaring & eindoordeel */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center"><span className="mr-2">⭐</span>Our 1xBet Verdict</h2>
            <p>We consider 1xBet one of the best crypto sportsbooks right now. The combination of high odds, fast payouts, and a huge selection makes it ideal for crypto bettors.</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-3xl">9.2</span>
              <span className="text-yellow-300 font-bold">/ 10</span>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center"><span className="mr-2">❓</span>Frequently Asked Questions about 1xBet</h2>
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
            <Link href="https://refpa3740576.top/L?tag=d_3915280m_1599c_&site=3915280&ad=1599" passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto bg-yellow-400 text-black font-bold px-10 py-4 rounded-full shadow-2xl text-xl hover:bg-yellow-300 transition border-4 border-yellow-300 animate-bounce"
              >
                🎯 Claim your 1xBet Bonus
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

