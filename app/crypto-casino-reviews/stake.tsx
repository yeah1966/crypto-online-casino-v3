import Image from "next/image";
import Link from "next/link";

export default function StakeReview() {
  return (
    <main className="min-h-screen pt-36 pb-16 px-4 bg-gradient-to-b from-purple-900 to-black text-white">
      <div className="max-w-3xl mx-auto bg-[#241f6b] rounded-2xl shadow-2xl p-8 relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 relative">
            {/* Replace with actual logo if available */}
            <Image src="/logos/stake.png" alt="Stake logo" width={64} height={64} className="rounded-xl bg-white" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-yellow-300 drop-shadow">Stake Casino Review</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-300 text-lg">★★★★½</span>
              <span className="text-white/70 text-sm">4.8/5</span>
              <span className="ml-2 px-2 py-1 bg-pink-600 text-white rounded-full text-xs font-bold animate-pulse">Editor's Choice</span>
            </div>
          </div>
        </div>
        <p className="mb-6 text-lg text-white/80">
          Stake is a global leader in crypto gambling, famous for its massive sportsbook, instant withdrawals, and exclusive VIP club. Discover why so many high rollers choose Stake.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-purple-800 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-2 text-green-400">Pros</h2>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li>Huge sportsbook & live betting</li>
              <li>Instant crypto withdrawals</li>
              <li>Exclusive VIP rewards</li>
              <li>Provably fair games</li>
            </ul>
          </div>
          <div className="bg-purple-800 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-2 text-pink-400">Cons</h2>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li>Not available in some countries</li>
              <li>No welcome bonus in some regions</li>
              <li>Wagering requirements on bonuses</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-yellow-300">Key Features</h2>
          <ul className="space-y-2 text-white/90">
            <li><span className="font-bold text-pink-400">Bonus:</span> 200% up to $1,000 (where available)</li>
            <li><span className="font-bold text-green-400">Games:</span> Sportsbook, slots, live casino, originals</li>
            <li><span className="font-bold text-yellow-300">VIP:</span> Invite-only VIP club with huge perks</li>
            <li><span className="font-bold text-pink-400">License:</span> Curacao</li>
          </ul>
        </div>
        <Link href="https://stake.com/?ref=YOUR_AFFILIATE_ID" target="_blank" className="block w-full text-center px-8 py-4 bg-yellow-300 text-pink-700 font-extrabold rounded-full text-xl shadow-lg hover:bg-pink-600 hover:text-white transition-all mb-4">
          🏆 Play at Stake
        </Link>
        <div className="text-white/60 text-xs text-center">18+ | Play responsibly. Terms apply.</div>
      </div>
    </main>
  );
}
