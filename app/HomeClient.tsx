"use client";
import React, { useRef } from 'react';
import WheelOfFortune from '../components/WheelOfFortune';
import SpinButton from '@/components/SpinButton';
import CasinoGrid from '../components/CasinoGrid';

import Link from "next/link";
import Image from "next/image";
import { casinos } from '@/data/casinosData';

export default function HomeClient() {
  const wheelRef = useRef<unknown>(null);

  const spin = () => {
    const wheel = wheelRef.current as { spin?: () => void } | null;
    if (wheel && typeof wheel.spin === 'function') {
      wheel.spin();
    }
  };

  return (
    <>
      {/* HERO BANNER */}
      <div className="relative min-h-screen w-full pt-32">
        {/* Background image with dark overlay */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <Image src="/images/crypto-casino-online-mobile.webp" alt="Crypto Online Casino background" fill className="w-full h-full object-cover opacity-60" />
        </div>
        {/* Main content stays above */}
        <div className="relative z-10">
          {/* Nieuwe Las Vegas style header */}
          <div className="pt-10 pb-4">
            {/* Mascot above the main heading with Vegas glow and custom wiggle */}
            <div className="relative flex justify-center mb-6">
              <div className="absolute w-36 h-36 md:w-52 md:h-52 rounded-full blur-2xl bg-[#38FF14]/40 z-0"></div>
              <Image src="/logos/crypto-mascot.png" alt="Crypto Casino Mascot" width={192} height={192} className="relative w-32 h-32 md:w-48 md:h-48 drop-shadow-neon animate-[wiggle_1.5s_ease-in-out_infinite]" style={{ objectFit: 'contain' }} />
            </div>
            {/* Main heading */}
            <h1 className="text-5xl font-extrabold text-yellow-400 tracking-wide drop-shadow-neon text-center mb-8 animate-pulse">
              🏆 BEST CRYPTO CASINOS 2025
            </h1>
            <p className="mb-8 text-xl text-neon-pink text-center font-casino max-w-2xl mx-auto">
              Discover the best crypto casinos of the moment, spin the wheel and let fate decide where you play!
            </p>
          </div>
          {/* Wheel of Fortune Las Vegas style */}
          <div className="mb-16 flex flex-col items-center">
            <WheelOfFortune ref={wheelRef} />
            <div className="mt-6 flex flex-col items-center">
              <SpinButton onClick={spin} />
            </div>
          </div>
          {/* Neon Casino Grid hieronder, vervangt de oude lijst */}
          <div className="max-w-6xl mx-auto px-4 py-12">
            <CasinoGrid casinos={casinos.slice(0, 20).map(casino => ({
              name: casino.name,
              logo: casino.logo,
              bonus: casino.noDepositBonus ? 'No Deposit Bonus!' : 'Deposit Bonus',
              description: casino.description,
              tags: [
                casino.noDepositBonus ? 'No Deposit' : 'Deposit Only',
                `⭐ ${casino.rating}`,
                ...(casino.noDepositNote ? [casino.noDepositNote] : []),
              ],
              claimLink: casino.affiliateUrl,
              reviewLink: `/crypto-casino-reviews/${casino.slug}`,
            }))} />
          </div>
          {/* SEO Content Block - English, styled with brand neon colors */}
          <section className="max-w-4xl mx-auto mt-16 px-4 py-10 bg-[#181826] rounded-2xl shadow-lg border-2 border-yellow-400">
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-4 text-center drop-shadow-neon">
              Everything About Crypto Casinos in 2025
            </h2>
            <p className="text-white/90 text-lg mb-4 text-center">
              Crypto casinos are booming in popularity thanks to their anonymity, instant payouts, and exclusive bonuses. On this page, you’ll find an up-to-date overview of the best crypto casinos worldwide, carefully tested for reliability, game selection, and promotions.
            </p>
            <h3 className="text-2xl font-bold text-[#38FF14] mt-8 mb-2">Why Choose a Crypto Casino?</h3>
            <ul className="list-disc ml-6 text-white/80 mb-4">
              <li>Fast and anonymous deposits & withdrawals with Bitcoin, Ethereum, Litecoin, and more</li>
              <li>High bonuses and exclusive promotions for crypto players</li>
              <li>No bank or third party needed – play instantly</li>
              <li>Worldwide access, including from Europe and North America</li>
            </ul>
            <h3 className="text-2xl font-bold text-[#A855F7] mt-8 mb-2">What to Look for in a Crypto Casino?</h3>
            <p className="text-white/80 mb-2">
              Always check for a valid license, a wide range of games, and fair bonus terms. Read our reviews for independent ratings and tips on safe gambling.
            </p>
            <p className="text-white/80">
              Whether you’re searching for the highest crypto bonus or the fastest payout: at crypto-casino-online.com you’ll always find the best casino for your needs!
            </p>
            {/* Internal links for SEO */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/reviews" className="text-[#38FF14] underline font-bold hover:text-yellow-400">Crypto Casino Reviews</Link>
              <Link href="/guides" className="text-[#A855F7] underline font-bold hover:text-yellow-400">Guides</Link>
              <Link href="/best-crypto-casino-bonuses" className="text-yellow-400 underline font-bold hover:text-[#38FF14]">Best Bonuses</Link>
              <Link href="/crypto-gambling-101" className="text-pink-400 underline font-bold hover:text-[#A855F7]">Crypto Gambling 101</Link>
            </div>
          </section>
          {/* FAQ Block for SEO - styled with brand purple */}
          <section className="max-w-4xl mx-auto mt-10 px-4 py-8 bg-[#23234d] rounded-xl border-2 border-[#A855F7]">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Frequently Asked Questions</h2>
            <div className="mb-3">
              <strong className="text-[#FF4EB9]">What is a crypto casino?</strong>
              <p className="text-white/80">A crypto casino is an online casino that accepts cryptocurrencies like Bitcoin, Ethereum, or Litecoin for deposits and withdrawals. They offer fast, anonymous payments and exclusive bonuses for crypto users.</p>
            </div>
            <div className="mb-3">
              <strong className="text-[#38FF14]">Are crypto casinos safe?</strong>
              <p className="text-white/80">The best crypto casinos are licensed and use secure technology. Always check our reviews for the most trusted sites.</p>
            </div>
            <div className="mb-3">
              <strong className="text-[#FFD600]">Which cryptocurrencies can I use?</strong>
              <p className="text-white/80">Most sites accept Bitcoin, Ethereum, Litecoin, USDT, and sometimes Dogecoin or other altcoins.</p>
            </div>
            <div className="mb-3">
              <strong className="text-[#A855F7]">How do I claim a crypto casino bonus?</strong>
              <p className="text-white/80">Simply register at one of the top sites listed above, make a deposit with your favorite crypto, and activate the bonus from the promotions page. Some casinos offer no deposit bonuses for new players.</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
