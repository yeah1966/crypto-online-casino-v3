'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Props {
  name: string;
  slug: string;
  stars?: number;
  image: string;
  tagline?: string;
}

export default function CasinoReviewCard({ name, slug, stars = 5, image, tagline }: Props) {
  // Halve sterren visueel tonen
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const logoSrc = image && image.startsWith('/logos/') ? image : (image ? `/logos/${image}` : '/logos/placeholder.png');
  console.log('Rendering CasinoReviewCard logo for', name, '->', logoSrc);

  return (
    <div className="bg-purple-700/90 hover:bg-purple-800 transition rounded-2xl p-6 text-center border border-purple-500 shadow-lg group flex flex-col items-center h-full">
      <div className="flex justify-center">
        <Image
          src={logoSrc}
          alt={name}
          width={80}
          height={80}
          onError={(e) => { e.currentTarget.src = '/logos/placeholder.png'; }}
          className="mx-auto mb-4 rounded-full shadow-lg group-hover:scale-105 group-hover:shadow-yellow-400/80 transition rounded-md object-contain bg-black p-1"
        />
      </div>
      <h3 className="text-xl font-bold text-white drop-shadow mb-1 uppercase tracking-wide">{name}</h3>
      {tagline && <p className="text-sm text-white/80 mt-1 mb-2 min-h-[36px]">{tagline}</p>}
      <div className="text-yellow-400 mt-2 flex justify-center items-center gap-0.5 text-lg mb-4">
        {Array(fullStars).fill(0).map((_, i) => <span key={`full-${i}`}>★</span>)}
        {halfStar && <span key="half">½</span>}
        {Array(emptyStars).fill(0).map((_, i) => <span key={`empty-${i}`}>☆</span>)}
      </div>
      <Link
        href={`/crypto-casino-reviews/${slug}`}
        className="mt-auto inline-block text-sm text-white bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-full transition font-semibold shadow-lg group-hover:scale-105 group-hover:shadow-yellow-400/80"
      >
        Read the full review →
      </Link>
    </div>
  );
}
