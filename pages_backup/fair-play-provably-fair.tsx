import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FairPlayProvablyFair() {
  return (
    <>
      <Head>
        <title>Fairness & Safety | crypto-online-casino.com</title>
        <meta name="description" content="Hoe werken provably fair spellen en hoe veilig zijn crypto casino’s? Leer alles over eerlijk spel en veiligheid." />
      </Head>
      <Header />
      <div className="min-h-screen bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed text-white px-4 pt-24 pb-10">
        <div className="bg-black/65 backdrop-blur-lg max-w-4xl mx-auto rounded-2xl p-6 md:p-10 shadow-xl text-white/90">
          <main>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-8">Fairness & Safety</h1>
            {/* Uitleg over provably fair en veiligheid */}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
