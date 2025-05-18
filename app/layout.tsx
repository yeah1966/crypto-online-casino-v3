import "../styles/globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  metadataBase: new URL('https://www.crypto-online-casino.com'),
  title: "Crypto Online Casino | Vegas-style gambling meets crypto rewards",
  description: "Explore top-rated crypto casinos with thrilling bonuses, fast payouts, and a Las Vegas vibe. Welcome to Crypto Online Casino!",

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="ga-site-verification" content="D9g8tk-yLwOk8LVeD66C_5zc" />
       {/* Google Analytics */}
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-R4CJL887NL"></script>
       <script dangerouslySetInnerHTML={{__html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-R4CJL887NL');
       `}} />
       {/* Structured Data: WebSite + SearchAction */}
       <script type="application/ld+json" suppressHydrationWarning>{`
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Crypto Online Casino",
  "url": "https://crypto-online-casino.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://crypto-online-casino.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
`}</script>
       {/* Open Graph tags */}
       <meta property="og:title" content="Crypto Online Casino | Vegas-style gambling meets crypto rewards" />
       <meta property="og:description" content="Explore top-rated crypto casinos with thrilling bonuses, fast payouts, and a Las Vegas vibe. Welcome to Crypto Online Casino!" />
       <meta property="og:image" content="https://crypto-online-casino.com/og/crypto-online-casino.png" />
       <meta property="og:url" content="https://crypto-online-casino.com/" />
       {/* Twitter card tags */}
       <meta name="twitter:card" content="summary_large_image" />
       <meta name="twitter:title" content="Crypto Online Casino | Vegas-style gambling meets crypto rewards" />
       <meta name="twitter:description" content="Explore top-rated crypto casinos with thrilling bonuses, fast payouts, and a Las Vegas vibe. Welcome to Crypto Online Casino!" />
       <meta name="twitter:image" content="https://crypto-online-casino.com/og/crypto-online-casino.png" />
      </head>
      <body className="bg-black text-white font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
