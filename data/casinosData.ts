// Centrale data voor alle casino reviews
export interface CasinoCard {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  description: string;
  noDepositBonus?: boolean;
  noDepositNote?: string;
}

export const casinos: CasinoCard[] = [
  { slug: 'goldenbilly', name: 'Golden Billy', logo: '/images/goldenbilly.png', rating: 4, description: 'Nieuwe crypto casino met jackpots.' },
  { slug: 'ninlayplay', name: 'NinlayPlay', logo: '/images/ninlaycasino.png', rating: 3.5, description: 'Avontuurlijke slots & crypto rewards.' },
  { slug: 'crownslots', name: 'Crownslots', logo: '/images/crownslots.png', rating: 3.5, description: 'Eenvoudige crypto casino met Britse flair.' },
  { slug: 'lokicasino', name: 'Loki Casino', logo: '/images/lokicasino.png', rating: 4, description: 'Internationaal crypto casino met duizenden games.' },
  { slug: 'slotsofvegas', name: 'Slots of Vegas', logo: '/images/slotsofvegas.png', rating: 5, description: 'Famous for fast payouts and big bonuses.' },
  { slug: 'wildvegas', name: 'Wild Vegas', logo: '/images/wildvegas.png', rating: 4, description: 'American-themed, sharp odds, and instant crypto withdrawals.' },
  { slug: 'bitstarz', name: 'BitStarz', logo: '/images/bitstarz.png', rating: 4.5, description: 'Fast crypto payouts and many games.', noDepositNote: 'Exclusive: €20 no deposit!' },
  { slug: 'cloudbet', name: 'Cloudbet', logo: '/images/cloudbet.png', rating: 4.7, description: 'Largest selection, high odds, fast payouts & live streaming.' },
  { slug: '7bit', name: '7Bit', logo: '/images/7bit.png', rating: 4.2, description: 'Crypto casino with many coins and fast payouts.' },
  { slug: 'betplay', name: 'Betplay', logo: '/images/betplay.png', rating: 4.3, description: 'Top casino with lots of sports betting.' },
  { slug: 'betzard', name: 'Betzard', logo: '/images/betzard.png', rating: 4.1, description: 'Unique bonuses and modern site.' },
  { slug: 'dreams', name: 'Dreams', logo: '/images/dreamscasino.png', rating: 4.0, description: 'Big jackpots and many crypto options.' },
  { slug: 'coinpoker', name: 'CoinPoker', logo: '/images/coinpoker.png', rating: 4.0, description: 'Crypto poker and casino in one.' },
  { slug: 'crypto-loko', name: 'Crypto Loko', logo: '/images/cryptoloko.png', rating: 4.1, description: 'Versatile crypto casino with fun promotions.' },
  { slug: '1xbet', name: '1xBet', logo: '/images/1xbet.png', rating: 3.5, description: 'Breed aanbod, snelle uitbetalingen, maar controversieel verleden.' },
  { slug: 'coolcatcasino', name: 'Cool Cat Casino', logo: '/images/coolcatcasino.png', rating: 3.8, description: 'Amerikaanse klassieker met veel bonussen.' },
  { slug: 'prismcasino', name: 'Prism Casino', logo: '/images/prismcasino.png', rating: 3.7, description: 'Bekend om zijn kleurrijke thema en promoties.' }
];
