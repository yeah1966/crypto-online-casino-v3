import React from 'react';

interface CasinoCardNeonProps {
  name: string;
  logo: string;
  bonus: string;
  description: string;
  tags?: string[];
  claimLink?: string;
  reviewLink?: string;
}

const CasinoCardNeon: React.FC<CasinoCardNeonProps> = ({
  name,
  logo,
  bonus,
  description,
  tags = [],
  claimLink,
  reviewLink,
}) => {
  return (
    <article
      className="bg-[#2c1836] rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex flex-col h-full relative neon-card group border-2 border-[#A855F7]"
      style={{ position: 'relative' }}
    >
      {/* Logo */}
      <div className="relative h-16 mb-4 flex items-center justify-center bg-black/40 rounded-xl overflow-hidden">
        <img src={logo} alt={`${name} crypto casino logo`} className="h-12 object-contain drop-shadow-neon" />
      </div>
      {/* Naam & Bonus */}
      <div className="flex flex-col items-center mb-2">
        <h3 className="text-xl font-extrabold text-[#38FF14] drop-shadow-neon text-center mb-1 truncate">{name}</h3>
        <span className="text-[#A855F7] text-sm font-semibold mb-1 text-center">{bonus}</span>
      </div>
      {/* Beschrijving */}
      <p className="text-white text-xs opacity-80 leading-tight text-center mb-3 line-clamp-3">{description}</p>
      {/* Tags */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-[#18181C] border border-[#38FF14] text-[#38FF14] text-xs font-bold neon-pill animate-pulse">{tag}</span>
        ))}
      </div>
      {/* Knoppen */}
      <div className="flex flex-col gap-2 mt-auto">
        {claimLink ? (
          <a
            href={claimLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block py-2 rounded-full bg-[#38FF14] text-black font-bold shadow-lg hover:bg-[#2be80d] transition-colors duration-200 border-2 border-[#38FF14] focus:outline-none focus:ring-2 focus:ring-[#38FF14] focus:ring-offset-2 text-center"
          >
            Claim Bonus
          </a>
        ) : (
          <span className="w-full block py-2 rounded-full bg-gray-600 text-white opacity-60 cursor-not-allowed border-2 border-gray-500 text-center font-bold">No Link</span>
        )}
        {reviewLink ? (
          <a
            href={reviewLink}
            className="w-full block py-2 rounded-full bg-transparent border-2 border-[#A855F7] text-[#A855F7] hover:bg-[#A855F7] hover:text-white font-bold shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:ring-offset-2 text-center"
          >
            Read Review
          </a>
        ) : null}
      </div>
    </article>
  );
};

export default CasinoCardNeon;
