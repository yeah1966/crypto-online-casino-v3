export default function Top10Page() {
  const casinos = [
    {
      name: "BitStarz",
      rank: "#1",
      bonus: "Get up to 5 BTC Bonus!",
      tagline: "Award-winning crypto casino",
      slug: "bitstarz",
      logo: "/logos/bitstarz.png",
      url: "https://b1t5t4rz.com/b2b7d0ed7",
      cryptos: ["BTC", "ETH", "LTC", "BCH", "DOGE", "USDT", "XRP", "TRX", "BNB", "ADA"],
      hasReview: true,
    },
    {
      name: "Wild Vegas",
      rank: "#2",
      bonus: "100% bonus + Free Spins",
      tagline: "Get your wild bonus action here!",
      slug: "wildvegas",
      logo: "/logos/wildvegas.png",
      url: "https://www.wildvegaslinks.com/click/11/4315/15512/1",
      cryptos: ["BTC", "LTC"],
      hasReview: true,
    },
    {
      name: "7Bit",
      rank: "#3",
      bonus: "Up to 1.5 BTC + 100 Free Spins",
      tagline: "Classic slots & crypto games",
      slug: "7bit",
      logo: "/logos/7bit.png",
      url: "https://www.7bitcasino.com/a/b8c1d2e3f4",
      cryptos: ["BTC", "ETH", "LTC", "BCH", "DOGE", "USDT", "XRP", "BNB", "ADA", "TRX"],
      hasReview: true,
    },
    {
      name: "Cloudbet",
      rank: "#4",
      bonus: "100% up to 5 BTC!",
      tagline: "Crypto sportsbook & high bonuses",
      slug: "cloudbet",
      logo: "/logos/cloudbet.png",
      url: "https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo",
      cryptos: ["BTC", "ETH", "BCH", "USDT", "USDC", "DAI", "DOGE", "LTC", "ADA", "BNB", "XRP", "TRX", "..."],
      hasReview: true,
    },
    {
      name: "Cryptoloko",
      rank: "#5",
      bonus: "Unlock LOKO rewards!",
      tagline: "Colorful & fast crypto casino",
      slug: "crypto-loko",
      logo: "/logos/cryptoloko.png",
      url: "https://cryptolokolink.com/click/77/441/6060/1",
      cryptos: ["BTC", "LTC", "BCH", "ETH", "DOGE", "BNB", "XRP", "USDT"],
      hasReview: true,
    },
    {
      name: "Dreams Casino",
      rank: "#6",
      bonus: "200% Welcome Bonus!",
      tagline: "Immersive Vegas-style experience",
      slug: "dreams",
      logo: "/logos/dreamscasino.png",
      url: "https://www.dreamslinks.com/click/64/305/15512/1",
      cryptos: ["BTC", "BCH", "LTC", "ETH", "DOGE", "USDT", "BNB", "XRP"],
      hasReview: true,
    },
    {
      name: "Betzard",
      rank: "#7",
      bonus: "100% up to 1 BTC + 100 FS!",
      tagline: "Top crypto casino",
      slug: "betzard",
      logo: "/logos/betzard.png",
      url: "https://7bit.partners/pe27a3a44",
      cryptos: ["BTC", "ETH", "LTC", "BCH", "DOGE", "USDT"],
      hasReview: true,
    },
    {
      name: "PrismCasino",
      rank: "#8",
      bonus: "Exclusive crypto deals",
      tagline: "Bright, bold, and fast",
      slug: "prismcasino",
      logo: "/logos/prismcasino.png",
      url: "https://www.prismlinks.com/click/6/4305/15512/1",
      cryptos: ["BTC", "BCH", "LTC", "ETH", "DOGE", "BNB", "XRP"],
      hasReview: false,
    },
    {
      name: "Slots of Vegas",
      rank: "#9",
      bonus: "Claim your welcome bonus!",
      tagline: "Classic Vegas-style crypto casino",
      slug: "slotsofvegas",
      logo: "/logos/slotsofvegas.png",
      url: "https://www.slotsofvegaslinks.com/click/15/4298/15512/1",
      cryptos: ["BTC", "LTC", "ETH", "DOGE"],
      hasReview: true,
    },
    {
      name: "CoinPoker",
      rank: "#10",
      bonus: "Exclusive poker bonuses!",
      tagline: "Crypto poker room",
      slug: "coinpoker",
      logo: "/logos/coinpoker.png",
      url: "https://record.coinpokeraffiliates.com/_BPlLejNitgfUOsjNOfgKeWNd7ZgqdRLk/1/",
      cryptos: ["USDT", "CHP", "BTC", "ETH"],
      hasReview: true,
    },
  ];

  const extraCasinos = [
    {
      name: "Golden Billy",
      rank: "#11",
      bonus: "Live on the website",
      tagline: "Crypto casino",
      slug: "goldenbilly",
      logo: "/logos/goldenbilly.png",
      url: "https://goldenbillylink.com/h62218aaa",
      cryptos: ["BTC", "ETH", "LTC", "BCH", "DOGE", "XRP", "USDT"],
      hasReview: true,
    },
    {
      name: "Ninlay",
      rank: "#12",
      bonus: "Not yet live",
      tagline: "Crypto casino",
      slug: "ninlayplay",
      logo: "/logos/ninlaycasino.png",
      url: "https://ninlayplay.com/hecd2573b",
      cryptos: ["BTC", "ETH", "LTC", "BCH", "DOGE", "XRP", "USDT"],
      hasReview: true,
    },
    {
      name: "Crownslots",
      rank: "#13",
      bonus: "Not yet live",
      tagline: "Crypto casino",
      slug: "crownslots",
      logo: "/logos/crownslots.png",
      url: "https://crownslotslink.com/hfb84c81c",
      cryptos: ["BTC", "ETH", "LTC", "USDT"],
      hasReview: false,
    },
    {
      name: "1xBet",
      rank: "#14",
      bonus: "For sports betting",
      tagline: "Crypto casino",
      slug: "1xbet",
      logo: "/logos/1xbet.png",
      url: "https://refpa3740576.top/L?tag=d_3915280m_1599c_&site=3915280&ad=1599",
      cryptos: ["BTC", "ETH", "LTC", "USDT", "XRP", "DOGE", "TRX", "BCH"],
      hasReview: true,
    },
    {
      name: "Loki Casino",
      rank: "#15",
      bonus: "Not yet live",
      tagline: "Crypto casino",
      slug: "lokicasino",
      logo: "/logos/lokicasino.png",
      url: "https://lokicasinolink.com/hd8471080",
      cryptos: ["BTC", "ETH", "LTC", "BCH", "DOGE", "XRP", "USDT"],
      hasReview: false,
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
    CHP: "/icons/btc.svg",
    "...": "",
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="relative rounded-3xl bg-black/65 shadow-2xl border-2 border-yellow-400 p-8 md:p-12 space-y-10 max-w-6xl mx-auto mt-6">
        <h1 className="text-4xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700 flex items-center justify-center gap-3">
          <img src="/casino-icons/Diamond 1.svg" alt="Diamond" width={48} height={48} className="drop-shadow-lg" />
          TOP CRYPTO CASINOS 2025
          <img src="/casino-icons/Roulette Wheel.svg" alt="Roulette wheel" width={48} height={48} className="drop-shadow-lg animate-bounce" />
        </h1>
        <p className="mb-10 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Discover our handpicked selection of the most rewarding and trusted crypto casinos — tested for speed, bonuses, and crypto compatibility.
        </p>
        <div className="flex flex-col gap-8">
          {casinos.map((casino, idx) => (
            <section
              key={casino.slug}
              className={`relative rounded-2xl border-2 ${idx === 0 ? 'border-yellow-400' : idx === 1 ? 'border-pink-400' : idx === 2 ? 'border-green-400' : 'border-purple-700'} bg-[#1a1442]/90 text-white px-6 py-8 shadow-xl hover:scale-[1.015] hover:shadow-[0_0_18px_#facc15] transition-all duration-300 w-full flex flex-col md:flex-row items-center gap-6 md:gap-10 animate-fade-in-up`}
            >
              <div className="flex flex-col items-center md:items-start min-w-[120px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-extrabold text-yellow-300 drop-shadow">{casino.rank}</span>
                  <img src={casino.logo} alt={casino.name} className="w-14 h-14 rounded-xl border-2 border-white/70 bg-white/40 shadow" />
                </div>
                <span className="font-bold text-lg text-yellow-200 mb-1 text-center md:text-left">{casino.name}</span>
                <span className="underline text-purple-300 text-xs text-center md:text-left">{casino.name}</span>
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
                  href={casino.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold px-6 py-3 rounded-full text-base shadow-md hover:scale-105 transition flex justify-center items-center text-center"
                >
                  Visit Casino
                </a>
                {casino.hasReview && (
                  <a
                    href={`/reviews/${casino.slug}`}
                    className="inline-block bg-gradient-to-r from-purple-400 to-yellow-400 text-black font-bold px-6 py-3 rounded-full text-base shadow-md hover:scale-105 transition flex justify-center items-center text-center mt-2"
                  >
                    Read Review
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>
        {/* Extra affiliate casinos uit sheet */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">More Crypto Casino Deals</h2>
          <div className="flex flex-col gap-10">
            {extraCasinos.map((casino) => (
              <section
                key={casino.slug}
                className="relative rounded-2xl border-2 border-green-400 bg-[#1a1442]/90 text-white px-8 py-8 shadow-xl flex flex-col md:flex-row items-center gap-6 md:gap-10 animate-fade-in-up"
              >
                <div className="flex flex-col items-center md:items-start min-w-[120px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-extrabold text-green-300 drop-shadow">{casino.rank}</span>
                    <img src={casino.logo} alt={casino.name} className="w-14 h-14 rounded-xl border-2 border-white/70 bg-white/40 shadow" />
                  </div>
                  <span className="font-bold text-lg text-green-200 mb-1 text-center md:text-left">{casino.name}</span>
                </div>
                <div className="flex-1 flex flex-col gap-2 items-center md:items-start">
                  <span className="font-semibold text-green-300 text-lg">{casino.bonus}</span>
                  <span className="text-purple-200 text-sm mb-1">{casino.tagline}</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 flex-1 md:max-w-xs">
                  {casino.cryptos.map((c) => cryptoIcons[c] ? (
                    <img src={cryptoIcons[c]} alt={c} title={c} className="w-7 h-7" />
                  ) : (
                    <span key={c} className="text-xs">{c}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end min-w-[160px]">
                  <a href={casino.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold px-6 py-3 rounded-full text-base shadow-md hover:scale-105 transition flex justify-center items-center text-center">Visit Casino</a>
                  {casino.hasReview && (
                    <a
                      href={`/reviews/${casino.slug}`}
                      className="inline-block bg-gradient-to-r from-purple-400 to-yellow-400 text-black font-bold px-6 py-3 rounded-full text-base shadow-md hover:scale-105 transition flex justify-center items-center text-center mt-2"
                    >
                      Read Review
                    </a>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
        <div className="text-center mt-16 hidden"></div>
      </div>
    </main>
  );
}
