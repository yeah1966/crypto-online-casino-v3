"use client";
import { useState } from "react";

export default function WheelPage() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");
  const prizes = [
    "10 Free Spins",
    "0.001 BTC",
    "VIP Bonus",
    "Mystery Prize",
    "25 Free Spins",
    "0.005 ETH",
    "No Win – Try Again",
    "50% Deposit Bonus",
  ];

  function spinWheel() {
    setSpinning(true);
    setResult("");
    setTimeout(() => {
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
      setResult(randomPrize);
      setSpinning(false);
    }, 2200);
  }

  return (
    <>
      <div className="min-h-screen fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <div className="relative z-10 flex items-center justify-center min-h-screen py-8 px-2">
        <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full flex flex-col items-center justify-center min-h-screen">
          <main className="flex flex-col items-center justify-center w-full text-white/90">
            <h1 className="text-4xl font-extrabold mb-8">🎡 Spin the Wheel!</h1>
            <p className="mb-6 text-lg max-w-xl text-center">Try your luck and spin the Vegas Wheel for a chance to win free spins, crypto bonuses, or exclusive rewards. Every spin is a winner!</p>
            <div
              className={`bg-[#241f6b] border-4 border-pink-400 rounded-full w-64 h-64 flex items-center justify-center shadow-2xl mb-8 transition-transform duration-700 ${spinning ? "animate-spin-fast" : ""}`}
            >
              <span className="text-6xl font-extrabold text-yellow-300">🎰</span>
            </div>
            <button
              className="px-8 py-4 bg-pink-600 font-bold rounded-full shadow hover:bg-yellow-300 hover:text-pink-700 transition-all text-xl disabled:opacity-50"
              onClick={spinWheel}
              disabled={spinning}
            >
              {spinning ? "Spinning..." : "Spin Now"}
            </button>
            {result && (
              <div className="mt-8 text-2xl font-bold text-yellow-300 animate-pulse">{result}</div>
            )}
            <div className="mt-8">*Demo only – real wheel coming soon!</div>
          </main>
          <style jsx global>{`
            .animate-spin-fast {
              animation: spin 2s cubic-bezier(0.4, 0, 0.2, 1);
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(1440deg); }
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
