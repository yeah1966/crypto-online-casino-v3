import React from 'react';
import CasinoCardNeon from './CasinoCardNeon';
import { casinoLinks } from './casinoLinks';

interface Casino {
  name: string;
  logo: string;
  bonus: string;
  description: string;
  tags?: string[];
}

interface CasinoGridProps {
  casinos: Casino[];
}

const CasinoGrid: React.FC<CasinoGridProps> = ({ casinos }) => {
  return (
    <section className="container mx-auto px-4 py-8 bg-vegas rounded-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {casinos.slice(0, 20).map((casino, idx) => {
          // Vind de juiste link op basis van de naam (case-insensitive, spaties negeren)
          const matchedLinkKey = Object.keys(casinoLinks).find(
            key => key.replace(/\s+/g, '').toLowerCase() === casino.name.replace(/\s+/g, '').toLowerCase()
          );
          const affiliateLink = matchedLinkKey ? casinoLinks[matchedLinkKey] : undefined;
          return (
            <CasinoCardNeon
              key={casino.name + idx}
              name={casino.name}
              logo={casino.logo}
              bonus={casino.bonus}
              description={casino.description}
              tags={casino.tags}
              claimLink={affiliateLink}
              reviewLink={`./crypto-casino-reviews/${casino.name.toLowerCase().replace(/\s+/g, '')}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CasinoGrid;
