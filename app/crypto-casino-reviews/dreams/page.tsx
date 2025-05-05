import type { Metadata } from "next";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import Head from "next/head";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("dreams");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/dreams",
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

export default function DreamsReview() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData({
              name: "Dreams Casino",
              reviewRating: 4.1,
              reviewCount: 0,
              url: "https://www.crypto-online-casino.com/crypto-casino-reviews/dreams",
              image: "https://www.crypto-online-casino.com/logos/dreamscasino.png",
              description: "Dreams Casino offers a wide range of crypto slots and table games, combined with generous bonuses and fast payouts for Bitcoin users."
            }))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Casino Reviews", href: "/crypto-casino-reviews" },
              { name: "Dreams Casino", href: "/crypto-casino-reviews/dreams" }
            ], "https://www.crypto-online-casino.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Dreams Casino", href: "/crypto-casino-reviews/dreams" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/dreamscasino.png"
        casinoName="DREAMS CASINO"
        rating={4.1}
        ratingStars="★★★★☆"
        affiliateUrl="https://www.dreamslinks.com/click/64/305/15512/1"
        affiliateLabel="Play at Dreams Casino"
        introText="Dreams Casino offers a wide range of crypto slots and table games, combined with generous bonuses and fast payouts for Bitcoin users. Whether you're chasing jackpots or just looking for a safe crypto gambling site, Dreams Casino delivers a smooth and rewarding experience."
        reviewText={`Dreams Casino brings the old-school Vegas charm with a new-age crypto twist. The site leans heavily into the classic "gold and velvet" aesthetic, with a straightforward interface that focuses on games, bonuses, and fast action.<br><br>Players will find a <strong>large catalog of slot games</strong>, video poker, and classic table games — all optimized for smooth crypto deposits and withdrawals. While the layout may feel dated to some, the bonus system makes up for it: regular reloads, free chips, and high-percentage welcome offers are common.<br><br>Dreams Casino is great for players who love <strong>generous bonuses</strong> and don’t mind a more traditional interface. The platform accepts BTC and a few other crypto options, and cashouts are usually processed within 24 hours.<br><br>It’s not the most modern platform out there — but it’s trustworthy, crypto-friendly, and generous with bonuses. Sometimes, that’s all you need.`}
        pros={[
          "Big welcome bonuses & reload offers",
          "Crypto-friendly (BTC accepted)",
          "Large collection of slots & table games",
          "Good customer service"
        ]}
        cons={[
          "Dated design and interface",
          "Limited live casino options"
        ]}
        highlights={[
          "Trusted for over a decade",
          "Mobile-ready interface",
          "Bonus codes regularly available",
          "BTC deposits & withdrawals"
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
              <span className="font-bold">Crypto Accepted:</span> Bitcoin (BTC) and select altcoins
            </li>
            <li>
              <span className="font-bold">Fast Withdrawals:</span> Crypto cashouts typically processed within 24 hours
            </li>
            <li>
              <span className="font-bold">No Extra Fees:</span> Dreams Casino does not charge additional fees for crypto transactions
            </li>
          </ul>
        </div>
        <a
          href="https://www.dreamslinks.com/click/64/305/15512/1"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎯 Claim your Dreams Casino bonus
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Gamble responsibly. Dreams Casino may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
    </>
  );
}
