import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import Head from "next/head";
import { getReviewStructuredData } from "@/lib/structuredData";

export default function SevenBitReview() {
  return (
    <>
      <Head>
        <title>7Bit Casino Review 2025 – Crypto Bonussen & Snel Uitbetalen</title>
        <meta name="description" content="Lees onze 2025 review van 7Bit Casino. Ontdek alles over bonussen, crypto betalingen, spellen en meer!" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="7Bit Casino Review (2025) – Claim Bonus & Spin Retro" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData({
              name: "7Bit Casino",
              reviewRating: 4.7,
              reviewCount: 801,
              url: "https://www.yourdomain.com/crypto-casino-reviews/7bit",
              image: "https://www.yourdomain.com/logos/7bit.png",
              description: "7Bit Casino is een populair crypto casino met snelle betalingen, duizenden spellen en royale bonussen. Lees onze volledige review!"
            }))
          }}
        />
      </Head>
      <CasinoReviewTemplate
        logo="/logos/7bit.png"
        casinoName="7BIT CASINO"
        rating={4.0}
        ratingStars="★★★★☆"
        affiliateUrl="https://www.7bitcasino.com/a/b8c1d2e3f4"
        affiliateLabel="Play at 7Bit Casino"
        introText="7Bit Casino blends retro charm with modern crypto tech, creating a colorful playground for slot lovers and bonus chasers."
        reviewText={`7Bit Casino is one of those rare platforms that knows exactly what it is — and leans all-in. From the pixel-style logo to the vintage arcade vibes, the whole site feels like stepping into a neon-lit time machine. But don’t let the retro aesthetics fool you — under the hood, this casino runs like a finely-tuned crypto machine.<br><br>There are over 7,000 games, from classic slots to provably fair titles, and crypto is king: BTC, LTC, ETH, DOGE, and more are accepted with lightning-fast payouts. The welcome bonus is one of the most generous in the industry, especially if you deposit using crypto.<br><br>7Bit shines when it comes to slot tournaments, daily cashback, and VIP levels that reward loyal players. However, live casino fans and sports bettors might find the offering a little too slot-heavy.`}
        pros={[
          "Huge variety of crypto slots & games",
          "Generous welcome bonus",
          "Daily cashback & reloads",
          "Retro arcade theme"
        ]}
        cons={[
          "No sportsbook",
          "Not ideal for live table players"
        ]}
        highlights={[
          "7,000+ crypto-friendly games",
          "Top-tier bonuses & free spins",
          "Provably fair titles available",
          "Bitcoin, Litecoin, Ethereum, DOGE & more"
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
              <span className="font-bold">Crypto Accepted:</span> Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Dogecoin (DOGE), and more
            </li>
            <li>
              <span className="font-bold">Fast Withdrawals:</span> Crypto payouts processed within minutes
            </li>
            <li>
              <span className="font-bold">No Extra Fees:</span> 7Bit Casino does not charge additional fees for crypto transactions
            </li>
          </ul>
        </div>
        <a
          href="https://www.7bitcasino.com/a/b8c1d2e3f4"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎰 Claim your 7Bit bonus now!
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Gamble responsibly. 7Bit Casino may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
    </>
  );
}
