import Link from "next/link";
import CasinoSuggestions from "@/components/CasinoSuggestions";
import Breadcrumbs from "@/components/Breadcrumbs";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("rakoocasino");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/rakoocasino",
      images: [{ url: og.image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: og.title,
      description: og.description,
      images: [og.image],
    },
    robots: "index, follow",
  };
};

export default function RakoocasinoReview() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      {/* SEO structured data: Review */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getReviewStructuredData({
              name: "Rakoocasino",
              reviewRating: 4.7,
              reviewCount: 0,
              url: "https://www.crypto-online-casino.com/crypto-casino-reviews/rakoocasino",
              image: "https://www.crypto-online-casino.com/logos/rakoocasino.png",
              description: "Rakoocasino is a fast-rising crypto casino with a colorful design, big bonuses, and direct crypto payouts. Read our full review!"
            })
          )
        }}
      />
      {/* SEO structured data: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbListStructuredData([
            { name: "Home", href: "/" },
            { name: "Casino Reviews", href: "/crypto-casino-reviews" },
            { name: "Rakoocasino", href: "/crypto-casino-reviews/rakoocasino" }
          ], "https://www.crypto-online-casino.com"))
        }}
      />
      {/* SEO structured data: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Rakoocasino trustworthy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Rakoocasino is a new but reliable crypto casino with fast payouts, a valid license, and a helpful support team."
                }
              },
              {
                "@type": "Question",
                "name": "Which cryptocurrencies are accepted at Rakoocasino?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can deposit and withdraw using Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Tether (USDT), and Ripple (XRP)."
                }
              },
              {
                "@type": "Question",
                "name": "What is the welcome bonus at Rakoocasino?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "New players receive an attractive welcome bonus. Check the site for the latest offer."
                }
              }
            ]
          })
        }}
      />
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-1 pb-16 px-4 text-white">
        <div className="max-w-3xl mx-auto bg-black/60 rounded-2xl shadow-2xl p-8 mt-8">
          {/* HEADER met logo, rating, naam, button (links) en tekst (rechts, uitgelijnd met rating) */}
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6 gap-6">
            {/* Linkerkant: logo, rating, naam, button */}
            <div className="flex flex-col items-center md:items-start gap-2 min-w-[180px] md:min-w-[220px]">
              <img src="/logos/rakoocasino.png" alt="Rakoocasino Logo" width={96} height={96} className="rounded-xl bg-white shadow-lg mb-1" />
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-300 text-2xl">★★★★½</span>
                <span className="text-white/70 text-sm">4.7/5</span>
              </div>
              <Breadcrumbs
                items={[
                  { name: "Home", href: "/" },
                  { name: "Casino Reviews", href: "/crypto-casino-reviews" },
                  { name: "Rakoocasino", href: "/crypto-casino-reviews/rakoocasino" }
                ]}
              />
              <h1 className="text-3xl font-extrabold text-yellow-300 drop-shadow mb-1 text-center md:text-left">RAKOOCASINO</h1>
              <a
                href="https://rakoolink.com/ha03e587d"
                className="inline-block mt-2 px-3 py-1.5 bg-yellow-300 text-purple-900 font-bold rounded-full text-sm shadow hover:bg-purple-800 hover:text-yellow-300 transition-all border border-yellow-400 hover:border-purple-800"
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{ minWidth: 'fit-content' }}
              >
                🎲 Claim your Rakoocasino bonus now!
              </a>
            </div>
            {/* Rechterkant: tekst, uitgelijnd met rating */}
            <div className="flex-1 flex items-start justify-center">
              <div className="mt-[40px] md:mt-[40px] w-full">
                <p className="text-purple-200 text-lg font-semibold text-center md:text-left max-w-xl">
                  Rakoocasino is a brand-new crypto casino quickly gaining popularity among players worldwide. In this review, you'll discover everything about bonuses, games, payments, and trustworthiness — and why more and more crypto gamers are choosing Rakoocasino.
                </p>
              </div>
            </div>
          </div>
          {/* OUR REVIEW */}
          <div className="my-8 bg-purple-950/80 rounded-xl p-6 shadow-lg border-2 border-yellow-400 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-purple-600 animate-pulse" />
            <h2 className="text-2xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <span className="inline-block text-yellow-300 drop-shadow-lg">★</span>
              OUR REVIEW
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Rakoocasino focuses on speed, style, and crypto-friendly features. With a colorful design, generous bonuses, and instant crypto payouts, this casino offers everything modern players want. From classic slots to live dealers – Rakoocasino blends the best of Vegas with the power of Web3. The support team is fast and helpful, and new players get an attractive welcome bonus.<br /><br />
              Looking for a fresh crypto casino experience? Rakoocasino might just be your next favorite.
            </p>
            <div className="absolute pointer-events-none select-none left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-8 bg-gradient-to-r from-yellow-400/20 via-purple-400/10 to-purple-600/20 blur-2xl opacity-70 animate-pulse" />
          </div>
          {/* PROS & CONS */}
          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-green-900/80 rounded-2xl p-6 shadow-lg flex flex-col items-center">
                <div className="flex items-center justify-center w-14 h-14 bg-green-700 rounded-xl mb-3">
                  <span className="text-3xl">✅</span>
                </div>
                <h2 className="text-green-300 text-xl font-bold mb-2">PROS</h2>
                <ul className="list-disc list-inside space-y-1 text-white/90 text-left w-full">
                  <li>Fast crypto payouts</li>
                  <li>Unique interface and colorful design</li>
                  <li>Great welcome bonus</li>
                  <li>Diverse game selection</li>
                  <li>24/7 live support</li>
                </ul>
              </div>
              <div className="flex-1 bg-pink-900/80 rounded-2xl p-6 shadow-lg flex flex-col items-center">
                <div className="flex items-center justify-center w-14 h-14 bg-pink-700 rounded-xl mb-3">
                  <span className="text-3xl">❌</span>
                </div>
                <h2 className="text-pink-300 text-xl font-bold mb-2">CONS</h2>
                <ul className="list-disc list-inside space-y-1 text-white/90 text-left w-full">
                  <li>Still relatively unknown</li>
                  <li>Limited community reviews</li>
                </ul>
              </div>
            </div>
          </div>
          {/* HIGHLIGHTS */}
          <div className="mt-8 bg-orange-900/90 rounded-2xl p-6 shadow-lg">
            <h2 className="text-yellow-300 text-xl font-bold mb-2 flex items-center gap-2">
              <span className="inline-block">✨</span>
              HIGHLIGHTS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              <li>Instant deposits with Bitcoin, Ethereum, Litecoin</li>
              <li>Daily bonuses & promotions</li>
              <li>Live casino & crypto jackpots</li>
              <li>Multilingual support team</li>
              <li>Mobile-optimized for smooth gameplay</li>
              <li>Big welcome bonus for new players</li>
            </ul>
          </div>
          {/* CRYPTO & PAYMENT OPTIONS */}
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-2xl bg-purple-800 rounded-2xl p-6 shadow-lg text-white">
              <h2 className="text-xl font-bold mb-4 uppercase">CRYPTO & PAYMENT OPTIONS</h2>
              <ul className="space-y-2">
                <li><strong>Accepted Cryptocurrencies:</strong> BTC, ETH, LTC, USDT, XRP</li>
                <li><strong>Payouts:</strong> Typically processed within 10 minutes</li>
                <li><strong>Exchange:</strong> Built-in crypto exchange</li>
                <li><strong>Fees:</strong> No extra fees for crypto transactions</li>
              </ul>
            </div>
          </div>
          {/* FAQ Section */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-2xl bg-purple-900/80 rounded-2xl p-6 shadow-lg">
              <h2 className="text-yellow-300 text-xl font-bold mb-2 text-center uppercase">Frequently Asked Questions about Rakoocasino</h2>
              <ul className="space-y-2 text-white/90">
                <li><strong>Is Rakoocasino trustworthy?</strong> Yes, Rakoocasino is a new but reliable crypto casino with fast payouts, a valid license, and a helpful support team.</li>
                <li><strong>Which cryptocurrencies are accepted at Rakoocasino?</strong> You can deposit and withdraw using Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Tether (USDT), and Ripple (XRP).</li>
                <li><strong>What is the welcome bonus at Rakoocasino?</strong> New players receive an attractive welcome bonus. Check the site for the latest offer.</li>
              </ul>
            </div>
          </div>
          {/* CTA Button */}
          <div className="my-8 flex justify-center">
            <a
              href="https://rakoolink.com/ha03e587d"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block w-full max-w-2xl text-center bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-4 px-8 text-lg rounded-xl shadow-lg transition-all"
              style={{ minWidth: 'fit-content' }}
            >
              🎲 Claim your Rakoocasino bonus now!
            </a>
          </div>
          {/* Casino Suggestions */}
          <CasinoSuggestions />
          {/* Responsible Gambling Disclaimer */}
          <div className="mt-10 text-center text-xs text-white/60">
            18+ | Gamble responsibly. Rakoocasino may not be available in all jurisdictions.
          </div>
          {/* Last updated */}
          <div className="mt-4 text-center text-xs text-white/60">
            Last updated: May 2025
          </div>
        </div>
      </main>
    </>
  );
}
