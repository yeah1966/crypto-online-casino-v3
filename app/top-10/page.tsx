import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Top10Page() {
  // Achtergrond
  // Je kunt hier eventueel een andere afbeelding kiezen
  // of de gradient uit de slots-pagina gebruiken

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
      tagline: "A new crypto casino with a growing selection of games.",
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
      tagline: "A fresh crypto platform with exclusive deals for new players.",
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
      tagline: "A trusted name in crypto betting with a global reputation.",
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
      tagline: "A modern site offering both classic and innovative crypto games.",
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
      tagline: "A colorful crypto casino experience with fast payouts and top bonuses.",
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
    <>
      <div className="min-h-screen fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <main className="min-h-screen bg-transparent py-10 px-2 md:px-0">
        <div className="max-w-6xl mx-auto bg-black/65 rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-yellow-400/20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 text-center mb-10 drop-shadow-lg">
            🏆 Top 10 Crypto Casinos – 2025
          </h1>
        <p className="mb-10 text-lg text-white/80 text-center max-w-3xl mx-auto">
          Discover our handpicked selection of the most rewarding and trusted crypto casinos — tested for speed, bonuses, and crypto compatibility.
        </p>
        <div className="flex flex-col gap-10">
          {casinos.map((casino, idx) => (
            <section
              key={idx}
              className="relative rounded-3xl border-2 border-yellow-400/70 bg-gradient-to-br from-yellow-900/60 via-black/90 to-purple-900/70 text-white px-8 py-8 shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 animate-fade-in-up hover:scale-[1.01] transition-transform"
            >
              <div className="flex flex-col items-center md:items-start min-w-[120px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-yellow-300 drop-shadow border-4 border-yellow-400 bg-black/70 rounded-full px-5 py-2">{casino.rank}</span>
                  <Image src={casino.logo} alt={casino.name} className="w-16 h-16 rounded-2xl border-2 border-white/80 bg-white/40 shadow-lg" />
                </div>
                <span className="font-bold text-xl text-yellow-200 mb-1 text-center md:text-left tracking-wide">{casino.name}</span>
              </div>
              <div className="flex-1 flex flex-col gap-2 items-center md:items-start">
                <span className="font-semibold text-yellow-200 text-xl mb-1">{casino.bonus}</span>
                <span className="text-purple-200 text-base mb-1 italic">{casino.tagline}</span>
                {casino.slug === "bitstarz" && (
                  <p className="text-white/90 text-base mb-2">BitStarz is a multi-award-winning crypto casino known for its fast payouts, huge game selection, and generous bonuses. Players enjoy a seamless experience and top-tier customer support.</p>
                )}
                {casino.slug === "wildvegas" && (
                  <p className="text-white/90 text-base mb-2">Wild Vegas brings the excitement of Las Vegas to your screen, offering a wide range of slots and table games. Their bonuses and promotions keep things lively for every player.</p>
                )}
                {casino.slug === "7bit" && (
                  <p className="text-white/90 text-base mb-2">7Bit Casino is famous for its retro vibe and massive slot selection. With support for many cryptocurrencies, it’s a favorite for both new and experienced crypto gamblers.</p>
                )}
                {casino.slug === "cloudbet" && (
                  <p className="text-white/90 text-base mb-2">Cloudbet is a pioneer in the crypto gambling space, offering both a casino and sportsbook. High limits and fast withdrawals make it a top pick for serious players.</p>
                )}
                {casino.slug === "crypto-loko" && (
                  <p className="text-white/90 text-base mb-2">Cryptoloko stands out with its colorful design and unique games. It’s known for rewarding regular players with exclusive promotions and a fun, community-driven atmosphere.</p>
                )}
                {casino.slug === "dreams" && (
                  <p className="text-white/90 text-base mb-2">Dreams Casino delivers a classic Vegas-style experience with a modern twist. Their welcome bonuses and variety of slots attract players from all over the world.</p>
                )}
                {casino.slug === "betzard" && (
                  <p className="text-white/90 text-base mb-2">Betzard offers a robust sportsbook and casino platform, supporting a wide range of cryptocurrencies. Their user-friendly interface makes betting easy and enjoyable.</p>
                )}
                {casino.slug === "prismcasino" && (
                  <p className="text-white/90 text-base mb-2">PrismCasino is known for its bright design and exclusive crypto deals. It’s a great choice for players looking for something fresh and exciting.</p>
                )}
                {casino.slug === "slotsofvegas" && (
                  <p className="text-white/90 text-base mb-2">Slots of Vegas brings the glitz and glamour of Vegas slots to the online world. Their focus on crypto payments ensures fast and secure transactions.</p>
                )}
                {casino.slug === "coinpoker" && (
                  <p className="text-white/90 text-base mb-2">CoinPoker is a leading crypto poker room where you can play with USDT, BTC, and more. Enjoy exclusive tournaments and a vibrant community of poker enthusiasts.</p>
                )}
              </div>
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 flex-1 md:max-w-xs">
                {casino.cryptos.map((c) => cryptoIcons[c] ? (
                  <Image key={c} src={cryptoIcons[c]} alt={c} title={c} width={32} height={32} className="w-8 h-8" />
                ) : (
                  <span key={c} className="text-xs">{c}</span>
                ))}
              </div>
              <div className="flex flex-col gap-2 items-center md:items-end min-w-[180px]">
                <Link
                  href={casino.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold px-7 py-3 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-yellow-400/60 transition flex justify-center items-center text-center"
                >
                  Visit Casino
                </Link>
                {casino.hasReview && (
                  <Link
                    href={`/reviews/${casino.slug}`}
                    className="inline-block bg-gradient-to-r from-purple-400 to-yellow-400 text-black font-bold px-7 py-3 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-purple-400/60 transition flex justify-center items-center text-center mt-3"
                  >
                    Read Review
                  </Link>
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
                className="relative rounded-3xl border-2 border-yellow-400/70 bg-gradient-to-br from-yellow-900/60 via-black/90 to-purple-900/70 text-white px-8 py-8 shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 animate-fade-in-up hover:scale-[1.01] transition-transform"
              >
                <div className="flex flex-col items-center md:items-start min-w-[120px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-4xl font-extrabold text-yellow-300 drop-shadow border-4 border-yellow-400 bg-black/70 rounded-full px-5 py-2">{casino.rank}</span>
                    <Image src={casino.logo} alt={casino.name} width={64} height={64} className="w-16 h-16 rounded-2xl border-2 border-white/80 bg-white/40 shadow-lg" />
                  </div>
                  <span className="font-bold text-xl text-yellow-200 mb-1 text-center md:text-left tracking-wide">{casino.name}</span>
                </div>
                <div className="flex-1 flex flex-col gap-2 items-center md:items-start">
                  <span className="font-semibold text-yellow-200 text-xl mb-1">{casino.bonus}</span>
                  <span className="text-purple-200 text-base mb-1 italic">{casino.tagline}</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 flex-1 md:max-w-xs">
                  {casino.cryptos.map((c) => cryptoIcons[c] ? (
                    <Image key={c} src={cryptoIcons[c]} alt={c} title={c} width={32} height={32} className="w-8 h-8" />
                  ) : (
                    <span key={c} className="text-xs">{c}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end min-w-[180px]">
                  <Link
                    href={casino.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold px-7 py-3 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-yellow-400/60 transition flex justify-center items-center text-center"
                  >
                    Visit Casino
                  </Link>
                  {casino.hasReview && (
  <Link
    href={`/reviews/${casino.slug}`}
    className="inline-block bg-gradient-to-r from-purple-400 to-yellow-400 text-black font-bold px-7 py-3 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-purple-400/60 transition flex justify-center items-center text-center mt-3"
  >
    Read Review
  </Link>
)}
                </div>
              </section>
            ))}
          </div>
        </div>
        <div className="text-center mt-16 hidden"></div>
      </div>
    </main>
    </>
  );
}
