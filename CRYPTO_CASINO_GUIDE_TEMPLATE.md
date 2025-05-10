# Crypto Casino Guide Template: Best Practice Structure

This template ensures all crypto casino guides (e.g., Bitcoin, Ethereum, Litecoin) follow a pixel-perfect, consistent structure and visual style. Use this as the blueprint for all new and updated guides.

---

## 1. Hero Section
- **Header image**: Full-width, max-w-4xl, rounded-3xl, border, shadow (identiek aan ETH/BTC guides).
- **Mascot**: Rechtsboven in de hero, alleen zichtbaar op desktop (absolute positioning).
- **H1**: Links uitgelijnd, met coin-icoon rechts (zelfde layout als ETH/BTC).
- **Breadcrumbs**: Direct onder de hero, in een subtiele paarse kleur.

---

## 2. Intro & Why [Coin] Casinos
- **Why [Coin] Casinos Are [King/Popular]**: 
  - Titel in geel, bold.
  - Korte uitleg in wit.
  - Bulletlist met iconen, elk punt als `<li className="flex items-center gap-2"><span className="text-yellow-400">[icon]</span> Text`.
  - Spacing: `mt-2 space-y-1` voor de lijst.

---

## 3. Benefits Block
- **Zwart venster**: `bg-black/80 rounded-2xl border border-yellow-400/30 p-5 shadow-lg`.
- **Titel**: Geel, bold.
- **Bulletlist**: Zelfde stijl als hierboven.

---

## 4. Top Casinos Block
- **Paarse container**: `bg-purple-900/80 rounded-xl p-4 shadow-lg flex flex-col gap-4 mt-6`.
- **Elke casino**: In een eigen paarse rij `bg-purple-800/60 rounded-lg p-3`, met logo, naam, beschrijving, en een opvallende knop.
- **Knop**: Gradient, bold, afgerond, met coin-icoon.

---

## 5. Step-by-Step Block
- **Zwart venster**: Zelfde als Benefits block.
- **Titel**: Geel, bold.
- **Genummerde lijst**: `<ol className="list-decimal ml-6 text-white/90 mb-2 space-y-1">`, iconen voor elk punt.

---

## 6. Security / Is it Safe Block
- **Zwart venster**: Zelfde als Benefits block.
- **Titel**: Geel, bold.
- **Uitleg**: Korte uitleg in wit.
- **Checklist**: Elke regel met een groen vinkje `<span className="text-green-400">✅</span>` vooraan.

---

## 7. Call-to-Action Button
- **Button**: Helemaal onderaan, gecentreerd, groot, gradient, afgerond, bold, shadow.
- **Voorbeeld**:
  ```tsx
  <div className="flex justify-center mt-10 mb-8">
    <a
      href="/crypto-casino-reviews"
      className="font-bold text-lg px-7 py-3 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-105 hover:shadow-yellow-400/60 transition-all focus:outline-none"
      style={{ boxShadow: '0 0 12px 2px #facc15, 0 0 32px 4px #ec4899' }}
    >
      View All Crypto Casino Reviews
    </a>
  </div>
  ```

---

## 8. Best Practices
- Gebruik altijd de component- en classname structuur zoals hierboven.
- Houd iconen, kleuren en spacing consistent.
- Zet de CTA-button altijd helemaal onderaan de pagina.
- Kopieer de visuele structuur van de ETH/BTC guides voor nieuwe coins.

---

## 9. Voorbeeldopbouw (in volgorde)
1. Hero Section (image, mascot, H1, breadcrumbs)
2. Why [Coin] Casinos
3. Benefits
4. Top Casinos
5. Step-by-Step
6. Security/Is it Safe
7. Call-to-Action Button (onderaan)

---

> **Tip:** Gebruik de bestaande Bitcoin en Ethereum guides als referentie voor pixel-perfecte uitlijning, kleuren en componentopbouw.
