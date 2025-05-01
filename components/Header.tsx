import React from 'react';
import Link from "next/link";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Bonuses', href: '/best-crypto-casino-bonuses' },
  { label: 'Sportsbetting', href: '/sports' },
  { label: 'Guides', href: '/crypto-gambling-101' },
  { label: 'Slots & Games', href: '/slots' },
  { label: 'Reviews', href: '/crypto-casino-reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
];

const Header: React.FC = () => (
  <header className="w-full">
    {/* Vegas-style main navigation */}
    <nav className="flex flex-wrap justify-center items-center gap-2 py-4 bg-gradient-to-r from-purple-800 to-purple-900 shadow-xl z-40">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={
            item.label === 'Bonuses' || item.label === 'Guides' || item.label === 'Slots & Games'
              ? "px-4 py-2 rounded-full text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 transition font-semibold shadow-md"
              : "px-4 py-2 rounded-full text-white bg-purple-700 hover:bg-purple-600 transition font-semibold shadow-md"
          }
          style={{ minWidth: 140, textAlign: 'center' }}
        >
          {item.label === 'Home' && '🏠 '}
          {item.label === 'Reviews' && '⭐ '}
          {item.label === 'Bonuses' && '🎁 '}
          {item.label === 'Guides' && '📖 '}
          {item.label === 'Slots & Games' && '🏆 '}
          {item.label === 'Blog' && '💼 '}
          {item.label === 'FAQ' && '❓ '}
          {item.label === 'About' && '🔎 '}
          {item.label === 'Sportsbetting' && '🏈 '}
          {item.label}
        </Link>
      ))}
    </nav>

    {/* Branding strip below nav */}
    <div className="text-center bg-black text-yellow-400 text-lg font-bold tracking-wide py-3 shadow-md">
      Welcome to <span className="text-white">Crypto Online Casino</span> – The #1 Vegas-Style Crypto Guide 🎰
    </div>
  </header>
);

export default Header;
