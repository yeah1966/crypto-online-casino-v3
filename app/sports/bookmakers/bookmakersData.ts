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
    description: 'Bekend wereldwijd, crypto stortingen, vele sporten en hoge odds.'
  },
  {
    slug: 'cloudbet',
    name: 'Cloudbet',
    logo: '/logos/cloudbet.png',
    rating: 4.7,
    description: 'Snelle uitbetalingen, hoge limieten en veel cryptomunten.'
  },
  {
    slug: 'wildvegas',
    name: 'Wild Vegas',
    logo: '/logos/wildvegas.png',
    rating: 4.3,
    description: 'Amerikaans thema, scherpe odds en directe crypto withdrawals.'
  },
  // Voeg hier meer bookmakers toe...
];
