import React from "react";
import Image from "next/image";

interface BonusCard {
  icon: React.ReactNode;
  title: string;
  cta?: React.ReactNode;
  description: string;
  seoText?: string;
  borderColorClass?: string;
}

interface BonusOverviewLayoutProps {
  title: string;
  description: string;
  bonusCards: BonusCard[];
  casinoList?: React.ReactNode;
  footerGlow?: boolean;
  mascot?: boolean | React.ReactNode;
}

const Mascot = () => (
  <div className="flex justify-center mb-6">
    <Image src="/logos/crypto-mascot.png" alt="Mascot" width={64} height={64} className="drop-shadow-neon" />
  </div>
);

export const BonusOverviewLayout: React.FC<BonusOverviewLayoutProps> = ({
  title,
  description,
  bonusCards,
  casinoList,
  footerGlow = true,
  mascot = false,
}) => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black/80 via-[#181836]/90 to-black/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* HERO */}
        <section className="mb-10">
          <h1 className="text-yellow-300 text-4xl md:text-5xl font-extrabold text-center drop-shadow-neon uppercase mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed mb-8">
            {description}
          </p>
        </section>
        {/* BONUS CARDS GRID */}
        <section className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {bonusCards.map((card, idx) => (
              <div
                key={card.title}
                className={`relative rounded-2xl border-2 bg-black/80 text-white p-7 shadow-xl hover:scale-[1.03] transition-all duration-300 ${card.borderColorClass || "border-yellow-400 hover:shadow-yellow-300/50"}`}
              >
                <span className="absolute -top-3 -left-3 text-2xl select-none">{card.icon}</span>
                <h2 className="text-2xl md:text-[1.6rem] font-bold mb-2 flex items-center gap-2" style={{ color: "inherit" }}>{card.title}</h2>
                <p className="mb-3 text-white/90 text-lg leading-relaxed">{card.description}</p>
                {card.cta && <div className="mb-2">{card.cta}</div>}
                {card.seoText && (
                  <p className="mt-4 text-white/80 text-[17px] leading-relaxed">
                    {card.seoText}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Mascot above casino list if enabled */}
        {mascot && (
          typeof mascot === "boolean" ? <Mascot /> : <div className="mb-6">{mascot}</div>
        )}
        {/* CASINO LIST */}
        {casinoList && (
          <section className="mb-12">
            {casinoList}
          </section>
        )}
        {/* VEGAS-GLOW BOTTOM */}
        {footerGlow && (
          <div className="w-full h-2 mt-12 rounded-b-xl bg-gradient-to-r from-[#38FF14]/60 via-[#A855F7]/40 to-[#FFD600]/60 blur-[2px] neon-glow"></div>
        )}
      </div>
    </main>
  );
};
