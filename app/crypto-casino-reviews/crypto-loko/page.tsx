import Head from "next/head";
import CasinoSuggestions from "@/components/CasinoSuggestions";

export default function CryptoLokoReview() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-28 pb-16 px-4 text-white">
        <div className="max-w-3xl mx-auto bg-[#241f6b]/65 rounded-2xl shadow-2xl p-8 relative">
          <div className="flex flex-col items-center mb-6">
            <img src="/logos/cryptoloko.png" alt="Crypto Loko Casino Logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-3" />
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-300 text-2xl">★★★★☆</span>
              <span className="text-white/70 text-sm">4.2/5</span>
            </div>
            <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow mb-2">Crypto Loko Casino Review</h1>
            <p className="text-pink-300 text-lg font-semibold text-center max-w-xl">
              Crypto Loko Casino brings the energy with wild crypto slots, massive bonuses, and lightning-fast Bitcoin payouts – perfect for crypto thrill-seekers.<br />
              This vibrant online casino offers everything from high-volatility games to secure crypto payments, all wrapped in a unique Loko experience.
            </p>
          </div>

          <div className="my-8 bg-purple-950/80 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">Our Review</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Crypto Loko makes no apologies for its bold, in-your-face style. From the moment you land on the site, it’s clear: this casino is here to entertain. Flashy fonts, colorful graphics, and massive bonus banners dominate the screen — and behind it all? A solid crypto gaming experience.<br /><br />
              The platform is mobile-friendly and quick to navigate, offering a decent range of slots, video poker, and classic casino games. While it may not host 10,000+ titles, what it <strong>does</strong> offer runs smoothly and comes from trusted providers.<br /><br />
              Crypto Loko supports Bitcoin and other major coins, with fast payouts and responsive support. The welcome bonus is often paired with <strong>free spins</strong> and <strong>daily chip reloads</strong>, keeping players engaged.<br /><br />
              It’s not for the faint-hearted — but if you’re looking for a fun, energetic, crypto-powered playground, Crypto Loko might just be your match.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm md:text-base">
            <div>
              <h2 className="text-green-400 font-bold text-lg mb-2">✅ PROS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Big crypto bonuses + free spins</li>
                <li>Fast signup & clean UI</li>
                <li>Daily reload chip offers</li>
                <li>Supports BTC & other cryptos</li>
              </ul>
            </div>
            <div>
              <h2 className="text-red-400 font-bold text-lg mb-2">❌ CONS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>No sportsbook</li>
                <li>A bit “too loud” for some players</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-yellow-300 text-xl font-bold mb-2">🎲 HIGHLIGHTS</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Welcome bonuses with crypto deposit</li>
              <li>Mobile-optimized layout</li>
              <li>Good user ratings</li>
              <li>High RTP slots</li>
            </ul>
          </div>

          <a
            href="[Affiliate-link uit admin toevoegen]"
            className="mt-6 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            🎯 Go Loko – Play now
          </a>

          <CasinoSuggestions />

          <p className="text-center text-xs text-gray-400 mt-4">
            18+ | Gamble responsibly. Crypto Loko may not be available in all jurisdictions.
          </p>
        </div>
      </main>
    </>
  );
}
