export interface Casino {
  rank: number;
  name: string;
  slug: string;
  logo: string;
  bonus: string;
  tagline: string;
  crypto: string[];
  url: string;
  description: string;
}

export const casinoList: Casino[] = [
  {
    rank: 1,
    name: "BitStarz",
    slug: "bitstarz",
    logo: "bitstarz.png",
    bonus: "Tot 5 BTC bonus!",
    tagline: "Award-winning crypto casino",
    crypto: ["btc", "eth", "ltc", "usdt"],
    url: "https://www.bitstarz.com/",
    description: "Speel bij het meest bekroonde crypto casino met snelle uitbetalingen en duizenden spellen.",
  },
  {
    rank: 2,
    name: "Stake",
    slug: "stake",
    logo: "placeholder.png",
    bonus: "Tot 10% rakeback!",
    tagline: "Crypto sportsbook & casino",
    crypto: ["btc", "eth", "ltc", "doge", "usdt"],
    url: "https://stake.com/",
    description: "Grootste crypto sportsbook & casino, bekend van Twitch en razendsnelle uitbetalingen.",
  },
  {
    rank: 3,
    name: "7Bit Casino",
    slug: "7bit",
    logo: "7bit.png",
    bonus: "Tot 1.5 BTC + 100 Free Spins!",
    tagline: "Retro Vegas crypto slots",
    crypto: ["btc", "eth", "ltc", "usdt"],
    url: "https://www.7bitcasino.com/",
    description: "Retro Vegas stijl, duizenden slots en snelle crypto betalingen.",
  },
  {
    rank: 4,
    name: "Betzard",
    slug: "betzard",
    logo: "betzard.png",
    bonus: "100% tot 1 BTC + 100 Free Spins!",
    tagline: "Magic crypto casino",
    crypto: ["btc", "eth", "ltc", "usdt"],
    url: "https://www.betzard.com/",
    description: "Magisch casino met crypto bonussen en een groot spelaanbod.",
  },
  {
    rank: 5,
    name: "Betplay",
    slug: "betplay",
    logo: "betplay.png",
    bonus: "100% tot 50 mBTC + 10% cashback!",
    tagline: "Crypto only, instant payouts",
    crypto: ["btc", "ltc", "doge", "usdt"],
    url: "https://www.betplay.io/",
    description: "Directe uitbetalingen, cashback en een ruim spelaanbod.",
  },
  {
    rank: 6,
    name: "Prism Casino",
    slug: "prismcasino",
    logo: "prismcasino.png",
    bonus: "300% tot $3000 + 25 Free Spins!",
    tagline: "Colorful crypto slots",
    crypto: ["btc", "eth", "ltc"],
    url: "https://www.prismcasino.com/",
    description: "Unieke bonussen en kleurrijke Vegas sfeer.",
  },
  {
    rank: 7,
    name: "Dreams Casino",
    slug: "dreamscasino",
    logo: "dreamscasino.png",
    bonus: "200% tot $2000!",
    tagline: "Dream big, win bigger",
    crypto: ["btc", "eth", "ltc"],
    url: "https://www.dreamscasino.com/",
    description: "Droom groot met hoge bonussen en crypto uitbetalingen.",
  },
  {
    rank: 8,
    name: "CoinPoker",
    slug: "coinpoker",
    logo: "coinpoker.png",
    bonus: "100% tot 1,000 USDT!",
    tagline: "Crypto poker room",
    crypto: ["btc", "eth", "usdt"],
    url: "https://www.coinpoker.com/",
    description: "Dé plek voor pokerliefhebbers met crypto, snelle cashouts en rakeback.",
  },
  {
    rank: 9,
    name: "Crypto Loco",
    slug: "cryptoloco",
    logo: "cryptoloco.png",
    bonus: "150% tot 1 BTC!",
    tagline: "Loco crypto casino",
    crypto: ["btc", "eth", "ltc", "doge"],
    url: "https://www.cryptoloco.com/",
    description: "Gekke bonussen, snelle uitbetalingen en veel cryptomunten.",
  },
  {
    rank: 10,
    name: "Cloudbet",
    slug: "cloudbet",
    logo: "cloudbet.png",
    bonus: "100% tot 5 BTC!",
    tagline: "Sports & casino, high limits",
    crypto: ["btc", "eth", "usdt", "usdc", "ltc"],
    url: "https://www.cloudbet.com/",
    description: "Hoogste limieten, sportweddenschappen en live casino in crypto.",
  },
];
