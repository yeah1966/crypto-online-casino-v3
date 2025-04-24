import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function WhatAreStablecoinsCasinoGambling() {
  return (
    <>
      <Head>
        <title>Wat zijn stablecoins? | crypto-online-casino.com</title>
        <meta name="description" content="Ontdek wat stablecoins zijn en hoe je ze gebruikt bij crypto casino’s. Voordelen, nadelen en veiligheid." />
      </Head>
      <div className="min-h-screen bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed text-white px-4 pt-24 pb-10">
        <div className="bg-black/65 backdrop-blur-lg max-w-4xl mx-auto rounded-2xl p-6 md:p-10 shadow-xl text-white/90">
          <main>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-8">Wat zijn stablecoins?</h1>
            {/* Uitleg over stablecoins */}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
