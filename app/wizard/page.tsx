export const generateMetadata = () => ({
  title: "Crypto Bonus Wizard – Find Your Ideal Bonus",
  description: "Use our interactive bonus wizard to discover the best no-deposit, welcome, or VIP bonuses in the crypto casino world.",
  openGraph: {
    title: "Crypto Bonus Wizard – Find Your Ideal Bonus",
    description: "Use our interactive bonus wizard to discover the best no-deposit, welcome, or VIP bonuses in the crypto casino world.",
    url: "https://crypto-online-casino.com/wizard",
    images: ["/og-images/bonus-wizard.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Bonus Wizard – Find Your Ideal Bonus",
    description: "Use our interactive bonus wizard to discover the best no-deposit, welcome, or VIP bonuses in the crypto casino world.",
    images: ["/og-images/bonus-wizard.png"],
  }
});

import BonusWizard from '../components/BonusWizard';

export default function WizardPage() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-purple-800 via-fuchsia-800 to-black text-white/90 shadow-inner backdrop-blur-sm flex flex-col">
      <BonusWizard />
    </div>
  );
}
