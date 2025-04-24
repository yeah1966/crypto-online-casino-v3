"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaGift, FaDice, FaStar, FaInfoCircle, FaBook, FaQuestionCircle, FaBlog, FaTrophy, FaCoins, FaBolt, FaLock, FaChartBar, FaUserSecret } from "react-icons/fa";

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
  { label: "Wheel", href: "/spin-to-win", icon: <FaDice /> },
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
  { label: "Blog", href: "/blog", icon: <FaBlog /> },
  { label: "FAQ", href: "/faq", icon: <FaQuestionCircle /> },
  { label: "About", href: "/about", icon: <FaInfoCircle /> },
];

export default function VegasHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // Close dropdowns on mobile when clicking outside
  useEffect(() => {
    if (!openDropdown && !mobileMenu) return;
    const handleClick = (e: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openDropdown, mobileMenu]);

  // Helper: detect if device is touch (mobile)
  const isTouch = typeof window !== 'undefined' && (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));

  // Desktop: hover/focus fix met timers zodat menu niet direct sluit
  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 180);
  };

  return (
    <header className="w-full">
      <nav ref={navRef} className="w-full flex flex-wrap justify-center items-center gap-2 py-4 bg-gradient-to-r from-purple-800 to-purple-900 shadow-xl z-40 relative">
        {/* Mobile menu button */}
        <button
          id="debug-mobile-menu-btn"
          style={{ border: '4px solid red', zIndex: 9999, position: 'relative', background: 'yellow', color: 'black' }}
          className="md:hidden absolute left-4 top-4 text-yellow-300 text-3xl focus:outline-none"
          onClick={() => {
            console.log('MENU BUTTON CLICKED!');
            setMobileMenu((prev) => !prev);
          }}
          aria-label="Open Menu"
        >
          ☰
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap justify-center items-center gap-2 w-full">
          {menu.map((item) => (
            item.dropdown ? (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => !isTouch && handleMouseEnter(item.label)}
                onMouseLeave={() => !isTouch && handleMouseLeave()}
              >
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 font-semibold shadow-md focus:outline-none focus:ring-0"
                  tabIndex={0}
                  onClick={isTouch ? () => setOpenDropdown(openDropdown === item.label ? null : item.label) : undefined}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
                <div
                  className={`absolute left-0 mt-2 flex-col bg-indigo-900 text-white rounded-xl p-3 z-50 w-64 shadow-lg border border-yellow-300 transition-all duration-200 transform ${openDropdown === item.label ? "flex vegas-fade-in" : "hidden"}`}
                  style={{ minWidth: 240 }}
                  onMouseEnter={() => !isTouch && handleMouseEnter(item.label)}
                  onMouseLeave={() => !isTouch && handleMouseLeave()}
                >
                  {item.dropdown.map((sub) => (
                    sub.href && (
                      <Link
                        key={sub.href}
                        href={sub.href as string}
                        className="flex items-center gap-2 py-1 hover:text-yellow-300"
                        tabIndex={0}
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-purple-700 hover:bg-purple-600 transition font-semibold shadow-md"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          ))}
        </ul>
        {/* Branding strip for desktop */}
        <div className="hidden md:block w-full text-center bg-black text-yellow-400 text-lg font-bold tracking-wide py-3 shadow-md mt-4">
          Welcome to <span className="text-white">Crypto Online Casino</span> – The #1 Vegas-Style Crypto Guide 🎰
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenu && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4 animate-fade-in-down bg-gradient-to-b from-purple-900 via-purple-800 to-black shadow-xl z-50 relative">
          {menu.map((item) => (
            item.dropdown ? (
              <li key={item.label} className="relative group">
                <button
                  style={{ border: '2px solid lime', zIndex: 9999, position: 'relative' }}
                  className="flex items-center gap-2 px-4 py-3 rounded-full font-bold transition-all duration-150 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 hover:from-yellow-300 hover:to-orange-400 focus:outline-none focus:ring-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Dropdown toggle:', item.label, openDropdown);
                    setOpenDropdown(openDropdown === item.label ? null : item.label);
                  }}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
                <div className={`mt-2 flex-col bg-indigo-900 text-white rounded-xl p-3 z-50 w-64 shadow-lg border border-yellow-300 transition-all duration-200 transform vegas-fade-in ${openDropdown === item.label ? "flex" : "hidden"}`} style={{ minWidth: 240 }}>
                  {/* Hoofdlink bovenaan submenu, alleen tonen als er een geldige href is */}
                  {item.href && (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-5 py-2 mb-2 text-yellow-300 font-bold rounded-lg bg-purple-900 hover:bg-purple-700 transition"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenu(false);
                        setOpenDropdown(null);
                        setTimeout(() => {
                          if (item.href) router.push(item.href);
                        }, 30);
                      }}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>Alle {item.label}</span>
                    </Link>
                  )}
                  {item.dropdown.map((sub) => (
                    sub.href && (
                      <Link
                        key={sub.href}
                        href={sub.href as string}
                        className="flex items-center gap-2 px-5 py-2 text-white font-semibold rounded-lg transition-all duration-150 hover:bg-[#a21caf] hover:text-yellow-300"
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileMenu(false);
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
                    setMobileMenu(false);
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
          ))}
        </ul>
      )}
      {/* Branding for mobile */}
      <div className="md:hidden w-full text-center bg-black text-yellow-400 text-lg font-bold tracking-wide py-3 shadow-md">
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
      `}</style>
    </header>
  );
}
