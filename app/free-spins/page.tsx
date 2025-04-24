import Image from "next/image";
import Link from "next/link";

export default function FreeSpinsPage() {
  return (
    <main className="relative max-w-4xl mx-auto px-4 py-12 pt-36 text-white">
      {/* VEGAS BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* HERO SECTION */}
      <section className="mb-10 text-center animate-fade-in-up">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-[0_0_15px_gold] uppercase text-yellow-300 neon-glow flex items-center justify-center gap-3">
          <span className="text-4xl">🎰</span>
          Free Spins Overview
        </h1>
        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
          Free spins are one of the most exciting ways to play at crypto casinos — they’re fun, free, and full of winning potential! Whether you're testing a new slot or just spinning for thrills, free spins let you enjoy real gameplay without spending your own crypto.
        </p>
        <div className="bg-blue-900/80 border-l-4 border-blue-400 rounded-lg p-4 mb-4 max-w-2xl mx-auto text-left shadow-lg neon-glow">
          <div className="flex items-start gap-2">
            <span className="text-2xl">🧠</span>
            <div>
              <span className="font-bold text-blue-300">But here’s a pro tip:</span>
              <p className="text-white/90 mt-1">
                Free spins bonuses often come with specific terms and conditions. Some casinos require wagering the winnings multiple times before you can withdraw them. Others restrict which games you can use the spins on — like Book of Dead or Wild Spin only.<br />
                <span className="block mt-2">👉 Always check the bonus terms first. Knowing the rules means no nasty surprises when it’s time to cash out your winnings!</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg text-white/80 mb-2 max-w-2xl mx-auto">
          Grab free spins at the top crypto casinos! No deposit needed, start spinning instantly.<br />
          Free spins are a great way to win real money – but always check the bonus terms before withdrawing. Some games may have restrictions.
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <Image src="/icons/btc.svg" alt="BTC" width={28} height={28} />
          <Image src="/icons/eth.svg" alt="ETH" width={28} height={28} />
          <Image src="/icons/ltc.svg" alt="LTC" width={28} height={28} />
        </div>
      </section>
      {/* FREE SPINS CASINO GRID */}
      <section className="mb-10 animate-fade-in-up">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* BitStarz */}
          <div className="rounded-xl border-2 border-yellow-300 bg-[#1a1442] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#facc15] transition-all duration-300">
            <Image src="/logos/bitstarz.png" alt="BitStarz logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-yellow-200">BitStarz</div>
            <div className="text-white/80 text-center mb-2">180 Free Spins – Book of Dead</div>
            <div className="text-white/60 text-center mb-2 text-sm">Play on popular slots like Book of Dead or Wild Spin!</div>
            <Link href="/crypto-casino-reviews/bitstarz" className="bg-yellow-400 text-purple-900 font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/btc.svg" alt="BTC" width={18} height={18} /> Read Review →
            </Link>
          </div>
          {/* 7Bit Casino */}
          <div className="rounded-xl border-2 border-green-400 bg-[#16203a] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#4ade80] transition-all duration-300">
            <Image src="/logos/7bit.png" alt="7Bit Casino logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-green-300">7Bit Casino</div>
            <div className="text-white/80 text-center mb-2">100 Spins on First Deposit</div>
            <div className="text-white/60 text-center mb-2 text-sm">Kickstart your crypto journey with a bonus full of spins.</div>
            <Link href="/crypto-casino-reviews/7bit" className="bg-green-400 text-[#16203a] font-bold px-4 py-2 rounded-full shadow-md hover:bg-pink-400 hover:text-white transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/eth.svg" alt="ETH" width={18} height={18} /> Read Review →
            </Link>
          </div>
          {/* Wild Vegas */}
          <div className="rounded-xl border-2 border-pink-400 bg-[#241f6b] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#f472b6] transition-all duration-300">
            <Image src="/logos/wildvegas.png" alt="Wild Vegas logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-pink-300">Wild Vegas</div>
            <div className="text-white/80 text-center mb-2">100 Free Spins on Book of Dead</div>
            <div className="text-white/60 text-center mb-2 text-sm">Spin on Book of Dead – no deposit needed!</div>
            <Link href="/crypto-casino-reviews/wildvegas" className="bg-pink-400 text-white font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/ltc.svg" alt="LTC" width={18} height={18} /> Read Review →
            </Link>
          </div>
          {/* Betplay */}
          <div className="rounded-xl border-2 border-blue-400 bg-[#16203a] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#60a5fa] transition-all duration-300">
            <Image src="/logos/betplay.png" alt="Betplay logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-blue-300">Betplay</div>
            <div className="text-white/80 text-center mb-2">125 Free Spins on Crypto Slots</div>
            <div className="text-white/60 text-center mb-2 text-sm">Crypto slots, fast payouts & exclusive deals.</div>
            <Link href="/crypto-casino-reviews/betplay" className="bg-blue-400 text-white font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/btc.svg" alt="BTC" width={18} height={18} /> Read Review →
            </Link>
          </div>
          {/* Crypto Loko */}
          <div className="rounded-xl border-2 border-yellow-400 bg-[#23214a] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#fde68a] transition-all duration-300">
            <Image src="/logos/cryptoloko.png" alt="Crypto Loko logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-yellow-300">Crypto Loko</div>
            <div className="text-white/80 text-center mb-2">50 Free Spins, no deposit needed</div>
            <div className="text-white/60 text-center mb-2 text-sm">No deposit required – play instantly!</div>
            <Link href="/crypto-casino-reviews/cryptoloko" className="bg-yellow-400 text-purple-900 font-bold px-4 py-2 rounded-full shadow-md hover:bg-pink-400 hover:text-white transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/eth.svg" alt="ETH" width={18} height={18} /> Read Review →
            </Link>
          </div>
          {/* Dreams Casino */}
          <div className="rounded-xl border-2 border-purple-400 bg-[#2e0f3a] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#a78bfa] transition-all duration-300">
            <Image src="/logos/dreams.png" alt="Dreams Casino logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-purple-300">Dreams Casino</div>
            <div className="text-white/80 text-center mb-2">200 Free Spins + Cashback on slot games</div>
            <div className="text-white/60 text-center mb-2 text-sm">Get cashback and free spins on top slots.</div>
            <Link href="/crypto-casino-reviews/dreams" className="bg-purple-400 text-white font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-pink-700 transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/ltc.svg" alt="LTC" width={18} height={18} /> Read Review →
            </Link>
          </div>
        </div>
      </section>
      {/* PRO TIP SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <div className="bg-blue-900/80 border-l-4 border-blue-400 rounded-lg p-4 flex items-start gap-3 shadow-lg neon-glow">
          <span className="text-2xl">💡</span>
          <div>
            <div className="font-bold text-blue-300 mb-1">Pro Tip</div>
            <p className="text-white/90 text-lg">
              Free Spins bonuses are fun and risk-free — but check the terms before cashing out. Some may require minimum wagering or restrict certain games.
            </p>
          </div>
        </div>
      </section>
      {/* CTA & INTERNAL LINKS */}
      <div className="mt-12 text-center animate-fade-in-up">
        <p className="mb-4 text-white/80 text-lg">Looking for more crypto bonuses?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/welcome-bonus" className="inline-block neon-button px-8 py-4 bg-yellow-300 text-purple-900 font-extrabold rounded-full text-xl shadow-lg hover:bg-pink-600 hover:text-yellow-200 transition-all flex items-center gap-2">
            <Image src="/icons/btc.svg" alt="BTC" width={22} height={22} /> Welcome Bonuses
          </Link>
          <Link href="/vip-deals" className="inline-block neon-button px-8 py-4 bg-pink-600 text-yellow-200 font-extrabold rounded-full text-xl shadow-lg hover:bg-yellow-300 hover:text-pink-700 transition-all flex items-center gap-2">
            <Image src="/icons/eth.svg" alt="ETH" width={22} height={22} /> VIP Deals
          </Link>
        </div>
      </div>
    </main>
  );
}
