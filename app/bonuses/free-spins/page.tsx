import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Head from "next/head";

export default function FreeSpinsPage() {
  return (
    <main>
      <Head>
        <title>Free Spins Bonussen 2025 – Crypto Casino’s</title>
        <meta name="description" content="Bekijk alle actuele free spins bonussen bij crypto casino’s in 2025. Geen storting nodig, direct spelen!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Bonussen", href: "/bonuses" },
              { name: "Free Spins", href: "/bonuses/free-spins" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Bonussen", href: "/bonuses" },
          { name: "Free Spins", href: "/bonuses/free-spins" }
        ]}
      />
      <h1>Free Spins Crypto Casino’s 2025</h1>
      <p>Ontdek alle crypto casino’s met gratis spins! Bekijk de beste free spins bonussen, voorwaarden en hoe je ze direct kunt claimen.</p>
    </main>
  );
}
