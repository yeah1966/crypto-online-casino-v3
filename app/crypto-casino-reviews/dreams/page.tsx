import Head from "next/head";
import CasinoSuggestions from "@/components/CasinoSuggestions";

export default function DreamsReview() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-28 pb-16 px-4 text-white">
        <div className="max-w-3xl mx-auto bg-[#241f6b]/80 rounded-2xl shadow-2xl p-8 relative">
          <div className="flex flex-col items-center mb-6">
            <img src="/logos/dreamscasino.png" alt="Dreams Casino Logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-3" />
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-300 text-2xl">★★★★☆</span>
              <span className="text-white/70 text-sm">4.1/5</span>
            </div>
            <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow mb-2">Dreams Casino Review</h1>
            <p className="text-pink-300 text-lg font-semibold text-center max-w-xl">
              Dreams Casino offers a wide range of crypto slots and table games, combined with generous bonuses and fast payouts for Bitcoin users.<br />
              Whether you're chasing jackpots or just looking for a safe crypto gambling site, Dreams Casino delivers a smooth and rewarding experience.
            </p>
          </div>

          <div className="my-8 bg-purple-950/80 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">Our Review</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Dreams Casino brings the old-school Vegas charm with a new-age crypto twist. The site leans heavily into the classic "gold and velvet" aesthetic, with a straightforward interface that focuses on games, bonuses, and fast action.<br /><br />
              Players will find a <strong>large catalog of slot games</strong>, video poker, and classic table games — all optimized for smooth crypto deposits and withdrawals. While the layout may feel dated to some, the bonus system makes up for it: regular reloads, free chips, and high-percentage welcome offers are common.<br /><br />
              Dreams Casino is great for players who love <strong>generous bonuses</strong> and don’t mind a more traditional interface. The platform accepts BTC and a few other crypto options, and cashouts are usually processed within 24 hours.<br /><br />
              It’s not the most modern platform out there — but it’s trustworthy, crypto-friendly, and generous with bonuses. Sometimes, that’s all you need.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm md:text-base">
            <div>
              <h2 className="text-green-400 font-bold text-lg mb-2">✅ PROS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Big welcome bonuses & reload offers</li>
                <li>Crypto-friendly (BTC accepted)</li>
                <li>Large collection of slots & table games</li>
                <li>Good customer service</li>
              </ul>
            </div>
            <div>
              <h2 className="text-red-400 font-bold text-lg mb-2">❌ CONS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Dated design and interface</li>
                <li>Limited live casino options</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-yellow-300 text-xl font-bold mb-2">🎲 HIGHLIGHTS</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Trusted for over a decade</li>
              <li>Mobile-ready interface</li>
              <li>Bonus codes regularly available</li>
              <li>BTC deposits & withdrawals</li>
            </ul>
          </div>

          <a
            href="[Affiliate-link uit admin toevoegen]"
            className="mt-6 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            🎯 Claim your Dreams Casino bonus
          </a>

          {/* Explore Other Crypto Casino Reviews block directly after CTA */}
          <CasinoSuggestions />

          <p className="text-center text-xs text-gray-400 mt-4">
            18+ | Gamble responsibly. Dreams Casino may not be available in all jurisdictions.
          </p>
        </div>
      </main>
    </>
  );
}
