import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Head from "next/head";

export default function WelcomeBonusPage() {
  return (
    <main>
      <Head>
        <title>Welcome Bonus 2025 – Crypto Casino’s</title>
        <meta name="description" content="Bekijk de beste welcome bonuses bij crypto casino’s in 2025. Ontvang extra speelgeld en spins bij je eerste storting!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Bonussen", href: "/bonuses" },
              { name: "Welcome Bonus", href: "/bonuses/welcome-bonus" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Bonussen", href: "/bonuses" },
          { name: "Welcome Bonus", href: "/bonuses/welcome-bonus" }
        ]}
      />
      <h1>Welcome Bonus Crypto Casino’s 2025</h1>
      <p>Bekijk hier de beste welkomstbonussen van crypto casino’s. Ontdek welke aanbieders de hoogste eerste stortingsbonus geven en hoe je deze claimt.</p>
    </main>
  );
}
