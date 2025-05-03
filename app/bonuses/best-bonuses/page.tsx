import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Head from "next/head";

export default function BestBonusesPage() {
  return (
    <main>
      <Head>
        <title>Beste Crypto Casino Bonussen 2025</title>
        <meta name="description" content="Bekijk de beste crypto casino bonussen van 2025. Alle actuele aanbiedingen, no deposit, free spins en meer!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Bonussen", href: "/bonuses" },
              { name: "Beste Bonussen", href: "/bonuses/best-bonuses" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Bonussen", href: "/bonuses" },
          { name: "Beste Bonussen", href: "/bonuses/best-bonuses" }
        ]}
      />
      <h1>Best Crypto Casino Bonuses 2025</h1>
      <p>Hier vind je de beste bonussen van alle crypto casino’s. Vergelijk de hoogste welkomstbonussen, gratis spins en exclusieve deals voor spelers in 2025.</p>
    </main>
  );
}
