import React from "react";

interface VegasLayoutProps {
  children: React.ReactNode;
}

/**
 * VegasLayout - A reusable layout component for Vegas-style background and content wrapper.
 *
 * Usage Example (see below):
 *
 * <VegasLayout>
 *   <YourContentHere />
 * </VegasLayout>
 */
export default function VegasLayout({ children }: VegasLayoutProps) {
  return (
    <>
      {/* Vegas-style background image */}
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

/**
 * Example usage in /app/guides/layout.tsx:
 *
 * import VegasLayout from "@/components/layouts/VegasLayout";
 *
 * export default function GuidesLayout({ children }: { children: React.ReactNode }) {
 *   return (
 *     <VegasLayout>
 *       {children}
 *     </VegasLayout>
 *   );
 * }
 */
