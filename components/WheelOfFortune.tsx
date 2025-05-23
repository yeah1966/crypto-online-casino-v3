'use client';

import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import dynamic from 'next/dynamic';
const Wheel = dynamic(() => import('react-custom-roulette').then(mod => mod.Wheel), { ssr: false });
import { casinos } from "../data/casinosData";
import Image from "next/image";

type CasinoOption = { option: string; style: { backgroundColor: string }; logo: string };

const data: CasinoOption[] = [
  { option: 'BitStarz', style: { backgroundColor: '#FF6B6B' }, logo: '/logos/bitstarz.png' },
  { option: 'Wild Vegas', style: { backgroundColor: '#FFD93D' }, logo: '/logos/wildvegas.png' },
  { option: 'Dreams', style: { backgroundColor: '#6BCB77' }, logo: '/logos/dreams.png' },
  { option: 'Slots of Vegas', style: { backgroundColor: '#4D96FF' }, logo: '/logos/slotsofvegas.png' },
  { option: '7Bit', style: { backgroundColor: '#FF6B6B' }, logo: '/logos/7bit.png' },
  { option: 'Cloudbet', style: { backgroundColor: '#FFD93D' }, logo: '/logos/cloudbet.png' },
  { option: 'Crypto Loko', style: { backgroundColor: '#6BCB77' }, logo: '/logos/cryptoloko.png' },
  { option: 'Prism Casino', style: { backgroundColor: '#4D96FF' }, logo: '/logos/prismcasino.png' },
  { option: 'Betzard', style: { backgroundColor: '#FF6B6B' }, logo: '/logos/betzard.png' },
  { option: 'CoinPoker', style: { backgroundColor: '#FFD93D' }, logo: '/logos/coinpoker.png' },
];

function getAffiliateUrl(slug: string) {
  const found = casinos.find(c => c.slug === slug);
  return found?.affiliateUrl || '';
}

const WheelOfFortune = forwardRef((props, ref) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState<CasinoOption | null>(null); 
  const audioRefSpin = useRef<HTMLAudioElement>(null);
  const audioRefWin = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    spin() {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setWinner(null); 
      if (audioRefSpin.current) {
        audioRefSpin.current.currentTime = 0;
        audioRefSpin.current.play();
      }
    },
  }));

  const handleStopSpinning = () => {
    setMustSpin(false); 
    if (audioRefSpin.current) {
      audioRefSpin.current.pause();
      audioRefSpin.current.currentTime = 0;
    }
    setTimeout(() => {
      if (audioRefWin.current) audioRefWin.current.play();
      setWinner(data[prizeNumber]); 
    }, 100); 
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Audio elements */}
      <audio ref={audioRefSpin} src="/sounds/reel-spin.mp3" preload="auto" />
      <audio ref={audioRefWin} src="/sounds/win.mp3" preload="auto" />

      <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex justify-center items-center shadow-[0_0_32px_8px_gold] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-2 md:px-0">
        {/* Pointer wijzer boven het wheel */}
        <div className="pointer"></div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={handleStopSpinning}
          backgroundColors={['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF']}
          textColors={[
            '#fff',      // BitStarz - rood
            '#22223b',  // Wild Vegas - geel
            '#fff',      // Dreams - groen
            '#fff',      // Slots of Vegas - blauw
            '#fff',      // 7Bit - rood
            '#22223b',  // Cloudbet - geel
            '#fff',      // Crypto Loko - groen
            '#fff',      // Prism Casino - blauw
            '#fff',      // Betzard - rood
            '#22223b',  // CoinPoker - geel
          ]}
          outerBorderColor="#FFD700"
          outerBorderWidth={12}
          innerRadius={30}
          radiusLineWidth={2}
          radiusLineColor="#fff"
          fontSize={20}
          fontWeight="bold"
          textDistance={62}
        />
        {/* Shine overlay effect */}
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle at 60% 30%, rgba(255,255,255,0.14), transparent 60%)'}} />
        {/* Midden van het Wheel met afbeelding */}
        <Image
          src="/assets/roulette-center.png"
          alt="Roulette center"
          width={150}
          height={150}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] md:w-[150px] md:h-[150px] rounded-full border-4 border-black/60 shadow-inner shadow-black/60 pointer-events-none object-cover"
          style={{zIndex: 10}}
        />
      </div>

      {/* Winner Button - robuuste matching */}
      {winner && (() => {
        const affiliateLink = getAffiliateUrl(winner.option.replace(/\s+/g, '').toLowerCase());
        return affiliateLink ? (
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-orange-400 via-pink-500 to-yellow-400 text-white font-extrabold rounded-full py-4 px-10 shadow-xl drop-shadow-[0_0_18px_gold] border-4 border-pink-300 animate-pulse hover:scale-110 hover:brightness-110 transition-all duration-300"
            style={{
              boxShadow: '0 0 24px 4px #FFD700, 0 0 8px 2px #FF6E00',
              textShadow: '2px 2px 8px #000, 0 0 8px #FF6E00',
            }}
          >
            <Image src={winner.logo} alt={`${winner.option} logo`} width={40} height={40} className="inline-block mr-2 align-middle rounded bg-black p-1" />
            Go to {winner.option}
          </a>
        ) : (
          <button
            disabled
            className="btn bg-gradient-to-r from-orange-400 via-pink-500 to-yellow-400 text-white font-extrabold rounded-full py-4 px-10 shadow-xl border-4 border-pink-300 opacity-50 cursor-not-allowed"
          >
            Link not available
          </button>
        );
      })()}
    </div>
  );
});

WheelOfFortune.displayName = 'WheelOfFortune';
export default WheelOfFortune;
