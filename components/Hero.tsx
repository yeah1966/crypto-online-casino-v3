import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[60vh] py-32 px-8 flex flex-col items-center justify-center bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center"
      style={{ minHeight: '60vh' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl">
        {/* Mascotte */}
        <div className="mb-6 flex justify-center">
          <Image src="/images/mascot-coin-sunglasses.png" alt="Crypto Mascot" width={128} height={128} className="w-24 h-24 md:w-32 md:h-32 drop-shadow-neon" priority />
        </div>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg animate-pulse" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}>
          Play Smarter. Win in Crypto.
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 font-medium drop-shadow" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          Your ultimate Vegas-style crypto casino guide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <a
            href="#casinos"
            className="bg-[#38FF14] hover:bg-[#2be80d] text-black font-semibold rounded-lg px-8 py-4 text-lg shadow-lg transition-colors duration-200 border-2 border-[#38FF14] focus:outline-none focus:ring-2 focus:ring-[#38FF14] focus:ring-offset-2"
          >
            Compare Now
          </a>
          <a
            href="#bonuses"
            className="bg-transparent border-2 border-[#A855F7] text-[#A855F7] hover:bg-[#A855F7] hover:text-white font-semibold rounded-lg px-8 py-4 text-lg shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:ring-offset-2"
          >
            Top Bonuses
          </a>
        </div>
        {/* Crypto Icons */}
        <div className="flex flex-row gap-3 justify-center mt-2">
          <Image src="/icons/btc.svg" alt="Bitcoin" width={32} height={32} className="w-8 h-8" />
          <Image src="/icons/eth.svg" alt="Ethereum" width={32} height={32} className="w-8 h-8" />
          <Image src="/icons/ltc.svg" alt="Litecoin" width={32} height={32} className="w-8 h-8" />
          <Image src="/icons/usdt.svg" alt="USDT" width={32} height={32} className="w-8 h-8" />
          <Image src="/icons/doge.svg" alt="Dogecoin" width={32} height={32} className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
