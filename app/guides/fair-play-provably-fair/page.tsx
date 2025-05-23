"use client";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "how", label: "How It Works" },
  { id: "why", label: "Why It Matters" },
  { id: "where", label: "Where You'll See It" },
  { id: "check", label: "Check Fairness" },
  { id: "proscons", label: "Pros & Cons" },
  { id: "bonus", label: "Bonus Tip" },
];

export default function ProvablyFairGuide() {
  const refs = sections.reduce((acc, section) => {
    // useRef cannot be used inside a callback. Refactor needed below.
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement | null>>);

  const scrollToSection = (id: string) => {
    refs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="relative rounded-3xl bg-black/65 shadow-2xl border-2 border-yellow-400 p-8 md:p-12 space-y-10 max-w-6xl mx-auto mt-6">
        <nav className="flex flex-wrap gap-2 justify-center mb-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="px-4 py-1 rounded-full bg-yellow-300/80 text-purple-900 font-bold text-sm hover:bg-yellow-400 transition-all border-2 border-yellow-400 shadow"
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
          {/* Intro */}
          <section ref={refs.intro} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col items-center gap-2">
            <div className="flex flex-row items-center gap-4 mb-2">
              <Image src="/casino-icons/Diamond 1.svg" alt="Diamond" width={60} height={60} className="drop-shadow-lg" />
              <Image src="/casino-icons/Roulette Wheel.svg" alt="Roulette wheel" width={60} height={60} className="drop-shadow-lg animate-bounce" />
              <Image src="/icons/Bitcoin.svg" alt="Bitcoin logo" width={60} height={60} className="drop-shadow-lg" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
              What Is “Provably Fair”? 🎲
            </h1>
            <p className="text-lg text-center text-white/90 mb-4 max-w-2xl">
              “Provably fair” is a unique concept in crypto casinos—players can independently verify that every game result is truly fair, thanks to cryptographic algorithms and blockchain technology. This means total transparency and trust, with no need to blindly rely on the casino.
            </p>
          </section>
          {/* Section 1: How Does Provably Fair Work? */}
          <section ref={refs.how} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
              <Image src="/icons/bolt.svg" alt="How it works" width={32} height={32} />
              How Does Provably Fair Work?
            </h2>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/lock.svg" alt="Lock" width={18} height={18} />Every game result is generated in advance with a cryptographic algorithm.</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/Bitcoin.svg" alt="Bitcoin" width={18} height={18} />The result can be verified afterwards using a cryptographic hash.</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/casino-icons/Shield.svg" alt="Shield" width={18} height={18} />No one (not even the casino) can change the outcome after the bet is placed.</li>
            </ul>
          </section>
          {/* Section 2: Why It Matters */}
          <section ref={refs.why} className="rounded-2xl border border-green-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-600">
              <Image src="/casino-icons/Strategy Tips.svg" alt="Why it matters" width={32} height={32} />
              Why Does It Matter?
            </h2>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Bolt" width={18} height={18} />Ensures you&apos;re not being cheated</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/casino-icons/Lock.svg" alt="Lock" width={18} height={18} />Restores trust in online gambling</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/shib.svg" alt="Privacy" width={18} height={18} />Total transparency for players</li>
            </ul>
          </section>
          {/* Section 3: Where You'll See It */}
          <section ref={refs.where} className="rounded-2xl border border-blue-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-blue-600">
              <Image src="/casino-icons/Poker Chip.svg" alt="Where" width={32} height={32} />
              Where You&apos;ll See Provably Fair
            </h2>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li className="flex items-center gap-2 mb-1"><Image src="/casino-icons/Roulette Wheel.svg" alt="Roulette" width={18} height={18} />Crypto roulette, dice, blackjack</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/casino-icons/Diamond 2.svg" alt="Diamond" width={18} height={18} />Crash, plinko, mines, slots</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/Bitcoin.svg" alt="Bitcoin" width={18} height={18} />All major crypto casinos</li>
            </ul>
          </section>
          {/* Section 4: Can You Check Fairness Yourself? */}
          <section ref={refs.check} className="rounded-2xl border border-pink-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-pink-700">
              <Image src="/casino-icons/Shield.svg" alt="Check" width={32} height={32} />
              Can You Check Fairness Yourself?
            </h2>
            <p className="text-white/90 mb-2">Yes! Most crypto casinos provide:</p>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Bolt" width={18} height={18} />A “Verify” button next to the game result</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/lock.svg" alt="Lock" width={18} height={18} />Access to the seed + hash</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/Bitcoin.svg" alt="Bitcoin" width={18} height={18} />An easy verification tool on their site or an external checker</li>
            </ul>
          </section>
          {/* Section 5: Pros & Cons Table */}
          <section ref={refs.proscons} className="rounded-2xl border border-purple-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-600">
              <Image src="/casino-icons/Bar.svg" alt="Pros & Cons" width={32} height={32} />
              Pros & Cons of Provably Fair
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left rounded-xl overflow-hidden border border-purple-400">
                <thead className="bg-purple-700 text-white">
                  <tr>
                    <th className="px-4 py-2">Benefit</th>
                    <th className="px-4 py-2">Explanation</th>
                  </tr>
                </thead>
                <tbody className="bg-white/90 text-black">
                  <tr>
                    <td className="px-4 py-2 font-semibold text-black">Full transparency</td>
                    <td className="px-4 py-2 text-black">You can verify every outcome</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-black">No third-party needed</td>
                    <td className="px-4 py-2 text-black">No auditors required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-black">Available instantly</td>
                    <td className="px-4 py-2 text-black">Works with every bet, every game</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-black">Requires tech knowledge</td>
                    <td className="px-4 py-2 text-black">Some users may not understand how it works</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* Bonus Tip */}
          <section ref={refs.bonus} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
              <Image src="/icons/bolt.svg" alt="Bonus Tip" width={32} height={32} />
              Bonus Tip
            </h2>
            <div className="bg-green-400/90 border-l-4 border-green-700 p-4 rounded">
              <span className="text-white/90">Combine provably fair with a VPN + anonymous play for ultimate control and privacy.</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
