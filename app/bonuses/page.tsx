import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Head from "next/head";

export default function BonusesPage() {
  return (
    <div>
      <Head>
        <title>Crypto Casino Bonussen – Actuele Overzicht 2025</title>
        <meta name="description" content="Bekijk het complete overzicht van crypto casino bonussen in 2025. Alle actuele aanbiedingen, free spins, no deposit en meer!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Bonussen", href: "/bonuses" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Bonussen", href: "/bonuses" }
        ]}
      />
      <div className="text-white p-10 text-2xl">Bonussen overzicht 🎁</div>
    </div>
  );
}
