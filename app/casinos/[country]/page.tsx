import { notFound } from "next/navigation";
import Image from "next/image";
import CasinoCard from '../../../components/CasinoCard';
import type { CasinoCardProps } from '../../../components/CasinoCard';
import { germanyCasinos } from "@/data/countries/germany";
import { spainCasinos } from "@/data/countries/spain";
import { brazilCasinos } from "@/data/countries/brazil";

const countryCasinoMap: Record<string, unknown[]> = {
  germany: germanyCasinos,
  spain: spainCasinos,
  brazil: brazilCasinos,
};

export async function generateMetadata({ params }: { params: { country: string } }) {
  const country = params.country.toLowerCase();

  const ogImage =
    country === 'germany'
      ? '/og/og-casinos-germany.webp'
      : country === 'spain'
      ? '/og/og-casinos-spain.webp'
      : country === 'brazil'
      ? '/og/og-casinos-brazil.webp'
      : `/og/og-casinos-${country}.webp`;

  return {
    title: `Best Crypto Casinos in ${country}`,
    description: `Explore the top-rated crypto casinos in ${country}, featuring secure payments, great bonuses, and fast payouts.`,
    openGraph: {
      title: `Best Crypto Casinos in ${country}`,
      description: `Discover trusted crypto casinos licensed for players in ${country}.`,
      images: [ogImage],
      url: `https://crypto-online-casino.com/casinos/${country}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Crypto Casinos in ${country}`,
      description: `Top crypto casinos for ${country} players. Trusted, fast & anonymous.`,
      images: [ogImage],
    },
  };
}

export default function CountryCasinosPage({ params }: { params: { country: string } }) {
  const country = params.country.toLowerCase();
  const casinos = countryCasinoMap[country];

  if (!casinos) return notFound();

  const countryName = country.charAt(0).toUpperCase() + country.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-yellow-900 py-12 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-black/80 rounded-2xl shadow-2xl p-8 flex flex-col gap-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow">
              Best Crypto Casinos in {countryName} {country === 'germany' ? '🇩🇪' : country === 'spain' ? '🇪🇸' : country === 'brazil' ? '🇧🇷' : ''}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Explore the top-rated crypto-friendly online casinos available to players in {countryName}.
              All platforms are tested for license compliance, local language support, and region-specific bonuses.
            </p>
            <Image
              src={
                country === 'brazil'
                  ? '/og/og-casinos-brazil.webp'
                  : country === 'spain'
                  ? '/og/og-casinos-spain.webp'
                  : country === 'germany'
                  ? '/og/og-casinos-germany.webp'
                  : `/og/og-casinos-spain.webp`
              }
              alt={`OG visual for crypto casinos in ${countryName}`}
              width={640}
              height={336}
              className="rounded-xl shadow-lg w-full h-auto object-cover my-6 mx-auto"
              priority
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {casinos.map((casino, idx) => {
              if (typeof casino === 'object' && casino !== null && 'slug' in casino) {
                return <CasinoCard key={(casino as unknown as CasinoCardProps).slug} {...(casino as unknown as CasinoCardProps)} />;
              }
              return null;
            })}
          </div>

          <div className="text-white/80 text-sm mt-8">
            <h2 className="text-yellow-400 font-bold mb-2 text-xl">
              Crypto Gambling in {countryName}: What You Need to Know
            </h2>
            <p className="leading-relaxed">
              Crypto casino regulations in {countryName} are constantly evolving. Always check the latest local laws before playing.
              Popular payment methods include Bitcoin, Ethereum, and USDT. Choose licensed platforms with a strong reputation for safety, privacy, and fast payouts.
            </p>
          </div>

          {/* Footer verantwoord gokken */}
          <div className="mt-10 text-center">
            <span className="bg-white rounded-full p-2 shadow inline-flex items-center justify-center mb-2" style={{width:64, height:64}}>
  <img
    src="/icons/18.svg"
    alt="18+ Only"
    className="h-12 w-12 block"
    style={{display:'block'}}
  />
</span>
            <p className="text-xs text-white/60 text-center">
              Gambling can be addictive. Please play responsibly. For support visit{' '}
              <a
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-yellow-300 hover:text-yellow-500"
              >
                BeGambleAware.org
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
