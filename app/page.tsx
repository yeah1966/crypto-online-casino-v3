'use client';

import React, { useRef } from 'react';
import Footer from '../components/Footer';
import WheelOfFortune from '../components/WheelOfFortune';
import Top10List from '../components/Top10List';
import SpinButton from '@/components/SpinButton';

export default function Home() {
  const wheelRef = useRef<any>(null);

  const spin = () => {
    if (wheelRef.current && typeof wheelRef.current.spin === 'function') {
      wheelRef.current.spin();
    }
  };

  return (
    <>
      {/* BG image + overlay only on homepage */}
      <div className="relative min-h-screen w-full pt-32">
        {/* Background image with dark overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat opacity-65" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        {/* Main content stays above */}
        <div className="relative z-10">
          {/* Nieuwe Las Vegas style header */}
          <div className="pt-10 pb-4">
            <h1 className="text-5xl font-extrabold text-yellow-400 tracking-wide drop-shadow-neon text-center mb-8 animate-pulse">
              🎰 TOP 10 CRYPTO CASINOS
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
          {/* Top 10 List hieronder, in Las Vegas neon stijl */}
          <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
          <div className="flex justify-center mt-8">
  <img
    src="/images/top10-crypto-casinos-2025.png"
    alt="Top 10 Crypto Casinos 2025"
    className="w-full max-w-3xl animate-fade-in-up drop-shadow-[0_0_20px_gold] hover:scale-105 transition-transform duration-500"
  />
</div>
  <Top10List />
</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
