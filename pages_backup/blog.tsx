import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | crypto-online-casino.com</title>
        <meta name="description" content="Lees het laatste nieuws, tips en trends over crypto casino’s, blockchain gaming en meer." />
      </Head>
      <main className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Blog</h1>
        {/* BlogPostPreview componenten komen hier */}
      </main>
      <Footer />
    </>
  );
}
