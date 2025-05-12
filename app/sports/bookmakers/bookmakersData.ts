// Centrale data voor alle bookmakers (sportsbook cards)
export interface BookmakerCard {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  description: string;
}

export const bookmakers: BookmakerCard[] = [
  {
    slug: '1xbet',
    name: '1xBet',
    logo: '/logos/1xbet.png',
    rating: 4.5,
    description: 'World-renowned, crypto deposits, many sports and high odds.'
  },
  {
    slug: 'cloudbet',
    name: 'Cloudbet',
    logo: '/logos/cloudbet.png',
    rating: 4.7,
    description: 'Fast payouts, high limits and many cryptocurrencies.'
  },
  {
    slug: 'wildvegas',
    name: 'Wild Vegas',
    logo: '/logos/wildvegas.png',
    rating: 4.3,
    description: 'American theme, sharp odds and instant crypto withdrawals.'
  },
  // Voeg hier meer bookmakers toe...
];
