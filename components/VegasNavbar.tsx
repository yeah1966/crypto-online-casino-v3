'use client';

import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/', emoji: '🏠' },
  { label: 'Spin Wheel', href: '/wheel', emoji: '🎰' },
  { label: 'Bonuses', href: '/best-crypto-casino-bonuses', emoji: '🎁' },
  { label: 'Guides', href: '/getting-started', emoji: '📚' },
  { label: 'FAQ', href: '/faq', emoji: '❓' },
];

export default function VegasNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md border-b border-pink-500">
      <ul className="flex justify-center gap-4 p-3">
        {navItems.map(({ label, href, emoji }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-yellow-400 hover:text-pink-500 text-lg font-extrabold tracking-wide neon-glow transition duration-300 px-4 py-2 rounded-md border border-yellow-400 hover:border-pink-500"
            >
              <span className="mr-1">{emoji}</span> {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
