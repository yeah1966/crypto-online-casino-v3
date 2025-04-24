import Image from "next/image";

export default function FAQPage() {
  return (
    <>
      <div className="min-h-screen fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <div className="relative z-10 flex items-center justify-center min-h-screen py-8 px-2">
        <div className="bg-black/65 rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full text-white/90">
          <section className="w-full px-4 py-8 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-yellow-400 text-center font-extrabold text-4xl md:text-5xl mb-8">
                CRYPTO CASINO FAQ: ALL YOU NEED TO KNOW IN 2025
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Everything you need to know about crypto casinos, payments, privacy, and winning big — explained simply for new and experienced players.
              </p>
            </div>

            {/* CRYPTO BASICS */}
            <h2 className="text-3xl font-bold text-yellow-300 mb-6 mt-12">Crypto Basics</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <GlowCard icon="/casino-icons/Casino.svg" title="WHAT IS A CRYPTO CASINO?">
                A crypto casino is an online gambling platform where you play with cryptocurrencies like Bitcoin, Ethereum, or Litecoin, instead of traditional money.
              </GlowCard>
              <GlowCard icon="/casino-icons/Credit Card.svg" title="HOW DO I DEPOSIT WITH CRYPTO?">
                <ol className="list-decimal ml-6 mb-2">
                  <li>Create an account at a crypto-friendly casino</li>
                  <li>Go to the cashier and choose your coin (e.g. BTC, ETH)</li>
                  <li>Scan the QR or copy the wallet address</li>
                  <li>Send funds from your own wallet (e.g. MetaMask, Coinbase, Trust Wallet)</li>
                </ol>
                Most deposits arrive within seconds to minutes depending on the blockchain.
              </GlowCard>
              <GlowCard icon="/casino-icons/Dollar.svg" title="HOW DO I WITHDRAW MY WINNINGS?">
                Just like depositing — enter your crypto wallet address in the withdrawal section. Most crypto casinos process payouts instantly or within 24 hours.
              </GlowCard>
              <GlowCard icon="/casino-icons/Dices.svg" title="ARE CRYPTO TRANSACTIONS FASTER THAN FIAT?">
                Yes — no banks, no third parties. BTC takes ~10 mins, ETH a few seconds. Some casinos even support instant Lightning or Layer 2 options.
              </GlowCard>
            </div>

            {/* SAFETY & LEGAL */}
            <h2 className="text-3xl font-bold text-yellow-300 mb-6 mt-12">Safety & Legal</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <GlowCard icon="/casino-icons/Shield.svg" title="IS CRYPTO GAMBLING LEGAL?">
                It depends on your country. Some regions allow it, others ban it. Always check your local laws. Reputable casinos restrict access based on geolocation.
              </GlowCard>
              <GlowCard icon="/casino-icons/Clover.svg" title="DO I NEED TO VERIFY MY IDENTITY (KYC)?">
                Many crypto casinos let you play without KYC for small amounts. For bigger withdrawals, some may require verification.
              </GlowCard>
              <GlowCard icon="/casino-icons/Lucky Charm.svg" title="IS IT SAFE TO GAMBLE WITH CRYPTO?">
                Stick to licensed, reputable casinos. Use strong passwords and 2FA. Withdraw winnings to your own wallet for extra safety.
              </GlowCard>
              <GlowCard icon="/casino-icons/Bonus.svg" title="CAN I WIN BIG?">
                Yes. Crypto jackpots can hit millions. Games like Mega Moolah or progressive slots have turned $10 bets into life-changing wins.
              </GlowCard>
            </div>

            {/* TECH & EXPERIENCE */}
            <h2 className="text-3xl font-bold text-yellow-300 mb-6 mt-12">Tech & Experience</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <GlowCard icon="/casino-icons/Smartphone.svg" title="IS MOBILE PLAY SUPPORTED?">
                Yes — top crypto casinos are mobile-first. Many offer full apps or instant access via mobile browser.
              </GlowCard>
              <GlowCard icon="/casino-icons/Lock.svg" title="DO I NEED A VPN?">
                Sometimes. If your country blocks gambling, a VPN lets you access the site securely. Look for casinos that allow or recommend VPN use.
              </GlowCard>
              <GlowCard icon="/casino-icons/Good Review.svg" title="IS CUSTOMER SUPPORT AVAILABLE?">
                Most sites offer:<ul className="list-disc ml-6 mt-1"><li>24/7 live chat</li><li>Email support</li><li>Telegram or Discord communities</li></ul>
              </GlowCard>
            </div>

            {/* TROUBLESHOOTING */}
            <h2 className="text-3xl font-bold text-yellow-300 mb-6 mt-12">Troubleshooting</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <GlowCard icon="/casino-icons/Warning.svg" title="MY TRANSACTION IS STUCK. WHAT DO I DO?">
                Check the blockchain explorer for confirmation. If it's pending, wait a few more minutes. If it's failed, contact support with your transaction ID (TXID).
              </GlowCard>
              <GlowCard icon="/casino-icons/Blocked.svg" title="WHY WAS MY COUNTRY BLOCKED?">
                Some regions are geo-restricted due to local laws. Use a VPN at your own risk if you choose to bypass restrictions.
              </GlowCard>
              <GlowCard icon="/casino-icons/Hot.svg" title="CAN I LOSE MY CRYPTO?">
                Yes. Gambling always carries risk. Only play with what you can afford to lose. Set limits and stay in control.
              </GlowCard>
            </div>

            {/* BONUS TIP */}
            <div className="max-w-2xl mx-auto mt-12">
              <div className="bg-gradient-to-br from-yellow-400 to-pink-400 p-6 rounded-2xl shadow-md text-black text-lg font-semibold border-4 border-white/20">
                <span className="block text-2xl mb-2">Bonus Tip</span>
                <span className="block mb-1">“If it’s not your keys, it’s not your coins.”</span>
                <span>Always keep your winnings in your own wallet, not stored on the casino.</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function GlowCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-black/70 border border-purple-500 rounded-xl p-4 my-4 shadow-lg backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <Image src={icon} alt={title} width={32} height={32} className="flex-shrink-0" />
        <div>
          <h3 className="text-yellow-400 text-xl font-semibold mb-2">{title}</h3>
          <div className="text-white/90 text-base">{children}</div>
        </div>
      </div>
    </div>
  );
}
