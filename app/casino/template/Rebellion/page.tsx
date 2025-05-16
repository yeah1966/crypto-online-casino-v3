import React from "react";
import CasinoReviewTemplate from "../../CasinoReviewTemplate";

// --- Rebellion Casino Review Data ---
const data = {
  introduction:
    "Rebellion Casino presents itself as a modern crypto casino with bold, standout design and a massive game library. The homepage greets you with a charismatic figure in a vibrant suit, set against a neon-lit city backdrop, instantly setting a luxurious and rebellious tone. New players are welcomed with a generous 100% match bonus up to €1,000 plus 100 free spins, making it easy to get started and explore all the casino has to offer.",
  bonuses:
    "Rebellion Casino offers more than just a flashy welcome bonus. Weekly reloads, such as a 50% bonus up to €750 every Wednesday, keep things exciting for returning players. Crypto users can enjoy exclusive deposit bonuses and extra free spins, while the VIP program features 30 levels themed around iconic cities like London, Macau, and Las Vegas, each with unique rewards and perks.",
  games:
    "With over 15,000 games from 100+ top software providers, Rebellion Casino is a paradise for slot fans and table game enthusiasts alike. Enjoy popular slots like Elvis Frog in Vegas, Gates of Olympus 1000, and Big Wild Buffalo. The live casino delivers an authentic experience with real dealers, and there are plenty of progressive jackpot games with life-changing prizes. Classic table games such as blackjack, roulette, and baccarat are also available in abundance.",
  support:
    "Customer support at Rebellion Casino is available 24/7 via live chat and email. The support team is known for their fast, friendly, and knowledgeable responses, ensuring that any issues or questions are resolved promptly. An extensive help center provides answers to common questions, making it easy to find information at any time.",
  mobile:
    "No app needed: Rebellion Casino is fully optimized for mobile browsers, offering a smooth and intuitive experience on both smartphones and tablets. The site loads quickly, navigation is seamless, and all games are available in instant-play mode, so you can enjoy your favorites wherever you are.",
  security:
    "Operated by Dama N.V. and licensed in Curaçao, Rebellion Casino uses advanced SSL encryption to protect your personal and financial data. The platform is committed to responsible gambling, offering tools and resources to help players stay in control. Provably fair games and strict privacy policies ensure a safe and trustworthy environment.",
  payments:
    "Rebellion Casino supports a wide range of payment methods, including traditional options like bank transfer, NETELLER, and Skrill, as well as cryptocurrencies such as Bitcoin, Ethereum, Litecoin, and more. The minimum deposit is €20, and withdrawals are processed quickly—especially with crypto, where payouts are typically instant and hassle-free.",
  verdict:
    "With its rebellious branding, vast game selection, and player-first approach, Rebellion Casino is a top choice for crypto casino fans seeking something fresh, secure, and rewarding. The combination of generous bonuses, fast payouts, and a user-friendly interface makes it stand out in the crowded online casino market.",
  facts: {
    founded: "2024",
    license: "Curaçao",
    cryptoAccepted: "BTC, ETH, LTC, USDT, more"
  }
};

const screenshots = [
  "/screenshots/rebellion1.jpg",
  "/screenshots/rebellion2.jpg",
  "/screenshots/rebellion3.jpg",
  "/screenshots/rebellion4.jpg"
];

const logo = "/logos/rebellion.png";
const affiliateUrl = "https://rbn.fynkelto.com/?mid=244285_1596875";

export default function RebellionCasinoReview() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/crypto-casino-online-mobile.webp')" }}
    >
      <CasinoReviewTemplate
        data={data}
        logo="/logos/rebellion.png"
        title="Rebellion Casino Review"
        affiliateUrl="https://rbn.fynkelto.com/?mid=244285_1596875"
        ctaText="Play at Rebellion"
        screenshots={[
          "/screenshots/rebellion1.jpg",
          "/screenshots/rebellion2.jpg",
          "/screenshots/rebellion3.jpg",
          "/screenshots/rebellion4.jpg"
        ]}
      />
    </div>
  );
}
