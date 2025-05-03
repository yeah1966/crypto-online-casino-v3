import Link from "next/link";
import Head from "next/head";
import CasinoSuggestions from "@/components/CasinoSuggestions";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";

export default function BitStarzReview() {
  return (
    <>
      <Head>
        <title>BitStarz Casino Review (2025) – Claim Bonus & Play Instantly</title>
        <meta name="description" content="Read our 2025 BitStarz review. Award-winning crypto casino with 3,500+ games, instant payouts, and top-tier support. Claim your bonus now!" />
        <meta name="robots" content="index, follow" />
        {/* Dynamische OG/Twitter meta-tags via centrale utility */}
        {(() => {
          const og = getOgMetaForCasino("bitstarz");
          return <>
            <meta property="og:title" content={og.title} />
            <meta property="og:description" content={og.description} />
            <meta property="og:image" content={og.image} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.yourdomain.com/crypto-casino-reviews/bitstarz" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={og.title} />
            <meta name="twitter:description" content={og.description} />
            <meta name="twitter:image" content={og.image} />
          </>;
        })()}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getReviewStructuredData({
                name: "BitStarz",
                reviewRating: 5.0,
                reviewCount: 1242,
                url: "https://www.yourdomain.com/crypto-casino-reviews/bitstarz",
                image: "https://www.yourdomain.com/logos/bitstarz.png",
                description: "BitStarz is an award-winning crypto casino with over 3,500 games, instant payouts, and a reputation for excellence. The gold standard for crypto gambling."
              })
            )
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Casino Reviews", href: "/crypto-casino-reviews" },
              { name: "BitStarz", href: "/crypto-casino-reviews/bitstarz" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getReviewStructuredData({
              name: "BitStarz",
              reviewRating: 5.0,
              reviewCount: 1242,
              url: "https://www.yourdomain.com/crypto-casino-reviews/bitstarz",
              image: "https://www.yourdomain.com/logos/bitstarz.png",
              description: "BitStarz is an award-winning crypto casino with over 3,500 games, instant payouts, and a reputation for excellence. The gold standard for crypto gambling."
            })
          )
        }}
      />
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-1 pb-16 px-4 text-white">
        <div className="max-w-3xl mx-auto bg-black/60 rounded-2xl shadow-2xl p-8 relative
          border-2 border-transparent
          bg-gradient-to-br from-[#241f6b]/90 via-black/70 to-pink-900/60
          before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:z-10
          before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,0,0.07)_0,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,0,200,0.09)_0,transparent_70%)]
          " style={{boxShadow: '0 0 32px 0 rgba(255, 0, 200, 0.18), 0 0 8px 0 #fff2'}}>
          {/* HEADER met logo, rating, naam, button (links) en tekst (rechts, uitgelijnd met rating) */}
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6 gap-6">
            {/* Linkerkant: logo, rating, naam, button */}
            <div className="flex flex-col items-center md:items-start gap-2 min-w-[180px] md:min-w-[220px]">
              <img src="/logos/bitstarz.png" alt="BitStarz Casino Logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-1" />
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-300 text-2xl">★★★★★</span>
                <span className="text-white/70 text-sm">5.0/5</span>
              </div>
              <Breadcrumbs
                items={[
                  { name: "Home", href: "/" },
                  { name: "Casino Reviews", href: "/crypto-casino-reviews" },
                  { name: "BitStarz", href: "/crypto-casino-reviews/bitstarz" }
                ]}
              />
              <h1 className="text-3xl font-extrabold text-yellow-300 drop-shadow mb-1 text-center md:text-left">BITSTARZ</h1>
              <a
                href="https://bs5.direct/b2b7d0ed7"
                className="inline-block mt-2 px-3 py-1.5 bg-yellow-300 text-pink-700 font-bold rounded-full text-sm shadow hover:bg-pink-600 hover:text-white transition-all border border-yellow-400 hover:border-pink-600"
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{ minWidth: 'fit-content' }}
              >
                🎲 Visit BitStarz
              </a>
            </div>
            {/* Rechterkant: tekst, uitgelijnd met rating */}
            <div className="flex-1 flex items-start justify-center">
              <div className="mt-[40px] md:mt-[40px] w-full">
                <p className="text-pink-300 text-lg font-semibold text-center md:text-left max-w-xl">
                  BitStarz is one of the top-rated crypto casinos, offering fast Bitcoin withdrawals, generous bonuses and provably fair games. New players can claim an exclusive crypto bonus when registering with BitStarz. Enjoy a trusted Bitcoin casino with fast payouts, a huge game selection, and exclusive crypto bonuses.
                </p>
              </div>
            </div>
          </div>

          <div className="my-8 bg-purple-950/80 rounded-xl p-6 shadow-lg border-2 border-yellow-400 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600 animate-pulse" />
            <h2 className="text-2xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <span className="inline-block text-yellow-300 drop-shadow-lg">★</span>
              OUR REVIEW
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              BitStarz doesn’t just shine, it dominates. From the moment you arrive, the interface and intuitive design make it instantly clear: this is no ordinary crypto casino.<br /><br />
              With over 3,500 games, BitStarz offers an enormous variety of slots, table games, and live dealers. But it’s the performance that really impresses: lightning-fast payouts, instant deposits, and a fully crypto-optimized backend make playing a true pleasure.<br /><br />
              The loyalty program rewards regular players with reload bonuses and exclusive extras, and the support team is top-notch: fast, multilingual, and available 24/7. BitStarz was also one of the first licensed crypto casinos — their reputation is rock solid.<br /><br />
              Looking for the gold standard? BitStarz delivers on every front.
            </p>
            <div className="absolute pointer-events-none select-none left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-8 bg-gradient-to-r from-yellow-400/20 via-pink-400/10 to-purple-600/20 blur-2xl opacity-70 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            {/* PROS & CONS blok */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-green-900/80 rounded-2xl p-6 shadow-lg flex flex-col items-center">
                <div className="flex items-center justify-center w-14 h-14 bg-green-700 rounded-xl mb-3">
                  <span className="text-3xl">✅</span>
                </div>
                <h2 className="text-green-300 text-xl font-bold mb-2">PROS</h2>
                <ul className="list-disc list-inside space-y-1 text-white/90 text-left w-full">
                  <li>Award-winning reputation and licensing</li>
                  <li>Over 3,500 high-quality casino games</li>
                  <li>Ultra-fast crypto withdrawals</li>
                  <li>Excellent VIP & loyalty rewards</li>
                  <li>24/7 multilingual live support</li>
                </ul>
              </div>
              <div className="flex-1 bg-pink-900/80 rounded-2xl p-6 shadow-lg flex flex-col items-center">
                <div className="flex items-center justify-center w-14 h-14 bg-pink-700 rounded-xl mb-3">
                  <span className="text-3xl">❌</span>
                </div>
                <h2 className="text-pink-300 text-xl font-bold mb-2">CONS</h2>
                <ul className="list-disc list-inside space-y-1 text-white/90 text-left w-full">
                  <li>Sportsbook is not available</li>
                  <li>High wagering requirements on some bonuses</li>
                </ul>
              </div>
            </div>

            {/* HIGHLIGHTS blok */}
            <div className="flex items-start bg-yellow-900/80 rounded-2xl p-6 shadow-lg">
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-yellow-700 rounded-xl mr-5">
                <span className="text-3xl">✨</span>
              </div>
              <div>
                <h2 className="text-yellow-300 text-xl font-bold mb-2">HIGHLIGHTS</h2>
                <ul className="list-disc list-inside space-y-1 text-white/90">
                  <li>Instant access to 3,500+ crypto-friendly games</li>
                  <li>Trusted platform with a global reputation</li>
                  <li>Play anonymously with BTC, ETH, LTC & more</li>
                  <li>Mobile-optimized for smooth gameplay</li>
                  <li>Big welcome bonus for new players</li>
                </ul>
              </div>
            </div>

            {/* CRYPTO & PAYMENT OPTIONS blok */}
            <div className="flex items-start bg-purple-900/80 rounded-2xl p-6 shadow-lg">
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-purple-700 rounded-xl mr-5">
                <span className="text-3xl">🪙</span>
              </div>
              <div>
                <h2 className="text-purple-300 text-xl font-bold mb-2">Crypto & Payment Options</h2>
                <ul className="space-y-2 text-white/90">
                  <li>
                    <span className="text-lg mr-2">🔄</span>
                    <span className="font-bold">Exchange Feature:</span> BitStarz offers a built-in crypto exchange, allowing you to swap over 500 different cryptocurrencies directly to USDT within your account. Even lesser-known or meme-coins can be converted to a supported currency for play.
                  </li>
                  <li>
                    <span className="text-lg mr-2">💳</span>
                    <span className="font-bold">Fiat to Crypto Purchase:</span> No crypto yet? Buy crypto instantly with Visa, Mastercard, Google Pay, or Apple Pay—securely via a third-party provider (short verification required).
                  </li>
                  <li>
                    <span className="text-lg mr-2">🪙</span>
                    <span className="font-bold">Accepted Cryptocurrencies:</span> Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <a
            href="https://bs5.direct/b2b7d0ed7"
            className="mt-6 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            🎲 Claim your BitStarz bonus now!
          </a>

          <p className="text-center text-xs text-gray-400 mt-4">
            18+ | Gamble responsibly. BitStarz may not be available in all jurisdictions.
          </p>

          <CasinoSuggestions />
        </div>
      </main>
    </>
  );
}
