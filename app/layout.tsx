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
      </head>
      <body className="bg-black text-white font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
