import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[60vh] py-32 px-8 flex items-center justify-center bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center"
      style={{ minHeight: '60vh' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}>
          Your Guide to Crypto Casinos
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 font-medium drop-shadow" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          Explore fair games, instant crypto payouts & top bonuses – all in one place.
        </p>
        <a
          href="/crypto-casino-reviews"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 text-lg shadow-lg transition-colors duration-200"
        >
          Discover Top Casinos
        </a>
      </div>
    </section>
  );
};

export default Hero;
