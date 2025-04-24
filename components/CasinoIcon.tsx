import React from "react";
import Image from "next/image";

export interface CasinoIconProps {
  /**
   * The name of the icon, matching the SVG filename (without extension).
   * E.g. 'Slot Machine', 'Dice', 'Bonus', 'Poker Chip', 'Stack of Dollar Bills'
   */
  name: string;
  /**
   * Optional alt text for accessibility.
   */
  alt?: string;
  /**
   * Width of the icon (default 32).
   */
  width?: number;
  /**
   * Height of the icon (default 32).
   */
  height?: number;
  /**
   * Additional Tailwind or className for styling.
   */
  className?: string;
  /**
   * Animation effect(s): 'spin', 'pulse', 'glow', or a space-separated combo.
   */
  animation?: string;
}

/**
 * Loads a casino SVG icon from /public/icons/casino-icons/ by name.
 * Example: <CasinoIcon name="Slot Machine" animation="glow" />
 */
const CasinoIcon: React.FC<CasinoIconProps> = ({
  name,
  alt,
  width = 32,
  height = 32,
  className = "",
  animation = "",
}) => {
  // Convert name to kebab-case for file lookup
  const fileName = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const src = `/icons/casino-icons/${fileName}.svg`;

  // Map animation prop to Tailwind/custom classes
  const animationClasses = animation
    .split(" ")
    .map((a) => {
      if (a === "spin") return "animate-spin";
      if (a === "pulse") return "animate-pulse";
      if (a === "glow") return "glow";
      return a;
    })
    .join(" ");

  return (
    <Image
      src={src}
      alt={alt || name}
      width={width}
      height={height}
      className={`inline align-middle ${animationClasses} ${className}`.trim()}
      priority={false}
    />
  );
};

export default CasinoIcon;
