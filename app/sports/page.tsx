// app/sports/page.tsx
import Head from "next/head";
import Link from "next/link";
import { FaTrophy, FaBolt, FaShieldAlt, FaGift, FaFutbol, FaBitcoin } from "react-icons/fa";
import { bookmakers } from "./bookmakers/bookmakersData";

export default function SportsbettingPage() {
  return (
    <>
      <Head>
        <title>Crypto Sportsbetting 2025 | Best Bitcoin Sportsbooks & Betting Tips</title>
        <meta name="description" content="Everything about crypto sportsbetting: discover the best bitcoin sportsbooks, bonuses, payment methods, and tips for safe and smart betting on sports in 2025." />
        <meta name="keywords" content="crypto sportsbetting, bitcoin sportsbook, sports betting, crypto payments, best sportsbooks, sports gambling, crypto casino" />
      </Head>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <main className="relative z-10 min-h-screen flex flex-col items-center pt-6 pb-16 px-4 text-white">
        {/* HERO */}
        <section className="max-w-3xl w-full mx-auto bg-[#241f6b]/80 rounded-2xl shadow-2xl p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow text-center mb-3 flex items-center justify-center"><FaFutbol className="inline mr-2 text-yellow-300" size={40} />Crypto Sportsbetting 2025</h1>
          <p className="text-lg md:text-xl text-white/90 text-center mb-4">Welkom bij dé crypto sportsbetting gids! Ontdek de beste bitcoin sportsbooks, leer veilig wedden met crypto, en profiteer van unieke bonussen & razendsnelle uitbetalingen.</p>
        </section>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 w-full max-w-5xl">
          <div className="flex flex-col items-center bg-black/60 rounded-xl p-6 shadow-lg border border-yellow-400">
            <FaBolt className="text-yellow-300 text-3xl mb-2" />
            <span className="font-bold text-yellow-200 text-lg">Instant Payouts</span>
            <span className="text-white/80 text-sm mt-1 text-center">Crypto winnings in minutes, not days.</span>
          </div>
          <div className="flex flex-col items-center bg-black/60 rounded-xl p-6 shadow-lg border border-pink-400">
            <FaGift className="text-pink-400 text-3xl mb-2" />
            <span className="font-bold text-pink-200 text-lg">Big Bonuses</span>
            <span className="text-white/80 text-sm mt-1 text-center">Exclusive promotions for crypto bettors.</span>
          </div>
          <div className="flex flex-col items-center bg-black/60 rounded-xl p-6 shadow-lg border border-green-400">
            <FaShieldAlt className="text-green-300 text-3xl mb-2" />
            <span className="font-bold text-green-200 text-lg">Safe & Private</span>
            <span className="text-white/80 text-sm mt-1 text-center">No banks, no KYC, full privacy.</span>
          </div>
          <div className="flex flex-col items-center bg-black/60 rounded-xl p-6 shadow-lg border border-blue-400">
            <FaTrophy className="text-blue-300 text-3xl mb-2" />
            <span className="font-bold text-blue-200 text-lg">Top Sportsbooks</span>
            <span className="text-white/80 text-sm mt-1 text-center">Bet on all major sports & e-sports.</span>
          </div>
        </div>

        {/* TOP SPORTSBOOKS OVERVIEW (AUTOMATISCH) */}
        <section className="bg-black/80 rounded-2xl p-8 shadow-2xl max-w-3xl w-full mb-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center"><FaTrophy className="mr-2 text-yellow-300" />Top Crypto Sportsbooks 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookmakers.map(bm => (
              <div key={bm.slug} className="flex flex-col items-center bg-purple-950/80 rounded-xl p-6 shadow-lg border border-yellow-400">
                <img src={bm.logo} alt={bm.name + ' Sportsbook'} width={64} height={64} className="mb-3 rounded-xl bg-white shadow" />
                <span className="font-bold text-yellow-300 text-lg mb-1">{bm.name}</span>
                <span className="text-white/80 text-sm text-center mb-2">{bm.description}</span>
                <span className="text-yellow-200 text-lg mb-2">{'★'.repeat(Math.floor(bm.rating))}{bm.rating % 1 ? '½' : ''}</span>
                <Link href={`/sports/bookmakers/${bm.slug}`} className="mt-2 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-2 px-4 rounded-lg shadow transition-all duration-300 text-center w-full">Lees review</Link>
              </div>
            ))}
          </div>
        </section>

        {/* ALGEMENE UITLEG */}
        <section className="flex items-start gap-6 bg-black/90 rounded-2xl p-8 shadow-2xl max-w-3xl w-full mb-8">
          <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 bg-black rounded-xl shadow-lg">
            <FaBitcoin className="text-green-400" size={54} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3 text-green-400 flex items-center">Waarom wedden met crypto?</h2>
            <ul className="list-disc list-inside space-y-2 text-white/90 text-lg">
              <li>Snelle, anonieme stortingen en uitbetalingen met bitcoin, Ethereum of USDT</li>
              <li>Hoge bonussen en exclusieve promoties voor crypto gebruikers</li>
              <li>Breed aanbod aan sporten, live betting en e-sports</li>
              <li>Geen banken of limieten</li>
              <li>Wereldwijd toegankelijk, ook vanuit NL/BE</li>
            </ul>
          </div>
        </section>

        {/* UITLEG HOE HET WERKT */}
        <section className="flex items-start gap-6 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 shadow-2xl max-w-3xl w-full mb-8">
          <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 bg-blue-800 rounded-xl shadow-lg">
            <FaFutbol className="text-yellow-300" size={54} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3 text-yellow-300 flex items-center">Hoe werkt crypto sportsbetting?</h2>
            <ol className="list-decimal list-inside space-y-2 text-white/90 text-lg pl-4">
              <li>Kies een betrouwbare bookmaker (zie overzicht hierboven)</li>
              <li>Maak een account aan en verifieer je wallet</li>
              <li>Stort crypto via je wallet of QR-code</li>
              <li>Plaats je weddenschap op je favoriete sport of team</li>
              <li>Winst? Uitbetaling in crypto, vaak binnen enkele minuten!</li>
            </ol>
          </div>
        </section>

        {/* DISCLAIMER */}
        <p className="text-center text-xs text-gray-400 mt-4 max-w-2xl mx-auto">18+ | Gamble responsibly. Sportsbetting may not be available in all jurisdictions.</p>
      </main>
    </>
  );
}
