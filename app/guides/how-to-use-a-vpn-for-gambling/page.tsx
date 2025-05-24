"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
              <Image src="/icons/nordvpn.svg" alt="NordVPN logo" width={60} height={60} className="drop-shadow-lg" />
              <Image src="/icons/expressvpn.svg" alt="ExpressVPN logo" width={60} height={60} className="drop-shadow-lg animate-bounce" />
              <Image src="/icons/surfshark.svg" alt="Surfshark logo" width={60} height={60} className="drop-shadow-lg" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold neon-text text-center mb-2 text-purple-700">
              How to Use a VPN for Online Gambling 🛡️
            </h1>
            <p className="mb-4 text-white/90">
              Some players use a VPN to access crypto casinos for extra privacy, security, or to bypass geo-blocks. It’s easy, safe, and legal in most countries—just follow a few simple steps to enjoy private, borderless gaming.
            </p>
          </section>
          {/* Section 1: Why Use a VPN for Crypto Casinos? */}
          <section ref={refs.why} className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-yellow-600">
              <Image src="/icons/expressvpn.svg" alt="VPN" width={32} height={32} />
              Why Use a VPN for Crypto Casinos?
            </h2>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Fast" width={18} height={18} />Bypass geo-blocks & restrictions</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/shib.svg" alt="Privacy" width={18} height={18} />Extra privacy & anonymity</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/cyberghost.svg" alt="Security" width={18} height={18} />Protect your connection from hackers</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/protonvpn.svg" alt="ProtonVPN" width={18} height={18} />Play from anywhere in the world</li>
            </ul>
          </section>
          {/* Section 2: Is It Legal? */}
          <section ref={refs.legal} className="rounded-2xl border border-green-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-green-600">
              <Image src="/icons/nordvpn.svg" alt="Legal" width={32} height={32} />
              Is It Legal?
            </h2>
            <ul className="list-disc ml-6 text-white/90 mt-2">
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/expressvpn.svg" alt="VPN" width={18} height={18} />VPN use is legal in most countries</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Lightning" width={18} height={18} />Always check your local laws</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/surfshark.svg" alt="Surfshark" width={18} height={18} />Casinos may have their own rules</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/lock.svg" alt="Lock" width={18} height={18} />Never use a VPN to break the law</li>
            </ul>
          </section>
          {/* Section 3: How to Use a VPN */}
          <section ref={refs.how} className="rounded-2xl border border-blue-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-blue-600">
              <Image src="/icons/protonvpn.svg" alt="How" width={32} height={32} />
              How to Use a VPN for Gambling
            </h2>
            <ol className="list-decimal ml-6 text-white/90 mt-2">
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/nordvpn.svg" alt="NordVPN" width={18} height={18} />Choose a trusted VPN provider</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/expressvpn.svg" alt="ExpressVPN" width={18} height={18} />Install the VPN app on your device</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/surfshark.svg" alt="Surfshark" width={18} height={18} />Connect to a country where crypto casinos are allowed</li>
              <li className="flex items-center gap-2 mb-1"><Image src="/icons/bolt.svg" alt="Bolt" width={18} height={18} />Open your favorite casino and play</li>
            </ol>
          </section>
          {/* Section 4: Best VPNs */}
          <section ref={refs.bestvpns} className="rounded-2xl border border-orange-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-orange-600">
              <Image src="/icons/shib.svg" alt="Best VPNs" width={32} height={32} />
              Best VPNs for Crypto Gambling
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              <div className="flex flex-col items-center bg-blue-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/nordvpn.svg" alt="NordVPN" width={44} height={44} className="mb-2" />
                <span className="font-bold text-blue-300 mb-1">NordVPN</span>
                <span className="text-xs text-white/90 text-center">Fast, secure, works with all casinos</span>
                <Link href="https://refer-nordvpn.com/DeSbWMPrUUw" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition flex justify-center items-center text-center">Visit NordVPN</Link>
              </div>
              <div className="flex flex-col items-center bg-red-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/expressvpn.svg" alt="ExpressVPN" width={44} height={44} className="mb-2" />
                <span className="font-bold text-red-300 mb-1">ExpressVPN</span>
                <span className="text-xs text-white/90 text-center">Ultra-fast, easy to use</span>
                <Link href="https://expressvpn.com/" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition flex justify-center items-center text-center">Visit ExpressVPN</Link>
              </div>
              <div className="flex flex-col items-center bg-cyan-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/surfshark.svg" alt="Surfshark" width={44} height={44} className="mb-2" />
                <span className="font-bold text-cyan-300 mb-1">Surfshark</span>
                <span className="text-xs text-white/90 text-center">Affordable, unlimited devices</span>
                <Link href="https://surfshark.com/" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition flex justify-center items-center text-center">Visit Surfshark</Link>
              </div>
              <div className="flex flex-col items-center bg-purple-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/protonvpn.svg" alt="ProtonVPN" width={44} height={44} className="mb-2" />
                <span className="font-bold text-purple-300 mb-1">ProtonVPN</span>
                <span className="text-xs text-white/90 text-center">Great privacy, open-source</span>
                <Link href="https://protonvpn.com/" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition flex justify-center items-center text-center">Visit ProtonVPN</Link>
              </div>
              <div className="flex flex-col items-center bg-yellow-900/60 rounded-lg p-3 shadow">
                <Image src="/icons/cyberghost.svg" alt="CyberGhost" width={44} height={44} className="mb-2" />
                <span className="font-bold text-yellow-200 mb-1">CyberGhost</span>
                <span className="text-xs text-white/90 text-center">Easy, lots of servers</span>
                <Link href="https://cyberghostvpn.com/" target="_blank" rel="noopener" className="mt-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs font-bold rounded-full shadow hover:bg-yellow-400 transition flex justify-center items-center text-center">Visit CyberGhost</Link>
              </div>
            </div>
          </section>
          {/* Section 5: Pros & Cons Table */}
          <section ref={refs.proscons} className="rounded-2xl border border-purple-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-purple-600">
              <Image src="/icons/lock.svg" alt="Pros & Cons" width={32} height={32} />
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
        </div>
      </div>
    </main>
  );
}
