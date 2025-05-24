import React from "react";
import Image from "next/image";
import Link from "next/link";
import { casinos } from '@/data/casinosData';

export default function NoDepositPage() {
  const filtered = casinos.filter(c => c.noDepositBonus !== undefined);

  return (
    <div className="relative rounded-3xl bg-black/65 shadow-2xl border-2 border-yellow-400 p-8 md:p-12 space-y-10 max-w-6xl mx-auto mt-6">
      {/* VEGAS BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat animate-bg-pan" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* MAIN CONTENT */}
      <div className="relative z-10">
        {/* HEADER SECTION */}
        <section className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="text-5xl">💸</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold neon-glow uppercase text-green-300 tracking-tight bg-gradient-to-r from-yellow-400 via-green-400 to-purple-500 text-transparent bg-clip-text">No Deposit Bonuses</h1>
          </div>
          <p className="text-lg text-white mt-2 mb-1 max-w-2xl mx-auto flex items-center gap-2 justify-center">
            <span className="text-2xl">🎯</span> No deposit bonuses are a great way to explore crypto casinos without risk. They let you test games and platforms before making a deposit. Just keep in mind that winnings might require playthrough.
          </p>
          <p className="text-lg text-white mb-4 max-w-2xl mx-auto">
            Play for free at the best crypto casinos and win real money — no deposit required! Choose from the latest no deposit deals and start spinning instantly.
          </p>
          <div className="bg-blue-900/80 border-l-4 border-green-400 rounded-lg p-4 mb-4 max-w-2xl mx-auto text-left shadow-lg">
            <div className="flex items-start gap-2">
              <span className="text-2xl">💡</span>
              <div>
                <span className="font-bold text-green-300">Pro Tip:</span>
                <p className="text-white mt-1">
                  No deposit bonuses are great for testing casinos, but always read the wagering rules — some winnings may be capped or require extra playthrough.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            <Image src="/icons/btc.svg" alt="Bitcoin icon" width={28} height={28} />
            <Image src="/icons/eth.svg" alt="Ethereum icon" width={28} height={28} />
            <Image src="/icons/ltc.svg" alt="Litecoin icon" width={28} height={28} />
          </div>
        </section>
        {/* NO DEPOSIT BONUS CARDS */}
        <section className="animate-fade-in-up">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-white text-lg">No no deposit bonus info available at this time.</div>
            )}
            {filtered.map(casino => (
              <div key={casino.slug} className={`rounded-2xl border-2 ${casino.noDepositBonus ? 'border-green-400' : 'border-yellow-300'} bg-black/80 text-white p-5 shadow-xl flex flex-col items-center hover:scale-105 transition-all duration-300 group`}>
                <Image src={casino.logo} alt={`${casino.name} logo`} width={60} height={60} className="rounded-lg bg-white mb-2 group-hover:animate-spin" />
                <div className={`font-bold text-lg ${casino.noDepositBonus ? 'text-green-200' : 'text-yellow-200'}`}>{casino.name}</div>
                <div className="text-white text-center mb-2">
                  {casino.noDepositBonus ? 'Real No Deposit Bonus' : 'No real no deposit bonus'}
                </div>
                <div className="text-white text-center mb-2 text-sm">{casino.noDepositNote}</div>
                <Link href={`/crypto-casino-reviews/${casino.slug}`} className={`mt-2 font-bold px-4 py-2 rounded-full shadow-md transition-all flex items-center gap-2 ring-2 ring-white ${casino.noDepositBonus ? 'bg-green-400 text-[#241f6b] hover:bg-yellow-300 hover:text-green-900' : 'bg-yellow-300 text-pink-700 hover:bg-green-400 hover:text-[#241f6b]'}`}>
                  View review
                </Link>
              </div>
            ))}
          </div>
        </section>
        {/* CTA & INTERNAL LINKS */}
        <div className="mt-12 text-center animate-fade-in-up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="/welcome-bonus" className="inline-block neon-button px-8 py-4 bg-yellow-300 text-purple-900 font-extrabold rounded-full text-xl shadow-lg hover:bg-pink-600 hover:text-yellow-200 transition-all flex items-center gap-2 ring-2 ring-white">
              <Image src="/icons/btc.svg" alt="Bitcoin icon" width={22} height={22} /> Welcome Bonuses
            </Link>
            <Link href="/vip-deals" className="inline-block neon-button px-8 py-4 bg-pink-600 text-yellow-200 font-extrabold rounded-full text-xl shadow-lg hover:bg-yellow-300 hover:text-pink-700 transition-all flex items-center gap-2 ring-2 ring-white">
              <Image src="/icons/eth.svg" alt="Ethereum icon" width={22} height={22} /> VIP Deals
            </Link>
            <Link href="/best-crypto-casino-bonuses" className="inline-block neon-button px-8 py-4 bg-green-400 text-[#241f6b] font-extrabold rounded-full text-xl shadow-lg hover:bg-yellow-500/80 hover:text-green-900 transition-all flex items-center gap-2 ring-2 ring-white">
              <Image src="/icons/ltc.svg" alt="Litecoin icon" width={22} height={22} /> More Crypto Deals →
            </Link>
          </div>
          <div className="text-sm text-white/60 italic text-center mt-6">
            More no deposit bonuses are added regularly. Is your favorite casino missing? Check the full reviews!
          </div>
        </div>
        {/* MASCOT */}
        <div className="absolute right-8 bottom-8 hidden lg:block pointer-events-none select-none opacity-90">
          <Image src="/logos/crypto-mascot.png" alt="Crypto Casino Mascot" width={120} height={120} className="drop-shadow-xl" />
        </div>
      </div>
    </div>
  );
}
