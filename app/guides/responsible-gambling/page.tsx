import Link from 'next/link';

export default function ResponsibleGamblingPage() {
  return (
    <div className="relative w-full min-h-screen z-10 px-4 md:px-8 py-16 max-w-6xl mx-auto text-white space-y-12">

      {/* Achtergrond en overlay */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center will-change-transform" style={{ backgroundImage: "url('/images/crypto-casino-online.webp')" }} aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-black/65 backdrop-blur-sm" aria-hidden="true" />

      {/* Inhoud */}
      <section className="max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
          🧠 Responsible Gambling with Crypto
        </h1>

        <p>
          Crypto gambling can be exciting and fast-paced. But with great freedom comes the need for control. Here’s how to enjoy crypto casinos while staying in control of your habits, budget, and well-being.
        </p>

        <h2 className="text-2xl font-semibold text-pink-400">🎯 1. Set a Bankroll Budget First</h2>
        <p>
          Before making your first deposit, decide how much you’re willing to risk. Track your deposits and withdrawals, and set session limits to avoid impulsive decisions.
        </p>

        <h2 className="text-2xl font-semibold text-pink-400">⏳ 2. Don’t Chase Losses</h2>
        <p>
          Everyone loses sometimes. Don’t try to win it all back in one go. That’s how bad habits start. Pause, walk away, and return later with a clear head.
        </p>

        <h2 className="text-2xl font-semibold text-pink-400">🧰 3. Use Built-In Casino Tools</h2>
        <p>
          Most reputable crypto casinos offer features to help you stay responsible. Use them to set limits and avoid falling into unhealthy patterns.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Deposit or loss limits</li>
          <li>Session reminders</li>
          <li>Time-outs and self-exclusion options</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-400">🛑 4. Know When to Walk Away</h2>
        <p>
          If gambling affects your finances, mental health, or relationships, it's time to take a break. Professional help is available. And it works.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><Link href="https://www.begambleaware.org/" passHref legacyBehavior><a target="_blank" rel="noopener noreferrer">BeGambleAware.org</a></Link></li>
          <li><Link href="https://www.gamcare.org.uk/" passHref legacyBehavior><a target="_blank" rel="noopener noreferrer">GamCare.org.uk</a></Link></li>
          <li><Link href="https://www.gamblersanonymous.org.uk/" passHref legacyBehavior><a target="_blank" rel="noopener noreferrer">Gamblers Anonymous</a></Link></li>
        </ul>
      </section>

      {/* OG-image */}
      <div className="max-w-2xl mx-auto">
        <img
          src="/images/responsible-gambling-with-crypto.webp"
          alt="Responsible Gambling with Crypto"
          className="w-full rounded-xl shadow-lg mt-8"
        />
      </div>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-lg text-white/80 mb-4">Want to gamble safely and stay in control?</p>
        <Link href="/crypto-casino-reviews" className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition shadow-lg">
          🧩 Explore Reputable Crypto Casinos
        </Link>
      </section>
    </div>
  );
}
