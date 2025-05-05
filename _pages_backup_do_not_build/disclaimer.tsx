import Head from 'next/head';
import Footer from '../components/Footer';

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer | crypto-online-casino.com</title>
        <meta name="description" content="Disclaimer over affiliate links, betrouwbaarheid en verantwoordelijkheid op crypto-online-casino.com." />
      </Head>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Disclaimer</h1>
        <p className="mb-4">crypto-online-casino.com biedt informatieve content over crypto casino’s. Sommige links op deze website zijn affiliate links. Dit betekent dat wij een vergoeding kunnen ontvangen als je via deze links een account aanmaakt of storting doet bij een casino. Dit heeft geen invloed op onze beoordelingen of aanbevelingen.</p>
        <p className="mb-4">Wij streven naar objectiviteit en transparantie. Gokken brengt risico’s met zich mee. Speel verantwoord en alleen met geld dat je kunt missen.</p>
      </main>
      <Footer />
    </>
  );
}
