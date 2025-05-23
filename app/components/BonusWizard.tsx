'use client';

import { useState } from 'react';
import Link from 'next/link';
import CasinoCard from '../../components/CasinoCard'; // herbruikbare kaartcomponent
import type { CasinoCardProps } from '../../components/CasinoCard';
import { casinos as casinosData } from '@/data/casinosData';
import WizardMascot from './WizardMascot';

export default function BonusWizard() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    bonusType: '',
    crypto: '',
    kyc: '',
  });
  const [resultsVisible, setResultsVisible] = useState(false);

  const handleSelect = (field, value) => {
    setAnswers({ ...answers, [field]: value });
    setStep((prev) => prev + 1);
  };

  const showResults = () => {
    setResultsVisible(true);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden px-4 py-16 md:px-8 max-w-3xl mx-auto text-white space-y-12 z-10">
      <div className="flex-1 min-w-0">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/magic-dust.svg')] bg-cover bg-no-repeat bg-center opacity-80" />
      <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 font-extrabold text-center drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] animate-pulse">
        🧙 Find Your Ideal Crypto Bonus
      </h1>

      {!resultsVisible && (
        <div className="space-y-8">
          {step === 1 && (
            <div>
              <label className="block text-lg font-semibold mb-2">✨ 1. What kind of bonus are you looking for?</label>
              <div className="grid gap-4">
                {['No Deposit', 'Welcome Bonus', 'Free Spins', 'VIP Cashback'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect('bonusType', opt)}
                    className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-2.5 px-6 rounded-full hover:opacity-90 transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block text-lg font-semibold mb-2">✨ 2. Which crypto do you want to use?</label>
              <div className="grid gap-4">
                {['Bitcoin', 'Ethereum', 'USDT', 'Litecoin', 'Dogecoin'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect('crypto', opt)}
                    className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-2.5 px-6 rounded-full hover:opacity-90 transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block text-lg font-semibold mb-2">✨ 3. Do you want a casino without KYC?</label>
              <div className="grid gap-4">
                {['Yes', 'Doesn’t matter', 'No'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      handleSelect('kyc', opt);
                      showResults();
                    }}
                    className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-2.5 px-6 rounded-full hover:opacity-90 transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {resultsVisible && (
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-green-400 mb-6">🎉 HERE’S WHAT WE RECOMMEND:</h2>
          {(() => {
            const filtered = casinosData.filter((casino) => {
              const bonusMatch = answers.bonusType === '' || (Array.isArray(casino.bonusTags) && casino.bonusTags.includes(answers.bonusType));
              const cryptoMatch = answers.crypto === '' || (Array.isArray(casino.cryptos) && casino.cryptos.includes(answers.crypto));
              const kycMatch =
                answers.kyc === 'Doesn’t matter' ||
                (answers.kyc === 'Yes' && casino.noKyc === true) ||
                (answers.kyc === 'No' && casino.noKyc === false);
              return bonusMatch && cryptoMatch && kycMatch;
            });
            return filtered.length > 0 ? (
              <div className="animate-fade-in-up mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
                {filtered.map((casino) => (
                  (typeof casino === 'object' && casino !== null &&
  'slug' in casino && 'name' in casino && 'logo' in casino && 'type' in casino && 'deal' in casino && 'bonus' in casino) ? (
  <CasinoCard key={(casino as unknown as CasinoCardProps).slug} {...(casino as unknown as CasinoCardProps)} />
) : null
                ))}
              </div>
            ) : (
              <p className="text-center text-white/70 mt-8">No matching casinos found. Try different options!</p>
            );
          })()}
          <p className="text-center text-white/80 mt-8">
            Want to explore more options? <Link href="/crypto-casino-reviews" className="text-yellow-400 underline">Browse all reviews</Link>
          </p>
        </div>
      )}
      </div>
      {/* Mascot bottom, always visible */}
      <div className="w-full flex justify-center mt-10">
        <WizardMascot step={step} resultsVisible={resultsVisible} />
      </div>
    </div>
  );
}
