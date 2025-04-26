"use client";

import React from "react";

type SpinButtonProps = {
  onClick: () => void;
};

export default function SpinButton({ onClick }: SpinButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative px-12 py-4 text-3xl font-extrabold uppercase text-white bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full shadow-[0_0_20px_gold] hover:scale-110 hover:shadow-[0_0_30px_gold] transition-all duration-300 ease-in-out animate-pulse"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-50 rounded-full blur-md"></span>
      <span className="relative z-10">🎰 Spin</span>
    </button>
  );
}
