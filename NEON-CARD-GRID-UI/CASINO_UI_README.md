# Crypto Casino UI/UX Reference Guide

**Laat dit bestand aan Cascade zien in een nieuw project om dezelfde stijl, structuur en animaties te gebruiken!**

---

## 🎨 Design & UX Principles
- **Vibrant neon look**: Neon-groene en paarse accenten, veel glow, Vegas-style.
- **Cards in grid**: Elke casino wordt als een losse, afgeronde card getoond in een responsive grid (1-4 kolommen).
- **Micro-interacties**: Favorieten, trending, confetti, twinkelende sterren, animatie op logo, shimmer skeleton loading.
- **Gamification**: Favorieten, trending, animated counters, filteren op features, filter-feedback.
- **Toegankelijk & SEO**: Focus styles, aria-labels, schema.org markup, meta tags.

---

## 📁 Componentenstructuur

- **CasinoCard.tsx**
  - Props: casino, onFavorite, isFavorite, onClaim
  - Animaties: hover-glow, sparkle, glitter, shine sweep, logo pop, twinkelende ster, favoriet-animatie
  - Favoriet-knop: animatie bij klik, opslaan in localStorage
  - Responsive logo: animatie bij hover
  - Rating: 5 sterren, eerste ster twinkelt bij hover
  - Tags/badges: animatie, tooltip mogelijk

- **CasinoGrid.tsx**
  - Grid layout met gap-8, responsive
  - Live search boven filters
  - Filter tags met neon pill styling
  - "Show All" knop links van filters
  - Trending/favorites blokken boven grid
  - Animated counter (react-countup)
  - AnimatePresence/motion voor fade-in/fade-out van cards
  - Shimmer loading skeletons bij filter/search
  - Foutmelding met emoji bij geen resultaten

- **globals.css**
  - Shimmer animatie
  - Glitter keyframes
  - Vegas background (.bg-vegas)
  - Neon pill, border-glow, pulse-glow

---

## 🧬 Belangrijke Animaties & Effects

- **Hover-glow op card**: Minder fel, box-shadow: `0 0 16px 3px #38FF1480, 0 0 32px 8px #38FF1420`, opacity: 0.36
- **Logo pop**: CSS keyframes, scale/rotate + neon-glow bij hover
- **Favoriet-ster**: Scale/kleur animatie, ring bij actief
- **Twinkelende ster**: Eerste ster van rating twinkelt bij hover
- **Glitter**: SVG sparkles random over card bij hover
- **Shimmer skeleton**: Voor loading state
- **Confetti**: Bij claim bonus
- **Vegas background**: .bg-vegas class met radial neon en zachte paarse gradient

---

## 🏗️ Voorbeeld code snippets

### CasinoCard.tsx (belangrijkste delen)
```tsx
<article
  className={`bg-[#2c1835] rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex flex-col h-full relative neon-card group ${isFavorite ? 'ring-4 ring-[#FFD700] ring-offset-2' : ''}`}
  itemScope itemType="https://schema.org/Offer"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  style={{ position: 'relative' }}
>
  {/* Favoriet-knop */}
  <FavoriteStar isFavorite={isFavorite} onClick={() => onFavorite?.(casino.id)} />
  {/* Logo animatie */}
  <div className="relative h-16 mb-4 flex items-center justify-center bg-black/40 rounded-xl overflow-hidden">
    <div className={`transition-transform duration-500 ${hovered ? 'animate-logo-pop' : ''}`}
      style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Image ... />
    </div>
  </div>
  {/* Stars met twinkle */}
  <div className="flex items-center gap-1 mb-2">
    {[...Array(5)].map((_,i) => i === 0 && hovered ? <StarTwinkle key={i} twinkle={hovered} /> : <span key={i}>★</span>)}
  </div>
  {/* Glow, glitter, shine sweep, confetti, tags, bonus, etc. */}
</article>
```

### CasinoGrid.tsx (belangrijkste delen)
```tsx
<div className="container mx-auto px-4 bg-vegas rounded-3xl pb-12 pt-4">
  {/* Live search */}
  {/* Filterbar met Show All en tags */}
  {/* Trending/favorites blokken */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <AnimatePresence>
      {loading ? ...skeletons... : sortedCasinos.map(...)}
    </AnimatePresence>
  </div>
</div>
```

### globals.css (belangrijkste delen)
```css
.bg-vegas {
  background: radial-gradient(ellipse at top left, #3b2352 50%, transparent 100%),
              radial-gradient(ellipse at bottom right, #38FF1440 40%, transparent 100%),
              linear-gradient(120deg, #20122b 60%, #2c1835 100%);
}
@keyframes logo-pop { ... }
@keyframes glitter { ... }
.shimmer { ... }
```

---

## 🛠️ Belangrijkste packages
- **Next.js** (app dir)
- **Tailwind CSS** (met custom kleuren, fonts, bg-vegas)
- **Framer Motion** (AnimatePresence, motion.div)
- **react-countup** (animated counter)
- **Zustand** (state management, optioneel)

---

## 📋 Toepassing in nieuw project
- Importeer componenten, CSS, en patterns uit deze README.
- Pas kleuren, props, animatie-intensiteit, etc. aan naar wens.
- Gebruik deze structuur voor elk grid-based, interactieve, Vegas-style UI in React/Next.js.

---

**Vragen? Of wil je een specifiek onderdeel uit deze UI overzetten? Laat het weten!**
