import Link from 'next/link';
import Image from 'next/image';

import { Metadata } from "next";
import { guideMeta } from "@/data/guideMeta";

export const generateMetadata = (): Metadata => {
  const meta = guideMeta["tether-casino-guide"];
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

const tetherCasinos = [
  {
    name: 'BitStarz Casino',
    logo: '/logos/bitstarz.png',
    description: 'Fast withdrawals, stablecoin support (USDT, DAI)',
    href: '#', // TODO: Fill with correct affiliate link
  },
  {
    name: 'Cloudbet',
    logo: '/logos/cloudbet.png',
    description: 'Long-established USDT sportsbook & casino',
    href: '#', // TODO: Fill with correct affiliate link
  },
  {
    name: 'Crypto Loko',
    logo: '/logos/cryptoloko.png',
    description: 'Unique vibe, fast USDT payouts, fun design',
    href: '#', // TODO: Fill with correct affiliate link
  },
  {
    name: 'WildVegas',
    logo: '/logos/wildvegas.png',
    description: 'Flashy Vegas style with Tether bonuses',
    href: '#', // TODO: Fill with correct affiliate link
  },
];

export default function TetherCasinoGuide() {
  return (
    <>
      {/* Hero Banner & Mascotte */}
      <div className="relative w-full max-w-4xl mx-auto mb-6">
        <Image
          src="/og/tether-casino-guide.png"
          alt="Tether Casino Guide Hero"
          width={1200}
          height={400}
          className="rounded-3xl w-full object-cover shadow-2xl border-4 border-green-300/40"
          priority
        />
        {/* Mascot top right, only on desktop */}
        <div className="hidden md:block absolute top-0 right-0 -mt-8 mr-[-36px] z-30">
          <Image
            src="/favicon-512.png"
            alt="Tether Mascot"
            width={82}
            height={82}
            className="drop-shadow-2xl"
          />
          {/* Tether logo in hand */}
          <div className="absolute right-1 bottom-1">
            <Image src="/icons/usdt.svg" alt="Tether SVG icon" width={26} height={26} />
          </div>
        </div>
      </div>
      {/* Breadcrumbs */}
      <nav className="text-sm text-purple-200 mb-6 mt-4 ml-2" aria-label="breadcrumb">
        <ol className="list-reset flex">
          <li><Link href="/">Home</Link> <span className="mx-2">→</span></li>
          <li><Link href="/guides">Guides</Link> <span className="mx-2">→</span></li>
          <li className="text-green-400">Tether Casinos</li>
        </ol>
      </nav>
      <main className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-green-400 mb-4 flex flex-col md:flex-row md:justify-between items-center gap-2">
          <span className="flex-1 text-center md:text-left">🪙 TETHER CASINOS – STABLE & INSTANT GAMBLING WITH USDT IN 2025</span>
          <Image src="/icons/usdt.svg" alt="Tether SVG icon" width={44} height={44} className="inline-block mx-auto md:mx-0" />
        </h1>
        <section className="mb-8">
  <h2 className="text-2xl font-bold text-green-400 mb-2 uppercase tracking-wide">Why Choose USDT for Online Gambling?</h2>
  <p className="text-white/90 mb-2">
    Tether (USDT) is a popular stablecoin pegged to the US dollar, offering players the benefits of crypto — fast transactions and privacy — without the price volatility. That makes it ideal for casino players who value predictability and fast withdrawals.
  </p>
  {/* ETH-style advantages list */}
  <ul className="mb-4 ml-1 md:ml-4 space-y-1">
    <li className="flex items-center gap-2 text-white/90"><span className="text-green-400 text-lg">⚡️</span> <span className="font-semibold">Fast and cheap transactions</span></li>
    <li className="flex items-center gap-2 text-white/90"><span className="text-green-400 text-lg">🔒</span> <span className="font-semibold">Enhanced privacy compared to fiat</span></li>
    <li className="flex items-center gap-2 text-white/90"><span className="text-green-400 text-lg">💳</span> <span className="font-semibold">Easy access via most crypto wallets</span></li>
    <li className="flex items-center gap-2 text-white/90"><span className="text-green-400 text-lg">🎰</span> <span className="font-semibold">Support from top-tier crypto casinos</span></li>
  </ul>
</section>
{/* Benefits of USDT Gambling */}
<section className="mb-8 rounded-2xl border border-green-400/30 bg-black/80 p-5 shadow-lg">
  <h2 className="text-xl font-bold text-green-400 mb-4 uppercase tracking-wide">Benefits of USDT Gambling</h2>
  <ul className="list-disc ml-6 text-white/90 space-y-1">
    <li className="flex items-center gap-2"><span className="text-green-400">🪙</span> Stable value – no price swings like Bitcoin or Ethereum</li>
    <li className="flex items-center gap-2"><span className="text-green-400">⚡</span> Fast and cheap transactions – near-instant deposits and withdrawals</li>
    <li className="flex items-center gap-2"><span className="text-green-400">🌍</span> Broad acceptance – many top crypto casinos support USDT</li>
    <li className="flex items-center gap-2"><span className="text-green-400">🔐</span> Private and secure – crypto-level anonymity with dollar stability</li>
  </ul>
</section>
        <section id="casino-list" className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-green-400">Top Tether Casinos to Try in 2025</h2>
          <div className="bg-purple-900/80 rounded-xl p-4 shadow-lg flex flex-col gap-4 mt-6">
            {tetherCasinos.map((casino) => (
              <div key={casino.name} className="flex items-center gap-4 bg-purple-800/60 rounded-lg p-3 hover:shadow-2xl transition-all">
                <Image src={casino.logo} alt={`${casino.name} logo`} width={48} height={48} className="rounded-full shadow-md bg-white/90" />
                <div className="flex-1">
                  <span className="font-bold text-white text-lg">{casino.name}</span>
                  <span className="block text-purple-200 text-sm">{casino.description}</span>
                </div>
                <Link
                  href={casino.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-green-300 via-green-400 to-green-500 text-black font-bold rounded-full px-4 py-2 text-base shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-110 hover:shadow-green-400/60 transition-all animate-pulse hover:animate-none focus:outline-none"
                  style={{ boxShadow: '0 0 12px 2px #6ee7b7, 0 0 32px 4px #10b981' }}
                >
                  <Image src="/icons/usdt.svg" alt="Tether SVG icon" width={20} height={20} />
                  Play Now
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-10 rounded-2xl border border-green-400/30 bg-black/80 p-5 shadow-lg">
  <h2 className="text-xl font-bold text-green-400 mb-4 uppercase tracking-wide">Step-by-Step: From USDT to Winnings</h2>
  <ol className="list-decimal ml-6 text-white/90 mb-2 space-y-1">
    <li><span className="text-green-400">👛</span> Get a USDT wallet (like Trust Wallet, Binance, or Ledger)</li>
    <li><span className="text-green-400">💱</span> Buy USDT via exchange or P2P</li>
    <li><span className="text-green-400">🏆</span> Choose a trusted USDT casino from our list</li>
    <li><span className="text-green-400">💸</span> Deposit your USDT, play, and withdraw your winnings</li>
    <li><span className="text-green-400">🎲</span> Enjoy stable crypto gaming without price shocks</li>
  </ol>
</section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Is It Safe to Use USDT at Casinos?</h2>
          <ul className="list-disc ml-6 text-white/90 mb-2">
            <li>✅ Only deposit what you can afford to play with</li>
            <li>✅ Use 2FA and strong passwords</li>
            <li>✅ Withdraw your winnings regularly</li>
            <li>✅ Check casino terms (some may convert USDT to BTC internally)</li>
          </ul>
        </section>
        <div className="flex justify-center mt-10 mb-8">
  <Link
    href="/crypto-casino-reviews"
    className="font-bold text-lg px-7 py-3 rounded-full bg-gradient-to-r from-green-300 via-green-400 to-green-500 shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-105 hover:shadow-green-400/60 transition-all focus:outline-none"
    style={{ boxShadow: '0 0 12px 2px #6ee7b7, 0 0 32px 4px #10b981' }}
  >
    View All Crypto Casino Reviews
  </Link>
</div>
{/* Internal links to other guides */}
<div className="mb-12 mt-6 flex flex-col md:flex-row gap-3 justify-center items-center">
  <span className="text-white/80 font-semibold">See also:</span>
  <Link href="/guides/bitcoin-casinos" className="text-yellow-300 hover:underline font-bold">Bitcoin Casinos</Link>
  <Link href="/guides/best-ethereum-casinos" className="text-purple-300 hover:underline font-bold">Ethereum Casinos</Link>
  <Link href="/guides/best-litecoin-casinos" className="text-blue-300 hover:underline font-bold">Litecoin Casinos</Link>
</div>
      </main>
    </>
  );
}
