export default function Top10Page() {
  const casinos = [
    {
      name: "BitStarz",
      rank: "#1",
      bonus: "Get up to 5 BTC Bonus!",
      tagline: "Award-winning crypto casino",
      slug: "bitstarz",
      logo: "/logos/bitstarz.png",
      url: "https://www.bitstarz.com",
      cryptos: ["BTC", "ETH", "LTC", "BCH", "DOGE", "USDT", "XRP", "TRX", "BNB", "ADA"],
    },
    {
      name: "Wild Vegas",
      rank: "#2",
      bonus: "100% bonus + Free Spins",
      tagline: "Get your wild bonus action here!",
      slug: "wildvegas",
      logo: "/logos/wildvegas.png",
      url: "https://www.wildvegascasino.com",
      cryptos: ["BTC", "LTC"],
    },
    {
      name: "7Bit",
      rank: "#3",
      bonus: "Up to 1.5 BTC + 100 Free Spins",
      tagline: "Classic slots & crypto games",
      slug: "7bit",
      logo: "/logos/7bit.png",
      url: "https://www.7bitcasino.com",
      cryptos: ["BTC", "ETH", "LTC", "BCH", "DOGE", "USDT", "XRP", "BNB", "ADA", "TRX"],
    },
    {
      name: "Cloudbet",
      rank: "#4",
      bonus: "100% up to 5 BTC!",
      tagline: "Crypto sportsbook & high bonuses",
      slug: "cloudbet",
      logo: "/logos/cloudbet.png",
      url: "https://www.cloudbet.com",
      cryptos: ["BTC", "ETH", "BCH", "USDT", "USDC", "DAI", "DOGE", "LTC", "ADA", "BNB", "XRP", "TRX", "..."],
    },
    {
      name: "Crypto Loko",
      rank: "#5",
      bonus: "Unlock LOKO rewards!",
      tagline: "Colorful & fast crypto casino",
      slug: "cryptoloko",
      logo: "/logos/cryptoloko.png",
      url: "https://www.cryptoloko.com",
      cryptos: ["BTC", "LTC", "BCH", "ETH", "DOGE", "BNB", "XRP", "USDT"],
    },
    {
      name: "Dreams",
      rank: "#6",
      bonus: "200% Welcome Bonus!",
      tagline: "Immersive Vegas-style experience",
      slug: "dreams",
      logo: "/logos/dreamscasino.png",
      url: "https://www.dreamscasino.com",
      cryptos: ["BTC", "BCH", "LTC", "ETH", "DOGE", "USDT", "BNB", "XRP"],
    },
    {
      name: "Betzard",
      rank: "#7",
      bonus: "100% up to 1 BTC + 100 FS!",
      tagline: "Top crypto casino",
      slug: "betzard",
      logo: "/logos/betzard.png",
      url: "https://www.turbico.com",
      cryptos: ["BTC", "ETH", "LTC", "BCH", "DOGE", "USDT"],
    },
    {
      name: "PrismCasino",
      rank: "#8",
      bonus: "Exclusive crypto deals",
      tagline: "Bright, bold, and fast",
      slug: "prismcasino",
      logo: "/logos/prismcasino.png",
      url: "https://www.prismcasino.com",
      cryptos: ["BTC", "BCH", "LTC", "ETH", "DOGE", "BNB", "XRP"],
    },
    {
      name: "Slots of Vegas",
      rank: "#9",
      bonus: "Claim jouw welkomstbonus!",
      tagline: "Classic Vegas-style crypto casino",
      slug: "slotsofvegas",
      logo: "/logos/slotsofvegas.png",
      url: "https://www.casinomeister.com",
      cryptos: ["BTC", "LTC", "ETH", "DOGE"],
    },
    {
      name: "CoinPoker",
      rank: "#10",
      bonus: "Exclusive poker bonuses!",
      tagline: "Crypto poker room",
      slug: "coinpoker",
      logo: "/logos/coinpoker.png",
      url: "https://www.coinpoker.com",
      cryptos: ["USDT", "CHP", "BTC", "ETH"],
    },
  ];

  const cryptoIcons = {
    BTC: "/icons/btc.svg",
    ETH: "/icons/eth.svg",
    LTC: "/icons/ltc.svg",
    BCH: "/icons/bch.svg",
    DOGE: "/icons/doge.svg",
    USDT: "/icons/usdt.svg",
    XRP: "/icons/xrp.svg",
    TRX: "/icons/trx.svg",
    BNB: "/icons/bnb.svg",
    ADA: "/icons/ada.svg",
    USDC: "/icons/usdc.svg",
    DAI: "/icons/dai.svg",
    CHP: "/icons/btc.svg", // replaced chp.svg with btc.svg for fallback
    "...": "",
  };

  return (
    <main className="relative max-w-6xl mx-auto px-4 py-12 pt-24 text-white">
      {/* VEGAS BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* HERO HEADER */}
      <h1 className="text-5xl font-extrabold mb-7 flex items-center gap-3 justify-center drop-shadow-[0_0_15px_gold]">
        <span className="text-4xl">🎰</span>
        <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">TOP 10 CRYPTO CASINOS 2025</span>
        <span className="text-4xl">🪙</span>
      </h1>
      <p className="mb-10 text-lg text-white/80 text-center max-w-3xl mx-auto">
        Discover our handpicked selection of the most rewarding and trusted crypto casinos — tested for speed, bonuses, and crypto compatibility.
      </p>
      <div className="flex flex-col gap-8">
        {casinos.map((casino, idx) => (
          <div
            key={casino.slug}
            className={`relative rounded-2xl border-2 ${idx === 0 ? 'border-yellow-400' : idx === 1 ? 'border-pink-400' : idx === 2 ? 'border-green-400' : 'border-purple-700'} bg-[#1a1442]/90 text-white px-6 py-8 shadow-xl hover:scale-[1.015] hover:shadow-[0_0_18px_#facc15] transition-all duration-300 w-full flex flex-col md:flex-row items-center gap-6 md:gap-10 animate-fade-in-up`}
          >
            <div className="flex flex-col items-center md:items-start min-w-[120px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-extrabold text-yellow-300 drop-shadow">{casino.rank}</span>
                <img src={casino.logo} alt={casino.name} className="w-14 h-14 rounded-xl border-2 border-white/70 bg-white/40 shadow" />
              </div>
              <span className="font-bold text-lg text-yellow-200 mb-1 text-center md:text-left">{casino.name}</span>
              <a href={casino.url} target="_blank" rel="noopener noreferrer" className="underline text-purple-300 text-xs hover:text-pink-400 text-center md:text-left">{casino.url.replace('https://www.', '')}</a>
            </div>
            <div className="flex-1 flex flex-col gap-2 items-center md:items-start">
              <span className="font-semibold text-green-300 text-lg">{casino.bonus}</span>
              <span className="text-purple-200 text-sm mb-1">{casino.tagline}</span>
            </div>
            {/* Crypto icons and labels, right-aligned for desktop */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 flex-1 md:max-w-xs">
              {casino.cryptos.map((c) => cryptoIcons[c] ? (
                <div key={c} className="flex flex-col items-center w-14">
                  <img src={cryptoIcons[c]} alt={c} title={c} className="w-7 h-7 mb-1" />
                  <span className="text-xs text-white/80 font-mono tracking-wide">{c}</span>
                </div>
              ) : (
                <span key={c} className="text-xs">{c}</span>
              ))}
            </div>
            <div className="flex flex-col gap-2 items-center md:items-end min-w-[160px]">
              <a
                href={`/reviews/${casino.slug}`}
                className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold px-6 py-3 rounded-full text-base shadow-md hover:scale-105 transition"
              >
                🎯 Read Review
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a
          href="/spin-to-win"
          className="inline-block text-white bg-pink-600 hover:bg-pink-700 font-bold py-4 px-10 rounded-full shadow-lg transition mt-6 text-xl"
        >
          🎡 Spin the Wheel for a Surprise Bonus!
        </a>
      </div>
    </main>
  );
}
