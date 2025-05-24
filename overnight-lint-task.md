🛠️ Opdracht: Los alle ESLint- en typefouten op in de codebase van crypto-online-casino, maar doe dit stapsgewijs, zonder nieuwe fouten te introduceren.

🔁 Werkwijze:
1. Loop per bestand door de foutmeldingen die tijdens de `next build` of `eslint` scan zijn gegeven.
2. Pas één type fix tegelijk toe:
   - Verwijder ongebruikte imports of variabelen
   - Vervang `<a>` door `<Link>` van `next/link`
   - Escape `'` karakters in JSX met `&apos;` of `&#39;`
   - Vervang `any` types door expliciete types waar mogelijk (`CasinoCardProps`, `string`, `number`, etc.)
3. Gebruik `eslint --fix` lokaal als extra controle.
4. **Test na elke wijziging** met `npx next build`. Controleer dat er geen nieuwe fouten bijkomen.
5. Werk altijd in de branch `lint-cleanup` en commit met duidelijke messages:
   - `fix: removed unused variable i in /app/blog/[slug]/page.tsx`
   - `refactor: replaced <a> with <Link> in /guides/mobile-gambling`

💡 Let op:
- **Gebruik geen automatische bulk-fixes over de hele codebase.**
- Focus op 100% foutloze `next build` output.
- Negeer `<img>` warnings voorlopig zoals afgesproken.
- Houd rekening met verschillen tussen lokale versies en Netlify-deploy. Vermijd het aanpassen van de `Footer` of `ClientLayout` tenzij noodzakelijk.

🧪 Test alles lokaal met:
```
npx next lint && npx next build
```

✨ Doel: Een werkende build met 0 blocking lint errors tegen de ochtend. Niet breken wat werkt.
