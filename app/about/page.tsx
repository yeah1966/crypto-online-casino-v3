import React from "react";
import MeetTheTeam from "@/components/MeetTheTeam";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <div className="relative z-10 flex items-center justify-center min-h-screen py-8 px-2">
        <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full">
  <section className="w-full px-4 py-12 md:py-20 lg:py-28 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 text-center">
            🎰 About Crypto Vegas
          </h1>

          <p className="text-lg text-white/90 mb-6">
            <strong>Crypto Vegas</strong> is your independent guide to the world of crypto casinos. We aim to provide honest reviews, real insights, and up-to-date guides so you can play smarter — and safer.
          </p>

          <h2 className="text-2xl font-bold text-pink-400 mt-10 mb-4">🎯 Our Mission: Information First</h2>
          <p className="text-white/90 mb-4">
            We believe that everyone deserves clear, unbiased information when it comes to crypto gambling. That's why:
          </p>
          <ul className="list-disc list-inside text-white/90 space-y-2 mb-6">
            <li>We do our research before recommending a casino or writing a guide</li>
            <li>We warn players about potential risks — from shady platforms to volatile coins</li>
            <li>We stay impartial — no sponsored rankings or paid placements in our reviews</li>
          </ul>

          <h2 className="text-2xl font-bold text-pink-400 mb-4">🚧 Always Growing, Always Updating</h2>
          <p className="text-white/90 mb-6">
            The crypto casino world moves fast, and so do we. We're constantly expanding our website with:
          </p>
          <ul className="list-disc list-inside text-white/90 space-y-2 mb-6">
            <li>New casino reviews based on real user experience</li>
            <li>In-depth strategy tips and RTP breakdowns</li>
            <li>Guides for beginners and curious explorers</li>
            <li>Updates on coins, wallets, and game innovations</li>
          </ul>

          <h2 className="text-2xl font-bold text-pink-400 mb-4">💡 Responsible Gambling Matters</h2>
          <p className="text-white/90 mb-6">
            Crypto Vegas is fun — but gambling can be risky. We encourage every visitor to:
          </p>
          <ul className="list-disc list-inside text-white/90 space-y-2 mb-6">
            <li>Set limits</li>
            <li>Take breaks</li>
            <li>Never chase losses</li>
            <li>Reach out for help if needed</li>
          </ul>

          <p className="text-white/90 italic text-sm mb-6">
            Wherever possible, we highlight features like self-exclusion tools, provably fair verification, and transparent bonus terms.
          </p>

          <MeetTheTeam />
          </section>
        </div>
      </div>
    </>
  );
}
