import GuideCard from "@/components/GuideCard";

export default function GuidesPage() {
  return (
    <div className="relative w-full min-h-screen z-10 px-4 md:px-8 py-16 max-w-6xl mx-auto text-white space-y-12">
      {/* Las Vegas achtergrondstructuur */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center will-change-transform" style={{ backgroundImage: "url('/images/crypto-casino-online-mobile.webp')" }} aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-black bg-opacity-65" aria-hidden="true" />
      {/* Titel + Introductie */}
      <section className="max-w-3xl text-white space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
          🧭 Crypto Gambling Guides
        </h1>
        <p>
          Welcome to the ultimate knowledge base for crypto casino players. Whether you're a total beginner or a seasoned high roller, our in-depth guides are designed to help you navigate the world of decentralized gambling with confidence.
        </p>
        <p>
          From understanding how blockchain-based casinos work to choosing the right coin for your bets, our content is crafted to answer your questions and boost your success. We explore safe gambling practices, bonus strategies, wallet tips, and how to spot trustworthy platforms.
        </p>
        <p>
          As the crypto gambling scene continues to grow in 2025, staying informed is more important than ever. Use these guides as your compass — and gamble smarter with crypto.
        </p>
      </section>

      {/* Guide Cards */}
      {/* BEGINNER GUIDES */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-green-400 mb-2">Beginner Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <GuideCard
            title="Crypto Gambling 101"
            slug="/crypto-gambling-101"
            description="Everything you need to know to get started with crypto casinos."
            image="/casino-icons/Dices.svg"
          />
          <GuideCard
            title="How to Choose a Safe Crypto Casino"
            slug="/guides/safe-crypto-casinos"
            description="Learn to evaluate trust, licenses, and withdrawal reputation."
            image="/casino-icons/Casino Building.svg"
          />
          <GuideCard
            title="Casino KYC vs. No-KYC: Pros & Cons"
            slug="/guides/no-kyc-crypto-casinos"
            description="Understand the trade-offs between privacy and security."
            image="/casino-icons/Shield.svg"
          />
        </div>
      </div>
      {/* MAXIMIZE YOUR WINNINGS */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-yellow-400 mb-2">Maximize Your Winnings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <GuideCard
            title="Best Crypto Casino Bonuses"
            slug="/best-crypto-casino-bonuses"
            description="Master how to claim, evaluate and maximize bonuses."
            image="/casino-icons/Bonus.svg"
          />
          <GuideCard
            title="Understanding Wagering Requirements"
            slug="/guides/wagering-explained"
            description="Decode the fine print and avoid bonus traps."
            image="/casino-icons/Chip for Money Return.svg"
          />
          <GuideCard
            title="How to Withdraw Crypto Winnings"
            slug="/guides/withdrawals"
            description="Step-by-step guide to safe and fast crypto cash-outs."
            image="/casino-icons/Credit-Card.svg"
          />
        </div>
      </div>
      {/* TECH & TOOLS */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-blue-400 mb-2">Tech & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <GuideCard
            title="Crypto Wallets for Gambling"
            slug="/guides/crypto-wallets"
            description="Compare top wallets based on speed, safety and anonymity."
            image="/icons/ledger.svg"
          />
          <GuideCard
            title="Mobile Crypto Gambling"
            slug="/guides/mobile-gambling"
            description="The best casinos for mobile users and app-based play."
            image="/casino-icons/Smartphone.svg"
          />
          <GuideCard
            title="Altcoin Casinos (ETH, LTC, DOGE, etc.)"
            slug="/guides/altcoin-casinos"
            description="Explore the pros and cons of gambling with altcoins."
            image="/icons/eth.svg"
          />
        </div>
      </div>
      {/* FAIR PLAY & SAFETY */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-red-400 mb-2">Fair Play & Safety</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <GuideCard
            title="Provably Fair Gambling Explained"
            slug="/guides/provably-fair"
            description="What it means, how it works, and which casinos offer it."
            image="/casino-icons/Diamond.svg"
          />
          <GuideCard
            title="Responsible Gambling with Crypto"
            slug="/guides/responsible-gambling"
            description="Budget control tips and safer gambling strategies."
            image="/casino-icons/Heart.svg"
          />
          <GuideCard
            title="Top Mistakes to Avoid in Crypto Gambling"
            slug="/guides/gambling-mistakes"
            description="Avoid costly errors, from scams to bonus abuse."
            image="/casino-icons/Blocked.svg"
          />
        </div>
      </div>
      {/* ADVANCED / NICHE */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-purple-400 mb-2">Advanced / Niche</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <GuideCard
            title="Using Stablecoins for Safer Gambling"
            slug="/guides/stablecoins"
            description="Reduce volatility with Tether, USDC, and more."
            image="/icons/usdt.svg"
          />
          <GuideCard
            title="Live Dealer Crypto Casinos"
            slug="/guides/live-dealer"
            description="Tips for interacting with real dealers via crypto."
            image="/casino-icons/Croupier (Male).svg"
          />
        </div>
      </div>

      {/* Call to Action onderaan */}
      <section className="text-center mt-16">
        <p className="text-lg text-white/80 mb-4">Looking for real casinos to try your knowledge?</p>
        <a
          href="/crypto-casino-reviews"
          className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition shadow-lg"
        >
          View All Casino Reviews 🎰
        </a>
      </section>
    </div>
  );
}
