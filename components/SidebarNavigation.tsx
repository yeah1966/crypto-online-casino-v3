import React from 'react';

interface SidebarNavigationProps {
  items: { label: string; href: string }[];
  activeHref?: string;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ items, activeHref }) => (
  <nav className="bg-white rounded-xl shadow p-4 mb-8">
    <ul>
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className={`block py-2 px-3 rounded font-medium transition-colors ${activeHref === item.href ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default SidebarNavigation;
