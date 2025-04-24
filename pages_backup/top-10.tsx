import CasinoCard from '../components/CasinoCard';

// Top 10 mapping: exact casino names en logo-bestanden zoals daadwerkelijk in public/logos/
const casinos = [
  {
    rank: 1,
    name: "BitStarz",
    slug: "bitstarz",
    logo: "bitstarz.png",
    bonus: "Get up to 5 BTC Bonus!",
    tagline: "Award-winning crypto casino",
    crypto: ["btc", "eth", "ltc", "usdt"],
    url: "/out/bitstarz",
    description: "Play at the most awarded crypto casino with fast payouts and 3,000+ games.",
    badge: "Editor's Pick",
  },
  {
    rank: 2,
    name: "Stake",
    slug: "stake",
    logo: "stake.png",
    bonus: "Up to 10% rakeback!",
    tagline: "Crypto sportsbook & casino",
    crypto: ["btc", "eth", "ltc", "doge", "usdt"],
    url: "/out/stake",
    description: "The biggest crypto sportsbook & casino, famous on Twitch and for lightning fast payouts.",
    badge: "Trending",
  },
  {
    rank: 3,
    name: "7Bit",
    slug: "7bit",
    logo: "7bit.png",
    bonus: "Up to 1.5 BTC + 100 Free Spins!",
    tagline: "Retro Vegas crypto slots",
    crypto: ["btc", "eth", "ltc", "usdt"],
    url: "/out/7bit",
    description: "Retro Vegas style, thousands of slots and fast crypto payments.",
  },
  {
    rank: 4,
    name: "Betplay",
    slug: "betplay",
    logo: "betplay.png",
    bonus: "100% up to 50 mBTC + 10% cashback!",
    tagline: "Crypto only, instant payouts",
    crypto: ["btc", "ltc", "doge", "usdt"],
    url: "/out/betplay",
    description: "Instant withdrawals, cashback and a huge game selection.",
  },
  {
    rank: 5,
    name: "Cryptoloko",
    slug: "cryptoloko",
    logo: "cryptoloko.png",
    bonus: "150% up to 1 BTC!",
    tagline: "Loco crypto casino",
    crypto: ["btc", "eth", "ltc", "doge"],
    url: "/out/cryptoloko",
    description: "Crazy bonuses, fast payouts and lots of cryptocurrencies.",
  },
  {
    rank: 6,
    name: "DreamCasino",
    slug: "dreamcasino",
    logo: "dreamcasino.png",
    bonus: "200% Welcome Bonus!",
    tagline: "Dream big, win bigger",
    crypto: ["btc", "eth", "ltc"],
    url: "/out/dreamcasino",
    description: "Dream big with high bonuses and crypto payouts.",
  },
  {
    rank: 7,
    name: "Betplay",
    slug: "betplay",
    logo: "betplay.png",
    bonus: "100% up to 50 mBTC + 10% cashback!",
    tagline: "Crypto only, instant payouts",
    crypto: ["btc", "ltc", "doge", "usdt"],
    url: "/out/betplay",
    description: "Instant withdrawals, cashback and a huge game selection.",
  },
  {
    rank: 8,
    name: "PrismCasino",
    slug: "prismcasino",
    logo: "prismcasino.png",
    bonus: "$30 Free Chip!",
    tagline: "Colorful crypto slots",
    crypto: ["btc", "eth", "ltc"],
    url: "/out/prismcasino",
    description: "Unique bonuses and a colorful Vegas vibe.",
  },
  {
    rank: 9,
    name: "Placeholder",
    slug: "placeholder",
    logo: "placeholder.png",
    bonus: "Try your luck!",
    tagline: "New crypto casino",
    crypto: ["btc", "eth", "ltc"],
    url: "/out/placeholder",
    description: "Try your luck at our newest crypto casino!",
  },
  {
    rank: 10,
    name: "Placeholder",
    slug: "placeholder",
    logo: "placeholder.png",
    bonus: "Try your luck!",
    tagline: "New crypto casino",
    crypto: ["btc", "eth", "ltc"],
    url: "/out/placeholder",
    description: "Try your luck at our newest crypto casino!",
  },
];

export default function Top10() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-4xl text-yellow-400 font-bold text-center glow mb-8 font-casino uppercase drop-shadow-neon animate-pulse">
          🎰 Top 10 Crypto Casinos
        </h1>
        {casinos.map((casino) => (
          <CasinoCard key={casino.rank} {...casino} />
        ))}
      </div>
    </div>
  );
}
