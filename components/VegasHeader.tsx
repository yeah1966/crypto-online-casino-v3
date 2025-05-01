"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaGift, FaStar, FaInfoCircle, FaBook, FaQuestionCircle, FaBlog, FaTrophy, FaCoins, FaBolt, FaLock, FaChartBar, FaUserSecret } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

// Menu structure (identiek aan CasinoNavbar)
type MenuItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  dropdown?: MenuItem[];
};

const menu: MenuItem[] = [
  { label: "Home", href: "/", icon: <FaHome /> },
  { label: "Reviews", href: "/crypto-casino-reviews", icon: <FaStar /> },
  {
    label: "Bonuses",
    icon: <FaGift />,
    dropdown: [
      { label: "Best Bonuses", href: "/best-crypto-casino-bonuses", icon: <FaBolt /> },
      { label: "Welcome Bonus", href: "/welcome-bonus", icon: <FaLock /> },
      { label: "Free Spins", href: "/free-spins", icon: <FaCoins /> },
      { label: "No Deposit", href: "/no-deposit", icon: <FaLock /> },
    ],
  },
  { label: "Sportsbetting", href: "/sports", icon: <FaChartBar /> },
  {
    label: "Guides",
    icon: <FaBook />,
    dropdown: [
      { label: "Getting Started", href: "/guides/getting-started", icon: <FaBolt /> },
      { label: "Crypto Gambling 101", href: "/guides/crypto-gambling-101", icon: <FaChartBar /> },
      { label: "Deposit with Bitcoin", href: "/guides/how-to-deposit-with-bitcoin", icon: <FaCoins /> },
      { label: "Crypto Payments", href: "/guides/crypto-payments-guide", icon: <FaCoins /> },
      { label: "VPN Guide", href: "/guides/how-to-use-a-vpn-for-gambling", icon: <FaUserSecret /> },
      { label: "Provably Fair", href: "/guides/fair-play-provably-fair", icon: <FaTrophy /> },
      { label: "Stablecoins", href: "/guides/what-are-stablecoins-casino-gambling", icon: <FaCoins /> },
    ],
  },
  {
    label: "Slots & Games",
    icon: <FaTrophy />,
    dropdown: [
      { label: "Top 10", href: "/top-10", icon: <FaTrophy /> },
      { label: "Top 5 RTP Slots", href: "/top-5-slots-with-highest-rtp", icon: <FaChartBar /> },
      { label: "Litecoin Casinos", href: "/best-litecoin-casinos", icon: <FaCoins /> },
    ],
  },
  {
    label: "Info",
    icon: <FaInfoCircle />,
    dropdown: [
      { label: "Blog", href: "/blog", icon: <FaBlog /> },
      { label: "FAQ", href: "/faq", icon: <FaQuestionCircle /> },
      { label: "About", href: "/about", icon: <FaInfoCircle /> },
    ],
  },
];

export default function VegasHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // Close dropdowns on desktop when clicking outside
  useEffect(() => {
    if (!openDropdown) return;
    const handleClick = (e: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openDropdown]);

  // Desktop: hover/focus fix met timers zodat menu niet direct sluit
  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 180);
  };

  // NavItems omzetten naar { label, path, icon } voor MobileMenu
  // Alleen items met een geldige href (dus geen dropdown-hoofdcategorieën)
  const navItems = menu.filter(item => !!item.href).map(item => ({
    label: item.label,
    path: item.href || '#',
    icon: item.icon,
  }));

  return (
    <header className="w-full">
      <nav ref={navRef} className="w-full flex flex-wrap justify-center items-center gap-2 py-4 bg-gradient-to-r from-purple-800 to-purple-900 shadow-xl z-40 relative">
        {/* Hamburger button - alleen mobiel */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden absolute right-4 top-4 text-yellow-300 text-3xl p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 z-50 bg-black bg-opacity-40"
          aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
        >
          {isMobileMenuOpen ? "×" : "≡"}
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex flex-wrap justify-center items-center gap-4 w-full">
          {menu.map((item) =>
            item.dropdown ? (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-2 px-4 py-3 rounded-full font-bold transition-all duration-150 w-full bg-purple-700 text-white hover:bg-purple-600"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
                {/* Zwevende Vegas-style dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl shadow-lg bg-indigo-900 border border-yellow-300 z-50 transition-all duration-200 vegas-fade-in ${openDropdown === item.label ? 'block' : 'hidden'}`}
                  style={{ minWidth: 240 }}
                >
                  {item.dropdown.map((sub) => (
                    sub.href && (
                      <Link
                        key={sub.href}
                        href={sub.href as string}
                        className="flex items-center gap-2 px-5 py-2 text-white font-semibold rounded-lg transition-all duration-150 hover:bg-[#a21caf] hover:text-yellow-300"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(null);
                          setTimeout(() => {
                            if (sub.href) router.push(sub.href);
                          }, 30);
                        }}
                      >
                        <span className="text-xl">{sub.icon}</span>
                        <span>{sub.label}</span>
                      </Link>
                    )
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.label} className="relative">
                <Link
                  href={item.href!}
                  className="flex items-center gap-2 px-4 py-3 rounded-full font-bold transition-all duration-150 w-full bg-purple-700 text-white hover:bg-purple-600"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenDropdown(null);
                    setTimeout(() => {
                      if (item.href) router.push(item.href);
                    }, 30);
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          )}
        </ul>
        {/* MobileMenu component */}
        <MobileMenu
          open={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </nav>
      {/* Branding for desktop */}
      <div className="hidden md:block w-full text-center bg-black text-yellow-400 text-lg font-bold tracking-wide py-3 shadow-md mt-4">
        Welcome to <span className="text-white">Crypto Online Casino</span> – The #1 Vegas-Style Crypto Guide 🎰
      </div>
      <style jsx global>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .vegas-fade-in {
          animation: vegasFadeIn 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes vegasFadeIn {
          0% { opacity: 0; transform: scale(0.96) translateY(-10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .neon-glow {
          text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 15px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff69b4;
        }
      `}</style>
    </header>
  );
}
