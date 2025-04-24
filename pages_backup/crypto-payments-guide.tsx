import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function CryptoPaymentsGuide() {
  return (
    <>
      <Head>
        <title>Crypto Payments Guide | crypto-online-casino.com</title>
        <meta name="description" content="Alles over crypto betalingen in online casino’s. Leer hoe je veilig stort met Bitcoin, Ethereum, Litecoin en meer." />
      </Head>
      <div className="min-h-screen bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed text-white px-4 pt-24 pb-10">
        <div className="bg-black/65 backdrop-blur-lg max-w-4xl mx-auto rounded-2xl p-6 md:p-10 shadow-xl text-white/90">
          <main>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-8">Crypto Payments Guide</h1>
            {/* SidebarNavigation en gidsen */}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
