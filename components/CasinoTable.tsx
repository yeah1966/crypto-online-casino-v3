import React from "react";

export interface CasinoEntry {
  name: string;
  type: string;
  bonus: string;
  deal: string;
  slug: string;
  flag?: string;
  logo?: string;
}

interface CasinoTableProps {
  casinos: CasinoEntry[];
}

import CasinoCard from './CasinoCard';

const CasinoTable: React.FC<CasinoTableProps> = ({ casinos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 py-6 justify-center">
      {casinos.map((casino, idx) => (
        <CasinoCard
          key={casino.slug}
          rank={idx + 1}
          name={casino.name}
          logo={casino.logo || ''}
          type={casino.type}
          deal={casino.deal}
          slug={casino.slug}
          bonus={casino.bonus}
          tagline={casino.flag ? `${casino.flag} ${casino.type}` : casino.type}
          badge={casino.deal}
        />
      ))}
    </div>
  );
};

export default CasinoTable;
