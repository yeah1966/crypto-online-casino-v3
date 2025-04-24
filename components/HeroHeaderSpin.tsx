import React from "react";

export default function HeroHeaderSpin() {
  return (
    <div className="relative flex flex-col items-center justify-center h-96 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50 animate-pulse"></div>
      <h1 className="text-6xl font-casino text-neon-yellow drop-shadow-lg z-10">
        🎰 Welcome to the Ultimate Spin Experience!
      </h1>
      <p className="text-2xl mt-4 text-neon-pink z-10">
        Spin the wheel and let the luck decide your fate!
      </p>
    </div>
  );
}
