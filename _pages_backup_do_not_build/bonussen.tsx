import Header from "../components/Header";
import TopBonusesList from "../components/TopBonusesList";

export default function BonusesPage() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background image with dark overlay, Las Vegas neon style */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-no-repeat opacity-65" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative z-10">
        <Header />
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
          <h1 className="text-4xl text-yellow-400 font-bold text-center glow mb-8 font-casino uppercase drop-shadow-neon animate-pulse">
            🎁 Top Crypto Casino Bonuses
          </h1>
          <p className="text-pink-400 text-center max-w-2xl mx-auto text-lg">
            Discover the best welcome offers, free spins, and crypto rewards at top-rated online casinos. Updated weekly!
          </p>
          <TopBonusesList />
        </div>
      </div>
    </div>
  );
}
