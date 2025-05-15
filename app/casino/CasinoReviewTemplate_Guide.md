
# CasinoReviewTemplate – Style & Structuurgids

Deze `.md`-handleiding helpt je om consistente, opvallende en goed gestructureerde casinoreviewpagina’s op te bouwen met de `CasinoReviewTemplate.tsx` component.

---

## 🎯 Inhoudsopbouw

### 🔹 1. First Impressions (Screenshots)
- **Bestandspad afbeeldingen**: `/public/screenshots/1.jpg` tot `/4.jpg`
- **Layout**: Grid van 4 kolommen
- **Styling**: 
  ```tsx
  className="rounded-xl shadow-[0_0_12px_#ff00ff66] object-cover h-40 w-full transition-all duration-300 ease-in-out hover:scale-105"
  ```

---

### 🔹 2. Titelcontainer met Logo, Mascotte en Button
- **Paarse achtergrond**: `from-purple-900 to-purple-700`
- **Neonrand**: `border-2 border-pink-500 shadow-[0_0_20px_#ff00ff]`
- **Structuur (grid in 3 delen)**:
  - Links: Casino logo (`/logos/[naam].png`)
  - Midden: Titel (dynamisch) + mascotte (`/mascot.png`)
  - Rechts: CTA-button met link naar casino

- **Mascotte animatie**:
  ```tsx
  <img src="/mascot.png" className="w-16 h-16 ml-4 animate-pulse" />
  ```
  ❓ Andere animaties:
  - `animate-bounce`, `animate-spin`, `hover:scale-110`, of aangepaste `wiggle` via Tailwind config

---

### 🔹 3. Reviewvensters (8 blokken)
- **Icons**: Uit `/public/casino-icons/*.svg`
- **Inhoud**: Dynamisch geladen uit props (`data`)
- **Styling per blok**:
  ```tsx
  className="bg-gradient-to-br from-[#0a0f40] to-[#1a2c8b] border-2 border-yellow-400 rounded-xl p-6 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:scale-[1.03] hover:shadow-[0_0_20px_#ff00ff55] transition-all duration-300 ease-in-out"
  ```

Blokken:
- Introduction
- Bonuses & Promotions
- Games & Providers
- Customer Support
- Mobile Experience
- Security & Licensing
- Payments & Crypto Support
- Final Verdict

---

### 🔹 4. At a Glance (Feitenblok)
- **Items**: Founded, License, Crypto Accepted
- **Grid van 3 kolommen**, met elk:
  ```tsx
  className="... flex flex-col justify-between h-24 text-center"
  ```

---

### 🔹 5. CTA-Sectie onderaan
- **Structuur**:
  ```tsx
  <section className="mt-10 text-center flex flex-col items-center justify-center gap-4">
    <img src="/mascot.png" className="w-12 h-12 mb-2" />
    <h2>READY TO GET STARTED?</h2>
    <p>Call-to-action tekst</p>
    <a href="#" className="...">CTA Button</a>
  </section>
  ```

---

## 📁 Bestandsstructuur (aanbevolen)

```
/public
  /screenshots/
  /logos/
  /casino-icons/
  mascot.png

/app/casino/
  CasinoReviewTemplate.tsx
  CasinoReviewTemplate_Guide.md
```

---

## ✨ Tips

- Hou iconen consistent op 64×64px (`w-14 h-14`)
- Gebruik Tailwind hover- en transition-classes voor levendigheid
- Gebruik `data={casino}` om dynamisch content per casino in te laden

---

Laatste update: 13 mei 2025  
Auteur: Hero (GPT-4) & Ron Bode
