import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Head from "next/head";

export default function NoDepositPage() {
  return (
    <main>
      <Head>
        <title>No Deposit Bonussen 2025 – Crypto Casino’s</title>
        <meta name="description" content="Bekijk alle actuele no deposit bonussen bij crypto casino’s in 2025. Speel gratis en win echt geld zonder storting!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Bonussen", href: "/bonuses" },
              { name: "No Deposit", href: "/bonuses/no-deposit" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Bonussen", href: "/bonuses" },
          { name: "No Deposit", href: "/bonuses/no-deposit" }
        ]}
      />
      <h1>No Deposit Bonuses Crypto Casino’s 2025</h1>
      <p>Bekijk alle no deposit bonussen van crypto casino’s. Speel gratis en maak kans op echte prijzen zonder eigen geld te storten!</p>
    </main>
  );
}
