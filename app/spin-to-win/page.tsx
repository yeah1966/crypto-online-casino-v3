"use client";
import React, { useState } from "react";
import Link from "next/link";
import affiliateLinks from '../../data/affiliateLinks.json';

const casinos = [
  { name: 'Slots of Vegas', slug: 'slotsofvegas', logo: '/logos/slotsofvegas.png' },
  { name: 'Wild Vegas', slug: 'wildvegas', logo: '/logos/wildvegas.png' },
  { name: 'BitStarz', slug: 'bitstarz', logo: '/logos/bitstarz.png' },
  { name: 'Cloudbet', slug: 'cloudbet', logo: '/logos/cloudbet.png' },
  { name: '7Bit', slug: '7bit', logo: '/logos/7bit.png' },
  { name: 'Betplay', slug: 'betplay', logo: '/logos/betplay.png' },
  { name: 'Dreams', slug: 'dreams', logo: '/logos/dreamscasino.png' },
  { name: 'Crypto Loko', slug: 'cryptoloko', logo: '/logos/cryptoloko.png' },
  { name: 'Betzard', slug: 'betzard', logo: '/logos/betzard.png' },
  { name: 'Coinpoker', slug: 'coinpoker', logo: '/logos/coinpoker.png' },
];

function getRandomSlug() {
  return casinos[Math.floor(Math.random() * casinos.length)].slug;
}

function launchConfetti() {
  const icons = ["btc", "eth", "ltc"];
  for (let i = 0; i < 40; i++) {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    const img = document.createElement("img");
    img.src = `/confetti/${icon}.png`;
    img.className = "fixed w-6 h-6 animate-fall pointer-events-none z-50";
    img.style.left = `${Math.random() * 100}vw`;
    img.style.top = `-${Math.random() * 100}px`;
    img.style.animationDuration = `${3 + Math.random() * 2}s`;
    img.style.opacity = `${0.8 + Math.random() * 0.2}`;
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 6000);
  }
}

const getAffiliateUrl = (slug: string) => affiliateLinks[slug];

export default function SpinToWinPage() {
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<null | { slug: string; url: string; name: string; logo: string }>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSpin = async () => {
    if (spinning) return;
    setSpinning(true);
    setWinner(null);
    setError(null);
    launchConfetti();

    const slug = getRandomSlug();
    const casino = casinos.find(c => c.slug === slug);
    setTimeout(async () => {
      const aff = getAffiliateUrl(slug);
      if (aff && casino && aff.url && aff.url.startsWith('http')) {
        setWinner({ slug, url: aff.url, name: casino.name, logo: casino.logo });
      } else {
        setWinner(null);
        setError("🎰 Oops! That casino is currently out of rotation. Try another spin for better luck!");
      }
      setSpinning(false);
    }, 5000);
  };

  const handleVisit = () => {
    if (winner && winner.url) {
      console.log('Opening affiliate URL:', winner.url);
      window.open(winner.url, '_blank');
    }
  };

  return (
    <>
      {/* Vegas-style fixed background */}
      <div className="min-h-screen fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Titel en uitleg */}
        <h1 className="text-4xl font-bold mb-4 mt-20 neon-text animate-pulse drop-shadow-[0_0_25px_gold]">
          🎡 Spin to Win Crypto Casino Bonuses
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-2xl text-center">
          Click the wheel and after 5 seconds you’ll see your lucky casino! Confetti and Vegas vibes included!
        </p>
        {/* Pro Tip */}
        <div className="mt-8 bg-pink-500/30 border border-pink-400 rounded-xl mx-auto px-6 py-4 max-w-md text-center text-yellow-300 font-semibold backdrop-blur-md">
          🎯 Pro Tip: Your bonus might just be one spin away. Don’t miss out!
        </div>
        {/* Wheel */}
        <div className="flex justify-center mt-16 relative">
          <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px]">
            <img
              src="/spin/wheel-base.png"
              alt="Wheel of Fortune"
              className={`absolute inset-0 w-full h-full object-contain ${spinning ? 'animate-spinwheel' : ''}`}
              draggable={false}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            />
            {!spinning && !winner && (
              <button
                onClick={handleSpin}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-xl hover:scale-105 transition text-2xl animate-bounce neon-text ring-2 ring-white"
              >
                🎰 SPIN NOW
              </button>
            )}
          </div>
        </div>
        {/* Win Message & Visit Button */}
        {winner && (
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <div className="text-2xl md:text-3xl font-extrabold text-yellow-300 drop-shadow-lg text-center">
              🏆 Winning Casino
            </div>
            <img src={`/spin/${winner.slug}.png`} alt={winner.name} className="mx-auto h-20 md:h-28 drop-shadow-xl my-4" />
            <a
              href={winner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-purple-900 font-extrabold shadow hover:bg-pink-500 hover:text-yellow-200 transition text-lg ring-2 ring-white"
            >
              🎰 Play Now at {winner.name}
            </a>
            <button
              onClick={() => { setWinner(null); setError(null); }}
              className="mt-2 px-6 py-2 rounded-full bg-purple-700 text-white font-semibold shadow hover:bg-purple-800 transition text-lg border-2 border-yellow-300"
            >
              🔄 Spin Again
            </button>
          </div>
        )}
        {/* Error message if affiliate link is broken */}
        {error && (
          <div className="mt-6 text-center text-yellow-300 bg-gradient-to-r from-pink-600 to-purple-800 px-6 py-4 rounded-xl font-bold shadow-lg ring-2 ring-pink-400 animate-fade-in">
            🎰 Oops! That casino is currently out of rotation. Try another spin for better luck!
          </div>
        )}
        {/* Sticky CTA for mobile */}
        <div className="fixed bottom-0 w-full md:hidden bg-gradient-to-r from-orange-500 to-purple-600 text-white text-center py-3 font-bold shadow-md z-50">
          🎲 Feeling lucky?{' '}
          <button
            onClick={handleSpin}
            disabled={spinning}
            className="ml-2 px-4 py-2 bg-yellow-300 text-black rounded-full shadow hover:bg-yellow-400 ring-2 ring-white"
          >
            Spin Now
          </button>
        </div>
        {/* Neon-stijl CTA's onderaan voor desktop */}
        <div className="hidden md:flex justify-center gap-6 mt-20 mb-10 animate-fade-in-up">
          <Link href="/welcome-bonus" className="inline-block neon-button px-8 py-4 bg-yellow-300 text-purple-900 font-extrabold rounded-full text-xl shadow-lg hover:bg-pink-600 hover:text-yellow-200 transition-all flex items-center gap-2 ring-2 ring-white">
            <img src="/icons/btc.svg" alt="BTC icon" width={22} height={22} className="inline" /> Welcome Bonuses
          </Link>
          <Link href="/vip-deals" className="inline-block neon-button px-8 py-4 bg-pink-600 text-yellow-200 font-extrabold rounded-full text-xl shadow-lg hover:bg-yellow-300 hover:text-pink-700 transition-all flex items-center gap-2 ring-2 ring-white">
            <img src="/icons/eth.svg" alt="ETH icon" width={22} height={22} className="inline" /> VIP Deals
          </Link>
          <Link href="/no-deposit" className="inline-block neon-button px-8 py-4 bg-green-400 text-[#241f6b] font-extrabold rounded-full text-xl shadow-lg hover:bg-yellow-500/80 hover:text-green-900 transition-all flex items-center gap-2 ring-2 ring-white">
            <img src="/icons/ltc.svg" alt="LTC icon" width={22} height={22} className="inline" /> No Deposit
          </Link>
        </div>
      </div>
    </>
  );
}
