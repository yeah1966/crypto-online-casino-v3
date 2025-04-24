import CasinoSuggestions from "@/components/CasinoSuggestions";

export default function BetplayReview() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-28 pb-16 px-4 text-white">
        <div className="max-w-3xl mx-auto bg-[#241f6b]/80 rounded-2xl shadow-2xl p-8 relative">
          <div className="flex flex-col items-center mb-6">
            <img src="/logos/betplay.png" alt="Betplay Casino Logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-3" />
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-300 text-2xl">★★★★☆</span>
              <span className="text-white/70 text-sm">4.5/5</span>
            </div>
            <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow mb-2">Betplay Casino Review</h1>
            <p className="text-pink-300 text-lg font-semibold text-center max-w-xl">
              Betplay Casino is a top-rated platform for crypto sports betting and Bitcoin games, with lightning-fast payouts and a sleek, modern interface. Whether you're into live betting or classic slots, Betplay delivers a fast, secure crypto casino experience.
            </p>
          </div>

          <div className="my-8 bg-purple-950/80 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">Our Review</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Betplay is the kind of casino that doesn’t scream for your attention — it earns it. From the moment you log in, everything feels clean, fast, and responsive. No clunky menus, no clutter. Just you, your crypto, and a polished interface ready to deal.<br /><br />
              Where Betplay truly shines is in its <strong>crypto-first focus</strong>. The platform supports a wide range of coins, including BTC, LTC, ETH, and even Nano for instant transactions. Payouts are fast, fees are non-existent, and the entire payment process feels tailor-made for crypto users.<br /><br />
              While the <strong>game selection is strong</strong>, Betplay leans toward quality over quantity. Expect top-tier providers, a slick sportsbook, and a growing live casino section. Newbies get a generous welcome offer, while loyal players can look forward to cashbacks and regular promos.<br /><br />
              This isn’t a flashy, slot-heavy carnival. It’s a smooth, sleek experience built for crypto-savvy players who value speed, reliability, and a touch of class.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm md:text-base">
            <div>
              <h2 className="text-green-400 font-bold text-lg mb-2">✅ PROS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Lightning-fast crypto withdrawals</li>
                <li>Slick mobile-first design</li>
                <li>Strong sportsbook integration</li>
                <li>No-fee payments with Nano</li>
              </ul>
            </div>
            <div>
              <h2 className="text-red-400 font-bold text-lg mb-2">❌ CONS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Smaller overall game library</li>
                <li>Fewer promotions than competitors</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-yellow-300 text-xl font-bold mb-2">🎲 HIGHLIGHTS</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Welcome bonus for new crypto players</li>
              <li>Intuitive user interface</li>
              <li>Sports betting and live casino</li>
              <li>BTC, ETH, LTC, Nano & more</li>
            </ul>
          </div>

          <a
            href="[Affiliate-link uit admin toevoegen]"
            className="mt-6 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            🎯 Claim your Betplay bonus
          </a>

          {/* Explore Other Crypto Casino Reviews block directly after CTA */}
          <CasinoSuggestions />

          <p className="text-center text-xs text-gray-400 mt-4">
            18+ | Gamble responsibly. Betplay may not be available in all jurisdictions.
          </p>
        </div>
      </main>
    </>
  );
}
