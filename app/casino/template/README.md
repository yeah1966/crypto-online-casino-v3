
# 🎰 Casino Review Template (Developer Guide)

Dit is de standaard template voor het aanmaken van nieuwe casino reviewpagina’s binnen het project.

---

## 🛠 Werkwijze: Nieuwe pagina aanmaken

1. Kopieer de volledige template map:
```bash
cp -R app/casino/template app/casino/[casino-naam]
```

2. Ga naar het bestand:
```
/app/casino/[casino-naam]/page.tsx
```

3. Vervang de `dummyCasino` data met de gegevens van het nieuwe casino:
   - `casinoName`
   - `introduction`, `bonuses`, `games`, etc.
   - `facts` met juiste oprichtingsjaar, licentie en ondersteunde crypto’s

4. Test lokaal:
```
npm run dev
```
of
```
bun dev
```

5. Klaar? Verplaats de map naar live:
```bash
mv app/casino/[casino-naam] app/crypto-casino-reviews/[casino-naam]
```

---

## 📦 Inhoud van deze template

- `page.tsx`  
  React-component die het `CasinoReviewTemplate` aanroept met dummydata.
- De layout bevat:
  - Screenshot sectie
  - Titelblok met logo, mascotte, CTA
  - 8 informatieve vensters
  - Crypto Supported sectie met iconen
  - “At a Glance” overzicht
  - CTA footer met mascotte

---

## 📌 Belangrijk

- Hou crypto-iconen actueel in `/public/icons/`
- Tekst en titels zijn SEO-vriendelijk te optimaliseren
- `CasinoReviewTemplate` is gestyled met Tailwind en werkt modulair

---

Laatste update: 14 mei 2025  
Auteur: Ron Bode & Hero
