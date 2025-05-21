"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MagicConsent() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("magicConsent")) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    localStorage.setItem("magicConsent", value);
    setVisible(false);
  };

  const handleWizard = () => {
    localStorage.setItem("magicConsent", "accepted");
    setVisible(false);
    router.push("/wizard");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-end animate-fade-in">
      <div className="relative w-full max-w-xl mx-auto mb-24 bg-black/90 backdrop-blur-md rounded-2xl border-2 border-purple-500 shadow-2xl px-6 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-8 neon-glow">
        {/* Mascot large and magical */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start pr-0 md:pr-4">
          <div className="relative">
            <Image src="/images/mascots/mascot-wizard.png" alt="Wizard Mascot" width={96} height={96} className="drop-shadow-xl animate-mascot-bounce" />
            {/* Staff sparkle effect */}
            <span className="absolute left-[62px] top-[16px] w-4 h-4 rounded-full bg-yellow-300 opacity-80 blur-md animate-pulse pointer-events-none" />
          </div>
        </div>
        {/* Text column with more space and magic */}
        <div className="flex-1 text-center md:text-left px-2 md:px-4 py-2 md:py-4" style={{lineHeight:'1.7'}}>
          <div className="text-2xl font-extrabold text-pink-300 mb-2 flex items-center justify-center md:justify-start gap-2 drop-shadow-glow animate-glow">
            <span role="img" aria-label="wizard">🧙‍♂️</span> Welcome, traveler!
          </div>
          <div className="text-white/90 mb-4 text-base md:text-lg animate-fade-in-up">
            Before we begin, choose your path:<br/>
            <span className="text-yellow-200 font-semibold">🔮 Discover your ideal crypto bonus with our Magic Wizard?</span><br/>
            Or just continue your journey as usual...
          </div>
          {/* Only one prominent button */}
          <div className="flex justify-center md:justify-start mt-2">
            <button
              className="bg-gradient-to-r from-yellow-300 via-fuchsia-400 to-purple-700 text-black font-extrabold px-8 py-4 rounded-xl shadow-xl text-lg md:text-xl flex items-center gap-2 animate-glow focus:outline-none ring-2 ring-yellow-300 ring-offset-2 ring-offset-black hover:scale-105 transition-all duration-200"
              onClick={handleWizard}
              style={{boxShadow:'0 0 16px 4px #d8b4fe, 0 0 32px 8px #f472b6'}}
            >
              <span role="img" aria-label="wand">🪄</span> Enter the Wizard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
