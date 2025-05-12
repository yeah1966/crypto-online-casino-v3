import Link from 'next/link';
import Image from 'next/image';

import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "$DOG Casino Guide | Why Dog Memecoin Casinos Should Exist",
  description: "Discover why $DOG (the Bitcoin memecoin) deserves its own crypto casinos. Meme power, no VCs, pure community. The ultimate $DOG gambling guide.",
  openGraph: {
    title: "$DOG Casino Guide | Why Dog Memecoin Casinos Should Exist",
    description: "Discover why $DOG (the Bitcoin memecoin) deserves its own crypto casinos. Meme power, no VCs, pure community. The ultimate $DOG gambling guide.",
    url: "https://crypto-online-casino.com/guides/dog-casino-guide",
    images: [
      {
        url: "https://crypto-online-casino.com/og/dog-casino-guide.png",
        width: 1200,
        height: 630,
        alt: "$DOG Casino Guide OG Image",
      },
    ],
    type: "article",
    siteName: "Crypto Online Casino",
  },
  twitter: {
    card: "summary_large_image",
    title: "$DOG Casino Guide | Why Dog Memecoin Casinos Should Exist",
    description: "Discover why $DOG (the Bitcoin memecoin) deserves its own crypto casinos. Meme power, no VCs, pure community. The ultimate $DOG gambling guide.",
    images: ["https://crypto-online-casino.com/og/dog-casino-guide.png"],
    creator: "@CryptoCasinoSite",
  },
  alternates: {
    canonical: "https://crypto-online-casino.com/guides/dog-casino-guide",
  },
  keywords: ["dog casino", "$DOG casino", "bitcoin memecoin casino", "crypto gambling guide", "dog memecoin", "$DOG guide"],
});

export default function DogCasinoGuide() {
  return (
    <>

      {/* Hero Banner & Mascotte */}
      <div className="relative w-full max-w-4xl mx-auto mb-6">
        <Image
          src="/og/dog-casino-guide.png"
          alt="$DOG Casino Guide Hero"
          width={1200}
          height={400}
          className="rounded-3xl w-full object-cover shadow-2xl border-4 border-yellow-300/40"
          priority
        />
        {/* Mascot top right, only on desktop */}
        <div className="hidden md:block absolute top-0 right-0 -mt-8 mr-[-36px] z-30">
          <Image
            src="/favicon-512.png"
            alt="$DOG Mascot"
            width={82}
            height={82}
            className="drop-shadow-2xl"
          />
          {/* $DOG logo in hand (fallback to doge icon if no dog.svg) */}
          <div className="absolute right-1 bottom-1">
            <Image src="/icons/dog.png" alt="$DOG PNG icon" width={26} height={26} />
          </div>
        </div>
      </div>
      {/* $DOG Info Block */}
      <section className="mb-6 max-w-2xl mx-auto rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-3xl">🐕</span>
          <span className="text-xl font-bold text-yellow-400">What is $DOG (DOG•GO•TO•THE•MOON)?</span>
        </div>
        <ul className="list-disc ml-7 text-white/90 space-y-1">
          <li><b>A Rune</b> on Bitcoin</li>
          <li>Launched on <b>April 20, 2024</b> during the Bitcoin halving</li>
          <li><b>Rune ID:</b> #3 on Magic Eden</li>
          <li>Part of the new <b>Runes protocol</b> by Casey Rodarmor</li>
          <li>Store and trade with wallets like <b>Xverse</b>, <b>Leather</b> (and soon Hiro with Runes support)</li>
        </ul>
      </section>
      {/* Breadcrumbs */}
      <nav className="text-sm text-yellow-200 mb-6 mt-4 ml-2" aria-label="breadcrumb">
        <ol className="list-reset flex">
          <li><Link href="/">Home</Link> <span className="mx-2">→</span></li>
          <li><Link href="/guides">Guides</Link> <span className="mx-2">→</span></li>
          <li className="text-yellow-400">$DOG Casinos</li>
        </ol>
      </nav>
      <main className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4 flex flex-col md:flex-row md:justify-between items-center gap-2">
          <span className="flex-1 text-center md:text-left">🐶 BEST $DOG CASINOS – WAIT… THEY DON’T EXIST (YET)</span>
          <Image src="/icons/dog.png" alt="$DOG PNG icon" width={44} height={44} className="inline-block mx-auto md:mx-0" />
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2 uppercase tracking-wide">Why $DOG Casinos Should Exist</h2>
          <p className="text-white/90 mb-2">
            $DOG isn’t your average memecoin — it’s the only one born on Bitcoin. No VCs. No presale. Just pure community vibes, a barking mission, and laser eyes on mass adoption. So… where are the $DOG casinos?
          </p>
          <ul className="mb-4 ml-1 md:ml-4 space-y-1">
            <li className="flex items-center gap-2 text-white/90"><span className="text-yellow-400 text-lg">🎲</span> <span className="font-semibold">Spoiler: Nowhere. But we’re manifesting them into existence.</span></li>
          </ul>
        </section>
        {/* Why $DOG Belongs in Casinos */}
        <section className="mb-8 rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 uppercase tracking-wide">Why $DOG Belongs in Online Casinos</h2>
          <ul className="list-disc ml-6 text-white/90 space-y-1">
            <li className="flex items-center gap-2"><span className="text-yellow-400">💥</span> Battle-tested meme power: This coin survived the memecoin wars of 2024.</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">💸</span> Low supply, high conviction: 2.1B supply — all in the wild.</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">🚫</span> No centralized control: No dev wallet. No presale rug.</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">🧠</span> Bitcoin-backed: Powered by the most secure blockchain on Earth.</li>
          </ul>
          <p className="text-white/80 mt-2">If DOGE can be in a casino, $DOG should run the whole damn floor.</p>
        </section>
        {/* $DOG-supported Casinos (none yet) */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2 uppercase tracking-wide">$DOG-Supported Casinos in 2025</h2>
          <p className="text-white/80 mb-2">(None yet. Sad noises.)<br/>But imagine these future legends:</p>
          <ul className="mb-4 ml-1 md:ml-4 space-y-2">
            <li className="flex items-center gap-2 text-white/90"><span className="text-yellow-400 text-lg">🐶</span> <span className="font-semibold">BitDOGz Casino</span><span className="text-white/70">– Fast payouts in $DOG, slots with barking bonus rounds.</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-yellow-400 text-lg">☁️</span> <span className="font-semibold">Cloudbark</span><span className="text-white/70">– A sportsbook where even your bets howl at the moon.</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-yellow-400 text-lg">🎮</span> <span className="font-semibold">7Bit Woof</span><span className="text-white/70">– Retro DOG games with pixel puppies and real $DOG jackpots.</span></li>
          </ul>
          <p className="text-white/80">We’re ready when you are, devs.</p>
        </section>
        {/* Step-by-step block */}
        <section className="mb-10 rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-4 uppercase tracking-wide">How to Prepare for the $DOG Casino Takeover</h2>
          <ol className="list-decimal ml-6 text-white/90 mb-2 space-y-1">
            <li><span className="text-yellow-400">🦴</span> Get a wallet: $DOG is a Rune — use Xverse or Leather.</li>
            <li><span className="text-yellow-400">🐕</span> Stack $DOG: Buy it on OKX or track it via DEX tools.</li>
            <li><span className="text-yellow-400">🎯</span> Spread the meme: Tag your favorite casinos and ask: “wen $DOG?”</li>
          </ol>
        </section>
        {/* Safety block */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Is $DOG Safe to Use (Someday)?</h2>
          <ul className="list-disc ml-6 text-white/90 mb-2">
            <li>✅ Hold in a non-custodial wallet</li>
            <li>✅ Avoid scams (no presale = no BS)</li>
            <li>✅ Join the $DOG community on X (they’re howling daily)</li>
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
          <Link href="/guides/binance-casino-guide" className="text-yellow-400 hover:underline font-bold">Binance Casinos</Link>
          <Link href="/guides/usdc-casino-guide" className="text-purple-400 hover:underline font-bold">USDC Casinos</Link>
          <Link href="/guides/dogecoin-casino-guide" className="text-orange-400 hover:underline font-bold">Dogecoin Casinos</Link>
        </div>
      </main>
    </>
  );
}
