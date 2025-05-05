import Head from "next/head";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import Breadcrumbs from "@/components/Breadcrumbs";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("goldenbilly");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/goldenbilly",
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

export default function GoldenBillyReview() {
  return (
    <>
      <Head>
        <title>Golden Billy Casino Review (2025) – Crypto Bonuses & Games</title>
        <meta name="description" content="Read our 2025 Golden Billy review. All about crypto bonuses, games, and unique features at this new crypto casino." />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Golden Billy Casino", href: "/crypto-casino-reviews/goldenbilly" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/goldenbilly.png"
        casinoName="GOLDEN BILLY"
        rating={4.0}
        ratingStars="★★★★☆"
        affiliateUrl="https://goldenbillylink.com/h62218aaa"
        affiliateLabel="Play at Golden Billy"
        introText="Golden Billy is a brand-new crypto casino with a colorful theme, generous bonuses, and lightning-fast crypto payouts. Discover why more and more players are switching to Golden Billy!"
        reviewText={`Golden Billy combines a fresh look with a wide selection of games, attractive crypto bonuses, and fast payouts.<br><br>The registration process is quick, and you can deposit instantly with Bitcoin, Ethereum, and more. Bonuses are transparent and payouts are usually processed within minutes.<br><br>The casino features a modern, user-friendly interface and a rewarding loyalty program for regular players. Customer support is available 24/7 via live chat.<br><br><b>Pros:</b> Fast crypto withdrawals, attractive bonuses, jackpot slots, and a fun VIP program.<br><br><b>Cons:</b> Still relatively new, not many community reviews yet.`}
        pros={[
          "Fast crypto withdrawals",
          "Attractive bonuses",
          "User-friendly interface",
          "Jackpot slots",
          "VIP program and promotions"
        ]}
        cons={[
          "Still relatively new",
          "Not many player reviews yet"
        ]}
        highlights={[
          "Deposit with Bitcoin, Ethereum, Litecoin, USDT",
          "Fast payouts (usually within 10 min)",
          "Daily bonuses and tournaments",
          "24/7 live chat support"
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
              <span className="font-bold">Crypto Accepted:</span> Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), USDT
            </li>
            <li>
              <span className="font-bold">Payouts:</span> Usually processed within 10 minutes
            </li>
            <li>
              <span className="font-bold">No extra fees:</span> Golden Billy charges no transaction fees for crypto payments
            </li>
          </ul>
        </div>
        <a
          href="https://goldenbillylink.com/h62218aaa"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎲 Play at Golden Billy
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Play responsibly. Golden Billy may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getReviewStructuredData({
            name: "Golden Billy Casino",
            reviewRating: 4.0,
            reviewCount: 98,
            url: "https://www.crypto-online-casino.com/crypto-casino-reviews/goldenbilly",
            image: "https://www.crypto-online-casino.com/logos/goldenbilly.png",
            description: "Golden Billy is a brand-new crypto casino with a colorful theme, generous bonuses, and lightning-fast crypto payouts. Discover why more and more players are switching to Golden Billy!"
          }))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbListStructuredData([
            { name: "Home", href: "/" },
            { name: "Casino Reviews", href: "/crypto-casino-reviews" },
            { name: "Golden Billy Casino", href: "/crypto-casino-reviews/goldenbilly" }
          ], "https://www.crypto-online-casino.com"))
        }}
      />
    </>
  );
}
