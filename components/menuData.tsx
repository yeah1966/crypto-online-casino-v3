// Centrale menu data-structuur voor DesktopMenu en MobileMenu
import { FaGift, FaBolt, FaLock, FaCoins, FaDice, FaHome, FaStar, FaQuestionCircle, FaInfoCircle, FaBook, FaFutbol, FaTrophy, FaBookOpen, FaBitcoin, FaCreditCard, FaUserSecret, FaBalanceScale, FaGem, FaUsers, FaRocket, FaBullseye, FaPenNib } from 'react-icons/fa';
import { ReactNode } from 'react';

export type MenuItem = {
  label: string;
  href?: string;
  icon: ReactNode;
  children?: MenuItem[];
  highlight?: boolean;
};

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
