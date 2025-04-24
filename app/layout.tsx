"use client"
import '../styles/globals.css';
import VegasHeader from "@/components/VegasHeader";
import { FooterBrandingStrip } from "@/components/BrandingElements";
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-900 via-purple-800 to-black min-h-screen">
        <Toaster position="top-right" />
        <VegasHeader />
        <main className="pt-24 max-w-7xl mx-auto w-full px-2 sm:px-6 md:px-8">{children}</main>
        <FooterBrandingStrip />
      </body>
    </html>
  );
}
