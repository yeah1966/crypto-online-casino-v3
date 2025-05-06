import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import type { Metadata } from "next";
import Head from "next/head";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("prismcasino");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://crypto-online-casino.com/crypto-casino-reviews/prismcasino",
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

export default function PrismCasinoReview() {
  return (
    <>
      <Head>
        <title>Prism Casino Review 2025 | Big Bonuses & Fast Crypto Payouts</title>
        <meta name="description" content="Read our Prism Casino review: discover up to $3,000 welcome bonuses, fast Bitcoin payouts, no KYC, and RTG-powered slot games. Crypto-friendly and trusted." />
        <meta property="og:url" content="https://crypto-online-casino.com/crypto-casino-reviews/prismcasino" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prism Casino Review 2025 | Big Bonuses & Fast Crypto Payouts" />
        <meta property="og:description" content="Discover Prism Casino: generous crypto bonuses, RTG slots, and no KYC withdrawals. Up to $3,000 bonus!" />
        <meta property="og:image" content="https://crypto-online-casino.com/og/prismcasino.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="crypto-online-casino.com" />
        <meta property="twitter:url" content="https://crypto-online-casino.com/crypto-casino-reviews/prismcasino" />
        <meta name="twitter:title" content="Prism Casino Review 2025 | Big Bonuses & Fast Crypto Payouts" />
        <meta name="twitter:description" content="Discover Prism Casino: generous crypto bonuses, RTG slots, and no KYC withdrawals. Up to $3,000 bonus!" />
        <meta name="twitter:image" content="https://crypto-online-casino.com/og/prismcasino.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getReviewStructuredData({
                name: "Prism Casino",
                reviewRating: 4.2,
                reviewCount: 73,
                url: "https://crypto-online-casino.com/crypto-casino-reviews/prismcasino",
                image: "https://crypto-online-casino.com/logos/prismcasino.png",
                description: "A bright, bonus-packed crypto casino experience",
              })
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getBreadcrumbListStructuredData(
                [
                  { name: "Home", href: "/" },
                  { name: "Casino Reviews", href: "/crypto-casino-reviews" },
                  { name: "Prism Casino", href: "/crypto-casino-reviews/prismcasino" },
                ],
                "https://crypto-online-casino.com"
              )
            ),
          }}
        />
      </Head>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0e0e2c] via-[#1e1e40] to-[#502664] opacity-80" />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Prism Casino", href: "/crypto-casino-reviews/prismcasino" },
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/prismcasino.png"
        casinoName="PRISM CASINO"
        rating={4.2}
        ratingStars="★★★★☆"
        affiliateUrl="https://www.prismlinks.com/click/6/4305/15512/1"
        affiliateLabel="Play at Prism Casino"
        introText="A bright, bonus-packed crypto casino experience. Prism Casino stands out with generous no deposit bonuses, a huge collection of RTG slots, and fast Bitcoin payouts. Enjoy a classic Vegas vibe, 24/7 support, and crypto-friendly rewards — perfect for both new and experienced players."
        reviewText={`Prism Casino Review 2025\nA bright, bonus-packed crypto casino experience\n\nPrism Casino delivers flashy rewards and a wide variety of classic slots — perfect for players seeking high bonuses, crypto support, and simple gameplay. With decades of presence in the online casino world, it keeps things straightforward but still appealing for crypto users.`}
        pros={[
          "No deposit codes often available",
          "Great for slot lovers",
          "Fast crypto payouts",
          "Simple and familiar layout",
        ]}
        cons={[
          "No live casino",
          "Dated design (depends on preference)",
          "Limited software providers",
        ]}
        highlights={[
          "💎 No deposit bonuses available for new players",
          "🎰 Large collection of RTG slots & table games",
          "💵 Crypto-friendly: Accepts Bitcoin and other cryptocurrencies",
          "🚀 Instant-play and downloadable client available",
          "🔒 Licensed and secure with 24/7 customer support",
          "🧑‍💻 Weekly and monthly promotions for loyal users",
          "🌍 US-friendly: Accepts players from most US states",
          "📱 Mobile-compatible for Android and iOS devices",
        ]}
      >
        {/* Bonuses & Promotions */}
        <div className="mt-8 bg-purple-900/80 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-yellow-300 mb-2">🎁 Bonuses & Promotions</h2>
          <ul className="list-disc list-inside text-white space-y-1">
            <li>Welcome Bonus: Up to $3,000 on your first deposit</li>
            <li>No Deposit Bonus: Regular promo codes available</li>
            <li>Daily Rewards: Reload bonuses, comp points, and cashback</li>
            <li>Exclusive Crypto Deals: Often paired with Bitcoin deposits</li>
          </ul>
        </div>
        {/* Games & Software */}
        <div className="mt-8 bg-purple-900/80 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-yellow-300 mb-2">🕹️ Games & Software</h2>
          <ul className="list-disc list-inside text-white space-y-1">
            <li>Powered by Realtime Gaming (RTG)</li>
            <li>Slots-focused: From 3-reel classics to modern video slots</li>
            <li>Includes video poker, table games, and a few progressives</li>
            <li>No live dealer games — this is a more traditional setup</li>
          </ul>
        </div>
        {/* Crypto Payments */}
        <div className="mt-8 bg-purple-900/80 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-yellow-300 mb-2">🪙 Crypto Payments</h2>
          <ul className="list-disc list-inside text-white space-y-1">
            <li>Accepts Bitcoin, Litecoin, and Ethereum</li>
            <li>Fast payouts (typically within 24 hours for crypto)</li>
            <li>No KYC required for crypto withdrawals</li>
            <li>USD payments also supported via traditional methods</li>
          </ul>
        </div>
        {/* Final Verdict */}
        <div className="mt-8 bg-purple-950/80 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2">🧾 Final Verdict</h2>
          <p className="text-white/90">If you're after huge welcome bonuses, fast BTC cashouts, and a no-nonsense slots experience, Prism Casino hits the mark. It may not have the sleekest interface or live casino games, but for crypto-focused players, it’s a solid and trusted choice.</p>
        </div>
      </CasinoReviewTemplate>
    </>
  );
}
