import Link from 'next/link';
import Image from 'next/image';

import { Metadata } from "next";
import { guideMeta } from "@/data/guideMeta";

export const generateMetadata = (): Metadata => {
  const meta = guideMeta["binance-casino-guide"];
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

const bnbCasinos = [
  {
    name: 'BitStarz Casino',
    logo: '/logos/bitstarz.png',
    description: '⚡ Excellent BNB support and hybrid payment flexibility',
    href: '#', // TODO: Fill with correct affiliate link
  },
  {
    name: 'Cloudbet',
    logo: '/logos/cloudbet.png',
    description: '🎯 Trusted sportsbook & casino with strong BNB integration',
    href: '#',
  },
  {
    name: '7Bit Casino',
    logo: '/logos/7bit.png',
    description: '🌀 Retro vibes and flexible crypto payments including BNB',
    href: '#',
  },
  {
    name: 'Crypto Loko',
    logo: '/logos/cryptoloko.png',
    description: '📱 Mobile-optimized fun with BNB deposits',
    href: '#',
  },
  {
    name: 'WildVegas Casino',
    logo: '/logos/wildvegas.png',
    description: '🪙 Smooth BNB payments with flashy UI',
    href: '#',
  },
];


export default function BinanceCasinoGuide() {
  return (
    <>
      {/* Hero Banner & Mascotte */}
      <div className="relative w-full max-w-4xl mx-auto mb-6">
        <Image
          src="/og/binance-casino-guide.png"
          alt="Binance Casino Guide Hero"
          width={1200}
          height={400}
          className="rounded-3xl w-full object-cover shadow-2xl border-4 border-yellow-300/40"
          priority
        />
        {/* Mascot top right, only on desktop */}
        <div className="hidden md:block absolute top-0 right-0 -mt-8 mr-[-36px] z-30">
          <Image
            src="/favicon-512.png"
            alt="Binance Mascot"
            width={82}
            height={82}
            className="drop-shadow-2xl"
          />
          {/* Binance logo in hand */}
          <div className="absolute right-1 bottom-1">
            <Image src="/icons/bnb.svg" alt="BNB SVG icon" width={26} height={26} />
          </div>
        </div>
      </div>
      {/* Breadcrumbs */}
      <nav className="text-sm text-yellow-200 mb-6 mt-4 ml-2" aria-label="breadcrumb">
        <ol className="list-reset flex">
          <li><Link href="/">Home</Link> <span className="mx-2">→</span></li>
          <li><Link href="/guides">Guides</Link> <span className="mx-2">→</span></li>
          <li className="text-yellow-400">Binance Casinos</li>
        </ol>
      </nav>
      <main className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4 flex flex-col md:flex-row md:justify-between items-center gap-2">
          <span className="flex-1 text-center md:text-left">🟡 BEST BNB CASINOS – PLAY WITH BINANCE COIN IN 2025</span>
          <Image src="/icons/bnb.svg" alt="BNB SVG icon" width={44} height={44} className="inline-block mx-auto md:mx-0" />
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2 uppercase tracking-wide">Why BNB Casinos Are Growing Fast</h2>
          <p className="text-white/90 mb-2">
            BNB, launched by Binance, is now one of the most popular cryptocurrencies for online gambling. It’s known for:
          </p>
          <ul className="mb-4 ml-1 md:ml-4 space-y-1">
            <li className="flex items-center gap-2 text-white/90"><span className="text-yellow-400 text-lg">⚡</span> <span className="font-semibold">Ultra-fast, low-cost transactions on BNB Chain</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-yellow-400 text-lg">🌍</span> <span className="font-semibold">Global access with widespread casino acceptance</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-yellow-400 text-lg">🛡️</span> <span className="font-semibold">Trusted backing by the world’s largest crypto exchange</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-yellow-400 text-lg">🎁</span> <span className="font-semibold">Exclusive BNB casino promotions</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-yellow-400 text-lg">📲</span> <span className="font-semibold">Easy use with Trust Wallet and Binance Pay</span></li>
          </ul>
          <p className="text-white/80 mt-2">This guide highlights the top casinos that support BNB payments in 2025, with expert tips to get started.</p>
        </section>
        {/* Benefits of BNB Gambling */}
        <section className="mb-8 rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 uppercase tracking-wide">Benefits of BNB Gambling</h2>
          <ul className="list-disc ml-6 text-white/90 space-y-1">
            <li className="flex items-center gap-2"><span className="text-yellow-400">🚀</span> Lightning-fast transactions via BNB Smart Chain</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">💰</span> Ultra-low fees compared to Ethereum</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">🔒</span> Ideal for offshore or semi-anonymous play</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">🧠</span> Widely integrated in mobile-friendly casino apps</li>
          </ul>
        </section>
        <section id="casino-list" className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-yellow-400 uppercase tracking-wide">Top BNB Casinos to Try in 2025</h2>
          <div className="bg-yellow-900/60 rounded-xl p-4 shadow-lg flex flex-col gap-4 mt-6">
            {bnbCasinos.map((casino, i) => (
              <div key={casino.name} className="flex items-center gap-4 bg-yellow-800/40 rounded-lg p-3 hover:shadow-2xl transition-all">
                <Image src={casino.logo} alt={`${casino.name} logo`} width={48} height={48} className="rounded-full shadow-md bg-white/90" />
                <div className="flex-1">
                  <span className="font-bold text-white text-lg">{casino.name}</span>
                  <span className="block text-yellow-200 text-sm">{casino.description}</span>
                </div>
                <a
                  href={casino.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold rounded-full px-4 py-2 text-base shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-110 hover:shadow-yellow-400/60 transition-all animate-pulse hover:animate-none focus:outline-none"
                  style={{ boxShadow: '0 0 12px 2px #fde68a, 0 0 32px 4px #fbbf24' }}
                >
                  <Image src="/icons/bnb.svg" alt="BNB SVG icon" width={20} height={20} />
                  Play Now
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* Step-by-step block */}
        <section className="mb-10 rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 uppercase tracking-wide">Step-by-Step: From Binance to Blackjack</h2>
          <ol className="list-decimal ml-6 text-white/90 mb-2 space-y-1">
            <li><span className="text-yellow-400">👤</span> Create a Binance account and fund your wallet</li>
            <li><span className="text-yellow-400">🔁</span> Transfer BNB to your Trust Wallet or MetaMask</li>
            <li><span className="text-yellow-400">🏆</span> Choose a BNB-supporting casino from our list</li>
            <li><span className="text-yellow-400">💸</span> Deposit BNB and claim your welcome bonus</li>
            <li><span className="text-yellow-400">🎰</span> Play your favorite crypto slots, tables, or live games</li>
          </ol>
        </section>
        {/* Safety block */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Is BNB Safe for Gambling?</h2>
          <ul className="list-disc ml-6 text-white/90 mb-2">
            <li>✅ Use regulated offshore casinos</li>
            <li>✅ Store BNB in trusted wallets like Trust Wallet or MetaMask</li>
            <li>✅ Withdraw regularly and enable 2FA</li>
            <li>❌ Avoid unknown casino sites not listed on our reviews</li>
          </ul>
        </section>
        {/* CTA + Internal links */}
        <div className="flex justify-center mt-10 mb-8">
          <a
            href="/crypto-casino-reviews"
            className="font-bold text-lg px-7 py-3 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-105 hover:shadow-yellow-400/60 transition-all focus:outline-none"
            style={{ boxShadow: '0 0 12px 2px #fde68a, 0 0 32px 4px #fbbf24' }}
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
        </div>
      </main>
    </>
  );
}
