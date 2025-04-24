import Image from "next/image";
import Link from "next/link";

export default function VipDealsPage() {
  return (
    <main className="relative max-w-4xl mx-auto px-4 py-12 pt-36 text-white">
      {/* VEGAS BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* HERO SECTION */}
      <section className="mb-10 text-center animate-fade-in-up">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-[0_0_15px_gold] uppercase text-yellow-300 neon-glow flex items-center justify-center gap-3">
          <span className="text-4xl">🎖️</span>
          EXCLUSIVE VIP DEALS
        </h1>
        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
          Want more perks while playing? VIP crypto casino deals offer exclusive bonuses, faster withdrawals, personal support, and cashback on every bet.<br />
          Whether you're a high roller or just love VIP treatment, these deals bring next-level rewards for loyal players. 🚀
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <Image src="/icons/btc.svg" alt="BTC" width={28} height={28} />
          <Image src="/icons/eth.svg" alt="ETH" width={28} height={28} />
          <Image src="/icons/ltc.svg" alt="LTC" width={28} height={28} />
        </div>
      </section>
      {/* VIP CASINO GRID */}
      <section className="mb-10 animate-fade-in-up">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* BitStarz VIP */}
          <div className="rounded-xl border-2 border-yellow-400 bg-[#1a1442] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_20px_gold] transition-all duration-300">
            <Image src="/logos/bitstarz.png" alt="BitStarz logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-yellow-200">BitStarz VIP Club</div>
            <div className="text-white/80 text-center mb-2">Cashback + Exclusive High Roller Bonuses</div>
            <Link href="/crypto-casino-reviews/bitstarz" className="bg-yellow-400 text-purple-900 font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/btc.svg" alt="BTC" width={18} height={18} /> View Review
            </Link>
          </div>
          {/* 7Bit Casino VIP */}
          <div className="rounded-xl border-2 border-green-400 bg-[#16203a] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_20px_#4ade80] transition-all duration-300">
            <Image src="/logos/7bit.png" alt="7Bit Casino logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-green-300">7Bit Casino VIP</div>
            <div className="text-white/80 text-center mb-2">VIP Cashback & Personal Manager</div>
            <Link href="/crypto-casino-reviews/7bit" className="bg-green-400 text-[#16203a] font-bold px-4 py-2 rounded-full shadow-md hover:bg-pink-400 hover:text-white transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/eth.svg" alt="ETH" width={18} height={18} /> View Review
            </Link>
          </div>
          {/* Betplay VIP */}
          <div className="rounded-xl border-2 border-blue-400 bg-[#16203a] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_20px_#60a5fa] transition-all duration-300">
            <Image src="/logos/betplay.png" alt="Betplay logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-blue-300">Betplay VIP</div>
            <div className="text-white/80 text-center mb-2">Crypto Cashback & Priority Support</div>
            <Link href="/crypto-casino-reviews/betplay" className="bg-blue-400 text-white font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/btc.svg" alt="BTC" width={18} height={18} /> View Review
            </Link>
          </div>
          {/* Dreams Casino VIP */}
          <div className="rounded-xl border-2 border-purple-400 bg-[#2e0f3a] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_20px_#a78bfa] transition-all duration-300">
            <Image src="/logos/dreams.png" alt="Dreams Casino logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-purple-300">Dreams Casino VIP</div>
            <div className="text-white/80 text-center mb-2">High Roller Cashback & VIP Events</div>
            <Link href="/crypto-casino-reviews/dreams" className="bg-purple-400 text-white font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-pink-700 transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/ltc.svg" alt="LTC" width={18} height={18} /> View Review
            </Link>
          </div>
          {/* Cloudbet VIP */}
          <div className="rounded-xl border-2 border-cyan-400 bg-[#132c3a] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_20px_#67e8f9] transition-all duration-300">
            <Image src="/logos/cloudbet.png" alt="Cloudbet logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-cyan-300">Cloudbet VIP</div>
            <div className="text-white/80 text-center mb-2">Personal Account Manager & VIP Rewards</div>
            <Link href="/crypto-casino-reviews/cloudbet" className="bg-cyan-400 text-[#132c3a] font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/eth.svg" alt="ETH" width={18} height={18} /> View Review
            </Link>
          </div>
          {/* Wild Vegas VIP */}
          <div className="rounded-xl border-2 border-pink-400 bg-[#241f6b] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_20px_#f472b6] transition-all duration-300">
            <Image src="/logos/wildvegas.png" alt="Wild Vegas logo" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-pink-300">Wild Vegas VIP</div>
            <div className="text-white/80 text-center mb-2">VIP Spins & Loyalty Cashback</div>
            <Link href="/crypto-casino-reviews/wildvegas" className="bg-pink-400 text-white font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">
              <Image src="/icons/ltc.svg" alt="LTC" width={18} height={18} /> View Review
            </Link>
          </div>
        </div>
      </section>
      {/* PRO TIP SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <div className="bg-blue-900/80 border-l-4 border-yellow-400 rounded-lg p-4 flex items-start gap-3 shadow-lg neon-glow">
          <span className="text-2xl">🎩</span>
          <div>
            <div className="font-bold text-yellow-300 mb-1">Pro Tip</div>
            <p className="text-white/90 text-lg">
              VIP deals often require larger deposits or invitations — check the terms and benefits carefully to make the most of your VIP status!
            </p>
          </div>
        </div>
      </section>
      {/* CTA & INTERNAL LINKS */}
      <div className="mt-12 text-center animate-fade-in-up">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/welcome-bonus" className="inline-block neon-button px-8 py-4 bg-purple-600 text-yellow-200 font-extrabold rounded-full text-xl shadow-lg hover:bg-yellow-300 hover:text-purple-900 transition-all flex items-center gap-2">
            <Image src="/icons/btc.svg" alt="BTC" width={22} height={22} /> Welcome Bonuses
          </Link>
          <Link href="/free-spins" className="inline-block neon-button px-8 py-4 bg-yellow-300 text-purple-900 font-extrabold rounded-full text-xl shadow-lg hover:bg-pink-600 hover:text-yellow-200 transition-all flex items-center gap-2">
            <Image src="/icons/eth.svg" alt="ETH" width={22} height={22} /> Free Spins
          </Link>
        </div>
      </div>
    </main>
  );
}
