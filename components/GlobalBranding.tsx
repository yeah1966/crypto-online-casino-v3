import Image from "next/image";

export default function GlobalBranding() {
  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-r from-purple-900/70 to-pink-700/70 py-3">
      <Image
        src="/images/crypto-casino-online.png"
        alt="Crypto Casino Online"
        width={192}
        height={64}
        className="max-h-32 sm:max-h-24 object-contain drop-shadow-[0_4px_24px_rgba(255,0,255,0.5)] brightness-110"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        priority
      />
    </div>
  );
}
