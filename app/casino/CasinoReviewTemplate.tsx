import React from "react";

type CasinoReviewData = {
  introduction: string;
  bonuses: string;
  games: string;
  support: string;
  mobile: string;
  security: string;
  payments: string;
  verdict: string;
  facts: {
    founded: string;
    license: string;
    cryptoAccepted: string;
  };
};

interface CasinoReviewTemplateProps {
  data: CasinoReviewData;
}

const CasinoReviewTemplate: React.FC<CasinoReviewTemplateProps> = ({ data }) => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 bg-dark text-white">

      {/* First Impressions / Screenshots Section */}
      <section id="first-impressions" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">First Impressions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <img src="/screenshots/1.jpg" alt="Screenshot 1" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
          <img src="/screenshots/2.jpg" alt="Screenshot 2" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
          <img src="/screenshots/3.jpg" alt="Screenshot 3" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
          <img src="/screenshots/4.jpg" alt="Screenshot 4" className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105" />
          <div className="bg-dark text-white rounded-xl p-4">
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-purple-900 to-purple-700 border-2 border-pink-500 shadow-[0_0_20px_#ff00ff] rounded-xl px-6 py-4 mb-8 grid grid-cols-1 sm:grid-cols-3 items-center">
        {/* Logo links */}
        <div className="flex justify-start items-center mb-4 sm:mb-0">
          <img src="/logos/bitstarz.png" alt="BitStarz logo" className="w-16 h-auto mr-4" />
        </div>
        {/* Titel gecentreerd */}
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-bold text-white text-center">BitStarz Casino Review</h2>
          <img src="/mascot.png" alt="Mascot" className="w-16 h-16 ml-4 animate-pulse" />
        </div>
        {/* Button rechts */}
        <div className="flex justify-end items-center mt-4 sm:mt-0">
          <a
            href="https://bitstarz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#ff0] whitespace-nowrap"
          >
            Play at BitStarz
          </a>
        </div>
      </div>

      {/* Info Boxes Grid */}
      <div id="info-grid" className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 8 contentblokken hieronder */}
          <section id="introduction" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
            <img src="/casino-icons/Crown.svg" alt="Crown icon" className="w-14 h-14 mb-2" />
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">Introduction</h3>
            <p className="text-white">{data.introduction}</p>
          </section>
          <section id="bonuses" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
            <img src="/casino-icons/Bonus.svg" alt="Bonus icon" className="w-14 h-14 mb-2" />
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">Bonuses & Promotions</h3>
            <p className="text-white">{data.bonuses}</p>
          </section>
          <section id="games" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
            <img src="/casino-icons/Poker.svg" alt="Poker icon" className="w-14 h-14 mb-2" />
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">Games & Providers</h3>
            <p className="text-white">{data.games}</p>
          </section>
          <section id="support" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
            <img src="/casino-icons/Support.svg" alt="Support icon" className="w-14 h-14 mb-2" />
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">Customer Support</h3>
            <p className="text-white">{data.support}</p>
          </section>
          <section id="mobile" className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
            <img src="/casino-icons/Smartphone.svg" alt="Smartphone icon" className="w-14 h-14 mb-2" />
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">Mobile Experience</h3>
            <p className="text-white">{data.mobile}</p>
          </section>
          <section id="security" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
            <img src="/casino-icons/Shield.svg" alt="Shield icon" className="w-14 h-14 mb-2" />
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">Security & Licensing</h3>
            <p className="text-white">{data.security}</p>
          </section>
          <section className="p-6 bg-[#0e1a46] rounded-xl border border-yellow-500 shadow-md text-white">
  <div className="flex items-center mb-4">
    <img src="/casino-icons/Credit.svg" alt="Crypto Icon" className="w-6 h-6 mr-2" />
    <h3 className="text-yellow-400 font-semibold uppercase">Crypto Supported</h3>
  </div>
  <p>
    This casino accepts a variety of cryptocurrencies and digital payment methods for convenient and secure transactions. Supported coins typically include:
  </p>
  <div className="flex gap-4 items-center mt-4 flex-wrap">
    <img src="/icons/btc.svg" alt="Bitcoin" className="w-8 h-8" title="Bitcoin (BTC)" />
    <img src="/icons/eth.svg" alt="Ethereum" className="w-8 h-8" title="Ethereum (ETH)" />
    <img src="/icons/ltc.svg" alt="Litecoin" className="w-8 h-8" title="Litecoin (LTC)" />
    <img src="/icons/usdt.svg" alt="Tether" className="w-8 h-8" title="Tether (USDT)" />
    <img src="/icons/neteller.svg" alt="Neteller" className="w-8 h-8" title="Neteller" />
  </div>
  <p className="mt-4">
    These options enable fast deposits and withdrawals with low fees. Fiat alternatives like credit cards and bank transfer are also available. <span className="text-yellow-400">Update this section with the actual supported coins for each casino!</span>
  </p>
</section>
          <section id="verdict" className="bg-gradient-to-br from-[#1a2c8b] to-[#0a0f40] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out">
            <img src="/casino-icons/Trophy.svg" alt="Trophy icon" className="w-14 h-14 mb-2" />
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">Final Verdict</h3>
            <p className="text-white">{data.verdict}</p>
          </section>
        </div>
      </div>

      {/* At a Glance Section */}
      <section id="at-a-glance" className="mb-8">
        <h2 className="text-2xl font-bold mb-3 text-white">At a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-500 rounded-xl p-6 text-white shadow-lg shadow-yellow-500/10 flex flex-col justify-between h-24 text-center">
            <span className="block text-yellow-400 text-lg font-semibold mb-2">Founded</span>
            <span className="text-white">{data.facts.founded}</span>
          </div>
          <div className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-500 rounded-xl p-6 text-white shadow-lg shadow-yellow-500/10 flex flex-col justify-between h-24 text-center">
            <span className="block text-yellow-400 text-lg font-semibold mb-2">License</span>
            <span className="text-white">{data.facts.license}</span>
          </div>
          <div className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-500 rounded-xl p-6 text-white shadow-lg shadow-yellow-500/10 flex flex-col justify-between h-24 text-center">
            <span className="block text-yellow-400 text-lg font-semibold mb-2">Crypto Accepted</span>
            <span className="text-white">BTC, ETH, LTC, USDT, Neteller, Credit Cards</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
  id="cta"
  className="mt-10 text-center flex flex-col items-center justify-center gap-4"
>
  <img src="/mascot.png" alt="Mascot" className="w-12 h-12 mb-2" />
  <h2 className="text-xl font-bold text-yellow-400">READY TO GET STARTED?</h2>
  <p className="text-white">Placeholder for call-to-action text.</p>
  <a
    href="#"
    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
  >
    CTA Button
  </a>
</section>
    </div>
  );
};

export default CasinoReviewTemplate;
