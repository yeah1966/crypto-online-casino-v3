import Image from "next/image";
import Link from "next/link";
import { casinos } from '../crypto-casino-reviews/casinosData';

export default function BestBonusesPage() {
  // Example: filter and sort casinos by best bonuses, or show all with bonus details
  const sorted = [...casinos].sort((a, b) => b.rating - a.rating);

  return (
    <main className="relative max-w-4xl mx-auto px-4 py-4 pt-6 text-white">
      {/* VEGAS BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* MAIN TRANSPARENT CONTAINER */}
      <div className="relative z-10 max-w-3xl mx-auto rounded-3xl bg-black/70 shadow-2xl p-8 space-y-10 border border-purple-700/40 mt-2">
        {/* HEADER */}
        <section className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="text-4xl">🎰</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-[0_0_25px_gold] uppercase text-yellow-300 tracking-tight bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">Best Crypto Casino Bonuses 2025</h1>
            <span className="text-4xl">🪙</span>
          </div>
          <p className="text-lg text-white/80 mt-2 mb-1 max-w-2xl mx-auto text-center">
            Discover the biggest and most exclusive bonuses at the best crypto casinos! Choose from <span className="text-pink-400 font-bold">welcome bonuses</span>, <span className="text-yellow-300 font-bold">free spins</span> and <span className="text-green-400 font-bold">no deposit</span> deals. Claim with one click and get instant Vegas vibes!
          </p>
        </section>
        {/* BONUS CARDS */}
        <section className="animate-fade-in-up">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Highlighted bonus types */}
            <div className="relative rounded-2xl border-2 border-yellow-400 bg-black/80 text-white p-6 shadow-xl hover:scale-[1.03] hover:shadow-yellow-300/50 transition-all duration-300 max-w-[400px] mx-auto animate-fade-in-up">
              <span className="absolute -top-3 -left-3 text-2xl select-none">🎁</span>
              <h2 className="text-2xl font-bold mb-2 text-yellow-300 flex items-center gap-2">Welcome Bonus</h2>
              <p className="mb-2 text-white/90">Get up to 5 BTC + 200 Free Spins on your first deposit!</p>
              <Link href="/welcome-bonus" aria-label="Claim Welcome Bonus" className="bg-yellow-400 text-purple-900 font-bold px-5 py-2 rounded-full shadow-md hover:bg-yellow-300 transition hover:scale-105 flex items-center gap-2 mt-2">
                🎁 Claim Bonus
              </Link>
            </div>
            <div className="relative rounded-2xl border-2 border-pink-400 bg-black/80 text-white p-6 shadow-xl hover:scale-[1.03] hover:shadow-pink-400/40 transition-all duration-300 max-w-[400px] mx-auto animate-fade-in-up">
              <span className="absolute -top-3 -left-3 text-2xl select-none">🎉</span>
              <h2 className="text-2xl font-bold mb-2 text-pink-400 flex items-center gap-2">Free Spins</h2>
              <p className="mb-2 text-white/90">Grab 100 free spins instantly on the hottest slots!</p>
              <Link href="/free-spins" aria-label="See Free Spins" className="bg-pink-400 text-white font-bold px-5 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">
                🎰 See Free Spins
              </Link>
            </div>
            <div className="relative rounded-2xl border-2 border-green-400 bg-black/80 text-white p-6 shadow-xl hover:scale-[1.03] hover:shadow-green-400/40 transition-all duration-300 max-w-[400px] mx-auto animate-fade-in-up">
              <span className="absolute -top-3 -left-3 text-2xl select-none">🤑</span>
              <h2 className="text-2xl font-bold mb-2 text-green-400 flex items-center gap-2">No Deposit</h2>
              <p className="mb-2 text-white/90">Play for free and win real money with no deposit required!</p>
              <Link href="/no-deposit" aria-label="See No Deposit Bonuses" className="bg-green-400 text-[#241f6b] font-bold px-5 py-2 rounded-full shadow-md hover:bg-pink-400 hover:text-white transition hover:scale-105 flex items-center gap-2 mt-2">
                🪙 See No Deposit
              </Link>
            </div>
            <div className="relative rounded-2xl border-2 border-purple-400 bg-black/80 text-white p-6 shadow-xl hover:scale-[1.03] hover:shadow-purple-400/40 transition-all duration-300 max-w-[400px] mx-auto animate-fade-in-up">
              <span className="absolute -top-3 -left-3 text-2xl select-none">👑</span>
              <h2 className="text-2xl font-bold mb-2 text-purple-300 flex items-center gap-2">VIP & Cashback</h2>
              <p className="mb-2 text-white/90">Become a VIP and unlock personal bonuses & cashback!</p>
              <Link href="/vip-deals" aria-label="Become VIP" className="bg-purple-400 text-white font-bold px-5 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">
                👑 Become VIP
              </Link>
            </div>
          </div>
        </section>
        {/* DYNAMIC CASINO BONUS OVERVIEW */}
        <section className="animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300 text-center mt-6">Top Crypto Casino Bonuses</h2>
          <div className="grid gap-6">
            {sorted.map(casino => (
              <div key={casino.slug} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 flex flex-col md:flex-row items-center gap-4 shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                <Image src={casino.logo} alt={`${casino.name} logo`} width={56} height={56} className="rounded-lg bg-white group-hover:animate-spin" />
                <div className="flex-1">
                  <div className="font-bold text-lg text-yellow-200">{casino.name}</div>
                  <div className="text-white/80 text-sm mb-1">{casino.description}</div>
                  <div className="text-white/70 text-xs mb-1">{casino.noDepositNote}</div>
                  <div className="flex gap-2 mt-1">
                    {casino.noDepositBonus && (
                      <span className="inline-block bg-green-400 text-[#241f6b] text-xs font-bold px-2 py-1 rounded-md">No Deposit</span>
                    )}
                  </div>
                </div>
                <Link href={`/crypto-casino-reviews/${casino.slug}`} className="mt-2 font-bold px-4 py-2 rounded-full shadow-md transition-all flex items-center gap-2 ring-2 ring-white bg-yellow-300 text-purple-900 hover:bg-pink-600 hover:text-yellow-200">
                  View Review
                </Link>
              </div>
            ))}
          </div>
        </section>
        {/* FOOTER / CTA */}
        <div className="mt-12 text-center text-white/70">
          <p className="mb-2">All bonuses are 100% safe and tested by our team. <span className="text-yellow-300">18+</span> | Gamble responsibly.</p>
        </div>
      </div>
    </main>
  );
}
