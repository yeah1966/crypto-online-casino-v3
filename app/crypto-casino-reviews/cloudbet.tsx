import Image from "next/image";
import Link from "next/link";

export default function CloudbetReview() {
  return (
    <main className="min-h-screen pt-36 pb-16 px-4 bg-gradient-to-b from-purple-900 to-black text-white">
      <div className="max-w-3xl mx-auto bg-[#241f6b] rounded-2xl shadow-2xl p-8 relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 relative">
            {/* Replace with actual logo if available */}
            <Image src="/logos/cloudbet.png" alt="Cloudbet logo" width={64} height={64} className="rounded-xl bg-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-yellow-300 drop-shadow">Cloudbet Casino Review</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-300 text-lg">★★★★☆</span>
              <span className="text-white/70 text-sm">4.6/5</span>
            </div>
          </div>
        </div>
        <p className="mb-6 text-lg text-white/80">
          Cloudbet is a pioneer in crypto betting, offering a world-class sportsbook, massive bonuses, and instant crypto payouts. Explore why so many players trust Cloudbet for both sports and casino action.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-purple-800 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-2 text-green-400">Pros</h2>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li>Huge crypto sportsbook & live betting</li>
              <li>High welcome bonus (up to 5 BTC)</li>
              <li>Instant crypto withdrawals</li>
              <li>Provably fair games</li>
            </ul>
          </div>
          <div className="bg-purple-800 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-2 text-pink-400">Cons</h2>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li>Some country restrictions</li>
              <li>Wagering requirements on bonuses</li>
              <li>No phone support</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-yellow-300">Key Features</h2>
          <ul className="space-y-2 text-white/90">
            <li><span className="font-bold text-pink-400">Bonus:</span> Up to 5 BTC welcome bonus</li>
            <li><span className="font-bold text-green-400">Sportsbook:</span> Full crypto sportsbook & live betting</li>
            <li><span className="font-bold text-yellow-300">Games:</span> 2000+ slots, live casino, table games</li>
            <li><span className="font-bold text-pink-400">License:</span> Curacao</li>
          </ul>
        </div>
        <Link href="https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=crypto2025&afm_campaign=Cloudbet&afm_medium=Website&afm_content=home" target="_blank" className="block w-full text-center px-8 py-4 bg-yellow-300 text-pink-700 font-extrabold rounded-full text-xl shadow-lg hover:bg-pink-600 hover:text-white transition-all mb-4">
          🏆 Play at Cloudbet
        </Link>
        <div className="text-white/60 text-xs text-center">18+ | Play responsibly. Terms apply.</div>
      </div>
    </main>
  );
}
