import Head from "next/head";
import { getReviewStructuredData } from "@/lib/structuredData";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("1xbet");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/sports/bookmakers/1xbet",
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

export default function OneXBetReview() {
  return (
    <>
      <Head>
        <title>1xBet Casino Review (2025) – Internationale sportsbook & crypto</title>
        <meta name="description" content="Lees onze 2025 1xBet review. Alles over het brede sportsbook, crypto-ondersteuning, mobiele ervaring en belangrijke aandachtspunten." />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "1xBet", href: "/sports/bookmakers/1xbet" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/1xbet.png"
        casinoName="1xBet"
        rating={3.5}
        ratingStars="★★★½"
        affiliateUrl="https://1xbet.com/"
        affiliateLabel="Visit 1xBet"
        introText="1xBet is one of the largest international sportsbooks, offering over 25 sports, eSports, and casino games. Known for fast payouts, crypto support, and a robust mobile app, but also for regulatory controversies. Read our full review for the complete picture."
        reviewText={`1xBet stands out with its massive sportsbook, competitive odds, and a user-friendly mobile experience. The platform covers everything from football and tennis to eSports and niche markets, making it a go-to for many international bettors.<br><br>Crypto users benefit from fast deposits and withdrawals, with support for Bitcoin and other major cryptocurrencies. The app is feature-rich, offering live streaming, push notifications, and in-play betting.<br><br>However, 1xBet's reputation is mixed. While payouts are usually fast, some users report delays or issues with withdrawals. The brand has faced regulatory bans in several countries due to controversial business practices. Always check your local laws before signing up.<br><br>For experienced players who value variety and speed, 1xBet is a strong option—but proceed with caution and be aware of the risks involved.`}
        pros={[
          "Huge selection: 25+ sports, eSports, and casino games",
          "Competitive odds and live betting",
          "Fast payouts (crypto supported)",
          "Mobile app with live streaming"
        ]}
        cons={[
          "Regulatory controversies and country bans",
          "Some user complaints about withdrawal delays",
          "Licensed in Curacao (less strict oversight)"
        ]}
        highlights={[
          "Active in 50+ countries",
          "Partners with top football clubs",
          "Crypto and local payment support",
          "Exclusive bonuses for new players"
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
              <span className="font-bold">Multiple cryptocurrencies:</span> 1xBet supports Bitcoin, Ethereum, Litecoin, Dogecoin, and more for deposits and withdrawals.
            </li>
            <li>
              <span className="font-bold">Fast payouts:</span> Most crypto withdrawals are processed within 48 hours.
            </li>
            <li>
              <span className="font-bold">Local payment options:</span> In addition to crypto, 1xBet offers a wide range of local and international payment methods.
            </li>
          </ul>
        </div>
        <a
          href="https://1xbet.com/"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎯 Visit 1xBet now!
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Gamble responsibly. 1xBet may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getReviewStructuredData({
            name: "1xBet",
            reviewRating: 3.5,
            reviewCount: 320,
            url: "https://www.crypto-online-casino.com/sports/bookmakers/1xbet",
            image: "https://www.crypto-online-casino.com/logos/1xbet.png",
            description: "1xBet is een internationaal sportsbook met een enorm spelaanbod, snelle uitbetalingen en crypto-ondersteuning. Lees onze volledige review, inclusief belangrijke aandachtspunten!"
          }))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbListStructuredData([
            { name: "Home", href: "/" },
            { name: "Casino Reviews", href: "/crypto-casino-reviews" },
            { name: "1xBet", href: "/sports/bookmakers/1xbet" }
          ], "https://www.crypto-online-casino.com"))
        }}
      />
    </>
  );
}
