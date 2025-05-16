import Link from 'next/link';
import { menuItems } from './menuData';
import { useState } from 'react';

// Alleen de belangrijkste menu-items voor mobiel
const mobileMainItems = menuItems.filter(item =>
  [
    'Home',
    'Crypto Guides', // Ensure this matches the label in your menuData
    'Bonuses',
    'Sportsbetting',
    'Casino Reviews',
    'Guides',
    'Slots & Games',
    'More'
  ].includes(item.label)
);

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-60 transition-opacity duration-200 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <aside
        className={`fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-purple-800 to-purple-900 shadow-lg p-6 transform transition-transform duration-200 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="mb-6 text-white">Sluiten ✕</button>
        <nav className="flex flex-col gap-2">
          {mobileMainItems.map(item =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="w-full text-left px-4 py-2 rounded-none text-white bg-purple-700 hover:bg-purple-600 font-semibold"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                </button>
                {openDropdown === item.label && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {item.children.filter(child => !!child.href).map(child => (
                      <Link key={child.href} href={child.href!} className="block px-4 py-2 text-gray-200 hover:bg-purple-600 rounded-none flex items-center gap-2">
                        {child.icon && <span className="text-lg">{child.icon}</span>}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-none text-white bg-purple-700 hover:bg-purple-600 font-semibold"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className="px-4 py-2 rounded-none text-white bg-purple-700 opacity-60 font-semibold cursor-not-allowed"
                >
                  {item.label}
                </span>
              )
            )
          )}
        </nav>
      </aside>
    </div>
  );
}
