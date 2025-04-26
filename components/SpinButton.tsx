'use client';

type SpinButtonProps = {
  onClick: () => void;
};

export default function SpinButton({ onClick }: SpinButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full shadow-lg hover:scale-105 transition-all duration-300 animate-pulse"
    >
      🎰 Spin the Wheel
    </button>
  );
}
