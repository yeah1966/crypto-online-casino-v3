"use client";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "why", label: "Why Use a VPN?" },
  { id: "legal", label: "Is It Legal?" },
  { id: "how", label: "How to Use" },
  { id: "bestvpns", label: "Best VPNs" },
  { id: "proscons", label: "Pros & Cons" },
];

const vpns = [
  { name: "NordVPN", icon: "/icons/nordvpn.svg" },
  { name: "ExpressVPN", icon: "/icons/expressvpn.svg" },
  { name: "Surfshark", icon: "/icons/surfshark.svg" },
  { name: "ProtonVPN", icon: "/icons/protonvpn.svg" },
  { name: "CyberGhost", icon: "/icons/cyberghost.svg" },
];

export default function VpnGamblingGuide() {
  const refs = sections.reduce((acc, section) => {
    acc[section.id] = useRef<HTMLDivElement | null>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement | null>>);

  const scrollToSection = (id: string) => {
    refs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full text-white">
        <Head>
          <title>Using a VPN to Access Crypto Casinos – Is It Safe & Legal?</title>
          <meta name="description" content="Find out how VPNs let you access crypto casinos safely and privately. Step-by-step guide + top VPN tips for crypto gambling." />
        </Head>
        {/* Sticky submenu */}
        <nav className="sticky top-4 z-30 mb-8 flex gap-2 flex-wrap justify-center md:justify-start">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="px-3 py-1 rounded-full bg-purple-100/80 text-purple-700 font-bold text-sm hover:bg-yellow-300 hover:text-pink-700 transition-all border-2 border-purple-300 shadow"
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* Intro */}
        <div ref={refs.intro} className="flex flex-col items-center mb-8">
          <img src="/fun/roulette.png" alt="VPN for gambling" width={90} height={90} className="mb-2 drop-shadow-lg animate-bounce" />
          <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
            How to Use a VPN for Online Gambling 🛡️
          </h1>
          <p className="mb-4 text-white/90">
            Some players use a VPN to access crypto casinos for extra privacy, security, or to bypass geo-blocks. It’s easy, safe, and legal in most countries—just follow a few simple steps to enjoy private, borderless gaming.
          </p>
        </div>

        {/* Section 1: Why Use a VPN for Crypto Casinos? */}
        <section ref={refs.why} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
            <span className="text-2xl">🌍</span>
            Why Use a VPN for Crypto Casinos?
          </h2>
          <ul className="list-disc pl-5 mb-4 text-white/90">
            <li className="mb-2 text-white/90">Bypass geo-restrictions (access sites blocked in your country)</li>
            <li className="mb-2 text-white/90">Enhanced privacy & anonymity</li>
            <li className="mb-2 text-white/90">Safer on public Wi-Fi (coffee shops, hotels)</li>
            <li className="mb-2 text-white/90">Hide gambling activity from ISPs</li>
          </ul>
        </section>

        {/* Section 2: Is It Legal to Use a VPN? */}
        <section ref={refs.legal} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-700">
            <span className="text-2xl">🔐</span>
            Is It Legal to Use a VPN?
          </h2>
          <ul className="list-disc pl-5 mb-4 text-white/90">
            <li className="mb-2 text-white/90">In most countries: yes</li>
            <li className="mb-2 text-white/90">You are responsible for following your country’s laws</li>
            <li className="mb-2 text-white/90">Some casinos may restrict accounts using VPNs — check their T&Cs</li>
          </ul>
          <p className="text-white/90 mt-2 flex items-center gap-2 text-sm">
            <span className="text-xl">📌</span>
            <span>Tip: Use reputable crypto casinos that allow VPN use or don’t check IPs.</span>
          </p>
        </section>

        {/* Section 3: How to Use a VPN (Step-by-Step) */}
        <section ref={refs.how} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-pink-600">
            <span className="text-2xl">⚙️</span>
            How to Use a VPN (Step-by-Step)
          </h2>
          <ol className="list-decimal pl-5 mb-4 text-white/90">
            <li className="mb-2 text-white/90">Choose a trusted VPN provider (e.g. NordVPN, ExpressVPN, Surfshark)</li>
            <li className="mb-2 text-white/90">Install the VPN on your device</li>
            <li className="mb-2 text-white/90">Select a server in a crypto-casino-friendly country</li>
            <li className="mb-2 text-white/90">Connect and browse as usual</li>
            <li className="mb-2 text-white/90">Sign up, deposit crypto, and start playing</li>
          </ol>
          <p className="text-white/90 mt-2 flex items-center gap-2 text-sm">
            <span className="text-xl">📱</span>
            <span>Works on desktop and mobile.</span>
          </p>
        </section>

        {/* Section 4: Best VPNs for Crypto Gambling */}
        <section ref={refs.bestvpns} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-purple-700">
            <span className="text-2xl">🧠</span>
            Best VPNs for Crypto Gambling
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {vpns.map((vpn) => (
              <div key={vpn.name} className="flex flex-col items-center bg-white/90 rounded-xl p-4 border-2 border-purple-300 shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
                <img src={vpn.icon} alt={vpn.name} width={44} height={44} className="mb-2" />
                <span className="font-bold text-black mb-1">{vpn.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="inline-block bg-yellow-100 text-yellow-900 font-bold px-4 py-2 rounded-full shadow border border-yellow-300">
              We recommend <span className="text-purple-700">NordVPN</span> – works with all major crypto casinos.
            </span>
          </div>
        </section>

        {/* Section 5: Pros & Cons Table */}
        <section ref={refs.proscons} className="mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-700">
            <span className="text-2xl">📋</span>
            Pros & Cons of Using a VPN
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left rounded-xl overflow-hidden border border-purple-400">
              <thead className="bg-purple-700 text-white">
                <tr>
                  <th className="px-4 py-2">Feature</th>
                  <th className="px-4 py-2">VPN On</th>
                  <th className="px-4 py-2">VPN Off</th>
                </tr>
              </thead>
              <tbody className="bg-white/90 text-black">
                <tr>
                  <td className="px-4 py-2 font-semibold">Access geo-blocked casinos</td>
                  <td className="px-4 py-2">✅ Yes</td>
                  <td className="px-4 py-2">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Hide IP address</td>
                  <td className="px-4 py-2">✅ Yes</td>
                  <td className="px-4 py-2">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Increased privacy</td>
                  <td className="px-4 py-2">✅ High</td>
                  <td className="px-4 py-2">⚠️ Medium</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Works on mobile</td>
                  <td className="px-4 py-2">✅ Yes</td>
                  <td className="px-4 py-2">✅ Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Slower connection</td>
                  <td className="px-4 py-2">⚠️ Sometimes</td>
                  <td className="px-4 py-2">✅ Fast</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 mb-4">
          <Link
            href="/crypto-casino-reviews"
            className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 hover:from-purple-300 hover:to-yellow-300 transition-all duration-300 hover:shadow-[0_0_30px_#a78bfa]"
          >
            🔍 Browse Top VPN-Compatible Casinos
          </Link>
          <Link
            href="/spin-to-win"
            className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 hover:from-yellow-300 hover:to-pink-300 transition-all duration-300 hover:shadow-[0_0_30px_#fbbf24]"
          >
            🎰 Spin the Bonus Wheel
          </Link>
        </div>
      </div>
    </main>
  );
}
