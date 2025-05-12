import Link from 'next/link';
import Image from 'next/image';

import { Metadata } from "next";
import { guideMeta } from "@/data/guideMeta";

export const generateMetadata = (): Metadata => {
  const meta = guideMeta["bitcoin-casinos"];
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
    description: '⚡ Legendary BTC support and payouts',
    href: 'https://b1t5t4rz.com/b2b7d0ed7',
  },
  {
    name: 'Cloudbet',
    logo: '/logos/cloudbet.png',
    description: '🎯 Trusted sportsbook and casino for BTC',
    href: 'https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo',
  },
  {
    name: '7Bit Casino',
    logo: '/logos/7bit.png',
    description: '🎰 Retro-themed crypto casino with strong BTC support',
    href: 'https://www.7bitcasino.com/a/b8c1d2e3f4',
  },
  {
    name: 'Crypto Loko',
    logo: '/logos/cryptoloko.png',
    description: '🔥 BTC-friendly, mobile-optimized, and fun',
    href: 'https://cryptolokolink.com/click/77/441/6060/1',
  },
  {
    name: 'WildVegas Casino',
    logo: '/logos/wildvegas.png',
    description: '💥 Flashy UI with smooth BTC deposits',
    href: 'https://www.wildvegaslinks.com/click/11/4315/15512/1',
  },
];

const stepIcons = [
  '👛', // Wallet
  '💱', // Exchange
  '🏆', // Choose casino
  '💸', // Deposit
  '🎲', // Play
];

export default function BestBitcoinCasinos() {
  return (
    <>
      {/* Hero Banner & Mascotte */}
      <div className="relative w-full max-w-4xl mx-auto mb-6">
        <Image
          src="/og/bitcoin-casino-guide.png"
          alt="Bitcoin Casino Guide Hero"
          width={1200}
          height={400}
          className="rounded-3xl w-full object-cover shadow-2xl border-4 border-yellow-300/40"
          priority
        />
        {/* Mascotte rechtsboven, alleen op desktop */}
        <div className="hidden md:block absolute top-0 right-0 -mt-10 mr-[-70px] z-20 group">
          <Image
            src="/favicon-512.png"
            alt="Crypto Casino Mascot with Bitcoin logo"
            width={120}
            height={120}
            className="drop-shadow-xl group-hover:animate-bounce transition-transform duration-300"
          />
          {/* Bitcoin logo in hand */}
          <div className="absolute right-2 bottom-2">
            <Image src="/icons/btc.svg" alt="Bitcoin SVG icon" width={32} height={32} />
          </div>
        </div>
      </div>
      {/* Breadcrumbs */}
      <nav className="text-sm text-purple-200 mb-6 mt-4 ml-2">
        <ol className="list-reset flex">
          <li><Link href="/">Home</Link> <span className="mx-2">→</span></li>
          <li><Link href="/guides">Guides</Link> <span className="mx-2">→</span></li>
          <li className="text-yellow-400">Best Bitcoin Casinos</li>
        </ol>
      </nav>
      <main className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4 flex flex-col md:flex-row md:justify-between items-center gap-2">
          <span className="flex-1 text-center md:text-left">Best Bitcoin Casinos – Play with BTC in 2025</span>
          <Image src="/icons/btc.svg" alt="Bitcoin SVG icon" width={44} height={44} className="inline-block mx-auto md:mx-0" />
        </h1>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Why Bitcoin Casinos Are Still King</h2>
        <p className="text-white/90 mb-2">
          Bitcoin remains the most widely used cryptocurrency in online gambling. It's fast, borderless, and doesn't rely on banks or third parties. That’s why many top casinos continue to support and promote BTC payments.
        </p>
        <ul className="ml-6 text-white/90 mt-2 space-y-1">
          <li className="flex items-center gap-2"><span className="text-yellow-400">⚡️</span> Instant deposits and fast withdrawals</li>
          <li className="flex items-center gap-2"><span className="text-yellow-400">🌍</span> Global access with no banking restrictions</li>
          <li className="flex items-center gap-2"><span className="text-yellow-400">🔐</span> Anonymous gambling with private wallets</li>
          <li className="flex items-center gap-2"><span className="text-yellow-400">🎁</span> Unique BTC-only casino bonuses</li>
          <li className="flex items-center gap-2"><span className="text-yellow-400">🧠</span> Proven track record since 2009</li>
        </ul>
        <p className="text-white/70 mt-2">
          This guide covers the top Bitcoin casino sites for 2025, why they matter, and how to get started today.
        </p>
      </section>
      <section id="btc-benefits" className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2 mb-12">
        <h2 className="text-2xl font-bold mb-2 text-yellow-500">Benefits of BTC Gambling</h2>
        <ul className="ml-6 text-white/90 mt-2 space-y-1">
          <li className="flex items-center gap-2"><span className="text-yellow-400">🪙</span> Zero bank involvement – just pure crypto play</li>
          <li className="flex items-center gap-2"><span className="text-yellow-400">🚀</span> Faster confirmation times than traditional wires</li>
          <li className="flex items-center gap-2"><span className="text-yellow-400">🔐</span> Ideal for anonymous or offshore play</li>
          <li className="flex items-center gap-2"><span className="text-yellow-400">🎯</span> Most tested and supported coin in iGaming</li>
        </ul>
      </section>
      <section id="casino-list" className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold mb-2 text-yellow-500">Top Bitcoin Casinos to Try in 2025</h2>
        <div className="bg-purple-900/80 rounded-xl p-4 shadow-lg flex flex-col gap-4 mt-6">
          {casinos.map((casino, i) => (
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
                className="flex items-center gap-2 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 text-black font-bold rounded-full px-4 py-2 text-base shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-110 hover:shadow-yellow-400/60 transition-all animate-pulse hover:animate-none focus:outline-none"
                style={{ boxShadow: '0 0 12px 2px #facc15, 0 0 32px 4px #ec4899' }}
              >
                <Image src="/icons/btc.svg" alt="Bitcoin SVG icon" width={20} height={20} />
                Play Now
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10 rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Step-by-Step: From BTC to Blackjack</h2>
        <ol className="list-decimal ml-6 text-white/90 mb-2 space-y-1">
          <li>
            <span className="text-yellow-400">{stepIcons[0]}</span> Install a crypto wallet (e.g., BlueWallet, Electrum, or Trust Wallet)
          </li>
          <li>
            <span className="text-yellow-400">{stepIcons[1]}</span> Buy BTC via exchange or ATM
          </li>
          <li>
            <span className="text-yellow-400">{stepIcons[2]}</span> Pick one of our top-rated casinos
          </li>
          <li>
            <span className="text-yellow-400">{stepIcons[3]}</span> Deposit BTC and claim your bonus
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Is It Safe to Gamble with Bitcoin?</h2>
        <ul className="list-disc ml-6 text-white/90 mb-2">
          <li>✅ Use regulated offshore casinos</li>
          <li>✅ Protect your seed phrase and wallet keys</li>
          <li>✅ Withdraw profits regularly</li>
          <li>✅ Enable 2FA on both your wallet and casino account</li>
        </ul>
      </section>
      <div className="flex justify-center mt-10 mb-8">
        <a
          href="/crypto-casino-reviews"
          className="font-bold text-lg px-7 py-3 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-105 hover:shadow-yellow-400/60 transition-all focus:outline-none"
          style={{ boxShadow: '0 0 12px 2px #facc15, 0 0 32px 4px #ec4899' }}
        >
          View All Crypto Casino Reviews
        </a>
      </div>
      </main>
    </>
  );
}
