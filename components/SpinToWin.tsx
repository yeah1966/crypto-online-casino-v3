import React, { useState } from "react";
import { useRouter } from "next/router";

const casinos = [
  { name: "BitStarz", slug: "bitstarz" },
  { name: "Stake", slug: "stake" },
  { name: "BC.Game", slug: "bcgame" },
  { name: "7Bit Casino", slug: "7bit" },
  { name: "mBit Casino", slug: "mbit" },
  { name: "FortuneJack", slug: "fortunejack" },
  { name: "Cloudbet", slug: "cloudbet" },
  { name: "Rollbit", slug: "rollbit" },
  { name: "TrustDice", slug: "trustdice" },
  { name: "Vave", slug: "vave" },
];

export default function SpinToWin() {
  const [spinning, setSpinning] = useState(false);
  const [selected, setSelected] = useState<null | { name: string; slug: string }>(null);
  const router = useRouter();

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setSelected(null);
    // Simuleer animatie (bijv. 2s spinning)
    setTimeout(() => {
      const idx = Math.floor(Math.random() * casinos.length);
      setSelected({ name: casinos[idx].name, slug: casinos[idx].slug === "cryptoloko" ? "crypto-loko" : casinos[idx].slug });
      // Na 2s open in nieuw tabblad
      setTimeout(() => {
        window.open(`/out/${casinos[idx].slug === "cryptoloko" ? "crypto-loko" : casinos[idx].slug}`, "_blank");
        setSpinning(false);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[500px] bg-gray-900 rounded-xl shadow-lg">
      <div className="mb-10">
        <div className={`mx-auto mb-6 w-32 h-32 flex items-center justify-center rounded-full border-8 border-yellow-400 bg-yellow-300 shadow-2xl ${spinning ? "animate-spin" : ""} transition-transform duration-500`}> 
          <span className="text-6xl">🎡</span>
        </div>
        {!spinning && !selected && (
          <button
            className="px-8 py-4 text-2xl font-bold rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:scale-105 transition-transform focus:outline-none"
            onClick={handleSpin}
          >
            🎡 Let the Wheel Decide!
          </button>
        )}
        {spinning && (
          <div className="text-lg text-yellow-200 font-semibold mt-4 animate-pulse">Spinning the wheel…</div>
        )}
        {selected && !spinning && (
          <div className="text-2xl font-bold text-green-400 mt-6 animate-bounce">
            🪙 The wheel chose <span className="text-white">{selected.name}</span> for you…
          </div>
        )}
      </div>
    </div>
  );
}
