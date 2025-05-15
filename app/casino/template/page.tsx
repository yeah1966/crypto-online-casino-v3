
import CasinoReviewTemplate from "../CasinoReviewTemplate";

const dummyCasino = {
  casinoName: "Template Casino",
  introduction: "This is a placeholder introduction. Replace this with the real introduction of the casino.",
  bonuses: "Describe the welcome bonuses, free spins, cashback offers, and VIP promotions here.",
  games: "Mention the game providers, number of games, types of games (slots, live casino, etc.).",
  support: "Explain the support options like live chat, email, and response time.",
  mobile: "Detail mobile responsiveness, app availability, and gameplay experience on smartphones.",
  security: "Mention licensing, encryption, and responsible gaming tools.",
  payments: "List accepted cryptos and payment methods. Add processing times and any limits.",
  verdict: "Summarize why this casino is good or not, from a crypto player’s perspective.",
  facts: {
    founded: "Year",
    license: "Jurisdiction",
    cryptoAccepted: "BTC, ETH, LTC, USDT",
  },
};

export default function Page() {
  return <CasinoReviewTemplate data={dummyCasino} />;
}
