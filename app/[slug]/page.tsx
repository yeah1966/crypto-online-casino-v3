import OutPageClient from "./OutPageClient";

export async function generateStaticParams() {
  return [
    { slug: "coolcatcasino" },
    { slug: "bitstarz" },
    { slug: "dreamscasino" },
    { slug: "cloudbet" },
    { slug: "prismcasino" },
    { slug: "cryptoloko" },
    { slug: "wildvegas" },
    { slug: "slotsofvegas" },
    { slug: "coinpoker" },
    { slug: "betplay" },
  ];
}

// ⛑️ Fallback type-oplossing die alles compileert
export default function SlugPage() {
  return <OutPageClient />;
}
