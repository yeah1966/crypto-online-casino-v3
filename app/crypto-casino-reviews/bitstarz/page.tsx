import Link from "next/link";
import CasinoSuggestions from "@/components/CasinoSuggestions";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("bitstarz");
  return {
    title: "BitStarz Crypto Casino Review 2025 – Bonussen, Games & Ervaringen",
    description: "Lees onze BitStarz crypto casino review 2025: alles over bonussen, games, uitbetalingen & ervaringen. Ontdek waarom BitStarz het populairste crypto casino is!",
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/bitstarz",
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

export default function BitStarzReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getReviewStructuredData({
              name: "BitStarz",
              reviewRating: 5.0,
              reviewCount: 1242,
              url: "https://www.crypto-online-casino.com/crypto-casino-reviews/bitstarz",
              image: "https://www.crypto-online-casino.com/logos/bitstarz.png",
              description: "BitStarz is een bekroond crypto casino met snelle uitbetalingen, duizenden games en een ijzersterke reputatie. Lees onze volledige review!"
            })
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbListStructuredData([
            { name: "Home", href: "/" },
            { name: "Crypto Casino Reviews", href: "/crypto-casino-reviews" },
            { name: "BitStarz", href: "/crypto-casino-reviews/bitstarz" }
          ], "https://www.crypto-online-casino.com"))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is BitStarz betrouwbaar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, BitStarz is een van de meest betrouwbare crypto casino’s met een officiële licentie, snelle uitbetalingen en duizenden positieve spelerservaringen."
                }
              },
              {
                "@type": "Question",
                "name": "Welke cryptomunten accepteert BitStarz?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Je kunt bij BitStarz o.a. betalen met Bitcoin, Ethereum, Litecoin en meer."
                }
              },
              {
                "@type": "Question",
                "name": "Wat is de BitStarz bonus voor nieuwe spelers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nieuwe spelers ontvangen tot 5 BTC + 200 gratis spins als welkomstbonus."
                }
              }
            ]
          })
        }}
      />
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <main className="relative z-10 min-h-screen pt-1 pb-16 px-4 text-white">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Crypto Casino Reviews", href: "/crypto-casino-reviews" },
            { name: "BitStarz", href: "/crypto-casino-reviews/bitstarz" }
          ]}
        />
        <div className="max-w-3xl mx-auto bg-black/60 rounded-2xl shadow-2xl p-8 relative border-2 border-transparent bg-gradient-to-br from-[#241f6b]/90 via-black/70 to-pink-900/60 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:z-10 before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,0,0.07)_0,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,0,200,0.09)_0,transparent_70%)]" style={{boxShadow: '0 0 32px 0 rgba(255, 0, 200, 0.18), 0 0 8px 0 #fff2'}}>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-yellow-300">BitStarz Crypto Casino Review 2025</h1>
          <p className="mb-6 text-lg text-white/90">Deze BitStarz crypto casino review laat je alles zien over bonussen, games, uitbetalingen en echte ervaringen bij één van de populairste crypto casino’s van dit moment. Ontdek waarom BitStarz door duizenden spelers wordt aanbevolen.</p>

          <div className="mb-8">
            <span className="font-semibold text-pink-300">Andere populaire reviews:</span>
            <ul className="list-disc list-inside ml-6 text-white/80 text-sm mt-1">
              <li><a href="/crypto-casino-reviews/7bit" className="underline hover:text-yellow-300">7Bit Casino review</a></li>
              <li><a href="/crypto-casino-reviews/cloudbet" className="underline hover:text-yellow-300">Cloudbet review</a></li>
              <li><a href="/crypto-casino-reviews/betzard" className="underline hover:text-yellow-300">Betzard review</a></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-yellow-200 mt-8 mb-3">Bonussen & Promoties</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Tot 5 BTC + 200 gratis spins als welkomstbonus</li>
            <li>Regelmatige reload bonussen en gratis spins</li>
            <li>Unieke VIP-programma’s voor trouwe spelers</li>
          </ul>

          <h2 className="text-2xl font-bold text-yellow-200 mt-8 mb-3">Games & Providers</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Meer dan 3.500 hoogwaardige casino games</li>
            <li>Slots, tafelspellen, live casino en meer</li>
            <li>Samenwerking met top providers als NetEnt, Pragmatic Play en Evolution</li>
          </ul>

          <h2 className="text-2xl font-bold text-yellow-200 mt-8 mb-3">Crypto & Betalingen</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Directe stortingen en snelle crypto uitbetalingen</li>
            <li>Accepteert Bitcoin, Ethereum, Litecoin en meer</li>
            <li>Eigen crypto exchange voor eenvoudig wisselen</li>
          </ul>

          <h2 className="text-2xl font-bold text-yellow-200 mt-8 mb-3">Betrouwbaarheid & Support</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Officiële licentie en uitstekende reputatie</li>
            <li>24/7 live chat support in meerdere talen</li>
            <li>Snelle, transparante uitbetalingen</li>
          </ul>

          <h2 className="text-2xl font-bold text-yellow-200 mt-8 mb-3">Veelgestelde Vragen over BitStarz</h2>
          <div className="mb-8">
            <details className="mb-2"><summary className="cursor-pointer font-semibold">Is BitStarz betrouwbaar?</summary><div className="pl-4 pt-1">Ja, BitStarz is een van de meest betrouwbare crypto casino’s met een officiële licentie, snelle uitbetalingen en duizenden positieve spelerservaringen.</div></details>
            <details className="mb-2"><summary className="cursor-pointer font-semibold">Welke cryptomunten accepteert BitStarz?</summary><div className="pl-4 pt-1">Je kunt bij BitStarz o.a. betalen met Bitcoin, Ethereum, Litecoin en meer.</div></details>
            <details className="mb-2"><summary className="cursor-pointer font-semibold">Wat is de BitStarz bonus voor nieuwe spelers?</summary><div className="pl-4 pt-1">Nieuwe spelers ontvangen tot 5 BTC + 200 gratis spins als welkomstbonus.</div></details>
          </div>

          <a
            href="https://bs5.direct/b2b7d0ed7"
            className="mt-6 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            🎲 Claim je BitStarz bonus
          </a>
          <p className="text-center text-xs text-gray-400 mt-4">
            18+ | Speel bewust. BitStarz is mogelijk niet beschikbaar in alle landen.
          </p>
        </div>
      </main>
    </>
  );
}
