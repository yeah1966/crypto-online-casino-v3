import Link from 'next/link';
import { menuItems } from './menuData';
import { FaChevronDown } from 'react-icons/fa';
import { useState, useRef } from 'react';

export default function DesktopMenu() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 180);
  };

  return (
    <nav className="hidden md:flex justify-center items-center gap-2 py-4 bg-purple-800 z-40">
      {menuItems.map((item) =>
        item.children ? (
          <div
            key={item.label}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 transition font-semibold shadow-md min-w-[140px] text-center flex items-center gap-2"
            >
              {/* Toon altijd het icon */}
              <span className="text-lg">{item.icon}</span>
              {item.label}
              <FaChevronDown className="ml-1 text-sm" />
            </button>
            <div
              className={`absolute left-0 mt-2 w-72 bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl shadow-2xl opacity-0 pointer-events-none transition-opacity duration-200 p-2 border border-purple-200 flex flex-col gap-1 z-50 ${openDropdown === item.label ? 'opacity-100 pointer-events-auto' : ''}`}
            >
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href ?? '#'}
                  className="flex items-center gap-3 px-4 py-2 text-white hover:bg-purple-700 rounded-lg font-medium transition-colors duration-150"
                >
                  {child.icon && <span className="text-lg">{child.icon}</span>}
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={item.href}
            href={item.href ?? '#'}
            className="px-4 py-2 rounded-full text-white bg-purple-700 hover:bg-purple-600 transition font-semibold shadow-md min-w-[140px] text-center flex items-center gap-2"
          >
            {/* Toon altijd het icon */}
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
