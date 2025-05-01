"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const winners = [
  { name: "BitStarz", link: "https://bt5t4rz.com/b2b7d0ed7" },
  { name: "Wild Vegas", link: "https://www.gwages.com/click/11/4315/15512/1" },
  { name: "Cloudbet", link: "https://dlcbt.cloud/go/en/landing/bitcoin-casino?af_token=36d323f0afab6d541b76115d29e88c18&afm_campaign=CQC&afm_source=website&afm_medium=banner&afm_content=banner-468" },
  { name: "Crypto Loko", link: "https://cryptoloko.click/click/774/461/6060/1" },
  { name: "Dreams Casino", link: "https://www.gwages.com/click/64/305/15512/1" },
  { name: "Prism Casino", link: "https://www.gwages.com/click/6/4305/15512/1" },
  { name: "Coin Poker", link: "https://record.coinpokeraffiliates.com/_BPlLejNitgdhg6WO2l1rgWNd7ZgqdRLk/1/" },
  { name: "Slots of Vegas", link: "https://www.gwages.com/click/15/4298/15512/1" }
];

// Deze pagina is niet langer actief. Spin-to-win is gesloten.
export default function SpinToWinClosed() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Spin to Win is gesloten</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-xl text-center">
        Deze pagina is niet langer beschikbaar. Probeer onze nieuwe <b>Sportsbetting</b> sectie voor de beste crypto sportweddenschappen!
      </p>
      <a href="/sports" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition text-xl">
        Ga naar Sports
      </a>
    </main>
  );
}