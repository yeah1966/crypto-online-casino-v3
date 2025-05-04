// Central data for all casino reviews
export interface CasinoCard {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  description: string;
}

export const casinos: CasinoCard[] = [
  { slug: 'goldenbilly', name: 'Golden Billy', logo: '/logos/goldenbilly.png', rating: 4, description: 'Nieuwe crypto casino met jackpots.' },
  { slug: 'ninlayplay', name: 'NinlayPlay', logo: '/logos/ninlaycasino.png', rating: 3.5, description: 'Avontuurlijke slots & crypto rewards.' },
  { slug: 'crownslots', name: 'Crownslots', logo: '/logos/crownslots.png', rating: 3.5, description: 'Eenvoudige crypto casino met Britse flair.' },
  { slug: 'lokicasino', name: 'Loki Casino', logo: '/logos/lokicasino.png', rating: 4, description: 'Internationaal crypto casino met duizenden games.' },
  { slug: 'slotsofvegas', name: 'Slots of Vegas', logo: '/logos/slotsofvegas.png', rating: 5, description: 'Famous for fast payouts and big bonuses.' },
  { slug: 'wildvegas', name: 'Wild Vegas', logo: '/logos/wildvegas.png', rating: 4, description: 'American-themed, sharp odds, and instant crypto withdrawals.' },
  { slug: 'bitstarz', name: 'BitStarz', logo: '/logos/bitstarz.png', rating: 4.5, description: 'Fast crypto payouts and many games.' },
  { slug: 'cloudbet', name: 'Cloudbet', logo: '/logos/cloudbet.png', rating: 4.7, description: 'Largest selection, high odds, fast payouts & live streaming.' },
  { slug: '7bit', name: '7Bit', logo: '/logos/7bit.png', rating: 4.2, description: 'Crypto casino with many coins and fast payouts.' },
  { slug: 'betplay', name: 'Betplay', logo: '/logos/betplay.png', rating: 4.3, description: 'Top casino with lots of sports betting.' },
  { slug: 'betzard', name: 'Betzard', logo: '/logos/betzard.png', rating: 4.1, description: 'Unique bonuses and modern site.' },
  { slug: 'dreams', name: 'Dreams', logo: '/logos/dreamscasino.png', rating: 4.0, description: 'Big jackpots and many crypto options.' },
  { slug: 'coinpoker', name: 'CoinPoker', logo: '/logos/coinpoker.png', rating: 4.0, description: 'Crypto poker and casino in one.' },
  { slug: 'crypto-loko', name: 'Crypto Loko', logo: '/logos/cryptoloko.png', rating: 4.1, description: 'Versatile crypto casino with fun promotions.' },
];
