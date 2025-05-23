import Image from "next/image";
import Link from "next/link";
import { casinos } from '@/data/casinosData';

export default function WelcomeBonusPage() {
  const sorted = [...casinos].sort((a, b) => b.rating - a.rating);

  return (
    <div className="relative rounded-3xl bg-black/65 shadow-2xl border-2 border-yellow-400 p-8 md:p-12 space-y-10 max-w-6xl mx-auto mt-6">
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* HERO SECTION */}
      <section className="animate-fade-in-up">
        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="text-4xl">&#x1F3C6;</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase text-yellow-300 tracking-tight bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text neon-glow">Best Crypto Casino Welcome Bonuses 2025</h1>
          <span className="text-4xl">&#x1FA99;</span>
        </div>
        <p className="text-lg text-white mt-2 mb-1 max-w-2xl mx-auto text-center">Kick off you&apos;re crypto casino journey with exclusive welcome bonuses! From massive Bitcoin deposit matches to hundreds of free spins, these offers are tailor-made for new players looking to boost their bankroll from the start.</p>
        <div className="flex justify-center gap-2 mt-2">
          <Image src="/icons/btc.svg" alt="BTC" width={28} height={28} />
          <Image src="/icons/eth.svg" alt="ETH" width={28} height={28} />
          <Image src="/icons/ltc.svg" alt="LTC" width={28} height={28} />
        </div>
      </section>
      {/* WHAT IS A WELCOME BONUS */}
      <section className="animate-fade-in-up">
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">What Is a Welcome Bonus?</h2>
        <p className="text-lg text-white mb-4">A welcome bonus is a special offer for new players when they join a crypto casino. These bonuses usually include a deposit match (e.g. 100% up to 5 BTC), free spins, or both. They&apos;re designed to give you more value when starting out, helping you explore the casino with extra funds.</p>
      </section>
      {/* TYPES OF WELCOME BONUSES */}
      <section className="animate-fade-in-up">
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">Types of Welcome Bonuses</h2>
        <ul className="space-y-2 text-lg">
          <li className="flex items-center gap-2">💰 <span className="font-semibold">Deposit Match Bonuses</span> – 100%, 200%, even 300%.</li>
          <li className="flex items-center gap-2">🎰 <span className="font-semibold">Free Spins</span> – Great for slots. E.g. 200 free spins on Book of Dead.</li>
          <li className="flex items-center gap-2">🪙 <span className="font-semibold">Crypto-Only Bonuses</span> – Higher value when depositing with BTC, ETH, LTC.</li>
        </ul>
      </section>
      {/* DYNAMIC TOP CASINOS WITH WELCOME BONUSES */}
      <section className="animate-fade-in-up">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">Top Casinos With Welcome Bonuses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {sorted.map(casino => (
            <div key={casino.slug} className="rounded-2xl border-2 border-yellow-300 bg-black/80 text-white p-5 shadow-xl flex flex-col items-center hover:scale-[1.03] hover:shadow-yellow-300/40 transition-all duration-300 group">
              <Image src={casino.logo} alt={casino.name + ' logo'} width={60} height={60} className="rounded-lg bg-white mb-2 group-hover:animate-spin" />
              <div className="font-bold text-lg text-yellow-200">{casino.name}</div>
              <div className="text-white text-center mb-2">{casino.description}</div>
              <div className="text-white text-center mb-2 text-xs">{casino.noDepositNote}</div>
              <Link href={`/crypto-casino-reviews/${casino.slug}`} className="bg-yellow-400 text-purple-900 font-bold px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 transition hover:scale-105 mt-2">View Review</Link>
            </div>
          ))}
        </div>
      </section>
      {/* HOW TO CLAIM YOUR BONUS */}
      <section className="animate-fade-in-up">
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2">How to Claim Your Bonus</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg text-white">
          <li>Choose you&apos;re favorite casino from our list.</li>
          <li>Register you&apos;re account using you&apos;re email or wallet.</li>
          <li>Make you&apos;re first deposit using crypto.</li>
          <li>Your bonus will be activated — sometimes a bonus code is required.</li>
        </ol>
      </section>
      {/* PRO TIP SECTION */}
      <section className="animate-fade-in-up">
        <div className="bg-yellow-100/10 border-l-4 border-yellow-400 rounded-lg p-4 flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <div className="font-bold text-yellow-300 mb-1">Pro Tip</div>
            <ul className="list-disc ml-5 text-white">
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
    </div>
  );
}
