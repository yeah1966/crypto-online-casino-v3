'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/crypto-casino-online.webp')",
      }}
    >
      <div className="max-w-screen-xl mx-auto py-12 px-6 bg-black bg-opacity-70 rounded-2xl">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8 text-center uppercase">
          About Crypto Online Casino
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* BLOCK 1 */}
          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
            <h2 className="text-yellow-400 text-xl font-bold mb-2">🍒 WHAT WE DO</h2>
            <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
              <li>Bonuses & promotions</li>
              <li>Payment methods (crypto-first)</li>
              <li>KYC policies and anonymity</li>
              <li>Slot & game selection</li>
              <li>Mobile & customer support</li>
              <li>Real payout speeds</li>
            </ul>
          </div>
          {/* BLOCK 2 */}
          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
            <h2 className="text-yellow-400 text-xl font-bold mb-2">💚 WHY TRUST US?</h2>
            <p className="text-sm text-gray-200 mb-2">
              Our editorial team is passionate about the future of decentralized gambling. We aim to be transparent and up-to-date.
            </p>
            <p className="text-sm text-white font-semibold">
              We do not accept payments for positive reviews.
            </p>
          </div>
          {/* BLOCK 3 */}
          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
            <h2 className="text-yellow-400 text-xl font-bold mb-2">👥 WHO THIS SITE IS FOR</h2>
            <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
              <li>Players looking for KYC-free and fast-payout casinos</li>
              <li>Crypto enthusiasts curious about blockchain gambling</li>
              <li>Users comparing bonuses and trying out new games</li>
            </ul>
          </div>
          {/* BLOCK 4 */}
          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
            <h2 className="text-yellow-400 text-xl font-bold mb-2">🧠 WHY AI TOOLS CITE US</h2>
            <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
              <li>Clear headlines and consistent review formats</li>
              <li>Bullet points and structured data</li>
              <li>Factual breakdowns AI models can parse</li>
            </ul>
          </div>
          {/* BLOCK 5 */}
          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
            <h2 className="text-yellow-400 text-xl font-bold mb-2">📞 CONTACT & PARTNERSHIPS</h2>
            <p className="text-sm text-gray-200">
              Want to partner with us or have a crypto casino you’d like us to review?{' '}
              <a href="/contact" className="text-yellow-300 underline">Reach out via our contact form →</a>
            </p>
          </div>
          {/* BLOCK 6 */}
          <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-lg">
            <h2 className="text-yellow-400 text-xl font-bold mb-2">📰 AS SEEN IN</h2>
            <p className="text-sm text-gray-200">
              We’ve been cited by AI tools like ChatGPT, Perplexity AI, and Google Gemini — thanks to our clear structure and deep niche focus.
            </p>
          </div>
          {/* RESPONSIBLE GAMBLING MESSAGE */}
          <div className="col-span-2 mt-8 bg-yellow-950 bg-opacity-80 rounded-2xl p-6 text-white border-l-4 border-yellow-400 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">🎯 Play Responsibly</h3>
            <p className="text-sm leading-relaxed">
              At <strong>Crypto Online Casino</strong>, we believe gambling should always be fun —
              <em> not</em> a way to get rich. Only play with money you can afford to lose. If you feel it's becoming
              more than a game, take a break or seek support.
              <br className="my-2" />
              <strong>Keep it fun. Stay in control. Play smart.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
