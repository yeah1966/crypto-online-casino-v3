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
        <div className="max-w-4xl w-full mx-auto bg-black/65 rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-yellow-400/20 relative z-10 flex flex-col items-center">
          {/* Mascot bottom right */}
          <img
            src="/favicon-180.png"
            alt="Crypto Casino Mascot"
            className="hidden md:block absolute bottom-6 right-6 w-16 h-16 drop-shadow-xl z-20 pointer-events-none select-none"
            style={{ borderRadius: '22%' }}
          />
          <img
            src="/favicon-64.png"
            alt="Crypto Casino Mascot"
            className="block md:hidden absolute bottom-4 right-4 w-10 h-10 drop-shadow-xl z-20 pointer-events-none select-none"
            style={{ borderRadius: '22%' }}
          />


          {/* SPORTSBETTING MENU */}
          <nav className="mb-10 w-full">
            <div className="rounded-2xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-400 via-purple-500 to-orange-400 p-1 shadow-xl flex">
              <div className="flex-1 flex items-center justify-center gap-6 bg-purple-800/95 rounded-2xl p-4">
                <Link href="/sports" className="flex items-center gap-2 text-white font-bold text-lg hover:text-yellow-300">
                  <span className="text-2xl">⚽</span> Sports Overview
                </Link>
                <Link href="/sports/bookmakers/1xbet" className="flex items-center gap-2 text-white font-bold text-lg hover:text-yellow-300">
                  <span className="text-2xl">🏆</span> 1xBet
                </Link>
                <Link href="/sports/bookmakers/cloudbet" className="flex items-center gap-2 text-white font-bold text-lg hover:text-yellow-300">
                  <span className="text-2xl">⚡</span> Cloudbet
                </Link>
                <Link href="/sports/bookmakers/wildvegas" className="flex items-center gap-2 text-white font-bold text-lg hover:text-yellow-300">
                  <span className="text-2xl">🎲</span> Wild Vegas
                </Link>
              </div>
            </div>
          </nav>
          {/* HERO */}
          <section className="w-full bg-[#241f6b]/80 rounded-2xl shadow-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow text-center mb-3 flex items-center justify-center"><FaFutbol className="inline mr-2 text-yellow-300" size={40} />Crypto Sportsbetting 2025</h1>
            <p className="text-lg md:text-xl text-white/90 text-center mb-4">Welcome to the ultimate crypto sportsbetting guide! Discover the best bitcoin sportsbooks, learn how to bet safely with crypto, and take advantage of unique bonuses & lightning-fast payouts.</p>
          </section>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 w-full">
            <div className="flex flex-col items-center bg-black/60 rounded-xl p-6 shadow-lg border border-yellow-400">
              <FaBolt className="text-yellow-300 text-3xl mb-2" />
              <span className="font-bold text-yellow-200 text-lg">Instant Payouts</span>
              <span className="text-white/80 text-sm mt-1 text-center">Crypto winnings in minutes, not days.</span>
            </div>
            <div className="flex flex-col items-center bg-black/60 rounded-xl p-6 shadow-lg border border-pink-400">
              <FaGift className="text-pink-400 text-3xl mb-2" />
              <span className="font-bold text-pink-200 text-lg">Big Bonuses</span>
              <span className="text-white/80 text-sm mt-1 text-center">Exclusive crypto promotions for all players.</span>
            </div>
            <div className="flex flex-col items-center bg-black/60 rounded-xl p-6 shadow-lg border border-green-400">
              <FaShieldAlt className="text-green-400 text-3xl mb-2" />
              <span className="font-bold text-green-200 text-lg">Safe & Private</span>
              <span className="text-white/80 text-sm mt-1 text-center">No banks, no limits, no hassle.</span>
            </div>
            <div className="flex flex-col items-center bg-black/60 rounded-xl p-6 shadow-lg border border-blue-400">
              <FaTrophy className="text-blue-300 text-3xl mb-2" />
              <span className="font-bold text-blue-200 text-lg">Top Sportsbooks</span>
              <span className="text-white/80 text-sm mt-1 text-center">Bet on all major sports & e-sports.</span>
            </div>
          </div>
          {/* TOP SPORTSBOOKS OVERVIEW (AUTOMATISCH) */}
          <section className="bg-black/80 rounded-2xl p-8 shadow-2xl w-full mb-8">
            <h2 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center"><FaTrophy className="mr-2 text-yellow-300" />Top Crypto Sportsbooks 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bookmakers.map(bm => (
                <div key={bm.slug} className="flex flex-col items-center bg-gradient-to-br from-purple-900/90 via-black/90 to-yellow-900/70 rounded-2xl p-6 shadow-2xl border-2 border-yellow-400/60 hover:scale-[1.015] transition-transform">
                  <img src={bm.logo} alt={bm.name + ' Sportsbook'} width={64} height={64} className="mb-3 rounded-xl bg-white/80 shadow-lg border-2 border-yellow-400/40" />
                  <span className="font-bold text-yellow-200 text-xl mb-1 text-center">{bm.name}</span>
                  <span className="text-white/90 text-base text-center mb-2">{bm.description}</span>
                  <span className="text-yellow-300 text-lg mb-2">{'★'.repeat(Math.floor(bm.rating))}{bm.rating % 1 ? '½' : ''}</span>
                  <Link href={`/sports/bookmakers/${bm.slug}`} className="mt-2 bg-gradient-to-r from-yellow-400 to-pink-400 text-black font-bold py-2 px-4 rounded-full shadow-lg hover:scale-105 transition text-center w-full">Read Review</Link>
{bm.slug === '1xbet' && (
  <a
    href="https://refpa3740576.top/L?tag=d_3915280m_1599c_&site=3915280&ad=1599"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 bg-green-400 text-black font-bold py-2 px-4 rounded-full shadow-lg hover:bg-green-300 transition text-center w-full block"
  >
    ▶️ Play Now
  </a>
)}
{bm.slug === 'cloudbet' && (
  <a
    href="https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 bg-green-400 text-black font-bold py-2 px-4 rounded-full shadow-lg hover:bg-green-300 transition text-center w-full block"
  >
    ▶️ Play Now
  </a>
)}
{bm.slug === 'wildvegas' && (
  <a
    href="https://www.wildvegaslinks.com/click/11/4315/15512/1"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 bg-green-400 text-black font-bold py-2 px-4 rounded-full shadow-lg hover:bg-green-300 transition text-center w-full block"
  >
    ▶️ Play Now
  </a>
)}
                </div>
              ))}
            </div>
          </section>
          {/* WHY BET WITH CRYPTO */}
          <section className="flex items-start gap-6 bg-black/90 rounded-2xl p-8 shadow-2xl w-full mb-8">
            <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 bg-black rounded-xl shadow-lg">
              <FaBitcoin className="text-green-400" size={54} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3 text-green-400 flex items-center">Why bet with crypto?</h2>
              <ul className="list-disc list-inside space-y-2 text-white/90 text-lg">
                <li>Fast, anonymous deposits and withdrawals with Bitcoin, Ethereum, or USDT</li>
                <li>High bonuses and exclusive promotions for crypto users</li>
                <li>Wide range of sports, live betting, and e-sports</li>
                <li>No banks or limits</li>
                <li>Accessible worldwide, also from NL/BE</li>
              </ul>
            </div>
          </section>
          {/* HOW DOES CRYPTO SPORTS BETTING WORK? */}
          <section className="flex items-start gap-6 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 shadow-2xl w-full mb-8">
            <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 bg-blue-800 rounded-xl shadow-lg">
              <FaFutbol className="text-yellow-300" size={54} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3 text-yellow-300 flex items-center">How does crypto sports betting work?</h2>
              <ol className="list-decimal list-inside space-y-2 text-white/90 text-lg pl-4">
                <li>Choose a trusted bookmaker (see the overview above)</li>
                <li>Create an account and verify your wallet</li>
                <li>Deposit crypto via your wallet or QR code</li>
                <li>Place your bet on your favorite sport or team</li>
                <li>Win? Get paid out in crypto, often within minutes!</li>
              </ol>
            </div>
          </section>
          {/* DISCLAIMER */}
          <p className="text-center text-xs text-gray-400 mt-4 max-w-2xl mx-auto">18+ | Gamble responsibly. Sports betting may not be available in all jurisdictions.</p>
        </div>
      </main>
    </>
  );
}
