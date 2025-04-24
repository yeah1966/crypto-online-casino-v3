import Link from "next/link";
import Head from "next/head";
import CasinoSuggestions from "@/components/CasinoSuggestions";

export default function CloudbetReview() {
  return (
    <>
      <Head>
        <title>Cloudbet Review (2025) – Claim Bonus & Bet Instantly</title>
        <meta name="description" content="Read our 2025 Cloudbet review. Trusted crypto sportsbook & casino with fast payouts, high limits, and huge bonuses. Claim your bonus now!" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Cloudbet Review (2025) – Claim Bonus & Bet Instantly" />
      </Head>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-28 pb-16 px-4 text-white">
        <div className="max-w-3xl mx-auto bg-[#241f6b]/80 rounded-2xl shadow-2xl p-8 relative">
          <div className="flex flex-col items-center mb-6">
            <img src="/logos/cloudbet.png" alt="Cloudbet Casino Logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-3" />
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-300 text-2xl">★★★★½</span>
              <span className="text-white/70 text-sm">4.5/5</span>
            </div>
            <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow mb-2">CLOUDBET</h1>
            <p className="text-pink-300 text-lg font-semibold text-center max-w-xl">
              Cloudbet is known for its crypto sportsbook and high betting limits, ideal for Bitcoin sports betting fans. It offers fast crypto payouts and one of the best live casinos among crypto-friendly platforms. Enjoy Bitcoin betting, live casino action, and fast crypto withdrawals at Cloudbet.
            </p>
          </div>

          <div className="my-8 bg-purple-950/80 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">Our Review</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              If you’re looking for a crypto casino that doesn’t compromise on professionalism, Cloudbet is your spot. From the moment you land on the site, you’re greeted with a clean interface, sleek dark theme, and instant access to both casino games and a full sportsbook.<br /><br />
              The real kicker? Cloudbet was one of the first crypto casinos on the scene, meaning they’ve had time to build a reputation for reliability and fast payouts.<br /><br />
              It shines with its live betting features, high betting limits, and impressive welcome bonuses. There’s even a VIP system that scales with your loyalty, unlocking better rewards and cashback tiers.<br /><br />
              Not everything glows — beginners might find the interface a bit advanced, and casual players could feel overwhelmed by the depth of options. But if you want a serious crypto betting experience with proven performance, Cloudbet is the real deal.<br /><br />
              Whether you’re into blackjack, sports betting, or just looking to test your luck with crypto, Cloudbet delivers in classic style.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm md:text-base">
            <div>
              <h2 className="text-green-400 font-bold text-lg mb-2">✅ PROS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Fully integrated crypto sportsbook</li>
                <li>Instant crypto withdrawals</li>
                <li>High betting limits</li>
                <li>Great reputation & longevity</li>
              </ul>
            </div>
            <div>
              <h2 className="text-red-400 font-bold text-lg mb-2">❌ CONS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Interface can be complex for newcomers</li>
                <li>VIP benefits mostly for high-rollers</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-yellow-300 text-xl font-bold mb-2">🎲 HIGHLIGHTS</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Sports & casino games in one platform</li>
              <li>Huge welcome bonus for new players</li>
              <li>Long-standing trusted platform</li>
              <li>Supports BTC, ETH, USDT, and more</li>
            </ul>
          </div>

          <a
            href="[Je affiliate link uit je admin]"
            className="mt-6 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            🎲 Claim your Cloudbet bonus now!
          </a>

          <p className="text-center text-xs text-gray-400 mt-4">
            18+ | Gamble responsibly. Cloudbet may not be available in all jurisdictions.
          </p>

          <CasinoSuggestions />

          <div className="mt-10 mb-2">
            <h2 className="text-xl font-bold text-purple-300 mb-2">Looking for other top-rated crypto casinos?</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/crypto-casino-reviews/bitstarz" className="underline text-blue-300 hover:text-blue-400">BitStarz</a>
              <a href="/crypto-casino-reviews/slotsofvegas" className="underline text-blue-300 hover:text-blue-400">Slots of Vegas</a>
              <a href="/crypto-casino-reviews/wildvegas" className="underline text-blue-300 hover:text-blue-400">Wild Vegas</a>
              <a href="/crypto-casino-reviews/7bit" className="underline text-blue-300 hover:text-blue-400">7Bit Casino</a>
              <a href="/crypto-casino-reviews/crypto-loko" className="underline text-blue-300 hover:text-blue-400">Crypto Loko</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
