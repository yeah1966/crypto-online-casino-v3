import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl mx-auto mb-4 px-4">
        <Link
          href="/best-crypto-casino-bonuses"
          className="flex items-center justify-center gap-3 py-4 px-6 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold text-lg md:text-xl animate-pulse hover:scale-105 hover:from-yellow-300 hover:to-pink-300 transition-all duration-300 border-4 border-white/80 drop-shadow-xl"
          style={{ boxShadow: '0 4px 32px 0 rgba(255, 186, 0, 0.25)' }}
        >
          <span role="img" aria-label="Bonus">🎁</span>
          Claim your crypto bonus before midnight!
        </Link>
      </div>
    </div>
  );
}
