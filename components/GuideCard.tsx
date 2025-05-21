import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GuideCardProps {
  title: string;
  description: string;
  slug: string;
  image: string;
}

export default function GuideCard({ title, description, slug, image }: GuideCardProps) {
  const isSvg = image.endsWith(".svg");
  return (
    <Link href={slug} className="group block bg-neutral-900/80 hover:bg-yellow-400/10 border border-neutral-800 rounded-xl shadow-xl overflow-hidden transition-all duration-200 hover:scale-[1.03] focus-visible:ring-2 ring-yellow-400">
      <div className="relative flex items-center justify-center w-full h-20 md:h-24 bg-black/30">
        {isSvg ? (
          <img
            src={image}
            alt={title}
            className="h-12 md:h-16 w-auto mx-auto my-2 drop-shadow-xl"
            loading="lazy"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-yellow-300 group-hover:text-yellow-400 transition-colors">{title}</h2>
        <p className="text-white/90 text-base">{description}</p>
      </div>
    </Link>
  );
}
