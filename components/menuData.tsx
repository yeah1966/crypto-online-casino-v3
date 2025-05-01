// Centrale menu data-structuur voor DesktopMenu en MobileMenu
import { FaGift, FaBolt, FaLock, FaCoins, FaDice, FaHome, FaStar, FaQuestionCircle, FaInfoCircle, FaBook, FaFutbol, FaTrophy } from 'react-icons/fa';
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
  ] },
  {
    label: 'Sportsbetting',
    icon: <FaFutbol />, 
    children: [
      { label: 'Sports Overview', icon: <FaFutbol />, href: '/sports' },
      { label: '1xBet', icon: <FaFutbol />, href: '/sports/bookmakers/1xbet' },
      { label: 'Cloudbet', icon: <FaFutbol />, href: '/sports/bookmakers/cloudbet' },
      { label: 'Wild Vegas', icon: <FaFutbol />, href: '/sports/bookmakers/wildvegas' },
    ]
  },
  {
    label: 'Guides',
    icon: <FaBook />, 
    children: [
      { label: 'Getting Started', icon: <FaBolt />, href: '/guides/getting-started', highlight: true },
      { label: 'Crypto Gambling 101', icon: <FaCoins />, href: '/guides/crypto-gambling-101' },
      { label: 'Deposit with Bitcoin', icon: <FaCoins />, href: '/guides/deposit-bitcoin' },
      { label: 'Crypto Payments', icon: <FaCoins />, href: '/guides/crypto-payments' },
      { label: 'VPN Guide', icon: <FaLock />, href: '/guides/vpn' },
      { label: 'Provably Fair', icon: <FaTrophy />, href: '/guides/provably-fair' },
      { label: 'Stablecoins', icon: <FaCoins />, href: '/guides/stablecoins' },
    ]
  },
  {
    label: 'Slots & Games',
    icon: <FaDice />, 
    children: [
      { label: 'Top 10', icon: <FaTrophy />, href: '/top-10' },
      { label: 'Top 5 RTP Slots', icon: <FaBolt />, href: '/top-5-slots-with-highest-rtp' },
      { label: 'Litecoin Casinos', icon: <FaCoins />, href: '/best-litecoin-casinos' },
    ]
  },
  { label: 'Reviews', href: '/crypto-casino-reviews', icon: <FaStar /> },
  { label: 'Blog', href: '/blog', icon: <FaBook /> },
  { label: 'FAQ', href: '/faq', icon: <FaQuestionCircle /> },
  { label: 'About', href: '/about', icon: <FaInfoCircle /> }
];
