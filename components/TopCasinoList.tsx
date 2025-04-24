import React from "react";

// Hardcoded Top 10 mapping volgens instructie
const top10 = [
  {
    rank: 1,
    name: "BitStarz",
    logo: "bitstarz.png",
    bonus: "Get up to 5 BTC Bonus!",
    tagline: "Award-winning crypto casino",
    url: "/out/bitstarz",
    desc: "Play at the most awarded crypto casino with fast payouts and 3,000+ games."
  },
  {
    rank: 2,
    name: "Stake",
    logo: "stake.png",
    bonus: "Up to 10% rakeback!",
    tagline: "Crypto sportsbook & casino",
    url: "/out/stake",
    desc: "The biggest crypto sportsbook & casino, famous on Twitch and for lightning fast payouts."
  },
  {
    rank: 3,
    name: "7Bit",
    logo: "7bit.png",
    bonus: "Up to 1.5 BTC + 100 Free Spins!",
    tagline: "Retro Vegas crypto slots",
    url: "/out/7bit",
    desc: "Retro Vegas style, thousands of slots and fast crypto payments."
  },
  {
    rank: 4,
    name: "Betplay",
    logo: "betplay.png",
    bonus: "100% up to 50 mBTC + 10% cashback!",
    tagline: "Crypto only, instant payouts",
    url: "/out/betplay",
    desc: "Instant withdrawals, cashback and a huge game selection."
  },
  {
    rank: 5,
    name: "Cryptoloko",
    logo: "cryptoloko.png",
    bonus: "150% up to 1 BTC!",
    tagline: "Loco crypto casino",
    url: "/out/cryptoloko",
    desc: "Crazy bonuses, fast payouts and lots of cryptocurrencies."
  },
  {
    rank: 6,
    name: "DreamCasino",
    logo: "dreamcasino.png",
    bonus: "200% Welcome Bonus!",
    tagline: "Dream big, win bigger",
    url: "/out/dreamcasino",
    desc: "Dream big with high bonuses and crypto payouts."
  },
  {
    rank: 7,
    name: "BC.Game",
    logo: "placeholder.png",
    bonus: "Mystery Bonus!",
    tagline: "Top crypto casino",
    url: "/out/bcgame",
    desc: "Discover unique games and bonuses at BC.Game."
  },
  {
    rank: 8,
    name: "Betplay",
    logo: "betplay.png",
    bonus: "100% up to 50 mBTC + 10% cashback!",
    tagline: "Crypto only, instant payouts",
    url: "/out/betplay",
    desc: "Instant withdrawals, cashback and a huge game selection."
  },
  {
    rank: 9,
    name: "PrismCasino",
    logo: "prismcasino.png",
    bonus: "$30 Free Chip!",
    tagline: "Colorful crypto slots",
    url: "/out/prismcasino",
    desc: "Unique bonuses and a colorful Vegas vibe."
  },
  {
    rank: 10,
    name: "Placeholder",
    logo: "placeholder.png",
    bonus: "Try your luck!",
    tagline: "New crypto casino",
    url: "/out/placeholder",
    desc: "Try your luck at our newest crypto casino!"
  }
];

const TopCasinoList: React.FC = () => {
  return (
    <section className="w-full py-12 px-2 md:px-0 bg-gradient-to-b from-[#10102a] via-[#1a1440] to-[#2e0f3a] min-h-[80vh]">
      <h2 className="text-center text-4xl md:text-5xl font-casino uppercase text-yellow-400 drop-shadow-neon mb-10 tracking-widest animate-pulse flex items-center justify-center gap-4">
        <span>🎲</span> Top 10 Crypto Casinos <span>🎰</span>
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-6">
          {top10.map((casino) => (
            <div key={casino.rank} className="casino-card flex items-center bg-[#18182f] rounded-xl shadow-lg p-4 md:p-6 border border-yellow-900/30">
              <img src={`/logos/${casino.logo}`} alt={`${casino.name} logo`} className="w-16 h-16 object-contain rounded bg-[#222244] mr-4 md:mr-8" />
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-300">#{casino.rank} {casino.name.toUpperCase()}</h3>
                <p className="subtitle text-pink-400 font-semibold">{casino.tagline}</p>
                <p className="bonus text-green-400 font-bold">{casino.bonus}</p>
                <p className="desc text-white/80 text-sm md:text-base">{casino.desc}</p>
              </div>
              <a href={casino.url} className="btn ml-auto px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-bold shadow-neon hover:scale-105 hover:shadow-neon-xl transition-all duration-300">
                Play Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCasinoList;
