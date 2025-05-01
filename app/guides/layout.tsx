import React from "react";

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Achtergrondafbeelding als los element achter de content */}
      <div className="fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />

      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen text-white">
        <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
