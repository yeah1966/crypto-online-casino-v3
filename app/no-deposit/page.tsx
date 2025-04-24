import Image from "next/image";
import Link from "next/link";

export default function NoDepositPage() {
  return (
    <main className="relative max-w-4xl mx-auto px-4 py-12 pt-36 text-white">
      {/* VEGAS BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat animate-pulse" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* HERO SECTION */}
      <section className="mb-10 text-center animate-fade-in-up">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-[0_0_25px_#4ade80] uppercase text-green-300 neon-glow flex items-center justify-center gap-3 animate-glow">
          <span className="text-4xl animate-bounce">💸</span>
          No Deposit Bonuses
        </h1>
        <p className="text-lg text-white/80 mt-4 mb-2 max-w-2xl mx-auto flex items-center gap-2 justify-center">
          <span className="text-2xl">🎯</span> No deposit bonuses are a great way to explore crypto casinos without risk. They let you test games and platforms before making a deposit. Just keep in mind that winnings might require playthrough.
        </p>
        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
          Play for free at the best crypto casinos and win real money — no deposit required! Choose from the latest no deposit deals and start spinning instantly.
        </p>
        <div className="bg-blue-900/80 border-l-4 border-green-400 rounded-lg p-4 mb-4 max-w-2xl mx-auto text-left shadow-lg neon-glow">
          <div className="flex items-start gap-2">
            <span className="text-2xl">💡</span>
            <div>
              <span className="font-bold text-green-300">Pro Tip:</span>
              <p className="text-white/90 mt-1">
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
      <section className="mb-10 animate-fade-in-up">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* BitStarz */}
          <div className="rounded-xl border-2 border-green-400 bg-[#1a1442] text-white p-5 shadow-xl shadow-pulse flex flex-col items-center hover:scale-105 hover:shadow-[0_0_25px_#4ade80] transition-all duration-300 group">
            <Image src="/logos/bitstarz.png" alt="BitStarz casino logo" width={60} height={60} className="rounded-lg bg-white mb-2 group-hover:animate-spin" />
            <div className="font-bold text-lg text-green-200">BitStarz</div>
            <div className="text-white/80 text-center mb-2">€20 No Deposit</div>
            <div className="text-white/60 text-center mb-2 text-sm">Get free play credits instantly after registration. Perfect for new players!</div>
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              <span className="inline-block bg-green-400 text-[#241f6b] text-xs font-bold px-2 py-1 rounded-md">No Deposit Required</span>
              <span className="inline-block bg-yellow-300 text-pink-700 text-xs font-bold px-2 py-1 rounded-md">New Player Only</span>
              <span className="inline-block bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded-md">Crypto Friendly</span>
            </div>
            <Link href="/crypto-casino-reviews/bitstarz" className="bg-green-400 text-[#241f6b] font-bold px-4 py-2 rounded-full shadow-md hover:bg-pink-600 hover:text-white hover:shadow-yellow-300 transition-all flex items-center gap-2 mt-2 ring-2 ring-white">
              <Image src="/icons/btc.svg" alt="Bitcoin icon" width={18} height={18} /> Claim Now
            </Link>
            <div className="flex justify-end gap-2 mt-4">
              <span className="inline-block bg-[#222] rounded-md px-2 py-1"><Image src="/icons/btc.svg" alt="Bitcoin icon" width={20} height={20} /></span>
              <span className="inline-block bg-[#222] rounded-md px-2 py-1"><Image src="/icons/eth.svg" alt="Ethereum icon" width={20} height={20} /></span>
              <span className="inline-block bg-[#222] rounded-md px-2 py-1"><Image src="/icons/ltc.svg" alt="Litecoin icon" width={20} height={20} /></span>
            </div>
          </div>
          {/* 7Bit Casino */}
          <div className="rounded-xl border-2 border-yellow-300 bg-[#241f6b] text-white p-5 shadow-xl shadow-pulse flex flex-col items-center hover:scale-105 hover:shadow-[0_0_25px_#fde68a] transition-all duration-300 group">
            <Image src="/logos/7bit.png" alt="7Bit Casino logo" width={60} height={60} className="rounded-lg bg-white mb-2 group-hover:animate-spin" />
            <div className="font-bold text-lg text-yellow-200">7Bit Casino</div>
            <div className="text-white/80 text-center mb-2">25 Free Spins</div>
            <div className="text-white/60 text-center mb-2 text-sm">Play your favorite slots with zero risk and win real prizes.</div>
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              <span className="inline-block bg-yellow-300 text-pink-700 text-xs font-bold px-2 py-1 rounded-md">No Deposit</span>
              <span className="inline-block bg-purple-400 text-white text-xs font-bold px-2 py-1 rounded-md">Instant Activation</span>
              <span className="inline-block bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded-md">Crypto Friendly</span>
            </div>
            <Link href="/crypto-casino-reviews/7bit" className="bg-yellow-300 text-pink-700 font-bold px-4 py-2 rounded-full shadow-md hover:bg-green-400 hover:text-[#241f6b] hover:shadow-green-400 transition-all flex items-center gap-2 mt-2 ring-2 ring-white">
              <Image src="/icons/eth.svg" alt="Ethereum icon" width={18} height={18} /> View Deals
            </Link>
            <div className="flex justify-end gap-2 mt-4">
              <span className="inline-block bg-[#222] rounded-md px-2 py-1"><Image src="/icons/btc.svg" alt="Bitcoin icon" width={20} height={20} /></span>
              <span className="inline-block bg-[#222] rounded-md px-2 py-1"><Image src="/icons/eth.svg" alt="Ethereum icon" width={20} height={20} /></span>
              <span className="inline-block bg-[#222] rounded-md px-2 py-1"><Image src="/icons/ltc.svg" alt="Litecoin icon" width={20} height={20} /></span>
            </div>
          </div>
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
          More no deposit bonuses will be added soon. Stay tuned! 🚀
        </div>
      </div>
    </main>
  );
}
