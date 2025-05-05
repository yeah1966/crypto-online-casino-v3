// Centrale data voor alle casino reviews
export interface CasinoCard {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  description: string;
  noDepositBonus?: boolean;
  noDepositNote?: string;
  welcomeBonus?: boolean;
  welcomeBonusNote?: string;
  freeSpinsBonus?: boolean;
  freeSpinsNote?: string;
  exclusive?: boolean;
  perks?: string[];
  tags?: string[];
  highlight?: string;
  affiliateUrl?: string;
  reviewUrl?: string;
  bonusText?: string;
  depositType?: string;
  [key: string]: any;
}

export const casinos: CasinoCard[] = [
  // Zet BitStarz als eerste in de array
  {
    slug: 'bitstarz',
    name: 'BitStarz',
    logo: '/logos/bitstarz.png',
    rating: 4.5,
    description: 'Bekroond crypto casino met snelle uitbetalingen.',
    welcomeBonus: true,
    welcomeBonusNote: 'Up to 5 BTC + 200 Free Spins',
    freeSpinsBonus: true,
    freeSpinsNote: 'No deposit bonus: 20 free spins',
    noDepositBonus: true,
    noDepositNote: 'Exclusive: €20 no deposit!',
    exclusive: true,
    perks: [
      'No deposit bonus: 20 free spins',
      'Welcome package over 4 deposits',
      'Fast payouts under 10 minutes'
    ],
    tags: ['no-deposit', 'free-spins', 'match'],
    highlight: '🎁',
    affiliateUrl: 'https://b1t5t4rz.com/b2b7d0ed7'
  },
  {
    slug: 'goldenbilly',
    name: 'Golden Billy',
    logo: '/logos/goldenbilly.png',
    rating: 4,
    description: 'Nieuwe crypto casino met jackpots.',
    welcomeBonus: true,
    freeSpinsBonus: true,
    noDepositBonus: false,
    noDepositNote: '',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: '',
    affiliateUrl: 'https://goldenbillylink.com/h62218aaa'
  },
  {
    slug: 'ninlayplay',
    name: 'NinlayPlay',
    logo: '/logos/ninlaycasino.png',
    rating: 3.5,
    description: 'Avontuurlijke slots & crypto rewards.',
    welcomeBonus: true,
    freeSpinsBonus: true,
    noDepositBonus: false,
    noDepositNote: '',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: '',
    affiliateUrl: 'https://ninlayplay.com/hecd2573b'
  },
  {
    slug: 'crownslots',
    name: 'Crownslots',
    logo: '/logos/crownslots.png',
    rating: 3.5,
    description: 'Eenvoudige crypto casino met Britse flair.',
    affiliateUrl: 'https://crownslotslink.com/hfb84c81c',
    reviewUrl: '/crypto-casino-reviews/crownslots',
    bonusText: '',
    depositType: 'Deposit Only',
    welcomeBonus: true,
    noDepositBonus: false,
    noDepositNote: '',
    welcomeBonusNote: '',
    freeSpinsBonus: false,
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: ''
  },
  {
    slug: 'lokicasino',
    name: 'Loki Casino',
    logo: '/logos/loki.png',
    rating: 4.2,
    description: 'International crypto slot destination.',
    affiliateUrl: 'https://lokicasinolink.com/hd8471080',
    reviewUrl: '/crypto-casino-reviews/lokicasino',
    bonusText: 'Try without registration',
    depositType: 'Deposit Only',
    welcomeBonus: true,
    freeSpinsBonus: true,
    noDepositBonus: true,
    noDepositNote: 'Try without registration!',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: ''
  },
  {
    slug: 'slotsofvegas',
    name: 'Slots of Vegas',
    logo: '/logos/slotsofvegas.png',
    rating: 5,
    description: 'Famous for fast payouts and big bonuses.',
    welcomeBonus: true,
    freeSpinsBonus: true,
    noDepositBonus: true,
    noDepositNote: 'Exclusive: 25 free spins!',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: '',
    affiliateUrl: 'https://www.slotsofvegaslinks.com/click/15/4298/15512/1'
  },
  {
    slug: 'wildvegas',
    name: 'Wild Vegas',
    logo: '/logos/wildvegas.png',
    rating: 4,
    description: 'American-themed, sharp odds, and instant crypto withdrawals.',
    welcomeBonus: true,
    freeSpinsBonus: true,
    noDepositBonus: false,
    noDepositNote: '',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: '',
    affiliateUrl: 'https://www.wildvegaslinks.com/click/11/4315/15512/1'
  },
  {
    slug: 'cloudbet',
    name: 'Cloudbet',
    logo: '/logos/cloudbet.png',
    rating: 4.7,
    description: 'Largest selection, high odds, fast payouts & live streaming.',
    welcomeBonus: true,
    freeSpinsBonus: false,
    noDepositBonus: false,
    noDepositNote: '',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: '',
    affiliateUrl: 'https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo'
  },
  {
    slug: '7bit',
    name: '7Bit',
    logo: '/logos/7bit.png',
    rating: 4.2,
    description: 'Crypto casino with many coins and fast payouts.',
    welcomeBonus: true,
    freeSpinsBonus: true,
    noDepositBonus: true,
    noDepositNote: 'No deposit bonus for new players',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: '',
    affiliateUrl: 'https://www.7bitcasino.com/a/b8c1d2e3f4'
  },
  {
    slug: 'betplay',
    name: 'Betplay',
    logo: '/logos/betplay.png',
    rating: 4.3,
    description: 'Top casino met veel sportweddenschappen.',
    welcomeBonus: true,
    welcomeBonusNote: '100% Match Bonus + 10% Cashback',
    perks: [
      '100% deposit match for crypto users',
      'Up to 10% daily cashback',
      'Exclusive bonuses for BTC players'
    ],
    tags: ['match', 'cashback'],
    highlight: '🔥',
    affiliateUrl: 'https://betplay.io?ref=b417df55cd18'
  },
  {
    slug: 'betzard',
    name: 'Betzard',
    logo: '/logos/betzard.png',
    rating: 4.1,
    description: 'Unique bonuses and modern site.',
    welcomeBonus: true,
    freeSpinsBonus: false,
    noDepositBonus: false,
    noDepositNote: '',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: '',
    affiliateUrl: 'https://7bit.partners/pe27a3a44'
  },
  {
    slug: 'dreams',
    name: 'Dreams',
    logo: '/logos/dreamscasino.png',
    rating: 4.0,
    description: 'Big jackpots and many crypto options.',
    welcomeBonus: true,
    welcomeBonusNote: '200% Bonus + 50 Free Spins',
    freeSpinsBonus: true,
    noDepositBonus: false,
    perks: [
      'Classic casino feel with crypto payments',
      'No maximum cashout on certain offers',
      'Reliable support and secure platform'
    ],
    tags: ['match', 'free-spins'],
    highlight: '⭐',
    affiliateUrl: 'https://www.dreamslinks.com/click/64/305/15512/1'
  },
  {
    slug: 'coinpoker',
    name: 'CoinPoker',
    logo: '/logos/coinpoker.png',
    rating: 4.0,
    description: 'Crypto poker and casino in one.',
    welcomeBonus: false,
    freeSpinsBonus: false,
    noDepositBonus: false,
    noDepositNote: '',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: '',
    affiliateUrl: 'https://record.coinpokeraffiliates.com/_BPlLejNitgfUOsjNOfgKeWNd7ZgqdRLk/1/'
  },
  {
    slug: 'crypto-loko',
    name: 'Crypto Loko',
    logo: '/logos/cryptoloko.png',
    rating: 4.1,
    description: 'Versatile crypto casino with fun promotions.',
    welcomeBonus: true,
    welcomeBonusNote: '505% Bonus + 55 Free Spins',
    freeSpinsBonus: true,
    noDepositBonus: true,
    noDepositNote: 'Free spins on registration',
    perks: [
      'Massive first deposit bonus',
      'Unique retro-style experience',
      'Fast crypto withdrawals'
    ],
    tags: ['match', 'free-spins'],
    highlight: '🎉',
    affiliateUrl: 'https://cryptolokolink.com/click/77/441/6060/1'
  },
  {
    slug: '1xbet',
    name: '1xBet',
    logo: '/logos/1xbet.png',
    rating: 3.5,
    description: 'Breed aanbod, snelle uitbetalingen, maar controversieel verleden.',
    affiliateUrl: 'https://refpa3740576.top/L?tag=d_3915280m_1599c_&site=3915280&ad=1599',
    reviewUrl: '/crypto-casino-reviews/1xbet',
    bonusText: '',
    depositType: 'Deposit Only',
    welcomeBonus: true,
    freeSpinsBonus: false,
    noDepositBonus: false,
    noDepositNote: '',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: ''
  },
  {
    slug: 'coolcatcasino',
    name: 'Cool Cat Casino',
    logo: '/logos/coolcat.png',
    rating: 3.8,
    description: 'Amerikaanse klassieker met veel bonussen.',
    affiliateUrl: 'https://www.coolcatlinks.com/click/7/3936/15512/1',
    reviewUrl: '/crypto-casino-reviews/coolcatcasino',
    bonusText: '',
    depositType: 'Deposit Only',
    welcomeBonus: true,
    freeSpinsBonus: true,
    noDepositBonus: false,
    noDepositNote: '',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: ''
  },
  {
    slug: 'prismcasino',
    name: 'Prism Casino',
    logo: '/logos/prismcasino.png',
    rating: 3.7,
    description: 'Bekend om zijn kleurrijke thema en promoties.',
    welcomeBonus: true,
    freeSpinsBonus: true,
    noDepositBonus: false,
    noDepositNote: '',
    welcomeBonusNote: '',
    freeSpinsNote: '',
    perks: [],
    tags: [],
    highlight: '',
    affiliateUrl: 'https://www.prismlinks.com/click/6/4305/15512/1'
  }
];
