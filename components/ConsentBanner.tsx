import { useEffect, useState } from "react";

// TypeScript: declareer gtag & gtagLoaded op het Window object
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtagLoaded?: boolean;
  }
}

const GA_ID = "G-R4CJL887NL";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
    else if (consent === "accepted") loadGtag();
  }, []);

  function handleChoice(consent: "accepted" | "declined") {
    localStorage.setItem("cookieConsent", String(consent));
    if (consent === "accepted") {
      loadGtag();
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
        });
      }
    } else {
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
        });
      }
    }
    setFade(true);
    setTimeout(() => setVisible(false), 400);
  }

  function loadGtag() {
    if (window.gtagLoaded) return;
    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script1.async = true;
    document.head.appendChild(script1);
    const script2 = document.createElement("script");
    script2.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`;
    document.head.appendChild(script2);
    window.gtagLoaded = true;
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 flex justify-center transition-opacity duration-400 ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="max-w-xl w-full m-4 px-6 py-3 rounded-xl shadow-lg bg-gradient-to-r from-purple-900 via-black to-yellow-900 border border-yellow-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white text-sm flex-1">
          🎲 We use cookies for analytics to improve your experience. No tracking unless you agree.
        </span>
        <div className="flex gap-2">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded shadow transition-colors"
            onClick={() => handleChoice("accepted")}
          >
            Accept
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded shadow transition-colors"
            onClick={() => handleChoice("declined")}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
