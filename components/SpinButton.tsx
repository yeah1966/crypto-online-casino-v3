'use client';
import { useEffect, useState } from 'react';

interface SpinButtonProps {
  onClick?: () => void;
}

const SpinButton: React.FC<SpinButtonProps> = ({ onClick }: SpinButtonProps) => {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLight(prev => !prev);
    }, 600); // wissel om de 600ms
    return () => clearInterval(interval);
  }, []);

  return (
    <button onClick={onClick} type="button" className="focus:outline-none block w-[200px] mx-auto transition-all">
      <img
        src={`/images/${isLight ? 'spin-light.png' : 'spin-dark.png'}`}
        alt="Spin"
        className="bg-pink-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-2xl animate-bounce transition-all duration-300"
      />
    </button>
  );
};

export default SpinButton;
