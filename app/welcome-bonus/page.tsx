import Image from "next/image";
import Link from "next/link";

export default function WelcomeBonusPage() {
  return (
    <main className="relative max-w-3xl mx-auto px-4 py-12 pt-36 text-white">
      {/* BACKGROUND + OVERLAY */}
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* HERO SECTION */}
      <section className="mb-10 text-center animate-fade-in-up">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-[0_0_15px_gold] flex items-center justify-center gap-3">
          <span className="text-4xl">🎁</span>
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">Best Crypto Casino Welcome Bonuses 2025</span>
          <span className="text-4xl">🪙</span>
        </h1>
        <p className="text-lg text-white/80 mb-2 max-w-2xl mx-auto">Kick off your crypto casino journey with exclusive welcome bonuses! From massive Bitcoin deposit matches to hundreds of free spins, these offers are tailor-made for new players looking to boost their bankroll from the start.</p>
        <div className="flex justify-center gap-2 mt-2">
          <Image src="/icons/btc.svg" alt="BTC" width={28} height={28} />
          <Image src="/icons/eth.svg" alt="ETH" width={28} height={28} />
          <Image src="/icons/ltc.svg" alt="LTC" width={28} height={28} />
        </div>
      </section>
      {/* WHAT IS A WELCOME BONUS */}
      <section className="mb-8 animate-fade-in-up">
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">What Is a Welcome Bonus?</h2>
        <p className="text-white/90 text-lg mb-4">A welcome bonus is a special offer for new players when they join a crypto casino. These bonuses usually include a deposit match (e.g. 100% up to 5 BTC), free spins, or both. They're designed to give you more value when starting out, helping you explore the casino with extra funds.</p>
      </section>
      {/* TYPES OF WELCOME BONUSES */}
      <section className="mb-10 animate-fade-in-up">
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">Types of Welcome Bonuses</h2>
        <ul className="space-y-2 text-lg">
          <li className="flex items-center gap-2">💰 <span className="font-semibold">Deposit Match Bonuses</span> – 100%, 200%, even 300%.</li>
          <li className="flex items-center gap-2">🎰 <span className="font-semibold">Free Spins</span> – Great for slots. E.g. 200 free spins on Book of Dead.</li>
          <li className="flex items-center gap-2">🪙 <span className="font-semibold">Crypto-Only Bonuses</span> – Higher value when depositing with BTC, ETH, LTC.</li>
        </ul>
      </section>
      {/* TOP CASINOS WITH WELCOME BONUSES */}
      <section className="mb-10 animate-fade-in-up">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">Top Casinos With Welcome Bonuses</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Slots of Vegas */}
          <div className="rounded-xl border-2 border-yellow-300 bg-[#1a1442] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#facc15] transition-all duration-300">
            <Image src="/logos/slotsofvegas.png" alt="Slots of Vegas" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-yellow-200">Slots of Vegas</div>
            <div className="text-white/80 text-center mb-2">Up to 5 BTC + 200 Free Spins</div>
            <Link href="/crypto-casino-reviews/slotsofvegas" className="bg-yellow-400 text-purple-900 font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 transition hover:scale-105">Review</Link>
          </div>
          {/* Wild Vegas */}
          <div className="rounded-xl border-2 border-pink-400 bg-[#241f6b] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#f472b6] transition-all duration-300">
            <Image src="/logos/wildvegas.png" alt="Wild Vegas" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-pink-300">Wild Vegas</div>
            <div className="text-white/80 text-center mb-2">Up to 4 BTC + 100 Free Spins</div>
            <Link href="/crypto-casino-reviews/wildvegas" className="bg-pink-400 text-white font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105">Review</Link>
          </div>
          {/* 7Bit Casino */}
          <div className="rounded-xl border-2 border-green-400 bg-[#16203a] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#4ade80] transition-all duration-300">
            <Image src="/logos/7bit.png" alt="7Bit Casino" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-green-300">7Bit Casino</div>
            <div className="text-white/80 text-center mb-2">1.5 BTC + 100 Free Spins</div>
            <Link href="/crypto-casino-reviews/7bit" className="bg-green-400 text-[#16203a] font-bold px-4 py-2 rounded-full shadow-md hover:bg-pink-400 hover:text-white transition hover:scale-105">Review</Link>
          </div>
          {/* BitStarz */}
          <div className="rounded-xl border-2 border-yellow-200 bg-[#1a1442] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#fde68a] transition-all duration-300">
            <Image src="/logos/bitstarz.png" alt="BitStarz" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-yellow-100">BitStarz</div>
            <div className="text-white/80 text-center mb-2">5 BTC + 180 Free Spins</div>
            <Link href="/crypto-casino-reviews/bitstarz" className="bg-yellow-200 text-pink-700 font-bold px-4 py-2 rounded-full shadow-md hover:bg-pink-600 hover:text-white transition hover:scale-105">Review</Link>
          </div>
          {/* Betplay */}
          <div className="rounded-xl border-2 border-blue-400 bg-[#16203a] text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-[0_0_15px_#60a5fa] transition-all duration-300">
            <Image src="/logos/betplay.png" alt="Betplay" width={60} height={60} className="rounded-lg bg-white mb-2" />
            <div className="font-bold text-lg text-blue-300">Betplay</div>
            <div className="text-white/80 text-center mb-2">3 BTC + 50 Free Spins</div>
            <Link href="/crypto-casino-reviews/betplay" className="bg-blue-400 text-white font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105">Review</Link>
          </div>
        </div>
      </section>
      {/* HOW TO CLAIM YOUR BONUS */}
      <section className="mb-10 animate-fade-in-up">
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">How to Claim Your Bonus</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg text-white/90">
          <li>Choose your favorite casino from our list.</li>
          <li>Register your account using your email or wallet.</li>
          <li>Make your first deposit using crypto.</li>
          <li>Your bonus will be activated — sometimes a bonus code is required.</li>
        </ol>
      </section>
      {/* PRO TIP SECTION */}
      <section className="mb-10 animate-fade-in-up">
        <div className="bg-yellow-100/10 border-l-4 border-yellow-400 rounded-lg p-4 flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <div className="font-bold text-yellow-300 mb-1">Pro Tip</div>
            <ul className="list-disc ml-5 text-white/90 text-lg">
              <li>Always check the bonus terms and conditions.</li>
              <li>Pay attention to wagering requirements, eligible games, and expiry time.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* CALL TO ACTION */}
      <div className="mt-12 text-center animate-fade-in-up">
        <Link href="/best-crypto-casino-bonuses" className="inline-block neon-button px-8 py-4 bg-pink-600 text-yellow-200 font-extrabold rounded-full text-xl shadow-lg hover:bg-yellow-300 hover:text-pink-700 transition-all">Compare All Crypto Casino Bonuses</Link>
      </div>
    </main>
  );
}
