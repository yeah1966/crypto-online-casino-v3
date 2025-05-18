import React from "react";
import Image from "next/image";

// Reusable prose styling for all blog articles
const proseClass =
  "prose lg:prose-lg prose-invert prose-headings:text-yellow-400 prose-h2:mb-3 prose-h2:mt-10 prose-h3:text-purple-400 prose-h3:mt-8 prose-h3:mb-2 prose-p:text-gray-100 prose-strong:text-yellow-300 prose-blockquote:border-l-4 prose-blockquote:border-yellow-400 prose-blockquote:bg-black/40 prose-blockquote:p-4 prose-blockquote:rounded-xl max-w-none";

export type BlogArticleTemplateProps = {
  title: string;
  published: string;
  description: string;
  headerImage: { src: string; alt: string; width: number; height: number };
  introQuote: string;
  introContent: React.ReactNode;
  howItWorksTitle: string;
  howItWorksContent: React.ReactNode;
  howItWorksImage?: { src: string; alt: string; width: number; height: number };
  whyItMattersTitle: string;
  whyItMattersContent: React.ReactNode;
  doesEveryCasinoTitle: string;
  doesEveryCasinoContent: React.ReactNode;
  tip?: React.ReactNode;
  finalThoughtsTitle: string;
  finalThoughtsContent: React.ReactNode;
  outroImage?: { src: string; alt: string; width: number; height: number };
  ctaHref: string;
  ctaText: string;
};

const BlogArticleTemplate: React.FC<BlogArticleTemplateProps> = ({
  title,
  published,
  description,
  headerImage,
  introQuote,
  introContent,
  howItWorksTitle,
  howItWorksContent,
  howItWorksImage,
  whyItMattersTitle,
  whyItMattersContent,
  doesEveryCasinoTitle,
  doesEveryCasinoContent,
  tip,
  finalThoughtsTitle,
  finalThoughtsContent,
  outroImage,
  ctaHref,
  ctaText,
}) => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center py-10 px-2" style={{ backgroundImage: "url('/images/crypto-casino-online.webp')" }}>
      <article className="w-full max-w-3xl mx-auto bg-black/70 sm:rounded-xl sm:shadow-lg md:rounded-2xl md:shadow-2xl px-4 md:px-6 py-8 md:py-10 flex flex-col gap-8 relative">
        {/* Header */}
        <header className="mb-6 pb-2 border-b border-yellow-500/40">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2 leading-tight drop-shadow">{title}</h1>
          <p className="text-sm text-gray-400 mb-2">Published on {published}</p>
          <p className="text-lg text-gray-200">{description}</p>
        </header>

        {/* Header Image */}
        <Image
          src={headerImage.src}
          alt={headerImage.alt}
          width={headerImage.width}
          height={headerImage.height}
          className="rounded-xl shadow-lg w-full h-auto object-cover mb-4"
          priority
        />

        {/* Stand-out quote above the fold */}
        <blockquote className="bg-yellow-950 border-l-4 border-yellow-400 px-6 py-4 rounded-xl text-yellow-100 text-md italic shadow-inner">
          {introQuote}
        </blockquote>

        {/* Intro Content */}
        <section className={proseClass}>
          {introContent}
        </section>

        {/* How It Works Section */}
        <section className={proseClass}>
          <h2><span className="text-2xl md:text-3xl align-middle mr-2">🛠</span>{howItWorksTitle}</h2>
          {howItWorksContent}
          {howItWorksImage && (
            <Image
              src={howItWorksImage.src}
              alt={howItWorksImage.alt}
              width={howItWorksImage.width}
              height={howItWorksImage.height}
              className="rounded-xl shadow-lg w-full h-auto object-cover mb-4 mt-8"
            />
          )}
        </section>

        {/* Why It Matters Section */}
        <section className={proseClass}>
          <h2><span className="text-2xl md:text-3xl align-middle mr-2">🧩</span>{whyItMattersTitle}</h2>
          {whyItMattersContent}
        </section>

        {/* Does Every Casino Section */}
        <section className={proseClass}>
          <h2><span className="text-2xl md:text-3xl align-middle mr-2">🔍</span>{doesEveryCasinoTitle}</h2>
          {doesEveryCasinoContent}
          {tip && (
            <div className="mt-4 mb-10">{tip}</div>
          )}
        </section>

        {/* Final Thoughts Section */}
        <section className={proseClass}>
          <h2><span className="text-2xl md:text-3xl align-middle mr-2">✅</span>{finalThoughtsTitle}</h2>
          {finalThoughtsContent}
        </section>

        {/* Outro Visual (optional) */}
        {outroImage && (
          <Image
            src={outroImage.src}
            alt={outroImage.alt}
            width={outroImage.width}
            height={outroImage.height}
            className="rounded-xl shadow-lg w-full h-auto object-cover mb-4"
          />
        )}

        {/* CTA Footer */}
        <footer className="mt-4 flex justify-center">
          <a
            href={ctaHref}
            className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-500 transition text-lg tracking-wide"
          >
            {ctaText}
          </a>
        </footer>
      </article>
    </div>
  );
};

export default BlogArticleTemplate;
