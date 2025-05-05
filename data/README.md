# 💡 Belangrijk: Affiliate links & data

Vanaf mei 2025 gebruiken we **één centrale databron** voor alle affiliate info:

---

✅ **Gebruik dit:**
- `data/casinosData.ts`  
  → Bevat alle info zoals `slug`, `name`, `affiliateUrl`, `reviewUrl`, `rating`, etc.

⛔ **Gebruik dit niet meer:**
- `data/affiliateLinks.json` ❌ verwijderd
- `lib/data/affiliateLinks.ts` ❌ verwijderd
- `components/casinoLinks.ts` ❌ verwijderd
- `/pages/api/save-affiliates.js` → geeft nu 410 response
- `/pages/api/load-affiliates.js` → geeft nu 410 response
- `/src/utils/getAffiliateLinks.ts` → omgeleid naar `casinosData.ts`

🧠 **GPT 4.1:** Wanneer een component, pagina of functie iets nodig heeft zoals `affiliateUrl`, gebruik dan:

```ts
import { casinos } from '@/data/casinosData'

const casino = casinos.find(c => c.slug === 'coolcatcasino')
```

---

🗂️ **Legacy-code (zoals admin) staat nu in:**
- `_pages_backup_do_not_build/`
  → Alleen raadplegen voor historische structuur, niet inbouwen in nieuwe features

---

> Laatste update: mei 2025 – migratie naar centrale casinosData.ts afgerond.
