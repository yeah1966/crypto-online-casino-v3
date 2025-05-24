import Link from 'next/link';
import Image from 'next/image';

import { Metadata } from "next";
import { guideMeta } from "@/data/guideMeta";

export const generateMetadata = (): Metadata => {
  const meta = guideMeta["best-litecoin-casinos"];
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

const casinos = [
  {
    name: 'BitStarz Casino',
    logo: '/logos/bitstarz.png',
    description: '⚡ Fast LTC payouts and legendary support',
    href: 'https://b1t5t4rz.com/b2b7d0ed7',
  },
  {
    name: 'Cloudbet',
    logo: '/logos/cloudbet.png',
    description: '🎯 Trusted sportsbook and casino for LTC',
    href: 'https://cldbt.cloud/go/en/landing/litecoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo',
  },
  {
    name: '7Bit Casino',
    logo: '/logos/7bit.png',
    description: '🎰 Retro-themed crypto casino with strong LTC support',
    href: 'https://www.7bitcasino.com/a/b8c1d2e3f4',
  },
  {
    name: 'Crypto Loko',
    logo: '/logos/cryptoloko.png',
    description: '🔥 LTC-friendly, mobile-optimized, and fun',
    href: 'https://cryptolokolink.com/click/77/441/6060/1',
  },
  {
    name: 'WildVegas Casino',
    logo: '/logos/wildvegas.png',
    description: '💥 Flashy UI with smooth LTC deposits',
    href: 'https://www.wildvegaslinks.com/click/11/4315/15512/1',
  },
];

export default function BestLitecoinCasinos() {
  return (
    <>
      {/* Hero Banner & Mascotte */}
      <div className="relative w-full max-w-4xl mx-auto mb-6">
        <Image
          src="/og/litecoin-casino-guide.png"
          alt="Litecoin Casino Guide Hero"
          width={1200}
          height={400}
          className="rounded-3xl w-full object-cover shadow-2xl border-4 border-blue-300/40"
          priority
        />
        {/* Mascot top right, only on desktop */}
        <div className="hidden md:block absolute top-0 right-0 -mt-8 mr-[-36px] z-30">
  <Image
    src="/favicon-512.png"
    alt="Litecoin Mascot"
    width={82}
    height={82}
    className="drop-shadow-2xl"
  />
  {/* Litecoin logo in hand */}
  <div className="absolute right-1 bottom-1">
    <Image src="/icons/ltc.svg" alt="Litecoin SVG icon" width={26} height={26} />
  </div>
</div>
      </div>
      {/* Breadcrumbs */}
      <nav className="text-sm text-purple-200 mb-6 mt-4 ml-2">
        <ol className="list-reset flex">
          <li><Link href="/">Home</Link> <span className="mx-2">→</span></li>
          <li><Link href="/guides">Guides</Link> <span className="mx-2">→</span></li>
          <li className="text-blue-400">Best Litecoin Casinos</li>
        </ol>
      </nav>
      <main className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-4 flex flex-col md:flex-row md:justify-between items-center gap-2">
          <span className="flex-1 text-center md:text-left">Best Litecoin Casinos – Play with LTC in 2025</span>
          <Image src="/icons/ltc.svg" alt="Litecoin SVG icon" width={44} height={44} className="inline-block mx-auto md:mx-0" />
        </h1>
        {/* Why Litecoin Casinos */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Why Litecoin Casinos Are Still Fastest</h2>
          <p className="text-white/90 mb-2">
            Litecoin is one of the fastest and cheapest cryptocurrencies for online gambling. Its low fees and quick confirmations make it a favorite among players and casinos alike.
          </p>
          <ul className="ml-6 text-white/90 mt-2 space-y-1">
            <li className="flex items-center gap-2"><span className="text-blue-400">⚡️</span> Lightning-fast deposits and withdrawals</li>
            <li className="flex items-center gap-2"><span className="text-blue-400">💸</span> Ultra-low transaction fees</li>
            <li className="flex items-center gap-2"><span className="text-blue-400">🔐</span> Privacy-focused and widely accepted</li>
            <li className="flex items-center gap-2"><span className="text-blue-400">🎁</span> Unique LTC-only casino bonuses</li>
            <li className="flex items-center gap-2"><span className="text-blue-400">🧠</span> Proven track record since 2011</li>
          </ul>
          <p className="text-white/70 mt-2">
            This guide covers the top Litecoin casino sites for 2025, why they matter, and how to get started today.
          </p>
        </section>
        {/* Benefits Block */}
        <section id="ltc-benefits" className="rounded-2xl border border-blue-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2 mb-12">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">Benefits of LTC Gambling</h2>
          <ul className="ml-6 text-white/90 mt-2 space-y-1">
            <li className="flex items-center gap-2"><span className="text-blue-400">🪙</span> No bank involvement – pure crypto play</li>
            <li className="flex items-center gap-2"><span className="text-blue-400">🚀</span> Fastest confirmations in crypto</li>
            <li className="flex items-center gap-2"><span className="text-blue-400">🔐</span> Ideal for anonymous or offshore play</li>
            <li className="flex items-center gap-2"><span className="text-blue-400">🎯</span> Supported at nearly all crypto casinos</li>
          </ul>
        </section>
        {/* Top Casinos Block */}
        <section id="casino-list" className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">Top Litecoin Casinos to Try in 2025</h2>
          <div className="bg-purple-900/80 rounded-xl p-4 shadow-lg flex flex-col gap-4 mt-6">
            {casinos.map((casino) => (
              <div key={casino.name} className="flex items-center gap-4 bg-purple-800/60 rounded-lg p-3 hover:shadow-2xl transition-all">
                <Image src={casino.logo} alt={`${casino.name} logo`} width={48} height={48} className="rounded-full shadow-md bg-white/90" />
                <div className="flex-1">
                  <span className="font-bold text-white text-lg">{casino.name}</span>
                  <span className="block text-purple-200 text-sm">{casino.description}</span>
                </div>
                <a
                  href={casino.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-300 via-cyan-400 to-purple-400 text-black font-bold rounded-full px-4 py-2 text-base shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-110 hover:shadow-blue-400/60 transition-all animate-pulse hover:animate-none focus:outline-none"
                  style={{ boxShadow: '0 0 12px 2px #38bdf8, 0 0 32px 4px #a78bfa' }}
                >
                  <Image src="/icons/ltc.svg" alt="Litecoin SVG icon" width={20} height={20} />
                  Play Now
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* Step-by-Step Block */}
        <section className="mb-10 rounded-2xl border border-blue-400/30 bg-black/80 p-5 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Step-by-Step: From LTC to Blackjack</h2>
          <ol className="list-decimal ml-6 text-white/90 mb-2 space-y-1">
            <li><span className="text-blue-400">👛</span> Install a Litecoin wallet (e.g., Litewallet, Electrum-LTC, or Trust Wallet)</li>
            <li><span className="text-blue-400">💱</span> Buy LTC via exchange or ATM</li>
            <li><span className="text-blue-400">🏆</span> Pick one of our top-rated casinos</li>
            <li><span className="text-blue-400">💸</span> Deposit LTC and claim your bonus</li>
          </ol>
        </section>
        {/* Security / Is it Safe Block */}
        <section className="mb-10 rounded-2xl border border-blue-400/30 bg-black/80 p-5 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Is It Safe to Gamble with Litecoin?</h2>
          <ul className="ml-6 text-white/90 mt-2 space-y-1">
            <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Use regulated offshore casinos</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Protect your seed phrase and wallet keys</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Withdraw profits regularly</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Enable 2FA on both your wallet and casino account</li>
          </ul>
        </section>
        {/* CTA Button */}
        <div className="flex justify-center mt-10 mb-8">
          import Link from "next/link";

<Link
            href="/crypto-casino-reviews"
            className="font-bold text-lg px-7 py-3 rounded-full bg-gradient-to-r from-blue-300 via-cyan-400 to-purple-400 shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-105 hover:shadow-blue-400/60 transition-all focus:outline-none"
            style={{ boxShadow: '0 0 12px 2px #38bdf8, 0 0 32px 4px #a78bfa' }}
          >
            View All Crypto Casino Reviews
          </Link>
        </div>
      </main>
    </>
  );
}
