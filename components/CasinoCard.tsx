import Image from "next/image";

interface CasinoCardProps {
  rank: number;
  name: string;
  logo: string;
  bonus: string;
  tagline: string;
  url: string;
  description?: string;
  badge?: string;
}

export default function CasinoCard({
  rank,
  name,
  logo,
  bonus,
  tagline,
  url,
  description,
  badge,
}: CasinoCardProps) {
  console.log('Rendering CasinoCard logo for', name, '->', logo);

  return (
    <div className="flex flex-row items-center justify-between bg-gradient-to-br from-[#1a1a2e] to-[#23234d] rounded-xl p-6 shadow-neon-lg border-2 border-yellow-300 mb-6 w-full max-w-3xl mx-auto transition-all duration-300 hover:shadow-neon-xl hover:scale-[1.025]">
      {/* Links: Logo */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center w-28">
        <img
          src={logo}
          alt={name}
          width={80}
          height={80}
          onError={(e) => { e.currentTarget.src = '/logos/placeholder.png'; }}
          className="rounded-md object-contain bg-black p-1"
        />
        {badge && (
          <div className="mt-2 px-2 py-1 text-xs font-bold bg-pink-500 text-white rounded shadow-neon uppercase tracking-wide animate-pulse">
            {badge}
          </div>
        )}
      </div>
      {/* Midden: Beschrijving */}
      <div className="flex-1 flex flex-col justify-center px-6 min-w-0">
        <div className="text-2xl font-extrabold text-yellow-300 drop-shadow-neon mb-1 uppercase truncate">
          #{rank} {name}
        </div>
        <div className="text-neon-pink text-base font-medium drop-shadow mb-1 truncate">
          {tagline}
        </div>
        <div className="text-green-300 text-sm font-semibold drop-shadow mb-2">
          {bonus}
        </div>
        {description && (
          <div className="text-white text-xs opacity-80 leading-tight line-clamp-2">{description}</div>
        )}
      </div>
      {/* Rechts: Play Now knop */}
      <div className="flex flex-col items-end justify-center min-w-[120px]">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="py-3 px-7 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-bold text-lg shadow-neon transition-all duration-300 hover:scale-110 hover:shadow-neon-xl focus:outline-none focus:ring-2 focus:ring-yellow-300">
            Play Now
          </button>
        </a>
      </div>
    </div>
  );
}
