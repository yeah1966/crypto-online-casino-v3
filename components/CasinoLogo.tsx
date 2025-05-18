"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function CasinoLogo({ src, alt, className, width = 64, height = 64 }: { src: string; alt: string; className?: string; width?: number; height?: number }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className || "mx-auto rounded-md object-contain bg-black p-1"}
      onError={() => setImgSrc('/logos/fallback.webp')}
      priority={false}
    />
  );
}
