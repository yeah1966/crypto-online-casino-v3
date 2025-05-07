import Link from 'next/link';
import React from "react";

export function StickyBrandingHeader() {
  return (
    <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-900 to-purple-700 py-1 text-center text-yellow-400 text-sm shadow-lg">
      <span className="font-bold">Crypto Online Casino</span> – Your gateway to winning with crypto 🎰
    </div>
  );
}

export function COCNavbarBadge() {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-yellow-400 text-purple-900 font-black px-2 py-1 text-xs rounded-full shadow-sm animate-pulse">
        COC
      </span>
      <span className="text-white font-bold hidden md:inline">Crypto Online Casino</span>
    </div>
  );
}

export function FooterBrandingStrip() {
  return (
    <footer className="mt-16 py-4 bg-black text-center text-sm text-white/70 border-t border-white/10">
      🎲 You’re on <span className="text-yellow-400 font-semibold">Crypto Online Casino</span> — spin smart, win big!
      <div className="mt-2">
        <Link
          href="/guides/getting-started"
          className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
        >
          Start Playing
        </Link>
      </div>
    </footer>
  );
}
