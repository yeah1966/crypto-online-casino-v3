'use client';

import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Wheel } from 'react-custom-roulette';

const data = [
  { option: 'BitStarz', style: { backgroundColor: '#FF6B6B' } },
  { option: 'Wild Vegas', style: { backgroundColor: '#FFD93D' } },
  { option: 'Dreams', style: { backgroundColor: '#6BCB77' } },
  { option: 'Slots of Vegas', style: { backgroundColor: '#4D96FF' } },
  { option: '7Bit', style: { backgroundColor: '#FF6B6B' } },
  { option: 'Cloudbet', style: { backgroundColor: '#FFD93D' } },
  { option: 'Crypto Loko', style: { backgroundColor: '#6BCB77' } },
  { option: 'Prism Casino', style: { backgroundColor: '#4D96FF' } },
  { option: 'Betzard', style: { backgroundColor: '#FF6B6B' } },
  { option: 'CoinPoker', style: { backgroundColor: '#FFD93D' } },
];

const WheelOfFortune = forwardRef((props, ref) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const audioRefSpin = useRef<HTMLAudioElement>(null);
  const audioRefWin = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    spin() {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      audioRefSpin.current?.play();
    },
  }));

  const handleStopSpinning = () => {
    audioRefSpin.current?.pause();
    audioRefSpin.current!.currentTime = 0;
    audioRefWin.current?.play();
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Audio elements */}
      <audio ref={audioRefSpin} src="/sounds/reel-spin.mp3" preload="auto" />
      <audio ref={audioRefWin} src="/sounds/win.mp3" preload="auto" />

      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] shadow-[0_0_20px_5px_gold] animate-pulse rounded-full bg-black">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={handleStopSpinning}
          backgroundColors={['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF']}
          textColors={['#ffffff']}
          outerBorderColor="#FFD700"
          outerBorderWidth={8}
          innerRadius={30}
          radiusLineWidth={2}
          radiusLineColor="#fff"
          fontSize={12}
        />
      </div>
    </div>
  );
});

WheelOfFortune.displayName = 'WheelOfFortune';
export default WheelOfFortune;