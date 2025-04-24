import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useTranslation } from "next-i18next";

const faqData = [
  {
    theme: "Deposits & Withdrawals",
    questions: [
      {
        q: "How do I deposit with Bitcoin or crypto?",
        a: (
          <span>
            Go to the cashier at your chosen casino, select your cryptocurrency, and send the required amount from your wallet. See our <Link href="/getting-started" className="text-purple-400 underline">getting started guide</Link> for step-by-step instructions.
          </span>
        ),
      },
      {
        q: "How fast are crypto withdrawals?",
        a: "Most crypto withdrawals are processed within minutes, but times can vary depending on the casino and network congestion.",
      },
      {
        q: "Are there fees for deposits or withdrawals?",
        a: "Most casinos do not charge fees, but you may pay a small blockchain transaction fee.",
      },
    ],
  },
  {
    theme: "Bonuses & Promotions",
    questions: [
      {
        q: "What is a no deposit bonus?",
        a: (
          <span>
            A no deposit bonus is a free offer for new players—no deposit required. Check our <Link href="/no-deposit" className="text-purple-400 underline">no deposit bonuses</Link> page for the latest offers.
          </span>
        ),
      },
      {
        q: "How do I claim free spins?",
        a: (
          <span>
            Register at a casino offering free spins, then follow their instructions. See our <Link href="/free-spins" className="text-purple-400 underline">free spins bonuses</Link> page.
          </span>
        ),
      },
      {
        q: "Can I get multiple bonuses?",
        a: "Many casinos offer welcome packages over several deposits. See our bonuses overview for details.",
      },
    ],
  },
  {
    theme: "Security & Fairness",
    questions: [
      {
        q: "Are crypto casinos safe?",
        a: "Choose reputable casinos with licenses, good reviews, and provably fair games. Always use strong passwords and enable 2FA.",
      },
      {
        q: "What is provably fair?",
        a: (
          <span>
            Provably fair is a cryptographic method to verify game fairness. Read more in our upcoming <Link href="/blog/provably-fair" className="text-purple-400 underline">blog post</Link>.
          </span>
        ),
      },
      {
        q: "Do I need to complete KYC?",
        a: "Some casinos require identity verification for large withdrawals or to comply with regulations.",
      },
    ],
  },
  {
    theme: "Using Crypto",
    questions: [
      {
        q: "Which cryptocurrencies can I use?",
        a: "Most casinos accept Bitcoin, Ethereum, Litecoin, USDT, and more.",
      },
      {
        q: "How do I get crypto for gambling?",
        a: (
          <span>
            Buy crypto on a trusted exchange and send it to your own wallet. See our <Link href="/getting-started" className="text-purple-400 underline">getting started guide</Link>.
          </span>
        ),
      },
      {
        q: "Can I play anonymously?",
        a: "Some casinos allow anonymous play, but check their terms for details.",
      },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<{[key:string]:number|null}>({});
  const { i18n } = useTranslation();

  // JSON-LD structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(theme =>
      theme.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof q.a === 'string' 
            ? q.a 
            : (() => {
                // Render React node to string, preserving links as anchor tags
                if (!q.a) return '';
                if (typeof q.a === 'object' && q.a.props && q.a.props.children) {
                  // Extract text and links
                  const children = Array.isArray(q.a.props.children) ? q.a.props.children : [q.a.props.children];
                  return children.map(child => {
                    if (typeof child === 'string') return child;
                    if (child && child.type === Link) {
                      const href = child.props.href;
                      const text = child.props.children;
                      return `<a href=\"${href}\">${text}</a>`;
                    }
                    return '';
                  }).join('');
                }
                return '';
              })(),
        },
      }))
    ),
  };

  return (
    <>
      <Head>
        <title>Crypto Casino FAQ (2025) | Questions & Answers</title>
        <meta name="description" content="Frequently asked questions about crypto casinos, deposits, bonuses, security, and more. Learn all about Bitcoin gambling." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>
      <main className="max-w-4xl mx-auto py-8 px-4 text-white">
        {i18n.language === "es" && (
          <div className="bg-yellow-400 text-black rounded-lg px-4 py-2 mb-6 text-center font-semibold text-lg shadow">
            ¡Pronto disponible en español!
          </div>
        )}
        <h1 className="text-2xl md:text-4xl font-bold mb-8">Crypto Casino FAQ</h1>
        {faqData.map((theme, idx) => (
          <section key={theme.theme} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{theme.theme}</h2>
            <div className="space-y-4">
              {theme.questions.map((item, qIdx) => {
                const isOpen = open[theme.theme] === qIdx;
                return (
                  <div key={item.q} className="border border-gray-700 rounded">
                    <button
                      className="w-full text-left px-4 py-3 font-medium flex justify-between items-center focus:outline-none hover:bg-gray-800 transition"
                      onClick={() => setOpen(o => ({ ...o, [theme.theme]: isOpen ? null : qIdx }))}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <span className="ml-4">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-gray-300">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
