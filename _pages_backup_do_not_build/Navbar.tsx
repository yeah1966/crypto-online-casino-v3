import { useState, useCallback } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { FaUserSecret } from "react-icons/fa";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const current = i18n.language;
  const changeLang = (lang: string) => {
    router.push(router.asPath, router.asPath, { locale: lang });
  };
  return (
    <div className="flex items-center gap-2 ml-4">
      <button
        onClick={() => changeLang("en")}
        className={`text-2xl px-1 transition ${current === "en" ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
        aria-label="English"
      >🇬🇧</button>
      <button
        onClick={() => changeLang("es")}
        className={`text-2xl px-1 transition ${current === "es" ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
        aria-label="Español"
      >🇪🇸</button>
    </div>
  );
};

const navItems = [
  { label: "home", path: "/" },
  {
    label: "reviews",
    submenu: [
      { label: "all_reviews", path: "/crypto-casino-reviews", description: "Compare all crypto casinos" },
      { label: "bitstarz", path: "/crypto-casino-reviews/bitstarz", description: "Fast payouts, 3,500+ games" },
      { label: "cloudbet", path: "/crypto-casino-reviews/cloudbet", description: "High stakes, sports betting" },
      { label: "coinpoker", path: "/crypto-casino-reviews/coinpoker", description: "Crypto poker platform" },
      { label: "7bit", path: "/crypto-casino-reviews/7bit", description: "Retro theme, huge selection" },
      { label: "betplay", path: "/crypto-casino-reviews/betplay", description: "Modern crypto casino" },
      { label: "metaspins", path: "/crypto-casino-reviews/metaspins", description: "NFT rewards & gamification" }
    ]
  },
  {
    label: "bonuses",
    submenu: [
      { label: "all_bonuses", path: "/best-crypto-casino-bonuses", icon: <span>⚡️</span> },
      { label: "welcome_bonus", path: "/welcome-bonus", icon: <span>🔒</span> },
      { label: "free_spins", path: "/free-spins", icon: <span>🎰</span> },
      { label: "no_deposit", path: "/no-deposit", icon: <span>🎲</span> },
      { label: "vip_deals", path: "/vip-deals", icon: <span>👑</span> },
    ]
  },
  {
    label: "guides",
    submenu: [
      { label: "getting_started", path: "/getting-started" },
      { label: "no_kyc_crypto_casinos", path: "/guides/no-kyc-crypto-casinos", icon: <FaUserSecret /> },
      { label: "faq", path: "/faq" },
      { label: "blog", path: "/blog" }
    ]
  }
];

export default function Navbar() {
  const { t } = useTranslation("common");
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    setActiveSubmenu(label);
  }, [closeTimeout]);

  const handleMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
    setCloseTimeout(timeout);
  }, []);

  return (
    <nav className="bg-gray-900 relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              Crypto Casino
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.submenu ? (
                  <>
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${router.pathname === item.path ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                    >
                      {t(item.label)}
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-56 rounded-lg shadow-lg bg-purple-700 py-2 z-50 transition-opacity duration-200 ${activeSubmenu === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-purple-800 rounded-md transition-colors"
                        >
                          {subItem.icon}
                          <span>{t(subItem.label)}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${router.pathname === item.path ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                  >
                    {t(item.label)}
                  </Link>
                )}
              </div>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
