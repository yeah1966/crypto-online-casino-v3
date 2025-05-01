// Central data for all casino reviews
export interface CasinoCard {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  description: string;
  noDepositBonus?: boolean; // true = real no deposit, false = never, undefined = unknown
  noDepositNote?: string; // explanation for the overview
}

export const casinos: CasinoCard[] = [
  { slug: 'slotsofvegas', name: 'Slots of Vegas', logo: '/logos/slotsofvegas.png', rating: 5, description: 'Famous for fast payouts and big bonuses.', noDepositBonus: true, noDepositNote: 'Regularly offers real no deposit bonuses or free spins without deposit.' },
  { slug: 'wildvegas', name: 'Wild Vegas', logo: '/logos/wildvegas.png', rating: 4, description: 'American-themed, sharp odds, and instant crypto withdrawals.', noDepositBonus: true, noDepositNote: 'Sometimes no deposit or free spins for new players.' },
  { slug: 'bitstarz', name: 'BitStarz', logo: '/logos/bitstarz.png', rating: 4.5, description: 'Fast crypto payouts and many games.', noDepositBonus: false, noDepositNote: 'Only deposit bonuses, no real no deposit bonus.' },
  { slug: 'cloudbet', name: 'Cloudbet', logo: '/logos/cloudbet.png', rating: 4.7, description: 'Largest selection, high odds, fast payouts & live streaming.', noDepositBonus: false, noDepositNote: 'No no deposit bonus, only deposit bonus.' },
  { slug: '7bit', name: '7Bit', logo: '/logos/7bit.png', rating: 4.2, description: 'Crypto casino with many coins and fast payouts.', noDepositBonus: false, noDepositNote: 'No no deposit bonus, only deposit bonus.' },
  { slug: 'betplay', name: 'Betplay', logo: '/logos/betplay.png', rating: 4.3, description: 'Top casino with lots of sports betting.', noDepositBonus: false, noDepositNote: 'No no deposit bonus.' },
  { slug: 'betzard', name: 'Betzard', logo: '/logos/betzard.png', rating: 4.1, description: 'Unique bonuses and modern site.', noDepositBonus: false, noDepositNote: 'No no deposit bonus.' },
  { slug: 'dreams', name: 'Dreams', logo: '/logos/dreamscasino.png', rating: 4.0, description: 'Big jackpots and many crypto options.', noDepositBonus: true, noDepositNote: 'Occasionally no deposit bonus, often via promotions or special actions.' },
  { slug: 'goldenbilly', name: 'Golden Billy', logo: '/logos/goldenbilly.png', rating: 4.4, description: 'New crypto casino with fast payouts.', noDepositBonus: false, noDepositNote: 'No no deposit bonus.' },
  { slug: 'coinpoker', name: 'CoinPoker', logo: '/logos/coinpoker.png', rating: 4.0, description: 'Crypto poker and casino in one.', noDepositBonus: false, noDepositNote: 'No no deposit bonus.' },
  { slug: 'crypto-loko', name: 'Crypto Loko', logo: '/logos/cryptoloko.png', rating: 4.1, description: 'Versatile crypto casino with fun promotions.', noDepositBonus: false, noDepositNote: 'No no deposit bonus.' },
  { slug: 'ninlayplay', name: 'NinlayPlay', logo: '/logos/ninlaycasino.png', rating: 3.9, description: 'Up-and-coming casino, lots of crypto and fast support.', noDepositBonus: false, noDepositNote: 'No no deposit bonus.' },
];
