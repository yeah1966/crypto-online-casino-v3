import Link from "next/link";
import Head from "next/head";
import CasinoSuggestions from "@/components/CasinoSuggestions";

export default function SevenBitReview() {
  return (
    <>
      <Head>
        <title>7Bit Casino Review (2025) – Claim Bonus & Spin Retro</title>
        <meta name="description" content="Read our 2025 7Bit Casino review. 7,000+ crypto slots, retro arcade vibes, fast payouts & big bonuses. Claim your 7Bit bonus now!" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="7Bit Casino Review (2025) – Claim Bonus & Spin Retro" />
      </Head>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-28 pb-16 px-4 text-white">
        <div className="max-w-3xl mx-auto bg-[#241f6b]/80 rounded-2xl shadow-2xl p-8 relative">
          <div className="flex flex-col items-center mb-6">
            <img src="/logos/7bit.png" alt="7Bit Casino logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-3" />
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-300 text-2xl">★★★★☆</span>
              <span className="text-white/70 text-sm">4.0/5</span>
            </div>
            <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow mb-2">7BIT CASINO</h1>
            <p className="text-pink-300 text-lg font-semibold text-center max-w-xl">7Bit Casino blends retro charm with modern crypto tech, creating a colorful playground for slot lovers and bonus chasers.</p>
          </div>

          <div className="my-8 bg-purple-950/80 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">Our Review</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              7Bit Casino is one of those rare platforms that knows exactly what it is — and leans all-in. From the pixel-style logo to the vintage arcade vibes, the whole site feels like stepping into a neon-lit time machine. But don’t let the retro aesthetics fool you — under the hood, this casino runs like a finely-tuned crypto machine.<br /><br />
              There are over 7,000 games, from classic slots to provably fair titles, and crypto is king: BTC, LTC, ETH, DOGE, and more are accepted with lightning-fast payouts. The welcome bonus is one of the most generous in the industry, especially if you deposit using crypto.<br /><br />
              7Bit shines when it comes to slot tournaments, daily cashback, and VIP levels that reward loyal players. However, live casino fans and sports bettors might find the offering a little too slot-heavy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm md:text-base">
            <div>
              <h2 className="text-green-400 font-bold text-lg mb-2">✅ PROS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Huge variety of crypto slots & games</li>
                <li>Generous welcome bonus</li>
                <li>Daily cashback & reloads</li>
                <li>Retro arcade theme</li>
              </ul>
            </div>
            <div>
              <h2 className="text-red-400 font-bold text-lg mb-2">❌ CONS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>No sportsbook</li>
                <li>Not ideal for live table players</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-yellow-300 text-xl font-bold mb-2">🎲 HIGHLIGHTS</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>7,000+ crypto-friendly games</li>
              <li>Top-tier bonuses & free spins</li>
              <li>Provably fair titles available</li>
              <li>Bitcoin, Litecoin, Ethereum, DOGE & more</li>
            </ul>
          </div>

          <a
            href="[Je affiliate link uit je admin]"
            className="mt-6 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            🎰 Claim your 7Bit bonus now!
          </a>

          <p className="text-center text-xs text-gray-400 mt-4">
            18+ | Gamble responsibly. 7Bit Casino may not be available in all jurisdictions.
          </p>

          <CasinoSuggestions />
        </div>
      </main>
    </>
  );
}
