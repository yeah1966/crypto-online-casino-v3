import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { casinoReviews } from "@/lib/casinoReviews";

export default function CasinoReviewPage() {
  const router = useRouter();
  const { slug } = router.query;

  const casino = casinoReviews.find((c) => c.slug === slug);

  if (!casino) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-black text-center py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-neon mb-6">
          Casino not found
        </h1>
        <Link href="/crypto-casino-reviews">
          <span className="inline-block mt-6 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-lg font-bold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition drop-shadow-neon">
            Back to all reviews
          </span>
        </Link>
      </div>
    );
  }

  // Structured Data: Review + BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": casino.name,
      "url": `https://crypto-online-casino.com/crypto-casino-reviews/${casino.slug}`
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": casino.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "Crypto Online Casino"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Crypto Casino Reviews",
        "item": "https://crypto-online-casino.com/crypto-casino-reviews"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": casino.name,
        "item": `https://crypto-online-casino.com/crypto-casino-reviews/${casino.slug}`
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{casino.name} Review - Crypto Online Casino</title>
        <meta name="description" content={casino.description} />
        <link rel="canonical" href={`https://crypto-online-casino.com/crypto-casino-reviews/${casino.slug}`} />
        {/* Open Graph */}
        <meta property="og:title" content={`${casino.name} Review`} />
        <meta property="og:description" content={casino.description} />
        <meta property="og:image" content={`https://crypto-online-casino.com/logos/${casino.image}`} />
        <meta property="og:url" content={`https://crypto-online-casino.com/crypto-casino-reviews/${casino.slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-12 text-white">
        <div className="flex flex-col items-center text-center mb-8">
          <Image
            src={`/logos/${casino.image}`}
            alt={`${casino.name} logo`}
            width={120}
            height={120}
            className="rounded shadow-lg bg-black p-1"
          />
          <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-neon mt-4 mb-2">
            {casino.name} Review
          </h1>
          <p className="text-pink-300 text-lg">{casino.description}</p>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2 flex items-center gap-2">
            <span role="img" aria-label="Games">🎰</span> Game selection
          </h2>
          <p>{casino.features}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2 flex items-center gap-2">
            <span role="img" aria-label="Bonuses">🎁</span> Bonuses & Promotions
          </h2>
          <p>{casino.bonuses}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2 flex items-center gap-2">
            <span role="img" aria-label="Trust">🛡️</span> Trust & Security
          </h2>
          <p>{casino.trust}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2 flex items-center gap-2">
            <span role="img" aria-label="Rating">⭐</span> User Rating
          </h2>
          <p className="text-2xl font-bold text-green-400">{casino.rating} / 5</p>
        </section>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/bonussen/${casino.slug}`}>
            <span className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-semibold shadow-md transition drop-shadow-neon">View Bonus</span>
          </Link>
          <Link href={`/out/${casino.slug}`} target="_blank">
            <span className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition drop-shadow-neon">Visit Casino</span>
          </Link>
        </div>
      </main>
    </>
  );
}
