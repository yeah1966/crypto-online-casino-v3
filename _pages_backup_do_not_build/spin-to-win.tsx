import React from "react";
import Head from "next/head";
import HeroHeaderSpin from "../components/HeroHeaderSpin";
import CasinoWheel from "../components/CasinoWheel";

export default function SpinToWinPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center">
      <Head>
        <title>Spin to Win - Let Crypto Luck Decide!</title>
        <meta name="description" content="Let fate choose your next crypto casino! Spin the wheel and get redirected to a random top crypto casino. No thinking, just spinning!" />
      </Head>
      <HeroHeaderSpin />
      <div className="w-full max-w-xl px-2">
        <CasinoWheel />
      </div>
    </div>
  );
}
