import wildVegasSeo from "./seo";
import { Metadata } from "next";
import BookmakerTemplate from "../BookmakerTemplate";

export const metadata: Metadata = wildVegasSeo;

const cryptocurrencies = [
  { symbol: "btc", label: "BTC", icon: "/icons/btc.svg" },
  { symbol: "eth", label: "ETH", icon: "/icons/eth.svg" },
  { symbol: "ltc", label: "LTC", icon: "/icons/ltc.svg" },
  { symbol: "usdt", label: "USDT", icon: "/icons/usdt.svg" },
];

const sports = [
  { label: "Soccer", icon: "/sports-icons/Football.svg" },
  { label: "Basketball", icon: "/sports-icons/Basketball.svg" },
  { label: "Boxing", icon: "/sports-icons/Boxing.svg" },
];

const mainBlocks = [
  {
    title: "Provably Fair Games",
    icon: "/casino-icons/Provably Fair.svg",
    description: "All games at Wild Vegas are provably fair, ensuring every bet and spin is verifieerbaar en transparant.",
  },
  {
    title: "Exclusive VIP Club",
    icon: "/casino-icons/VIP.svg",
    description: "Join the Wild Vegas VIP Club for exclusive rewards, cashback, and personal account management.",
  },
  {
    title: "Live Casino Action",
    icon: "/casino-icons/Live Casino.svg",
    description: "Experience the thrill of real-time casino games with live dealers, streamed in HD.",
  },
  {
    title: "Regular Tournaments",
    icon: "/casino-icons/Trophy.svg",
    description: "Compete for cash prizes in regular sports and casino tournaments, open to all members.",
  },
];

const featureBlocks = [
  {
    title: "No KYC Needed",
    icon: "/casino-icons/Lock.svg",
    description: "Wild Vegas allows crypto betting without mandatory identity verification.",
  },
  {
    title: "Fast Crypto Payouts",
    icon: "/casino-icons/Instant Withdrawals.svg",
    description: "Lightning-fast payouts directly to your crypto wallet.",
  },
  {
    title: "Great Reload Bonuses",
    icon: "/casino-icons/Bonus.svg",
    description: "Frequent reload bonuses and ongoing promotions to boost your bankroll.",
  },
  {
    title: "24/7 Support",
    icon: "/casino-icons/Support.svg",
    description: "Live chat support available 24/7 for all players.",
  },
  {
    title: "Global Availability",
    icon: "/casino-icons/Globe.svg",
    description: "Accessible for crypto bettors worldwide.",
  },
];

export default function WildVegasPage() {
  return (
    <BookmakerTemplate
      logo="/logos/wildvegas.png"
      title="WILD VEGAS — CRYPTO SPORTS BETTING 2025"
      description="Wild Vegas is a top-tier crypto sportsbook with no KYC, instant payouts, and generous reload bonuses. Enjoy global access and 24/7 support for all crypto sports bettors."
      cryptocurrencies={cryptocurrencies}
      sports={sports}
      mainBlocks={mainBlocks}
      featureBlocks={featureBlocks}
      cta={{ href: "https://www.wildvegaslinks.com/click/11/4315/15512/1", text: "Visit Wild Vegas Sportsbook" }}
    />
  );
}
