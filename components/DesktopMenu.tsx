import Link from 'next/link';
import { menuItems } from './menuData';
import { FaChevronDown } from 'react-icons/fa';

export default function DesktopMenu() {
  return (
    <nav className="hidden md:flex justify-center items-center gap-2 py-4 bg-purple-800 z-40">
      {menuItems.map((item) =>
        item.children ? (
          <div
            key={item.label}
            className="relative group"
          >
            <button
              className="px-3 py-2 text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 transition font-semibold neon-navbar-btn border-2 border-purple-400 min-w-[110px] text-center flex items-center gap-2 focus:outline-none"
              tabIndex={0}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
              <FaChevronDown className="ml-1 text-sm" />
            </button>
            {/* Dropdown: show on group-hover, directly below button */}
            <div
              className="absolute left-0 top-full w-72 bg-gradient-to-br from-purple-800 to-purple-900 neon-navbar-btn border-2 border-purple-400 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200 p-2 flex flex-col gap-1 z-50 rounded-none"
            >
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href ?? '#'}
                  className="flex items-center gap-3 px-3 py-2 text-white hover:bg-purple-700 font-medium transition-colors duration-150 rounded-none"
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
            className="px-3 py-2 text-white bg-purple-700 hover:bg-purple-600 transition font-semibold neon-navbar-btn border-2 border-purple-400 min-w-[110px] text-center flex items-center gap-2"
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}

