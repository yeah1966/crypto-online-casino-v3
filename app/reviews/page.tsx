import React from 'react';
import CasinoReviewCard from '@/components/CasinoReviewCard';
import { casinos } from '@/data/casinosData';

export default function ReviewsPage() {
  return (
    <main className="relative z-10 min-h-screen pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <h1 className="text-yellow-400 text-center text-4xl md:text-5xl font-extrabold uppercase drop-shadow-neon mb-4">
        💰 Crypto Casino Reviews 💰
      </h1>
      <p className="text-white/90 text-center text-lg max-w-3xl mx-auto mb-12">
        Discover the best crypto casinos of 2025. All sites are independently reviewed for bonuses,
        fairness, crypto support, and player experience. Vegas vibes, instant payouts, and full transparency — only the top-rated make our list!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {casinos.map((casino) => (
          <CasinoReviewCard
            key={casino.slug}
            name={casino.name}
            slug={casino.slug}
            image={casino.logo}
            stars={casino.rating}
            tagline={casino.description}
          />
        ))}
      </div>
    </main>
  );
}
