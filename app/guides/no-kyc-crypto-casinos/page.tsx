import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaExclamationTriangle, FaDice, FaArrowRight, FaShieldAlt } from "react-icons/fa";

export default function NoKycCryptoCasinos() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "No KYC Crypto Casinos", href: "/guides/no-kyc-crypto-casinos" },
        ]}
      />

      {/* Section Navigation Buttons (fixed for prompt) */}
      <div className="flex flex-wrap justify-center gap-4 my-6">
        <a href="#why-kyc" className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-400 font-bold text-black shadow hover:scale-105 transition-all">
          Why KYC
        </a>
        <a href="#benefits" className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-red-400 font-bold text-black shadow hover:scale-105 transition-all">
          Benefits
        </a>
        <a href="#things-to-know" className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-lime-400 font-bold text-black shadow hover:scale-105 transition-all">
          Things To Know
        </a>
        <a href="#no-kyc" className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 font-bold text-black shadow hover:scale-105 transition-all">
          No KYC
        </a>
        <a href="#faq" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 font-bold text-black shadow hover:scale-105 transition-all">
          FAQ
        </a>
      </div>

      <div className="relative rounded-3xl bg-black/65 shadow-2xl border-2 border-yellow-400 p-8 md:p-12 space-y-14 max-w-6xl mx-auto mt-6">
        {/* TITLE & INTRO */}
        <section className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col items-center gap-4 md:gap-6">
  <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-8 mb-2">
    <h1 className="text-4xl md:text-5xl font-extrabold neon-text text-center md:text-left mb-0 text-purple-700 flex-1">
      NO KYC CRYPTO CASINOS: PLAY ANONYMOUSLY
    </h1>
    <div className="flex-shrink-0 flex justify-center md:justify-end">
      <Image
        src="/favicon-180.png"
        alt="Crypto Casino Mascot"
        width={90}
        height={90}
        className="rounded-full drop-shadow-lg bg-white/90 p-1 hover:animate-bounce transition-transform duration-300"
        priority
      />
    </div>
  </div>
  <div className="flex flex-col md:flex-row items-center gap-4">
    <Image src="/icons/btc.svg" alt="Bitcoin" width={40} height={40} />
    <Image src="/icons/vpn.svg" alt="VPN" width={40} height={40} />
    <Image src="/casino-icons/Dices.svg" alt="Dices" width={40} height={40} />
  </div>
          <p className="text-xl text-center text-white/90 mb-4 mt-2">
            No KYC (Know Your Customer) means <span className="font-semibold text-yellow-300">no ID checks, no paperwork, and no waiting</span>.<br />This guide is for players who want to gamble with crypto while keeping their identity private.
          </p>
        </section>

        {/* WHAT IS NO KYC? */}
        <section id="why-kyc" className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-2 text-yellow-600 flex items-center gap-2">
            <FaShieldAlt className="text-blue-400" /> Why do casinos ask for KYC?
          </h2>
          <p className="text-xl text-white/90">
            KYC (Know Your Customer) is a process where online casinos verify your identity by requesting documents such as your passport, proof of address, or bank statements. Casinos do this to comply with regulations, prevent fraud and money laundering, and ensure player safety. However, many players prefer to keep their information private and avoid lengthy verification procedures.
          </p>
        </section>

        {/* PROS & CONS */}
        <section id="benefits" className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-2 text-yellow-600 flex items-center gap-2">
            <Image src="/casino-icons/Chip%20for%20Money%20Return.svg" alt="Chip" width={28} height={28} /> Benefits of playing at No KYC Casinos
          </h2>
          <ul className="ml-4 mt-2 flex flex-col gap-4">
            <li className="flex items-center gap-2 text-xl text-white/90"><FaCheckCircle className="text-green-400" /> Fast and easy sign-up process <Image src="/icons/bnb.svg" alt="BNB" width={24} height={24} /></li>
            <li className="flex items-center gap-2 text-xl text-white/90"><FaCheckCircle className="text-green-400" /> Maximum privacy and anonymity <Image src="/icons/vpn.svg" alt="VPN" width={24} height={24} /></li>
            <li className="flex items-center gap-2 text-xl text-white/90"><FaCheckCircle className="text-green-400" /> No risk of identity theft or data leaks <Image src="/icons/doge.svg" alt="DOGE" width={24} height={24} /></li>
            <li className="flex items-center gap-2 text-xl text-white/90"><FaCheckCircle className="text-green-400" /> Instant crypto deposits & withdrawals</li>
          </ul>
          <p className="text-lg text-white/80 mt-2">
            Want to discover more perks? Check out our <Link href="/crypto-casino-bonuses" className="text-yellow-300 underline hover:text-yellow-400 font-semibold">crypto casino bonuses</Link> for exclusive offers, or read our <Link href="/guides/crypto-payments-guide" className="text-yellow-300 underline hover:text-yellow-400 font-semibold">crypto payments guide</Link> for tips on fast deposits.
          </p>
        </section>

        {/* IMPORTANT THINGS TO KNOW BEFORE YOU PLAY */}
        <section id="no-kyc" className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-2 text-yellow-600 flex items-center gap-2">
            <FaExclamationTriangle className="text-yellow-400" /> Important things to know before you play
          </h2>
          <ul className="ml-4 mt-2 flex flex-col gap-2">
            <li className="text-xl text-white/90 flex items-center gap-2"><Image src="/icons/vpn.svg" alt="VPN" width={24} height={24} /> Even casinos that advertise “no KYC” may still require ID in special situations:</li>
            <li className="ml-4 text-lg text-white/80 list-disc">Large withdrawal requests</li>
            <li className="ml-4 text-lg text-white/80 list-disc">Fraud detection or suspicious activity</li>
            <li className="ml-4 text-lg text-white/80 list-disc">Specific legal jurisdictions</li>
          </ul>
          <p className="text-lg text-white/80 mt-2">Always check the casino’s terms before playing and be aware that KYC may still apply in some cases.</p>
        </section>

        {/* TOP NO KYC CASINOS TO TRY IN 2025 */}
        <section id="no-kyc" className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-2 text-yellow-600 flex items-center gap-2">
            <Image src="/casino-icons/Dices.svg" alt="Dices" width={28} height={28} /> Top No KYC Casinos to try in 2025
          </h2>
          <p className="text-xl text-white/90 flex items-center gap-2">
            <FaDice className="text-pink-400" /> We’ve selected the best trusted no KYC crypto casinos where you can start playing immediately with Bitcoin, Ethereum, and other coins. Curious about the safest options? Read our <Link href="/crypto-casino-reviews" className="text-yellow-300 underline hover:text-yellow-400 font-semibold">No KYC casino reviews</Link> for detailed rankings and user experiences.
          </p>
        </section>

        <div className="flex justify-center mt-8">
          <Link
            href="/crypto-casino-reviews"
            className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-10 py-5 text-xl shadow-2xl border-4 border-white/90 drop-shadow-2xl transition-transform duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 ring-yellow-400 animate-[pulse_2s_infinite] flex items-center gap-3 relative overflow-hidden"
            style={{ boxShadow: '0 4px 32px 0 #fbbf24, 0 0px 60px 0 #f472b6' }}
            aria-label="View No KYC Casino Reviews"
          >
            {/* Mascotte SVG of fallback emoji */}
            <span className="inline-flex items-center justify-center w-10 h-10 mr-3 bg-white/90 rounded-full shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/favicon-64.png"
              alt="Crypto Casino Mascot"
              width={36}
              height={36}
              className="drop-shadow-lg group-hover:animate-bounce"
              priority
            />
          </span>
            <span>View No KYC Casino Reviews</span>
            <FaArrowRight className="text-black text-2xl ml-2" />
          </Link>
        </div>
      {/* FAQ Section */}
      <section className="rounded-2xl border border-yellow-400/30 bg-black/80 p-8 shadow-lg flex flex-col gap-6 mt-10" id="faq">
        <h2 className="text-3xl font-extrabold text-yellow-400 mb-2">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-xl font-bold text-yellow-300">What does No KYC mean?</h3>
            <p className="text-lg text-white/90">No KYC means you can play at a casino without submitting identity documents or going through verification processes.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-300">Are No KYC casinos legal?</h3>
            <p className="text-lg text-white/90">Legality depends on your jurisdiction. Always check your local laws before playing.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-300">Can I withdraw large amounts without KYC?</h3>
            <p className="text-lg text-white/90">Most No KYC casinos allow withdrawals up to a certain limit without ID, but may require verification for larger amounts.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-300">Which cryptocurrencies can I use?</h3>
            <p className="text-lg text-white/90">You can use Bitcoin, Ethereum, BNB, DOGE, and many other popular coins.</p>
          </div>
        </div>
      </section>

      {/* Guides Navigation CTA Buttons (bottom) */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          href="/guides/getting-started"
          className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-6 py-3 text-base shadow-lg border-4 border-white/80 drop-shadow-xl hover:scale-105 transition-all"
        >
          🚀 Getting Started
        </Link>
        <Link
          href="/guides/how-to-deposit-with-bitcoin"
          className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-6 py-3 text-base shadow-lg border-4 border-white/80 drop-shadow-xl hover:scale-105 transition-all"
        >
          💰 Bitcoin Deposit
        </Link>
        <Link
          href="/guides/how-to-use-a-vpn-for-gambling"
          className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-6 py-3 text-base shadow-lg border-4 border-white/80 drop-shadow-xl hover:scale-105 transition-all"
        >
          🕶️ VPN Gambling
        </Link>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What does No KYC mean?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'No KYC means you can play at a casino without submitting identity documents or going through verification processes.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Are No KYC casinos legal?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Legality depends on your jurisdiction. Always check your local laws before playing.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Can I withdraw large amounts without KYC?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Most No KYC casinos allow withdrawals up to a certain limit without ID, but may require verification for larger amounts.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Which cryptocurrencies can I use?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'You can use Bitcoin, Ethereum, BNB, DOGE, and many other popular coins.'
              }
            }
          ]
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.yourdomain.com/' },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.yourdomain.com/guides' },
            { '@type': 'ListItem', position: 3, name: 'No KYC Crypto Casinos', item: 'https://www.yourdomain.com/guides/no-kyc-crypto-casinos' }
          ]
        })
      }} />
      </div>
    </>
  );
}
