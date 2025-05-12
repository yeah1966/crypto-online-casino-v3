import Link from 'next/link';
import Image from 'next/image';

import { Metadata } from "next";
import { guideMeta } from "@/data/guideMeta";

export const generateMetadata = (): Metadata => {
  const meta = guideMeta["usdc-casino-guide"];
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: meta.title + " OG Image",
        },
      ],
      type: "article",
      siteName: "Crypto Online Casino",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage],
      creator: "@CryptoCasinoSite",
    },
    alternates: {
      canonical: meta.canonical,
    },
    keywords: meta.keywords,
  };
};

const usdcCasinos = [
  {
    name: 'BitStarz Casino',
    logo: '/logos/bitstarz.png',
    description: '⚡ Supports USDC with hybrid stablecoin payments',
    href: '#', // TODO: Fill with correct affiliate link
  },
  {
    name: 'Cloudbet',
    logo: '/logos/cloudbet.png',
    description: '📈 Leading sportsbook and casino with USDC options',
    href: '#',
  },
  {
    name: '7Bit Casino',
    logo: '/logos/7bit.png',
    description: '🌀 Flexible crypto bonuses including USDC',
    href: '#',
  },
  {
    name: 'Crypto Loko',
    logo: '/logos/cryptoloko.png',
    description: '📲 Mobile fun and smooth USDC onboarding',
    href: '#',
  },
  {
    name: 'WildVegas Casino',
    logo: '/logos/wildvegas.png',
    description: '🎰 Flashy UI with stablecoin support',
    href: '#',
  },
];

const stepIcons = ['👛', '💵', '🏆', '💸', '🎰'];

export default function USDCCasinoGuide() {
  return (
    <>
      {/* Hero Banner & Mascotte */}
      <div className="relative w-full max-w-4xl mx-auto mb-6">
        <Image
          src="/og/usdc-casino-guide.png"
          alt="USDC Casino Guide Hero"
          width={1200}
          height={400}
          className="rounded-3xl w-full object-cover shadow-2xl border-4 border-purple-400/40"
          priority
        />
        {/* Mascot top right, only on desktop */}
        <div className="hidden md:block absolute top-0 right-0 -mt-8 mr-[-36px] z-30">
          <Image
            src="/favicon-512.png"
            alt="USDC Mascot"
            width={82}
            height={82}
            className="drop-shadow-2xl"
          />
          {/* USDC logo in hand */}
          <div className="absolute right-1 bottom-1">
            <Image src="/icons/usdc.svg" alt="USDC SVG icon" width={26} height={26} />
          </div>
        </div>
      </div>
      {/* Breadcrumbs */}
      <nav className="text-sm text-purple-200 mb-6 mt-4 ml-2" aria-label="breadcrumb">
        <ol className="list-reset flex">
          <li><Link href="/">Home</Link> <span className="mx-2">→</span></li>
          <li><Link href="/guides">Guides</Link> <span className="mx-2">→</span></li>
          <li className="text-purple-400">USDC Casinos</li>
        </ol>
      </nav>
      <main className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-purple-400 mb-4 flex flex-col md:flex-row md:justify-between items-center gap-2">
          <span className="flex-1 text-center md:text-left">🟣 BEST USDC CASINOS – GAMBLE WITH USD COIN IN 2025</span>
          <Image src="/icons/usdc.svg" alt="USDC SVG icon" width={44} height={44} className="inline-block mx-auto md:mx-0" />
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-2 uppercase tracking-wide">Why USDC Casinos Are Growing Fast</h2>
          <p className="text-white/90 mb-2">
            USDC (USD Coin) is a popular stablecoin pegged 1:1 to the US Dollar. It offers the stability of fiat with the speed of crypto, making it a favorite for online gambling in 2025.
          </p>
          <ul className="mb-4 ml-1 md:ml-4 space-y-1">
            <li className="flex items-center gap-2 text-white/90"><span className="text-purple-400 text-lg">💸</span> <span className="font-semibold">Pegged to the US Dollar for zero volatility</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-purple-400 text-lg">⚡</span> <span className="font-semibold">Instant deposits and cashouts</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-purple-400 text-lg">🌐</span> <span className="font-semibold">Global availability without banking restrictions</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-purple-400 text-lg">🔐</span> <span className="font-semibold">Transparent and regulated issuer (Circle)</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-purple-400 text-lg">📲</span> <span className="font-semibold">Works with Coinbase Wallet, MetaMask & more</span></li>
          </ul>
          <p className="text-white/80 mt-2">This guide explores the best USDC-supported casinos, and how you can start gambling with USD Coin today.</p>
        </section>
        {/* Benefits of USDC Gambling */}
        <section className="mb-8 rounded-2xl border border-purple-400/30 bg-black/80 p-5 shadow-lg">
          <h2 className="text-xl font-bold text-purple-400 mb-4 uppercase tracking-wide">Benefits of USDC Gambling</h2>
          <ul className="list-disc ml-6 text-white/90 space-y-1">
            <li className="flex items-center gap-2"><span className="text-purple-400">🔒</span> Avoid crypto volatility — stable $1 value</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">🚀</span> Fast transactions and low fees</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">📱</span> Ideal for mobile and international play</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">💼</span> Easily convertible from fiat via exchanges</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">🌟</span> Trusted and widely supported in Web3</li>
          </ul>
        </section>
        <section id="casino-list" className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-purple-400 uppercase tracking-wide">Top USDC Casinos to Try in 2025</h2>
          <div className="bg-purple-900/60 rounded-xl p-4 shadow-lg flex flex-col gap-4 mt-6">
            {usdcCasinos.map((casino, i) => (
              <div key={casino.name} className="flex items-center gap-4 bg-purple-800/40 rounded-lg p-3 hover:shadow-2xl transition-all">
                <Image src={casino.logo} alt={`${casino.name} logo`} width={48} height={48} className="rounded-full shadow-md bg-white/90" />
                <div className="flex-1">
                  <span className="font-bold text-white text-lg">{casino.name}</span>
                  <span className="block text-purple-200 text-sm">{casino.description}</span>
                </div>
                <a
                  href={casino.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 text-black font-bold rounded-full px-4 py-2 text-base shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-110 hover:shadow-purple-400/60 transition-all animate-pulse hover:animate-none focus:outline-none"
                  style={{ boxShadow: '0 0 12px 2px #c4b5fd, 0 0 32px 4px #a78bfa' }}
                >
                  <Image src="/icons/usdc.svg" alt="USDC SVG icon" width={20} height={20} />
                  Play Now
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* Step-by-step block */}
        <section className="mb-10 rounded-2xl border border-purple-400/30 bg-black/80 p-5 shadow-lg">
          <h2 className="text-xl font-bold text-purple-400 mb-4 uppercase tracking-wide">Step-by-Step: From Wallet to Wager</h2>
          <ol className="list-decimal ml-6 text-white/90 mb-2 space-y-1">
            <li><span className="text-purple-400">👛</span> Create or connect a wallet (e.g., MetaMask, Coinbase Wallet)</li>
            <li><span className="text-purple-400">💵</span> Buy USDC on Coinbase, Binance, or a DEX</li>
            <li><span className="text-purple-400">🏆</span> Choose a trusted USDC casino from our list</li>
            <li><span className="text-purple-400">💸</span> Deposit your USDC and unlock your welcome bonus</li>
            <li><span className="text-purple-400">🎰</span> Play slots, tables, live games or bet on sports</li>
          </ol>
        </section>
        {/* Safety block */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Is it Safe to Use USDC in Casinos?</h2>
          <ul className="list-disc ml-6 text-white/90 mb-2">
            <li>✅ Yes — USDC is regulated, audited, and widely used.</li>
            <li>✅ Use trusted wallets and offshore licensed casinos</li>
            <li>✅ Enable 2FA and store your seed phrase safely</li>
            <li>✅ Avoid unknown casinos not on our list</li>
            <li>✅ Don’t keep large balances in hot wallets</li>
          </ul>
        </section>
        {/* CTA + Internal links */}
        <div className="flex justify-center mt-10 mb-8">
          <a
            href="/crypto-casino-reviews"
            className="font-bold text-lg px-7 py-3 rounded-full bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-105 hover:shadow-purple-400/60 transition-all focus:outline-none"
            style={{ boxShadow: '0 0 12px 2px #c4b5fd, 0 0 32px 4px #a78bfa' }}
          >
            View All Crypto Casino Reviews
          </a>
        </div>
        <div className="mb-12 mt-6 flex flex-col md:flex-row gap-3 justify-center items-center">
          <span className="text-white/80 font-semibold">See also:</span>
          <Link href="/guides/bitcoin-casinos" className="text-yellow-300 hover:underline font-bold">Bitcoin Casinos</Link>
          <Link href="/guides/best-ethereum-casinos" className="text-purple-300 hover:underline font-bold">Ethereum Casinos</Link>
          <Link href="/guides/best-litecoin-casinos" className="text-blue-300 hover:underline font-bold">Litecoin Casinos</Link>
          <Link href="/guides/tether-casino-guide" className="text-green-300 hover:underline font-bold">Tether Casinos</Link>
          <Link href="/guides/binance-casino-guide" className="text-yellow-400 hover:underline font-bold">Binance Casinos</Link>
        </div>
      </main>
    </>
  );
}
