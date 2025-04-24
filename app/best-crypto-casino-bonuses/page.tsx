import Image from "next/image";
import Link from "next/link";

export default function BestBonusesPage() {
  return (
    <main className="relative max-w-3xl mx-auto px-4 py-12 pt-36 text-white">
      {/* VEGAS BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* HERO HEADER */}
      <h1 className="text-5xl font-extrabold mb-7 flex items-center gap-3 justify-center drop-shadow-[0_0_15px_gold]">
        <span className="text-4xl">🎰</span>
        <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">BEST CRYPTO CASINO BONUSES 2025</span>
        <span className="text-4xl">🪙</span>
      </h1>
      <p className="mb-8 text-lg text-white/80 text-center max-w-2xl mx-auto">
        Discover the biggest and most exclusive bonuses at the best crypto casinos! Choose from <span className="text-pink-400 font-bold">welcome bonuses</span>, <span className="text-yellow-300 font-bold">free spins</span> and <span className="text-green-400 font-bold">no deposit</span> deals. Claim with one click and get instant Vegas vibes!
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {/* BONUS CARDS */}
        <div className="relative rounded-xl border-2 border-purple-700 bg-[#1a1442] text-white p-6 shadow-xl hover:scale-[1.02] hover:shadow-[0_0_15px_#facc15] hover:animate-pulse transition-all duration-300 max-w-[400px] mx-auto animate-fade-in-up">
          <span className="absolute -top-3 -left-3 text-2xl select-none">🎁</span>
          <h2 className="text-2xl font-bold mb-2 text-yellow-300 flex items-center gap-2">Welcome Bonus</h2>
          <p className="mb-2 text-white/90">Get up to 5 BTC + 200 Free Spins on your first deposit!</p>
          <Link href="/welcome-bonus" aria-label="Claim Welcome Bonus" className="bg-yellow-400 text-purple-900 font-bold px-5 py-2 rounded-full shadow-md hover:bg-yellow-300 transition hover:scale-105 flex items-center gap-2 mt-2">
            🎁 Claim Bonus
          </Link>
          <div className="flex justify-end gap-2 mt-4">
            <Image src="/icons/btc.svg" alt="BTC" width={20} height={20} />
            <Image src="/icons/eth.svg" alt="ETH" width={20} height={20} />
            <Image src="/icons/ltc.svg" alt="LTC" width={20} height={20} />
          </div>
        </div>
        <div className="relative rounded-xl border-2 border-yellow-300 bg-[#1a1442] text-white p-6 shadow-xl hover:scale-[1.02] hover:shadow-[0_0_15px_#facc15] hover:animate-pulse transition-all duration-300 max-w-[400px] mx-auto animate-fade-in-up">
          <span className="absolute -top-3 -left-3 text-2xl select-none">🎉</span>
          <h2 className="text-2xl font-bold mb-2 text-pink-400 flex items-center gap-2">Free Spins</h2>
          <p className="mb-2 text-white/90">Grab 100 free spins instantly on the hottest slots!</p>
          <Link href="/bonuses/free-spins" aria-label="See Free Spins" className="bg-pink-400 text-white font-bold px-5 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">
            🎰 See Free Spins
          </Link>
          <div className="flex justify-end gap-2 mt-4">
            <Image src="/icons/btc.svg" alt="BTC" width={20} height={20} />
            <Image src="/icons/eth.svg" alt="ETH" width={20} height={20} />
            <Image src="/icons/ltc.svg" alt="LTC" width={20} height={20} />
          </div>
        </div>
        <div className="relative rounded-xl border-2 border-green-400 bg-[#241f6b] text-white p-6 shadow-xl hover:scale-[1.02] hover:shadow-[0_0_15px_#facc15] hover:animate-pulse transition-all duration-300 max-w-[400px] mx-auto animate-fade-in-up">
          <span className="absolute -top-3 -left-3 text-2xl select-none">🤑</span>
          <h2 className="text-2xl font-bold mb-2 text-green-400 flex items-center gap-2">No Deposit</h2>
          <p className="mb-2 text-white/90">Play for free and win real money with no deposit required!</p>
          <Link href="/no-deposit" aria-label="See No Deposit Bonuses" className="bg-green-400 text-[#241f6b] font-bold px-5 py-2 rounded-full shadow-md hover:bg-pink-400 hover:text-white transition hover:scale-105 flex items-center gap-2 mt-2">
            🪙 See No Deposit
          </Link>
          <div className="flex justify-end gap-2 mt-4">
            <Image src="/icons/btc.svg" alt="BTC" width={20} height={20} />
            <Image src="/icons/eth.svg" alt="ETH" width={20} height={20} />
            <Image src="/icons/ltc.svg" alt="LTC" width={20} height={20} />
          </div>
        </div>
        <div className="relative rounded-xl border-2 border-yellow-300 bg-[#1a1442] text-white p-6 shadow-xl hover:scale-[1.02] hover:shadow-[0_0_15px_#facc15] hover:animate-pulse transition-all duration-300 max-w-[400px] mx-auto animate-fade-in-up">
          <span className="absolute -top-3 -left-3 text-2xl select-none">👑</span>
          <h2 className="text-2xl font-bold mb-2 text-yellow-300 flex items-center gap-2">Exclusive VIP Deals</h2>
          <p className="mb-2 text-white/90">Become a VIP and unlock personal bonuses & cashback!</p>
          <Link href="/vip-deals" aria-label="Become VIP" className="bg-purple-400 text-white font-bold px-5 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">
            👑 Become VIP
          </Link>
          <div className="flex justify-end gap-2 mt-4">
            <Image src="/icons/btc.svg" alt="BTC" width={20} height={20} />
            <Image src="/icons/eth.svg" alt="ETH" width={20} height={20} />
            <Image src="/icons/ltc.svg" alt="LTC" width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-white/70">
        <p className="mb-2">All bonuses are 100% safe and tested by our team. <span className="text-yellow-300">18+</span> | Gamble responsibly.</p>
      </div>
    </main>
  );
}
