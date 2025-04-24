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
        className="w-full cursor-pointer"
      />
    </button>
  );
};

export default SpinButton;
