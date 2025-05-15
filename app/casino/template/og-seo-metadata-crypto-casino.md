# ✅ OG/SEO Metadata Succesvolle Implementatie – Crypto Online Casino

## 🎯 Doel
Zorg dat elke reviewpagina (zoals `/crypto-casino-reviews/prismcasino`) unieke, werkende metadata bevat voor:
- Zoekmachines (SEO)
- Sociale media (OG + Twitter Cards)
- AI-indexatie (structured content)

## 💥 Resultaat
Alle reviewpagina’s tonen nu:
- ✅ Correcte `<title>` en `<meta name="description">`
- ✅ `og:title`, `og:description`, `og:image`, etc.
- ✅ `twitter:title`, `twitter:description`, `twitter:image`
- ✅ Juiste canonical URL per pagina
- ✅ Geen fallback of conflicten met layouts of defaults

---

## 🔧 Oplossing die wérkt (Next.js App Router)

Gebruik in elke pagina (bijv. `page.tsx`) een `generateMetadata()` export:

### 📄 Voorbeeld: `/app/crypto-casino-reviews/prismcasino/page.tsx`

````tsx
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Prism Casino Review 2025 | Big Bonuses & Fast Crypto Payouts",
    description: "Read our Prism Casino review: discover up to $3,000 welcome bonuses, fast Bitcoin payouts, no KYC, and RTG-powered slot games. Crypto-friendly and trusted.",
    alternates: {
      canonical: "https://crypto-online-casino.com/crypto-casino-reviews/prismcasino",
    },
    openGraph: {
      title: "Prism Casino Review 2025 | Big Bonuses & Fast Crypto Payouts",
      description: "Discover Prism Casino: generous crypto bonuses, RTG slots, and no KYC withdrawals. Up to $3,000 bonus!",
      url: "https://crypto-online-casino.com/crypto-casino-reviews/prismcasino",
      type: "website",
      images: [
        {
          url: "https://crypto-online-casino.com/og/prismcasino.png",
          width: 1200,
          height: 630,
          alt: "Prism Casino OG Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Prism Casino Review 2025 | Big Bonuses & Fast Crypto Payouts",
      description: "Discover Prism Casino: generous crypto bonuses, RTG slots, and no KYC withdrawals. Up to $3,000 bonus!",
      images: ["https://crypto-online-casino.com/og/prismcasino.png"],
    },
  };
};
````

---

## 🚫 Wat niet werkte

- `<Head>...</Head>` blokken in `page.tsx`: **genegeerd** door App Router
- OG-meta in `layout.tsx` of `head.tsx`: **overschreef individuele pagina’s**
- `head.tsx` per reviewpagina: onnodig als je `generateMetadata()` gebruikt

---

## 🧠 Best Practice

- Gebruik **per pagina `generateMetadata()`** (geen globale metadata genereren via layouts)
- Zorg dat alle OG-data **dynamisch en uniek is per pagina**
- Werk OG-afbeeldingen consistent bij in `/public/og/[slug].png`

---

## ✅ Volgende stap (optioneel)

- Zelfde aanpak toepassen op guides, blogposts en bonuspagina’s
- Structured data (schema.org) toevoegen via JSON-LD
- OG-preview testen via:
  - https://developers.facebook.com/tools/debug/
  - https://cards-dev.twitter.com/validator/

---

Geregeld door: Ron & GPT-4.1 via Windsurf 💪