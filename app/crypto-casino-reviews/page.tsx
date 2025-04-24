import Link from "next/link";

const casinos = [
  { name: "Slots of Vegas", slug: "slotsofvegas", rating: 4.3, logo: "/logos/slotsofvegas.png", cryptos: ["btc", "eth", "ltc"], alt: "Slots of Vegas Casino Logo" },
  { name: "Wild Vegas", slug: "wildvegas", rating: 4.2, logo: "/logos/wildvegas.png", cryptos: ["btc", "eth", "ltc"], alt: "Wild Vegas Casino Logo" },
  { name: "BitStarz", slug: "bitstarz", rating: 4.9, logo: "/logos/bitstarz.png", cryptos: ["btc", "eth", "ltc"], alt: "BitStarz Casino Logo" },
  { name: "Cloudbet", slug: "cloudbet", rating: 4.7, logo: "/logos/cloudbet.png", cryptos: ["btc", "eth", "ltc"], alt: "Cloudbet Casino Logo" },
  { name: "7Bit", slug: "7bit", rating: 4.5, logo: "/logos/7bit.png", cryptos: ["btc", "eth", "ltc"], alt: "7Bit Casino Logo" },
  { name: "Betplay", slug: "betplay", rating: 4.6, logo: "/logos/betplay.png", cryptos: ["btc", "eth", "ltc"], alt: "Betplay Casino Logo" },
  { name: "Dreams", slug: "dreams", rating: 4.2, logo: "/logos/dreamscasino.png", cryptos: ["btc", "eth", "ltc"], alt: "Dreams Casino Logo" },
  { name: "Crypto Loko", slug: "crypto-loko", rating: 4.3, logo: "/logos/cryptoloko.png", cryptos: ["btc", "eth", "ltc"], alt: "Crypto Loko Casino Logo" },
  { name: "Betzard", slug: "betzard", rating: 4.5, logo: "/logos/betzard.png", cryptos: ["btc", "eth", "ltc"], alt: "Betzard Casino Logo" },
  { name: "Coinpoker", slug: "coinpoker", rating: 4.4, logo: "/logos/coinpoker.png", cryptos: ["btc", "eth", "ltc"], alt: "CoinPoker Casino Logo" },
];

function getStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="text-yellow-300 text-xl">
      {Array(full).fill("★").join("")}{half ? "½" : ""}
    </span>
  );
}

export default function ReviewsPage() {
  return (
    <main className="relative min-h-screen pt-0 pb-16 px-4 text-white overflow-hidden">
      {/* VEGAS BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* HERO SECTION */}
      <section className="w-full pt-24 pb-12 flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/icons/btc.svg" alt="Bitcoin" width={36} height={36} />
          <img src="/icons/eth.svg" alt="Ethereum" width={36} height={36} />
          <img src="/icons/ltc.svg" alt="Litecoin" width={36} height={36} />
          <span className="text-yellow-300 text-3xl font-black drop-shadow">Crypto Casino Reviews</span>
          <img src="/icons/btc.svg" alt="Bitcoin" width={36} height={36} />
        </div>
        <p className="mb-4 text-lg text-white/80 max-w-2xl mx-auto">
          Discover the best crypto casinos of 2025. All sites are independently reviewed for bonuses, fairness, crypto support, and player experience. Vegas vibes, instant payouts, and full transparency — only the top-rated make our list!
        </p>
      </section>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {casinos.map((casino) => (
            <Link
              href={`/crypto-casino-reviews/${casino.slug}`}
              key={casino.slug}
              className="flex items-center gap-4 bg-purple-900/80 rounded-2xl shadow-2xl p-5 hover:bg-purple-800 transition-all group border-2 border-transparent hover:border-yellow-300"
            >
              <div className="flex-shrink-0">
                <img src={casino.logo} alt={casino.alt} width={64} height={64} className="rounded-xl bg-white shadow-md" />
              </div>
              <div className="flex flex-col flex-1 gap-1 min-w-0">
                <span className="text-yellow-300 font-extrabold text-xl uppercase tracking-wide truncate">
                  {casino.name}
                </span>
                <div className="flex items-center gap-2 mb-1">
                  {casino.cryptos.map((crypto) => (
                    <img key={crypto} src={`/icons/${crypto}.svg`} alt={`${crypto.toUpperCase()} supported`} width={24} height={24} className="inline-block" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">Read the full review →</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                {getStars(casino.rating)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
