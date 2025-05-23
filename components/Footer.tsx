'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-6 pb-12">
      <div className="flex flex-col items-center text-center space-y-2 px-4">
        {/* 18+ logo, mascotte en GPWA seal */}
        <div className="flex flex-row items-center gap-4 mb-1">
          <div className="bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center">
            <Image
              src="/icons/18.svg"
              alt="18+"
              width={36}
              height={36}
              className="w-9 h-9"
            />
          </div>
          <div className="bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center">
            <Image
              src="/mascot.png"
              alt="Mascot"
              width={36}
              height={36}
              className="w-9 h-9"
            />
          </div>
          {/* GPWA Seal */}
          <a
            href="https://certify.gpwa.org/verify/crypto-online-casino.com/"
            onClick={() => window?.GPWAverificationPopup?.(window.document.getElementById('GPWAseal'))}
            id="GPWAseal"
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/crypto-online-casino.gif"
              alt="GPWA Approved Seal (local)"
              style={{ border: 0, height: 48, width: 'auto' }}
            />
          </a>
        </div>
        <p className="text-sm text-white/80 mt-1">
          Gambling can be addictive. Please play responsibly. For support visit{' '}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            BeGambleAware.org
          </a>.
        </p>
        <p className="text-md mt-1">
          🎲 You’re on <span className="text-yellow-400 font-semibold">Crypto Online Casino</span> — spin smart, win big!
        </p>
        <Link
          className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition mt-2"
          href="/guides/getting-started/"
        >
          Start Playing
        </Link>
      </div>

    </footer>
  );
};

export default Footer;
