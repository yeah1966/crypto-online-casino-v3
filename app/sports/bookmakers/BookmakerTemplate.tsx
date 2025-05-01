import Image from "next/image";

interface FeatureBlock {
  title: string;
  icon: string;
  description: string;
}

interface BookmakerTemplateProps {
  logo: string;
  title: string;
  description: string;
  cryptocurrencies: { symbol: string; label: string; icon: string }[];
  sports: { label: string; icon: string }[];
  mainBlocks: { title: string; icon: string; description: string }[];
  featureBlocks: FeatureBlock[];
  cta?: { href: string; text: string };
  children?: React.ReactNode;
}

export default function BookmakerTemplate({
  logo,
  title,
  description,
  cryptocurrencies,
  sports,
  mainBlocks,
  featureBlocks,
  cta,
  children,
}: BookmakerTemplateProps) {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Transparant groot vlak achter de content voor verduistering */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-black/60 rounded-3xl backdrop-blur-sm" />
      </div>
      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        {/* Header - logo links van tekst */}
        <div className="flex items-center bg-transparent mb-2 gap-6">
          <Image
            src={logo}
            alt="Bookmaker Logo"
            width={80}
            height={80}
            className="flex-shrink-0 rounded-xl shadow-md bg-white/5"
          />
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-2 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-zinc-300">{description}</p>
          </div>
        </div>

        {/* Accepted Cryptocurrencies */}
        <div className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm">
          <Image src={cryptocurrencies[0].icon} alt={cryptocurrencies[0].label} width={84} height={84} className="flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-white mb-2 tracking-wide uppercase">Accepted Cryptocurrencies</h2>
            <div className="flex flex-wrap justify-between items-center gap-4 mt-4 w-full">
              {cryptocurrencies.map(({ symbol, label, icon }) => (
                <div key={symbol} className="flex flex-col items-center mx-2">
                  <Image src={icon} alt={label} width={48} height={48} />
                  <span className="mt-2 text-base font-semibold tracking-wide text-white/90">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Popular Sports */}
        <div className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm">
          <Image src={sports[0].icon} alt="Sports" width={96} height={96} className="flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-white mb-2 tracking-wide uppercase">Most Popular Sports</h2>
            <div className="grid grid-cols-3 gap-y-6 gap-x-4 mt-6 w-full">
              {sports.map(({ label, icon }) => (
                <div key={label} className="flex flex-col items-center">
                  <Image src={icon} alt={label} width={64} height={64} />
                  <span className="mt-2 text-base font-semibold tracking-wide text-white/90 text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Info Blocks */}
        {mainBlocks.map(({ title, icon, description }) => (
          <div key={title} className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm">
            <Image src={icon} alt={title} width={84} height={84} className="flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-extrabold text-yellow-300 mb-2 tracking-wide uppercase">{title}</h2>
              <p className="text-base text-zinc-200 leading-relaxed">{description}</p>
            </div>
          </div>
        ))}

        {/* Feature Blocks */}
        {featureBlocks.map(({ title, icon, description }) => (
          <div key={title} className="flex items-center bg-black/60 rounded-2xl shadow-lg p-6 gap-8 backdrop-blur-sm">
            <Image src={icon} alt={title} width={84} height={84} className="flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl font-extrabold text-yellow-300 mb-2 tracking-wide uppercase">{title}</h3>
              <p className="text-base text-zinc-200 leading-relaxed">{description}</p>
            </div>
          </div>
        ))}

        {cta && (
          <div className="text-center mt-10">
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition"
            >
              {cta.text}
            </a>
          </div>
        )}

        {/* Render eventuele children onderaan de pagina */}
        {children}
      </div>
    </div>
  );
}
