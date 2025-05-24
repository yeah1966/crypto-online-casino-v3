import "../styles/globals.css";
import ClientLayout from "@/components/ClientLayout";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL('https://www.crypto-online-casino.com'),
  title: "Crypto Online Casino | Vegas-style gambling meets crypto rewards",
  description: "Explore top-rated crypto casinos with thrilling bonuses, fast payouts, and a Las Vegas vibe. Welcome to Crypto Online Casino!",

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* GPWA Verification Script */}
        <Script id="gpwa-script" strategy="afterInteractive">
          {`
            var hd = document.getElementsByTagName('head').item(0);
            var js = document.createElement('script');
            js.setAttribute('language', 'javascript');
            js.setAttribute('src', 'https://certify.gpwa.org/script/crypto-online-casino.com/');
            hd.appendChild(js);
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R4CJL887NL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R4CJL887NL');
          `}
        </Script>
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

      </head>
      <body className="bg-black text-white font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
