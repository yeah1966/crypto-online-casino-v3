import React from 'react';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-800 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-4 text-center">💰 Crypto Casino Reviews 💰</h1>
        <p className="text-lg md:text-xl text-purple-100 text-center mb-8">
          Discover the best crypto casinos of 2025. All sites are independently reviewed for bonuses, fairness, crypto support, and player experience. Vegas vibes, instant payouts, and full transparency — only the top-rated make our list!
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Hier kun je dynamisch review cards inladen, nu als voorbeeld cards */}
          <div className="bg-purple-700 rounded-xl shadow-lg p-6 w-64 flex flex-col items-center">
            <span className="text-2xl mb-2" role="img" aria-label="slots">🎲</span>
            <span className="font-bold text-lg text-yellow-200 mb-1">SLOTS OF VEGAS</span>
            <span className="text-sm text-purple-100 mb-2">⭐⭐⭐⭐⭐</span>
            <a href="/crypto-casino-reviews/slotsofvegas" className="text-pink-200 hover:underline">Read the full review →</a>
          </div>
          <div className="bg-purple-700 rounded-xl shadow-lg p-6 w-64 flex flex-col items-center">
            <span className="text-2xl mb-2" role="img" aria-label="slots">🎲</span>
            <span className="font-bold text-lg text-yellow-200 mb-1">WILD VEGAS</span>
            <span className="text-sm text-purple-100 mb-2">⭐⭐⭐⭐</span>
            <a href="/crypto-casino-reviews/wildvegas" className="text-pink-200 hover:underline">Read the full review →</a>
          </div>
          {/* Voeg hier meer casino cards toe zoals gewenst */}
        </div>
      </div>
    </div>
  );
}
