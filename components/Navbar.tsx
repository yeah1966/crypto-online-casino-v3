import { useState, useCallback } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

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
      { label: "all_bonuses", path: "/best-crypto-casino-bonuses" },
      { label: "no_deposit", path: "/no-deposit" },
      { label: "free_spins", path: "/free-spins" }
    ]
  },
  {
    label: "guides",
    submenu: [
      { label: "getting_started", path: "/getting-started" },
      { label: "faq", path: "/faq" },
      { label: "blog", path: "/blog" }
    ]
  }
];

export default function Navbar() {
  const { t } = useTranslation("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.submenu ? (
                  <>
                    <button className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${item.submenu.some(sub => sub.path === router.pathname) ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}>{t(item.label)}</button>
                    {activeSubmenu === item.label && (
                      <div 
                        className="absolute z-50 transform w-screen max-w-md lg:max-w-2xl lg:left-1/2 lg:-translate-x-1/2"
                        style={{ top: "calc(100% + 0.5rem)" }}
                      >
                        <div className="absolute inset-0 -top-4 bg-transparent" />
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                href={subItem.path}
                                className={`group flex items-start p-3 rounded-lg hover:bg-gray-700 transition-colors ${router.pathname === subItem.path ? 'text-purple-400' : 'text-white'}`}
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium group-hover:text-purple-400 transition-colors">
                                    {t(subItem.label)}
                                  </p>
                                  {subItem.description && (
                                    <p className="mt-1 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                      {subItem.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.label} className="space-y-1">
                  <div className="text-gray-300 px-3 py-2 text-base font-medium">
                    {t(item.label)}
                  </div>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      href={subItem.path}
                      className={`block px-3 py-2 text-base font-medium pl-6 rounded transition-colors ${router.pathname === subItem.path ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
                    >
                      {t(subItem.label)}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${router.pathname === item.path ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {t(item.label)}
                </Link>
              )
            )}
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
