import Head from "next/head";
import CasinoSuggestions from "@/components/CasinoSuggestions";

export default function CoinPokerReview() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-28 pb-16 px-4 text-white">
        <div className="max-w-3xl mx-auto bg-[#241f6b]/65 rounded-2xl shadow-2xl p-8 relative">
          <div className="flex flex-col items-center mb-6">
            <img src="/logos/coinpoker.png" alt="CoinPoker Casino Logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-3" />
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-300 text-2xl">★★★★☆</span>
              <span className="text-white/70 text-sm">4.4/5</span>
            </div>
            <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow mb-2">CoinPoker Casino Review</h1>
            <p className="text-pink-300 text-lg font-semibold text-center max-w-xl">
              CoinPoker is the world’s most trusted blockchain poker site, offering a provably fair experience with fast crypto payouts and decentralized gameplay.<br />
              If you’re searching for secure crypto poker powered by transparency, CoinPoker combines the thrill of classic poker with the power of blockchain technology.
            </p>
          </div>

          <div className="my-8 bg-purple-950/80 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">Our Review</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              If you’re into poker and crypto, CoinPoker is an absolute must-try. Unlike traditional online casinos, this platform is built specifically for <strong>blockchain-based poker games</strong> with fast and transparent transactions.<br /><br />
              What sets CoinPoker apart is its use of <strong>USDT and its own CHP token</strong> for low-fee gameplay, plus <strong>instant payouts</strong> thanks to smart contract-based processing. You won’t find a slot machine here — it’s <strong>pure poker</strong>: cash games, tournaments, and leaderboard-based challenges.<br /><br />
              The design is slick and dark-themed, perfect for long sessions. It's not overloaded with distractions — just high-stakes tables, responsive controls, and a tight-knit crypto community.<br /><br />
              If you're not a poker player, this isn't for you. But if you are? This might be the best crypto-powered card room online.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm md:text-base">
            <div>
              <h2 className="text-green-400 font-bold text-lg mb-2">✅ PROS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Built entirely for poker players</li>
                <li>Transparent, blockchain-driven gameplay</li>
                <li>No KYC (play anonymously)</li>
                <li>Uses USDT and CHP token</li>
              </ul>
            </div>
            <div>
              <h2 className="text-red-400 font-bold text-lg mb-2">❌ CONS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>No slots or other casino games</li>
                <li>Not ideal for total beginners</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-yellow-300 text-xl font-bold mb-2">🎲 HIGHLIGHTS</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Fast USDT withdrawals</li>
              <li>Global online poker community</li>
              <li>Daily tournaments with big pots</li>
              <li>Crypto-only — no fiat nonsense</li>
            </ul>
          </div>

          <a
            href="[Affiliate-link via admin toevoegen]"
            className="mt-6 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            🎯 Play poker with crypto now
          </a>

          <CasinoSuggestions />

          <p className="text-center text-xs text-gray-400 mt-4">
            18+ | Gamble responsibly. CoinPoker may not be available in all jurisdictions.
          </p>
        </div>
      </main>
    </>
  );
}
