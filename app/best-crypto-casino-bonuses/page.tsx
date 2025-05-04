import { BonusOverviewLayout } from "@/components/BonusOverviewLayout";
import Image from "next/image";
import Link from "next/link";
import { casinos } from '../crypto-casino-reviews/casinosData';

export default function BestBonusesPage() {
  const sorted = [...casinos].sort((a, b) => b.rating - a.rating);

  const bonusCards = [
    {
      icon: "🎁",
      title: "Welcome Bonus",
      cta: <Link href="/welcome-bonus" aria-label="Claim Welcome Bonus" className="bg-yellow-400 text-purple-900 font-bold px-5 py-2 rounded-full shadow-md hover:bg-yellow-300 transition hover:scale-105 flex items-center gap-2 mt-2">🎁 Claim Bonus</Link>,
      description: "Get up to 5 BTC + 200 Free Spins on your first deposit!",
      seoText: "Start your crypto casino journey with a generous welcome bonus. Claim up to 5 BTC and hundreds of free spins on your first deposit at top-rated crypto casinos. These welcome packages are designed to boost your bankroll and let you explore a wide range of games with a strong head start.",
      borderColorClass: "border-yellow-400 hover:shadow-yellow-300/50"
    },
    {
      icon: "🎉",
      title: "Free Spins",
      cta: <Link href="/free-spins" aria-label="See Free Spins" className="bg-pink-400 text-white font-bold px-5 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">🎰 See Free Spins</Link>,
      description: "Grab 100 free spins instantly on the hottest slots!",
      seoText: "Play risk-free with free spins on the hottest crypto slots. Enjoy up to 100 free spins instantly without needing a big deposit. Free spins are a popular casino promotion that lets players try top games like Book of Dead, Gates of Olympus, or Sweet Bonanza — often without using real crypto.",
      borderColorClass: "border-pink-400 hover:shadow-pink-400/40"
    },
    {
      icon: "🤑",
      title: "No Deposit",
      cta: <Link href="/no-deposit" aria-label="See No Deposit Bonuses" className="bg-green-400 text-[#241f6b] font-bold px-5 py-2 rounded-full shadow-md hover:bg-pink-400 hover:text-white transition hover:scale-105 flex items-center gap-2 mt-2">🪙 See No Deposit</Link>,
      description: "Play for free and win real money with no deposit required!",
      seoText: "Win real crypto without making a deposit. No deposit bonuses are perfect for new players. Simply sign up and receive a bonus — no wallet funding required. Use these deals to test games, explore platforms, and potentially win real Bitcoin, Ethereum or USDT without financial risk.",
      borderColorClass: "border-green-400 hover:shadow-green-400/40"
    },
    {
      icon: "👑",
      title: "VIP & Cashback",
      cta: <Link href="/vip-deals" aria-label="Become VIP" className="bg-purple-400 text-white font-bold px-5 py-2 rounded-full shadow-md hover:bg-yellow-300 hover:text-purple-900 transition hover:scale-105 flex items-center gap-2 mt-2">👑 Become VIP</Link>,
      description: "Become a VIP and unlock personal bonuses & cashback!",
      seoText: "Unlock exclusive rewards and cashback as a crypto VIP. High rollers and loyal players get access to premium bonuses, faster withdrawals, dedicated account managers, and cashback deals. Join VIP programs at leading crypto casinos and get rewarded for your play — every time you spin or bet.",
      borderColorClass: "border-purple-400 hover:shadow-purple-400/40"
    },
  ];

  const casinoList = (
    <>
      <h2 className="text-2xl font-bold mb-4 text-yellow-300 text-center mt-6">Top Crypto Casino Bonuses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {sorted.map(casino => (
          <div key={casino.slug} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 flex flex-col md:flex-row items-center gap-4 shadow-lg hover:scale-[1.01] transition-all duration-300 group">
            <Image src={casino.logo} alt={`${casino.name} logo`} width={56} height={56} className="rounded-lg bg-white group-hover:animate-spin" />
            <div className="flex-1">
              <div className="font-bold text-lg text-yellow-200">{casino.name}</div>
              <div className="text-white/80 text-lg mb-1 leading-relaxed">{casino.description}</div>
              <div className="text-white/70 text-base mb-1">{casino.noDepositNote}</div>
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
    </>
  );

  return (
    <div className="relative rounded-3xl bg-black/65 shadow-2xl border-2 border-yellow-400 p-8 md:p-12 space-y-10 max-w-6xl mx-auto mt-6">
      <BonusOverviewLayout
        title="Best Crypto Casino Bonuses 2025"
        description="Discover the biggest and most exclusive bonuses at the best crypto casinos. Choose from welcome bonuses, free spins and no deposit deals."
        bonusCards={bonusCards}
        casinoList={casinoList}
        footerGlow={true}
        mascot={true}
      />
    </div>
  );
}
