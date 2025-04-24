import React from "react";

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed min-h-screen text-white">
        <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
