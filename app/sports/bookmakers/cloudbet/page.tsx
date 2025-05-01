import Image from "next/image";
import cloudbetSeo from "./seo";
import { Metadata } from "next";

export const metadata: Metadata = cloudbetSeo;

export default function CloudbetSportsbookPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Transparant groot vlak achter de content voor verduistering */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-black/60 rounded-3xl backdrop-blur-sm" />
      </div>
      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        {/* Header - logo links van tekst */}
        <div className="flex items-center bg-transparent mb-2 gap-6">
          <Image
            src="/logos/cloudbet.png"
            alt="Cloudbet Logo"
            width={80}
            height={80}
            className="flex-shrink-0 rounded-xl shadow-md bg-white/5"
          />
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-2 leading-tight">
              CLOUDBET SPORTSBOOK — CRYPTO BETTING REVIEW 2025
            </h1>
            <p className="text-lg text-zinc-300">
              Cloudbet is one of the most established crypto sportsbooks, known for its broad
              sports offering, live betting options, and instant crypto payouts.
            </p>
          </div>
        </div>

        {/* Accepted Cryptocurrencies */}
        <div className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm">
          <Image src="/icons/btc.svg" alt="BTC" width={84} height={84} className="flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-white mb-2 tracking-wide uppercase">Accepted Cryptocurrencies</h2>
            <div className="flex flex-wrap justify-between items-center gap-4 mt-4 w-full">
              {[
                { symbol: 'btc', label: 'BTC' },
                { symbol: 'eth', label: 'ETH' },
                { symbol: 'ltc', label: 'LTC' },
                { symbol: 'usdt', label: 'USDT' },
                { symbol: 'usdc', label: 'USDC' },
                { symbol: 'bnb', label: 'BNB' },
                { symbol: 'trx', label: 'TRX' },
              ].map(({ symbol, label }) => (
                <div key={symbol} className="flex flex-col items-center mx-2">
                  <Image
                    src={`/icons/${symbol}.svg`}
                    alt={label}
                    width={48}
                    height={48}
                  />
                  <span className="mt-2 text-base font-semibold tracking-wide text-white/90">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Popular Sports */}
        <div className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm">
          <Image src="/sports-icons/Football.svg" alt="Sports" width={96} height={96} className="flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-white mb-2 tracking-wide uppercase">Most Popular Sports</h2>
            <div className="grid grid-cols-3 gap-y-6 gap-x-4 mt-6 w-full">
              {[
                { src: 'Football.svg', label: 'Soccer' },
                { src: 'Basketball.svg', label: 'Basketball' },
                { src: 'Tennis.svg', label: 'Tennis' },
                { src: 'Boxing.svg', label: 'Boxing' },
                { src: 'Esports.svg', label: 'Csports (C&GD)' },
                { src: 'American football.png', label: 'American football' },
              ].map(({ src, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <Image
                    src={`/sports-icons/${src}`}
                    alt={label}
                    width={64}
                    height={64}
                  />
                  <span className="mt-2 text-base font-semibold tracking-wide text-white/90 text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Betting & Streaming */}
        <div className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm">
          <Image src="/casino-icons/Live Casino.svg" alt="Live Betting & Streaming" width={84} height={84} className="flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-yellow-300 mb-2 tracking-wide uppercase">Live Betting & Streaming</h2>
            <p className="text-base text-zinc-200 leading-relaxed">Cloudbet offers HD live streams and a responsive in-play betting interface for dozens of sports.</p>
          </div>
        </div>

        {/* Bonuses & Promotions */}
        <div className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm">
          <Image src="/casino-icons/Bonus.svg" alt="Bonuses & Promotions" width={84} height={84} className="flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-yellow-300 mb-2 tracking-wide uppercase">Bonuses & Promotions</h2>
            <p className="text-base text-zinc-200 leading-relaxed">Welcome bonus up to 5 BTC for new users. Frequent reload bonuses and enhanced odds.</p>
          </div>
        </div>

        {/* User Experience & Mobile App */}
        <div className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm">
          <Image src="/casino-icons/Smartphone.svg" alt="User Experience & Mobile App" width={84} height={84} className="flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-yellow-300 mb-2 tracking-wide uppercase">User Experience & Mobile App</h2>
            <p className="text-base text-zinc-200 leading-relaxed">Fast-loading website, fully optimized mobile version, and native app support.</p>
          </div>
        </div>

        {/* Trust & Reputation */}
        <div className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm">
          <Image src="/casino-icons/Good Review.svg" alt="Trust & Reputation" width={84} height={84} className="flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-yellow-300 mb-2 tracking-wide uppercase">Trust & Reputation</h2>
            <p className="text-base text-zinc-200 leading-relaxed">Operating since 2013 with excellent reviews and a strong track record in the crypto betting space.</p>
          </div>
        </div>

        {/* Feature Blocks */}
        {[
          {
            title: 'User Perks & Promotions',
            icon: 'Bonus.svg',
            description:
              'Cloudbet offers early cash-out options, live statistics, and a loyalty points system.',
          },
          {
            title: 'Unique Features',
            icon: 'Strategy Tips.svg',
            description:
              'Cloudbet offers up to cash-out option, live statistics, and a loyalty points system.',
          },
          {
            title: 'Privacy & KYC',
            icon: 'Lock.svg',
            description:
              'No KYC required up to a certain threshold. High anonymity for casual bettors.',
          },
          {
            title: 'Minimum Bets & Limits',
            icon: 'Dollar.svg',
            description:
              'Bet from as little as $1 worth of crypto. High limits available for VIPs.',
          },
          {
            title: 'Region Availability & Languages',
            icon: 'Globe.svg',
            description:
              'Accessible globally. Including most of Europe, Asia, and Latin America. Site available in 18+ languages.',
          },
        ].map(({ title, icon, description }) => (
          <div
            key={title}
            className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm"
          >
            <Image src={`/casino-icons/${icon}`} alt={title} width={84} height={84} className="flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold text-yellow-300 mb-2 tracking-wide uppercase">{title}</h3>
              <p className="text-base text-zinc-200 leading-relaxed">{description}</p>
            </div>
          </div>
        ))}

        <div className="text-center mt-10">
          <a
            href="https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition"
          >
            Visit Cloudbet Sportsbook
          </a>
        </div>
      </div>
    </div>
  );
}