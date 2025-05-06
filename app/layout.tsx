import "../styles/globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Crypto Online Casino | Vegas-style gambling meets crypto rewards",
  description: "Explore top-rated crypto casinos with thrilling bonuses, fast payouts, and a Las Vegas vibe. Welcome to Crypto Online Casino!",
  openGraph: {
    title: "Crypto Online Casino",
    description: "Experience Vegas thrills with crypto rewards. Discover top casinos, bonuses, and more.",
    url: "https://crypto-online-casino.com",
    siteName: "Crypto Online Casino",
    images: [
      {
        url: "https://crypto-online-casino.com/og/crypto-online-casino.png",
        width: 1200,
        height: 628,
        alt: "Crypto Online Casino homepage card",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
