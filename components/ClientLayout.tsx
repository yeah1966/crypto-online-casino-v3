"use client";

import { useState } from "react";

import DesktopMenu from "@/components/DesktopMenu";
import MobileMenu from "@/components/MobileMenu";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  

  return (
    <>
      <Toaster position="top-right" />
      {/* Zwarte infobalk boven menu, altijd zwart */}
      <div className="w-full text-yellow-400 text-center font-bold py-2 text-lg tracking-wide z-50" style={{backgroundColor: '#000', opacity: 1, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.7)'}}>
        Welcome to Crypto Online Casino – The #1 Vegas-Style Crypto Guide
      </div>
      {/* Desktop menu - sticky direct onder de infobalk, zonder extra ruimte */}
      <nav className="sticky top-0 left-0 w-full hidden md:flex justify-center items-center gap-2 py-4 bg-purple-800 z-40 border-b-2 border-purple-900">
        <DesktopMenu />
      </nav>
      {/* Mobiel menu toggle */}
      <div className="md:hidden flex justify-between items-center px-4 py-4 bg-purple-800 shadow-xl z-40">
        <button onClick={() => setMobileOpen(true)} className="text-white text-2xl font-bold">Menu</button>
      </div>
      {/* Mobiel menu overlay */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main>{children}</main>
      <Footer />
      <ConsentBanner />
    </>
  );
}
