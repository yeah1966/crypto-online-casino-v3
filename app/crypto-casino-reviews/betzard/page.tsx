import Head from "next/head";
import CasinoSuggestions from "@/components/CasinoSuggestions";

export default function BetzardReview() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-28 pb-16 px-4 text-white">
        <div className="max-w-3xl mx-auto bg-[#241f6b]/65 rounded-2xl shadow-2xl p-8 relative">
          <div className="flex flex-col items-center mb-6">
            <img src="/logos/betzard.png" alt="Betzard Casino Logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-3" />
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-300 text-2xl">★★★★☆</span>
              <span className="text-white/70 text-sm">4.0/5</span>
            </div>
            <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow mb-2">Betzard Casino Review</h1>
            <p className="text-pink-300 text-lg font-semibold text-center max-w-xl">
              Betzard Casino is a top-tier crypto casino known for its secure environment, fast payouts, and a wide variety of provably fair games.<br />
              Whether you’re betting with Bitcoin or browsing the latest crypto promotions, Betzard combines security with excitement in one sleek platform.
            </p>
          </div>

          <div className="my-8 bg-purple-950/80 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-300 mb-3">Our Review</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Betzard wears its crown proudly, offering a whimsical fantasy-inspired layout backed by real crypto functionality. While it doesn’t boast the biggest name in the industry, it makes up for it with a well-rounded experience and fun promotional energy.<br /><br />
              The site features a full library of <strong>slots, table games, and live dealer action</strong>, and supports <strong>Bitcoin</strong> alongside other payment methods. Players can claim a <strong>solid welcome bonus</strong>, often matched with free spins or cashback rewards.<br /><br />
              The interface is clean and user-friendly, though not overly flashy. Betzard focuses more on content than cosmetics, with frequent tournaments and seasonal promos to keep things interesting.<br /><br />
              For crypto users, the platform offers <strong>quick deposits and cashouts</strong>, decent support, and a growing reputation in the alt-gaming space. It’s a safe pick if you’re looking to play crypto with a dash of medieval flair.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm md:text-base">
            <div>
              <h2 className="text-green-400 font-bold text-lg mb-2">✅ PROS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Great welcome bonus</li>
                <li>Wide game selection</li>
                <li>Crypto deposits & withdrawals</li>
                <li>Fun seasonal events</li>
              </ul>
            </div>
            <div>
              <h2 className="text-red-400 font-bold text-lg mb-2">❌ CONS</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Fewer VIP benefits</li>
                <li>Interface feels “templated”</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-yellow-300 text-xl font-bold mb-2">🎲 HIGHLIGHTS</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Secure BTC gaming</li>
              <li>Easy-to-use layout</li>
              <li>Live tournaments & events</li>
              <li>Weekly promotions</li>
            </ul>
          </div>

          <a
            href="[Affiliate-link uit admin invoegen]"
            className="mt-6 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            🎯 Join Betzard and play now
          </a>

          {/* Explore Other Crypto Casino Reviews block directly after CTA */}
          <CasinoSuggestions />

          <p className="text-center text-xs text-gray-400 mt-4">
            18+ | Gamble responsibly. Betzard Casino may not be available in all jurisdictions.
          </p>
        </div>
      </main>
    </>
  );
}
