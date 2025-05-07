import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Gebruik alleen casino's met geldige logo's (uit casinoList.ts)
const casinos = [
  { name: "BitStarz", slug: "bitstarz" },
  { name: "Stake", slug: "stake" },
  { name: "Betzard", slug: "betzard" },
  { name: "Betplay", slug: "betplay" },
  { name: "Cloudbet", slug: "cloudbet" },
  { name: "CoinPoker", slug: "coinpoker" },
  { name: "Crypto Loco", slug: "cryptoloco" },
  { name: "Dreams Casino", slug: "dreamscasino" },
  { name: "Prism Casino", slug: "prismcasino" },
];

export default function CasinoWheel() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setShowResult(false);

    // Play sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    const winnerIndex = Math.floor(Math.random() * casinos.length);
    const degreesPerSegment = 360 / casinos.length;
    const fullSpins = 5;
    const finalDeg = 360 * fullSpins + (winnerIndex * degreesPerSegment + degreesPerSegment / 2);

    const chosen = casinos[winnerIndex];

    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
      wheelRef.current.style.transform = `rotate(${finalDeg}deg)`;
    }

    // Delay showing result until after spin animation
    setTimeout(() => {
      setWinner(chosen.name);
      setShowResult(true);
      // Open redirect in nieuw tabblad na 2s
      setTimeout(() => {
        if (chosen.slug) {
          window.open(`/out/${chosen.slug}`, "_blank");
        }
        setSpinning(false);
      }, 2000);
    }, 4000);
  };

  const resetWheel = () => {
    setWinner(null);
    setShowResult(false);
    if (wheelRef.current) {
      wheelRef.current.style.transition = "none";
      wheelRef.current.style.transform = "rotate(0deg)";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12">
      {/* Hidden audio element */}
      <audio ref={audioRef} src="/sounds/reel-spin.mp3" preload="auto" />

      <motion.div
        ref={wheelRef}
        initial={{ rotate: 0 }}
        animate={{ rotate: spinning ? 360 * 5 : 0 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="relative w-64 h-64 rounded-full border-[6px] border-yellow-400 shadow-inner bg-black"
      >
        <div
          className="absolute inset-0 rounded-full bg-[url('/images/wheel-base.png')] bg-cover"
        />
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-[20px] border-l-transparent border-r-transparent border-b-red-600" />
      </motion.div>

      {!spinning && (
        <motion.button
          onClick={spinWheel}
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-neon hover:scale-105 transition-transform border-4 border-yellow-300"
        >
          SPIN
        </motion.button>
      )}

      {showResult && winner && (
        <>
          <motion.p
            className="text-green-400 text-xl font-semibold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            The wheel chose <span className="text-white">{winner}</span> for you…
          </motion.p>
          <motion.button
            onClick={resetWheel}
            whileHover={{ scale: 1.1 }}
            className="mt-4 px-6 py-2 rounded-full bg-black text-yellow-300 font-bold shadow hover:scale-105 transition-transform border border-yellow-400"
          >
            Spin Again
          </motion.button>
        </>
      )}
    </div>
  );
}
