// Centrale menu data-structuur voor DesktopMenu en MobileMenu
// --- Icon imports for new menu structure preview ---
import { FaHome, FaBookOpen, FaBtc, FaUserSecret, FaAddressCard, FaSearch, FaFeatherAlt, FaQuestion, FaStar, FaEllipsisH, FaFutbol, FaTrophy, FaBolt, FaDice, FaListAlt } from 'react-icons/fa';
import { SiLitecoin } from 'react-icons/si';
import type { ReactNode } from 'react';
// --- End icon imports ---

export type MenuItem = {
  label: string;
  href?: string;
  icon: ReactNode;
  children?: MenuItem[];
  highlight?: boolean;
};

// --- NEW MENU STRUCTURE PREVIEW (toggle this block to test new menu) ---
export const menuItems: MenuItem[] = [
  { label: "Home", href: "/", icon: <FaHome /> },
  {
    label: "Crypto Guides",
    icon: <FaBookOpen />,
    children: [
      { label: "Bitcoin Casinos", href: "/guides/bitcoin-casinos", icon: <img src='/icons/bitcoin.svg' alt='BTC' style={{width:18,height:18,display:'inline',verticalAlign:'middle'}} /> },
      { label: "Ethereum Casinos", href: "/guides/best-ethereum-casinos", icon: <img src='/icons/eth.svg' alt='ETH' style={{width:18,height:18,display:'inline',verticalAlign:'middle'}} /> },
      { label: "Binance Casinos", href: "/guides/binance-casino-guide", icon: <img src='/icons/bnb.svg' alt='BNB' style={{width:18,height:18,display:'inline',verticalAlign:'middle'}} /> },
      { label: "$DOG Casinos", href: "/guides/dog-casino-guide", icon: <img src='/icons/dog.png' alt='$DOG' style={{width:18,height:18,display:'inline',verticalAlign:'middle'}} /> },
      { label: "Dogecoin Casinos", href: "/guides/dogecoin-casino-guide", icon: <img src='/icons/doge.svg' alt='DOGE' style={{width:18,height:18,display:'inline',verticalAlign:'middle'}} /> },
      { label: "USDC Casinos", href: "/guides/usdc-casino-guide", icon: <img src='/icons/usdc.svg' alt='USDC' style={{width:18,height:18,display:'inline',verticalAlign:'middle'}} /> },
      { label: "Best Litecoin Casinos", href: "/guides/best-litecoin-casinos", icon: <img src='/icons/ltc.svg' alt='LTC' style={{width:18,height:18,display:'inline',verticalAlign:'middle'}} /> },
      { label: "Tether Casinos", href: "/guides/tether-casino-guide", icon: <img src='/icons/usdt.svg' alt='USDT' style={{width:18,height:18,display:'inline',verticalAlign:'middle'}} /> },
      
      { label: "No KYC Casinos", href: "/guides/no-kyc-crypto-casinos", icon: <FaAddressCard /> }
    ]
  },
  {
    label: "Bonuses",
    icon: <FaBookOpen />,
    children: [
      { label: "Best Bonuses", href: "/best-crypto-casino-bonuses", icon: <FaBtc /> },
      { label: "Welcome Bonus", href: "/bonuses/welcome-bonus", icon: <FaUserSecret /> },
      { label: "Free Spins", href: "/bonuses/free-spins", icon: <SiLitecoin /> },
      { label: "No Deposit", href: "/no-deposit", icon: <FaAddressCard /> },
      { label: "VIP Deals", href: "/vip-deals", icon: <FaBookOpen /> }
    ]
  },
  {
    label: "Casino Reviews",
    icon: <FaSearch />,
    children: [
      { label: "All Reviews", href: "/crypto-casino-reviews", icon: <FaListAlt /> },
      { label: "1xBet", href: "/crypto-casino-reviews/1xbet", icon: <FaStar /> },
      { label: "7Bit", href: "/crypto-casino-reviews/7bit", icon: <FaStar /> },
      { label: "Betplay", href: "/crypto-casino-reviews/betplay", icon: <FaStar /> },
      { label: "Betzard", href: "/crypto-casino-reviews/betzard", icon: <FaStar /> },
      { label: "BitStarz", href: "/crypto-casino-reviews/bitstarz", icon: <FaStar /> },
      { label: "Cloudbet", href: "/crypto-casino-reviews/cloudbet", icon: <FaStar /> },
      { label: "CoinPoker", href: "/crypto-casino-reviews/coinpoker", icon: <FaStar /> },
      { label: "Coolcatcasino", href: "/crypto-casino-reviews/coolcatcasino", icon: <FaStar /> },
      { label: "Crownslots", href: "/crypto-casino-reviews/crownslots", icon: <FaStar /> },
      { label: "Crypto Loko", href: "/crypto-casino-reviews/crypto-loko", icon: <FaStar /> },
      { label: "Dreams", href: "/crypto-casino-reviews/dreams", icon: <FaStar /> },
      { label: "Golden Billy", href: "/crypto-casino-reviews/goldenbilly", icon: <FaStar /> },
      { label: "Lokicasino", href: "/crypto-casino-reviews/lokicasino", icon: <FaStar /> },
      { label: "Ninlayplay", href: "/crypto-casino-reviews/ninlayplay", icon: <FaStar /> },
      { label: "Prismcasino", href: "/crypto-casino-reviews/prismcasino", icon: <FaStar /> },
      { label: "Rakoocasino", href: "/crypto-casino-reviews/rakoocasino", icon: <FaStar /> },
      { label: "Slotsofvegas", href: "/crypto-casino-reviews/slotsofvegas", icon: <FaStar /> },
      { label: "Wild Vegas", href: "/crypto-casino-reviews/wildvegas", icon: <FaStar /> }
    ]
  },
  {
    label: "Slots & Games",
    icon: <FaBookOpen />,
    children: [
      { label: "Top 10", href: "/top-10", icon: <FaStar /> },
      { label: "Top 5 RTP Slots", href: "/top-5-slots-with-highest-rtp", icon: <FaStar /> }
    ]
  },
  {
    label: "Sportsbetting",
    icon: <FaFutbol />,
    children: [
      { label: "Sports Overview", href: "/sports", icon: <FaFutbol /> },
      { label: "1xBet", href: "/sports/bookmakers/1xbet", icon: <FaTrophy /> },
      { label: "Cloudbet", href: "/sports/bookmakers/cloudbet", icon: <FaBolt /> },
      { label: "Wild Vegas", href: "/sports/bookmakers/wildvegas", icon: <FaDice /> }
    ]
  },
  {
    label: "More",
    icon: <FaEllipsisH />,
    children: [
      { label: "Blog", href: "/blog", icon: <FaFeatherAlt /> },
      { label: "FAQ", href: "/faq", icon: <FaQuestion /> },
      { label: "About", href: "/about", icon: <FaAddressCard /> }
    ]
  }
];
// --- END NEW MENU STRUCTURE ---

/*
// --- OLD MENU STRUCTURE (commented out for preview) ---
export const menuItems: MenuItem[] = [
  { label: 'Home', href: '/', icon: <FaHome /> },
  { label: 'Bonuses', href: '/bonuses', icon: <FaGift />, children: [
    { label: 'Best Bonuses', href: '/best-crypto-casino-bonuses', icon: <FaBolt /> },
    { label: 'Welcome Bonus', href: '/welcome-bonus', icon: <FaLock /> },
    { label: 'Free Spins', href: '/free-spins', icon: <FaCoins /> },
    { label: 'No Deposit', href: '/no-deposit', icon: <FaDice /> },
    { label: 'VIP Deals', href: '/vip-deals', icon: <FaTrophy /> },
  ] },
  {
    label: 'Sportsbetting',
    icon: <FaFutbol />, 
    children: [
      { label: 'Sports Overview', icon: <FaFutbol />, href: '/sports' },
      { label: '1xBet', icon: <FaTrophy />, href: '/sports/bookmakers/1xbet' },
      { label: 'Cloudbet', icon: <FaBolt />, href: '/sports/bookmakers/cloudbet' },
      { label: 'Wild Vegas', icon: <FaDice />, href: '/sports/bookmakers/wildvegas' },
    ]
  },
  {
    label: 'Guides',
    icon: <FaBook />, 
    children: [
      { label: 'Getting Started', icon: <FaBolt />, href: '/guides/getting-started', highlight: true },
      { label: 'Crypto Gambling 101', icon: <FaBookOpen />, href: '/guides/crypto-gambling-101' },
      { label: 'Deposit with Bitcoin', icon: <FaBitcoin />, href: '/guides/how-to-deposit-with-bitcoin' },
      { label: 'Crypto Payments', icon: <FaCreditCard />, href: '/guides/crypto-payments-guide' },
      { label: 'VPN Guide', icon: <FaUserSecret />, href: '/guides/how-to-use-a-vpn-for-gambling' },
      { label: 'Provably Fair', icon: <FaTrophy />, href: '/guides/fair-play-provably-fair' },
      { label: 'Stablecoins', icon: <FaBalanceScale />, href: '/guides/what-are-stablecoins-casino-gambling' },
      { label: 'No KYC Casino', icon: <FaAddressCard />, href: '/guides/no-kyc-crypto-casinos' },
      // No KYC Crypto Casinos is already present, no duplicate added.
    ]
  },
  {
    label: 'Slots & Games',
    icon: <FaDice />, 
    children: [
      { label: 'Top 10', icon: <FaGem />, href: '/top-10' },
      { label: 'Top 5 RTP Slots', icon: <FaTrophy />, href: '/top-5-slots-with-highest-rtp' },
      { label: 'Litecoin Casinos', icon: <FaCoins />, href: '/best-litecoin-casinos' },
      // Voorbeeld van uitbreiding:
      // { label: 'Live Casino', icon: <FaUsers />, href: '/live-casino' },
      // { label: 'Crash Games', icon: <FaRocket />, href: '/crypto-crash-games' },
    ]
  },
  { label: 'Casino Reviews', href: '/reviews', icon: <FaBullseye /> },
  { label: 'Blog', href: '/blog', icon: <FaPenNib /> },
  { label: 'About Us', href: '/about', icon: <FaInfoCircle /> },
  { label: 'FAQ', href: '/faq', icon: <FaQuestionCircle /> }
];
// --- END OLD MENU STRUCTURE ---
*/
