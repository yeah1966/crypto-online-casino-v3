import Head from "next/head";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import Breadcrumbs from "@/components/Breadcrumbs";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("crownslots");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/crownslots",
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

export default function CrownslotsReview() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData({
              name: "Crownslots Casino",
              reviewRating: 3.5,
              reviewCount: 41,
              url: "https://www.crypto-online-casino.com/crypto-casino-reviews/crownslots",
              image: "https://www.crypto-online-casino.com/logos/crownslots.png",
              description: "Crownslots is a simple, UK-style crypto casino with fast registration and basic crypto support. Honest review for 2025."
            }))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Casino Reviews", href: "/crypto-casino-reviews" },
              { name: "Crownslots Casino", href: "/crypto-casino-reviews/crownslots" }
            ], "https://www.crypto-online-casino.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Crownslots Casino", href: "/crypto-casino-reviews/crownslots" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/crownslots.png"
        casinoName="CROWNSLOTS CASINO"
        rating={3.5}
        ratingStars="★★★½☆"
        affiliateUrl="https://crownslotslink.com/hfb84c81c"
        affiliateLabel="Play at Crownslots"
        introText="Crownslots Casino is a simple, British-style crypto casino with fast signup, easy navigation, and support for major cryptocurrencies. Find out if it's right for you!"
        reviewText={`Crownslots Casino offers a straightforward experience for crypto gamblers. The interface is intuitive and registration is quick, making it easy for new players to get started.<br><br>While the game selection is somewhat limited compared to larger casinos, Crownslots makes up for it with speedy crypto deposits and withdrawals, and a no-nonsense approach.<br><br>There are fewer game providers and the site is best suited to casual players who want a hassle-free crypto gambling experience.<br><br>Conclusion: A good pick for casual crypto gamblers who value simplicity and fast access, but not ideal for those seeking a huge game library or lots of bonuses.`}
        pros={[
          "Fast registration",
          "Simple, intuitive interface",
          "Accepts crypto payments",
          "Good for UK players"
        ]}
        cons={[
          "Limited game providers",
          "Relatively small game selection",
          "Few bonus offers"
        ]}
        highlights={[
          "Deposit with Bitcoin, Ethereum, Litecoin, USDT",
          "Quick registration process",
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
              <span className="font-bold">No extra fees:</span> Crownslots charges no transaction fees for crypto payments
            </li>
          </ul>
        </div>
        <a
          href="https://crownslotslink.com/hfb84c81c"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎲 Play at Crownslots
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Play responsibly. Crownslots may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
    </>
  );
}
