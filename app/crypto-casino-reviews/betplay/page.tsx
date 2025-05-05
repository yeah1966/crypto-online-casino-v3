import type { Metadata } from "next";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import Head from "next/head";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("betplay");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/betplay",
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

export default function BetplayReview() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData({
              name: "Betplay",
              reviewRating: 4.5,
              reviewCount: 320,
              url: "https://www.crypto-online-casino.com/crypto-casino-reviews/betplay",
              image: "https://www.crypto-online-casino.com/logos/betplay.png",
              description: "Betplay is een top crypto casino met snelle uitbetalingen en unieke bonussen. Lees onze volledige review!"
            }))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Casino Reviews", href: "/crypto-casino-reviews" },
              { name: "Betplay", href: "/crypto-casino-reviews/betplay" }
            ], "https://www.crypto-online-casino.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Betplay", href: "/crypto-casino-reviews/betplay" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/betplay.png"
        casinoName="BETPLAY"
        rating={4.5}
        ratingStars="★★★★☆"
        affiliateUrl="https://betplay.io?ref=b417df55cd18"
        affiliateLabel="Play at Betplay"
        introText="Betplay Casino is a top-rated platform for crypto sports betting and Bitcoin games, with lightning-fast payouts and a sleek, modern interface. Whether you're into live betting or classic slots, Betplay delivers a fast, secure crypto casino experience."
        reviewText={`Betplay is the kind of casino that doesn’t scream for your attention — it earns it. From the moment you log in, everything feels clean, fast, and responsive. No clunky menus, no clutter. Just you, your crypto, and a polished interface ready to deal.<br><br>Where Betplay truly shines is in its <strong>crypto-first focus</strong>. The platform supports a wide range of coins, including BTC, LTC, ETH, and even Nano for instant transactions. Payouts are fast, fees are non-existent, and the entire payment process feels tailor-made for crypto users.<br><br>While the <strong>game selection is strong</strong>, Betplay leans toward quality over quantity. Expect top-tier providers, a slick sportsbook, and a growing live casino section. Newbies get a generous welcome offer, while loyal players can look forward to cashbacks and regular promos.<br><br>This isn’t a flashy, slot-heavy carnival. It’s a smooth, sleek experience built for crypto-savvy players who value speed, reliability, and a touch of class.`}
        pros={[
          "Lightning-fast crypto withdrawals",
          "Slick mobile-first design",
          "Strong sportsbook integration",
          "No-fee payments with Nano"
        ]}
        cons={[
          "Smaller overall game library",
          "Fewer promotions than competitors"
        ]}
        highlights={[
          "Welcome bonus for new crypto players",
          "Intuitive user interface",
          "Sports betting and live casino",
          "BTC, ETH, LTC, Nano & more"
        ]}
      >
        {/* CRYPTO & PAYMENT OPTIONS */}
        <div className="mt-8 bg-purple-900/80 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💸</span>
            <span className="text-purple-100 font-bold text-xl">CRYPTO & PAYMENT OPTIONS</span>
          </div>
          <ul className="list-disc list-inside text-purple-100 space-y-2">
            <li>
              <span className="font-bold">Crypto Accepted:</span> Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Nano, and more
            </li>
            <li>
              <span className="font-bold">Instant Withdrawals:</span> Crypto payouts processed within minutes
            </li>
            <li>
              <span className="font-bold">Nano Payments:</span> Zero-fee, instant crypto transactions with Nano
            </li>
            <li>
              <span className="font-bold">No Extra Fees:</span> Betplay does not charge additional fees for crypto transactions
            </li>
          </ul>
        </div>
        <a
          href="https://betplay.io?ref=b417df55cd18"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎯 Claim your Betplay bonus
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Gamble responsibly. Betplay may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
    </>
  );
}
