"use client"
import '../styles/globals.css';
// import VegasHeader from "@/components/VegasHeader";
import { FooterBrandingStrip } from "@/components/BrandingElements";
import DesktopMenu from "@/components/DesktopMenu";
import MobileMenu from "@/components/MobileMenu";
import { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Mobiel menu state
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {/* Achtergrondafbeelding als absolute laag */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/images/crypto-casino-online.png"
            alt="Crypto Casino Online Background"
            className="w-full h-full object-cover object-center"
            draggable="false"
          />
          {/* Overlay voor extra donkere sfeer, indien gewenst */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-zinc-900/70 to-black/90" />
        </div>
        <Toaster position="top-right" />
        {/* Zwarte infobalk boven menu, altijd zwart */}
        <div className="w-full text-yellow-400 text-center font-bold py-2 text-lg tracking-wide z-50" style={{backgroundColor: '#000', opacity: 1, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.7)'}}>
          Welcome to Crypto Online Casino – The #1 Vegas-Style Crypto Guide 🎰
        </div>
        {/* Desktop menu - sticky direct onder de infobalk, zonder extra ruimte */}
        <nav className="sticky top-0 left-0 w-full hidden md:flex justify-center items-center gap-2 py-4 bg-purple-800 z-40 border-b-2 border-purple-900">
          <DesktopMenu />
        </nav>
        {/* Mobiel menu toggle */}
        <div className="md:hidden flex justify-between items-center px-4 py-4 bg-purple-800 shadow-xl z-40">
          <button onClick={() => setMobileOpen(true)} className="text-white text-2xl font-bold">☰ Menu</button>
        </div>
        {/* Mobiel menu overlay */}
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        {/* Oude VegasHeader verwijderd, alleen nieuw menu blijft */}
        <main className="pt-24 max-w-7xl mx-auto w-full px-2 sm:px-6 md:px-8">{children}</main>
        <FooterBrandingStrip />
      </body>
    </html>
  );
}
