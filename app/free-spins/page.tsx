"use client";

import { useEffect, useRef } from 'react';
import { casinos } from '../crypto-casino-reviews/casinosData';
import Link from "next/link";

// Simple confetti function (no npm needed)
function fireConfetti(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width = window.innerWidth;
  const H = canvas.height = window.innerHeight;
  const confettiCount = 120;
  const confetti = Array.from({ length: confettiCount }, () => ({
    x: Math.random() * W,
    y: Math.random() * -H,
    r: 6 + Math.random() * 8,
    d: 8 + Math.random() * 8,
    color: `hsl(${Math.floor(Math.random()*360)},100%,60%)`,
    tilt: Math.random() * 10 - 10,
    tiltAngle: 0,
    tiltAngleIncremental: (Math.random() * 0.07) + 0.05
  }));
  let angle = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    angle += 0.01;
    confetti.forEach(c => {
      c.y += (Math.cos(angle + c.d) + 1 + c.r/2) * 0.8;
      c.x += Math.sin(angle);
      c.tiltAngle += c.tiltAngleIncremental;
      c.tilt = Math.sin(c.tiltAngle) * 15;
      if (c.y > H) {
        c.y = -10;
        c.x = Math.random() * W;
      }
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r/3, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.d/2);
      ctx.stroke();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

export default function FreeSpinsPage() {
  const confettiRef = useRef(null);
  useEffect(() => {
    fireConfetti(confettiRef.current);
    // Responsive resize
    const handleResize = () => fireConfetti(confettiRef.current);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const freeSpinCasinos = casinos.filter(
    c => (c.noDepositBonus || (c.noDepositNote && c.noDepositNote.toLowerCase().includes('free spin')))
  );
  const sorted = [...freeSpinCasinos].sort((a, b) => b.rating - a.rating);

  return (
    <div className="relative rounded-3xl bg-black/65 shadow-2xl border-2 border-yellow-400 p-8 md:p-12 space-y-10 max-w-6xl mx-auto mt-6">
      {/* Confetti Canvas */}
      <canvas ref={confettiRef} className="fixed inset-0 w-full h-full pointer-events-none z-10" aria-hidden="true" />
      {/* VEGAS BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat animate-bg-pan" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* MAIN CONTENT */}
      <div className="relative z-20">
        {/* HERO SECTION */}
        <section className="animate-fade-in-up text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="text-5xl animate-spin-slow">🎰</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold neon-glow uppercase text-blue-300 tracking-tight bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">Crypto Casino Free Spins</h1>
            <span className="text-5xl animate-bounce">🪙</span>
          </div>
          <p className="text-lg text-white mt-2 mb-1 max-w-2xl mx-auto text-center animate-fade-in">Free spins are the most exciting way to win real crypto at online casinos — try your luck, risk-free, and keep what you win!</p>
          <div className="flex justify-center gap-2 mt-2">
            <img src="/icons/btc.svg" alt="BTC" width={28} height={28} style={{width:'28px',height:'28px'}} className="animate-pulse inline" />
            <img src="/icons/eth.svg" alt="ETH" width={28} height={28} style={{width:'28px',height:'28px'}} className="animate-pulse inline" />
            <img src="/icons/ltc.svg" alt="LTC" width={28} height={28} style={{width:'28px',height:'28px'}} className="animate-pulse inline" />
          </div>
        </section>
        {/* DYNAMIC FREE SPINS CASINO GRID */}
        <section className="animate-fade-in-up">
          <h2 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">Top Free Spins Casinos</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {sorted.map(casino => (
              <div key={casino.slug} className="rounded-2xl border-2 border-blue-400 bg-black/80 text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.05] hover:shadow-blue-400/40 transition-all duration-300 group animate-float">
                <img src={casino.logo} alt={casino.name + ' logo'} width={60} height={60} style={{width:'60px',height:'60px'}} className="rounded-lg bg-white mb-2 group-hover:animate-spin" />
                <div className="font-bold text-lg text-blue-200">{casino.name}</div>
                <div className="text-white text-center mb-2">{casino.noDepositNote || casino.description}</div>
                <Link href={`/crypto-casino-reviews/${casino.slug}`} className="bg-blue-400 text-purple-900 font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 transition hover:scale-105 mt-2 flex items-center gap-2">🎲 Review</Link>
              </div>
            ))}
          </div>
        </section>
        {/* HOW TO CLAIM FREE SPINS */}
        <section className="animate-fade-in-up">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">How to Claim Free Spins</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg text-white">
            <li>Pick a casino from the list above.</li>
            <li>Create your account (no deposit needed at some casinos).</li>
            <li>Open the qualifying slot and claim your spins.</li>
            <li>Meet the wagering requirements to withdraw your winnings.</li>
          </ol>
        </section>
        {/* CTA & INTERNAL LINKS */}
        <div className="mt-12 text-center animate-fade-in-up">
          <p className="mb-4 text-white text-lg animate-fade-in">Looking for more crypto bonuses?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/welcome-bonus" className="inline-block neon-button px-8 py-4 bg-yellow-300 text-purple-900 font-extrabold rounded-full text-xl shadow-lg hover:bg-pink-600 hover:text-yellow-200 transition-all flex items-center gap-2 animate-bounce">
              <img src="/icons/btc.svg" alt="BTC" width={22} height={22} style={{width:'22px',height:'22px'}} className="inline" /> Welcome Bonuses
            </Link>
            <Link href="/vip-deals" className="inline-block neon-button px-8 py-4 bg-pink-600 text-yellow-200 font-extrabold rounded-full text-xl shadow-lg hover:bg-yellow-300 hover:text-pink-700 transition-all flex items-center gap-2 animate-bounce">
              <img src="/icons/eth.svg" alt="ETH" width={22} height={22} style={{width:'22px',height:'22px'}} className="inline" /> VIP Deals
            </Link>
          </div>
        </div>
        {/* EASTER EGG: MASCOT */}
        <div className="absolute right-8 bottom-8 hidden lg:block pointer-events-none select-none opacity-90">
          <img src="/logos/crypto-mascot.png" alt="Crypto Casino Mascot" width={120} height={120} className="drop-shadow-xl" />
        </div>
      </div>
    </div>
  );
}
