import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { topBonuses } from "../../lib/topBonuses";

export default function BonusDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || typeof slug !== "string") return null;

  const casino = topBonuses.find((b) => b.slug === slug);

  if (!casino) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-black text-center py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-neon mb-6">
          No bonus found for this casino. Please check our full list of bonuses.
        </h1>
        <Link href="/best-crypto-casino-bonuses">
          <span className="inline-block mt-6 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-lg font-bold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition drop-shadow-neon">
            🔙 Back to bonuses
          </span>
        </Link>
      </div>
    );
  }

  // Dynamisch structured data object voor JSON-LD volgens jouw specificatie
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Bonus",
    "name": `${casino.name} Bonus`,
    "description": casino.details || casino.description,
    "provider": {
      "@type": "Organization",
      "name": casino.name,
      "url": `https://crypto-online-casino.com/bonussen/${casino.slug}`
    },
    "bonusCurrency": "BTC",
    "bonusAmount": casino.bonus?.match(/\d+(\.\d+)?/)?.[0] || "Unknown",
    "bonusType": "Welcome Bonus",
    "incentiveCompensation": casino.bonus || "",
    "url": `https://crypto-online-casino.com/bonussen/${casino.slug}`
  };

  return (
    <>
      <Head>
        <title>{casino.name} Bonus | Crypto Online Casino</title>
        <meta name="description" content={casino.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12 text-white">
        <div className="text-center mb-8">
          <Image
            src={`/logos/${casino.image}`}
            alt={`${casino.name} logo`}
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-neon">
            {casino.name} Bonus & Promotions 🎁
          </h1>
          <p className="text-lg text-pink-400 font-semibold mt-2">{casino.bonusTitle}</p>
        </div>

        <section className="bg-[#0f0f2f] border border-yellow-400 rounded-xl p-6 shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-white">Why choose {casino.name}?</h2>
          <p className="text-white/90">{casino.description}</p>
          <p className="text-white/90">{casino.details}</p>

          <div className="text-center mt-6">
            <a
              href={`/out/${casino.slug}`}
              className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold py-3 px-6 rounded-xl shadow hover:scale-105 transition text-xl"
            >
              🎰 Claim Bonus Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
