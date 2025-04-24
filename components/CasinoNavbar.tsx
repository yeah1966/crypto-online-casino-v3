"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaGift, FaDice, FaStar, FaInfoCircle, FaBook, FaQuestionCircle, FaBlog, FaTrophy, FaCoins, FaBolt, FaLock, FaChartBar, FaUserSecret } from "react-icons/fa";
import { useState, useEffect } from "react";
import { COCNavbarBadge } from "@/components/BrandingElements";

const menu = [
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

export default function CasinoNavbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-black shadow-lg transition-all duration-300 ${scrolled ? "shadow-2xl neon-navbar-glow" : ""}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-yellow-300 drop-shadow">🎲</span>
            <COCNavbarBadge />
          </div>
          <button
            className="md:hidden text-pink-400 text-3xl focus:outline-none"
            onClick={() => setMobileMenu((open) => !open)}
            aria-label="Open Menu"
          >
            ☰
          </button>
          <ul className="hidden md:flex gap-3">
            {menu.map((item) => (
              <li key={item.label} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/30 text-white font-bold text-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-[#a21caf] hover:text-yellow-300 neon-navbar-btn ${openDropdown === item.label ? 'bg-[#a21caf] text-yellow-300 border-[#a21caf]' : ''}`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span>{item.label}</span>
                      <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    <div
                      className={`absolute left-0 mt-2 min-w-[210px] bg-[#241f6b] border border-[#7c3aed] rounded-xl shadow-xl py-2 transition-all duration-200 ${openDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} backdrop-blur-xl`}
                      style={{ zIndex: 100 }}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-center gap-2 px-5 py-2 text-white font-semibold rounded-lg transition-all duration-150 hover:bg-[#a21caf] hover:text-yellow-300 ${pathname === sub.href ? 'bg-[#a21caf] text-yellow-300' : ''}`}
                        >
                          <span className="text-xl">{sub.icon}</span>
                          <span>{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/30 text-white font-bold text-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-[#a21caf] hover:text-yellow-300 neon-navbar-btn ${pathname === item.href ? 'bg-[#a21caf] text-yellow-300 border-[#a21caf]' : ''}`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile menu */}
        {mobileMenu && (
          <ul className="md:hidden flex flex-col gap-2 px-4 pb-4 animate-fade-in-down">
            {menu.map((item) => (
              <li key={item.label}>
                {item.dropdown ? (
                  <div>
                    <button
                      className={`flex items-center gap-2 px-4 py-3 rounded-full font-bold transition-all duration-150 w-full ${pathname === item.href ? "bg-yellow-300 text-pink-700" : "bg-[#241f6b] text-white hover:bg-pink-600 hover:text-yellow-300"}`}
                      onClick={() => setMobileMenu(false)}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                    <div className="mt-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-center gap-2 px-5 py-2 text-white font-semibold rounded-lg transition-all duration-150 hover:bg-[#a21caf] hover:text-yellow-300 ${pathname === sub.href ? 'bg-[#a21caf] text-yellow-300' : ''}`}
                        >
                          <span className="text-xl">{sub.icon}</span>
                          <span>{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className={`flex items-center gap-2 px-4 py-3 rounded-full font-bold transition-all duration-150 w-full ${pathname === item.href ? "bg-yellow-300 text-pink-700" : "bg-[#241f6b] text-white hover:bg-pink-600 hover:text-yellow-300"}`}
                    onClick={() => setMobileMenu(false)}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
      <div className="ml-4">
        <Link
          href="/best-crypto-casino-bonuses"
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-pink-600 text-white font-bold text-lg shadow-lg border-2 border-yellow-300 neon-navbar-btn transition-all duration-200 hover:bg-yellow-300 hover:text-pink-700 animate-pulse"
        >
          <FaGift className="text-2xl" />
          <span>Claim Bonus</span>
        </Link>
      </div>
      <style jsx global>{`
        .neon-navbar-glow {
          box-shadow: 0 0 20px 4px #f472b6, 0 0 60px 12px #fbbf24;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
