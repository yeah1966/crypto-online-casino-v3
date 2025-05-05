import React from 'react';
import CasinoCardNeon from './CasinoCardNeon';

interface Casino {
  name: string;
  logo: string;
  bonus: string;
  description: string;
  tags?: string[];
  claimLink?: string;
  reviewLink?: string;
}

interface CasinoGridProps {
  casinos: Casino[];
}

const CasinoGrid: React.FC<CasinoGridProps> = ({ casinos }) => {
  return (
    <section className="container mx-auto px-4 py-8 bg-vegas rounded-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {casinos.slice(0, 20).map((casino, idx) => (
          <CasinoCardNeon
            key={casino.name + idx}
            name={casino.name}
            logo={casino.logo}
            bonus={casino.bonus}
            description={casino.description}
            tags={casino.tags}
            claimLink={casino.claimLink}
            reviewLink={casino.reviewLink}
          />
        ))}
      </div>
    </section>
  );
};

export default CasinoGrid;
