import Image from "next/image";
import Link from "next/link";

export default function WildVegasReview() {
  return (
    <main className="min-h-screen pt-36 pb-16 px-4 text-white">
      <div className="max-w-3xl mx-auto bg-[#241f6b]/80 rounded-2xl shadow-2xl p-8 relative">
        <div className="flex flex-col items-center mb-6">
          <Image src="/logos/wildvegas.png" alt="Wild Vegas logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-3" />
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-300 text-2xl">★★★★☆</span>
            <span className="text-white/70 text-sm">4.0/5</span>
          </div>
          <h1 className="text-4xl font-extrabold text-yellow-300 drop-shadow mb-2">Wild Vegas</h1>
          <p className="text-pink-300 text-lg font-semibold text-center max-w-xl">Stap in de ultieme Vegas-sfeer! Wild Vegas is dé plek voor bonussen, free spins en non-stop actie. Speel met crypto en pak je wildste winstkansen.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-xl font-bold text-green-400 mb-2 glow">✅ Pros</h2>
            <ul className="space-y-1 text-white/90">
              <li>Unieke Vegas-ervaring met crypto</li>
              <li>Dagelijkse bonussen & free spins</li>
              <li>Snelle uitbetalingen</li>
              <li>24/7 live support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-pink-400 mb-2 glow">❌ Cons</h2>
            <ul className="space-y-1 text-white/70">
              <li>Geen sportweddenschappen</li>
              <li>Beperkte tafelspellen</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-300 mb-3">🎲 Highlights</h2>
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>100% bonus + Free Spins voor nieuwe spelers</li>
            <li>Grote selectie aan slots en jackpot games</li>
            <li>Crypto only: veilig en anoniem spelen</li>
            <li>Exclusieve promoties voor vaste spelers</li>
          </ul>
        </div>
        <Link href="https://www.wildvegaslinks.com/click/11/4315/15512/1" target="_blank" className="block w-full text-center px-8 py-4 bg-yellow-300 text-pink-700 font-extrabold rounded-full text-xl shadow-lg hover:bg-pink-600 hover:text-white transition-all mb-4">
          🎯 Claim jouw Wild Vegas bonus!
        </Link>
        <div className="text-white/60 text-xs text-center mt-8">
          18+ | Speel verantwoord. Kans op verlies. <br />
          <span className="italic">Wild Vegas is alleen beschikbaar voor spelers in toegestane jurisdicties.</span>
        </div>
      </div>
    </main>
  );
}
