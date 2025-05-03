import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Head from "next/head";

export default function GuidesPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Crypto Casino Gidsen – Alles wat je moet weten</title>
        <meta name="description" content="Ontdek onze complete gidsen over crypto casino’s. Leer alles over blockchain gaming, betalingen, veiligheid en strategie." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Gidsen", href: "/guides" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Gidsen", href: "/guides" }
        ]}
      />
      <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full">
        <h1 className="text-4xl font-extrabold mb-6 flex items-center gap-3">📚 Crypto Casino Guides</h1>
        <p className="mb-4 text-lg">Master crypto gambling with our step-by-step guides. From getting started with Bitcoin to advanced strategies, we help you play smarter and safer.</p>
        <ul className="space-y-4">
          <li className="bg-purple-700 rounded-xl p-5 shadow-lg border-l-4 border-yellow-300 hover:scale-[1.02] transition">
            <h2 className="text-xl font-bold">How to Deposit with Bitcoin</h2>
            <p>Learn how to fund your casino account using Bitcoin and other cryptocurrencies.</p>
          </li>
          <li className="bg-purple-700 rounded-xl p-5 shadow-lg border-l-4 border-pink-400 hover:scale-[1.02] transition">
            <h2 className="text-xl font-bold">Crypto Gambling 101</h2>
            <p>The basics of playing at crypto casinos, explained for beginners.</p>
          </li>
          <li className="bg-purple-700 rounded-xl p-5 shadow-lg border-l-4 border-green-400 hover:scale-[1.02] transition">
            <h2 className="text-xl font-bold">How to Use a VPN for Gambling</h2>
            <p>Stay safe and access casinos worldwide with a VPN.</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
