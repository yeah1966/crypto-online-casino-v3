import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import clsx from "clsx";

// Segmenten in exacte volgorde als visueel op bigwheel.png (met de klok mee vanaf boven)
// img = bestandsnaam van het logo in /public/logos/
const segments = [
  {
    name: "Dreams Casino",
    slug: "dreamcasino",
    img: "dreamscasino.png", // Correcte naam!
    url: "https://www.dreamslinks.com/click/6/4305/15512/1",
  },
  {
    name: "Slots of Vegas",
    slug: "slotsofvegas",
    img: "slotsofvegas.png",
    url: "https://www.slotsofvegaslinks.com/click/15/4298/15512/1",
  },
  {
    name: "Cool Cat Casino",
    slug: "coolcatcasino",
    img: "coolcatcasino.png",
    url: "https://www.coolcatlinks.com/click/7/3936/15512/1",
  },
  {
    name: "Betzard",
    slug: "betzard",
    img: "betzard.png",
    url: "https://www.betzard.com/?ref=YOUR_ID",
  },
  {
    name: "Cloudbet",
    slug: "cloudbet",
    img: "cloudbet.png",
    url: "https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=36d323f0abfa6d541b76115d291e88c1&aftm_campaign=COC&aftm_source=website&aftm_medium=banner&aftm_content=banner-468",
  },
  {
    name: "Prism Casino",
    slug: "prismcasino",
    img: "prismcasino.png",
    url: "https://www.prismlinks.com/click/6/4305/15512/1",
  },
  {
    name: "Coinpoker",
    slug: "coinpoker",
    img: "coinpoker.png",
    url: "https://record.coinpokeraffiliates.com/_BPlLejNitgdhg6WO2I1rgWNd7ZgqdRLk/1/",
  },
  {
    name: "Wild Vegas",
    slug: "wildvegas",
    img: "wildvegas.png", // Correcte naam volgens bestand in /public/logos/
    url: "https://www.wildvegaslinks.com/click/11/4315/15512/1",
  },
  {
    name: "Crypto Loko",
    slug: "cryptoloko",
    img: "cryptoloko.png",
    url: "https://cryptolokolink.com/click/77/441/6060/1",
  },
  {
    name: "BitStarz",
    slug: "bitstarz",
    img: "bitstarz.png",
    url: "https://bs5.direct/b2b7d0ed7",
  },
];

const mapping = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const SLICE_COUNT = segments.length;
const SLICE_DEG = 360 / SLICE_COUNT;
const SPIN_DURATION = 4000; // ms

function getRandomIndex() {
  return Math.floor(Math.random() * SLICE_COUNT);
}

// Draai exact naar het midden van het segment onder de pointer, zonder extra 180 graden
const getRotationDegrees = (resultIdx: number, spins: number) => {
  return 360 * spins + ((segments.length - resultIdx + 2) % segments.length) * SLICE_DEG - SLICE_DEG / 2;
};

const WheelOfFortune = forwardRef(function WheelOfFortune(props, ref) {
  const [spinning, setSpinning] = useState(false);
  const [resultIdx, setResultIdx] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Helper to reset rotation after animation (for stacking fix)
  const resetToFinal = (finalDeg: number) => {
    if (wheelRef.current) {
      wheelRef.current.style.transition = "none";
      wheelRef.current.style.transform = `rotate(${finalDeg}deg)`;
      void wheelRef.current.offsetWidth;
      wheelRef.current.style.transition = "";
    }
    setRotation(finalDeg);
  };

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResultIdx(null);
    const winnerIdx = getRandomIndex();
    const extraSpins = 4;
    const rotationDegrees = getRotationDegrees(winnerIdx, extraSpins);
    setRotation(rotationDegrees);
    if (wheelRef.current) {
      wheelRef.current.style.transition = `transform ${SPIN_DURATION}ms cubic-bezier(0.17, 0.67, 0.83, 0.67)`;
      wheelRef.current.style.transform = `rotate(${rotationDegrees}deg)`;
    }
    // Play ratel sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setTimeout(() => {
      setResultIdx(winnerIdx);
      setSpinning(false);
      // Stop sound
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      resetToFinal(rotationDegrees % 360);
    }, SPIN_DURATION);
  };

  useImperativeHandle(ref, () => ({
    spin
  }));

  const getSegment = (idx: number) => segments[mapping[idx]];

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Audio element for ratel sound */}
      <audio ref={audioRef} src="/sounds/reel-spin.mp3" preload="auto" />
      <div className="relative w-72 h-72 md:w-96 md:h-96 mb-8 select-none">
        {/* Wheel */}
        <div
          ref={wheelRef}
          className={clsx(
            "absolute w-full h-full rounded-full border-4 border-yellow-400 shadow-neon overflow-hidden bg-[#18182f]"
          )}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            src="/wheel/bigwheel.png"
            alt="Wheel of Fortune"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
          />
        </div>
        {/* Pointer */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-3 z-10">
          <div className="w-8 h-8 bg-yellow-400 rounded-b-full shadow-neon flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10,0 20,20 0,20" fill="#fff200" /></svg>
          </div>
        </div>
      </div>
      {/* Result */}
      {resultIdx !== null && (
        <div className="mt-10 flex flex-col items-center animate-fade-in">
          <div className="text-3xl font-extrabold text-yellow-300 drop-shadow-neon mb-2">
            {getSegment(resultIdx).name}
          </div>
          {/* Toon casino logo uit /public/logos/ */}
          <div className="mb-4">
            <img
              src={`/logos/${getSegment(resultIdx).img}`}
              alt={`${getSegment(resultIdx).name} crypto casino logo`}
              width={90}
              height={90}
              className="object-contain w-auto h-[70px] drop-shadow"
            />
          </div>
          <a
            href={getSegment(resultIdx).url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="py-3 px-10 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-bold text-xl shadow-neon hover:scale-110 hover:shadow-neon-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300">
              Play Now
            </button>
          </a>
        </div>
      )}
    </div>
  );
});

export default WheelOfFortune;
