'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-6 pb-12">
      <div className="flex flex-col items-center text-center space-y-2 px-4">
        {/* 18+ logo */}
        <div className="bg-white rounded-full p-1 w-12 h-12 flex items-center justify-center">
          <Image
            src="/icons/18.svg"
            alt="18+"
            width={36}
            height={36}
            className="w-9 h-9"
          />
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
        <a
          className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition mt-2"
          href="/guides/getting-started"
        >
          Start Playing
        </a>
      </div>
    </footer>
  );
};

export default Footer;
