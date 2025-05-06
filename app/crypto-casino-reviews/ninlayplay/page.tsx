import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import type { Metadata } from "next";
import Head from "next/head";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("ninlayplay");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/ninlayplay",
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

export default function NinlayplayReview() {
  return (
    <>
      <Head>
        <title>Ninlay Casino Review (2025) – Adventurous Slots & Crypto Rewards</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData({
              name: "Ninlay Casino",
              reviewRating: 3.5,
              reviewCount: 57,
              url: "https://www.yourdomain.com/crypto-casino-reviews/ninlayplay",
              image: "https://www.yourdomain.com/logos/ninlaycasino.png",
              description: "Ninlay is a new crypto casino with a colorful, gamified interface, adventurous slots, and crypto rewards. Honest review for 2025."
            }))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Casino Reviews", href: "/crypto-casino-reviews" },
              { name: "Ninlay Casino", href: "/crypto-casino-reviews/ninlayplay" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Ninlay Casino", href: "/crypto-casino-reviews/ninlayplay" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/ninlaycasino.png"
        casinoName="NINLAY CASINO"
        rating={3.5}
        ratingStars="★★★½☆"
        affiliateUrl="https://ninlayplay.com/hecd2573b"
        affiliateLabel="Play at Ninlay"
        introText="Ninlay Casino is a colorful new crypto casino with a gamified experience, adventurous slots, and unique crypto rewards. Is it worth a spin? Find out in our honest review."
        reviewText={`Ninlay Casino stands out for its playful, gamified interface and adventurous slot selection. Players can enjoy a variety of crypto bonuses and a unique experience with every visit.<br><br>Navigation is not always perfect and the casino is still building its reputation, with fewer community reviews available.<br><br>Ninlay supports deposits and withdrawals in Bitcoin, Ethereum, Litecoin, and USDT. Bonuses are frequent, but high rollers may find the limits a bit low.<br><br>Conclusion: Great for players seeking adventure and crypto rewards, but less suited for high rollers or those wanting a huge game selection.`}
        pros={[
          "Colorful, gamified interface",
          "Crypto bonuses & rewards",
          "Fast crypto withdrawals",
          "24/7 support"
        ]}
        cons={[
          "Navigation not always perfect",
          "Still building reputation (few reviews)",
          "Limited for high rollers"
        ]}
        highlights={[
          "Deposit with Bitcoin, Ethereum, Litecoin, USDT",
          "Quick payouts (usually within 10 min)",
          "Gamification & adventure quests",
          "Mobile-friendly design"
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
              <span className="font-bold">No extra fees:</span> Ninlay charges no transaction fees for crypto payments
            </li>
          </ul>
        </div>
        <a
          href="https://ninlayplay.com/hecd2573b"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎲 Play at Ninlay
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Play responsibly. Ninlay may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
    </>
  );
}
