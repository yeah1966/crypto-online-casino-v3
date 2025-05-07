---
title: Review Page Structure
description: Layout template for consistent crypto casino review pages using the CasinoReviewTemplate component.
created: 2025-05-07
---

# 🎰 Crypto Casino Review Page Structure

This file defines the **universal layout standard** for all crypto casino review pages on `crypto-online-casino.com`.  
It ensures visual consistency, proper SEO implementation, and a flawless user experience — following the working BitStarz structure as reference.

---

## ✅ Purpose
- Maintain **consistent layout and branding**
- Ensure **structured SEO (metadata, JSON-LD)**
- Prevent layout-breaking mistakes
- Guide developers and AI assistants to **build error-free pages**

---

## 📁 Files Used
- `/app/crypto-casino-reviews/[slug]/page.tsx`
- `/components/CasinoReviewTemplate.tsx`
- `/app/crypto-casino-reviews/[slug]/head.tsx` *(optional if metadata is handled in page.tsx)*

---

## 🧱 Layout Structure

### 1. Metadata & SEO
- Use `generateMetadata()` with OpenGraph and Twitter meta tags.
- Add 3 structured data blocks as `<script type="application/ld+json">`:
  - **Review** (with rating, count, etc.)
  - **BreadcrumbList** (for navigational context)
  - **FAQPage** (2-3 relevant questions)

### 2. Main Visual Content

Everything visual is wrapped inside the `<CasinoReviewTemplate />` component.  
**DO NOT put JSX content inside the component** — use props and `children` properly.

```tsx
<CasinoReviewTemplate
  logo="/logos/slug.png"
  casinoName="CASINONAAM"
  rating={float}
  ratingStars="★★★★☆"
  affiliateUrl="https://affiliate.url"
  affiliateLabel="Play at CASINONAAM"
  introText="Short intro paragraph"
  reviewText="Longer review content<br><br>Separate paragraphs with <br><br>"
  pros=['Pro 1', 'Pro 2']
  cons=['Con 1', 'Con 2']
  highlights=['USP 1', 'USP 2']
>
  // OPTIONAL: Children content for extra blocks (see below)
</CasinoReviewTemplate>
```

### 3. Extra Blocks After Template (as Children)

You may pass extra JSX into the component as children **AFTER all core props**, such as:

#### 🟪 Crypto & Payment Options

```tsx
<div className="mt-8 bg-purple-900/80 rounded-2xl p-6 shadow-lg">
  <div className="flex items-center gap-2 mb-2">
    <span className="text-2xl">🪙</span>
    <span className="text-purple-300 font-bold text-xl">Crypto & Payment Options</span>
  </div>
  <ul className="space-y-2 text-white/90">
    <li><strong>Accepted:</strong> BTC, ETH, LTC, USDT</li>
    <li><strong>Payouts:</strong> Processed within 10 minutes</li>
    <li><strong>Exchange:</strong> Built-in swap feature</li>
    <li><strong>Fees:</strong> 0% crypto transaction fees</li>
  </ul>
</div>
```

#### ❓ FAQ Block (optional visual, already included in JSON-LD)

```tsx
<div className="mt-8 bg-pink-900/80 rounded-2xl p-6 shadow-lg">
  <div className="flex items-center gap-2 mb-2">
    <span className="text-2xl">❓</span>
    <span className="text-pink-300 font-bold text-xl">Frequently Asked Questions</span>
  </div>
  <ul className="space-y-2 text-white/90 list-disc list-inside">
    <li><strong>Is CASINONAAM legit?</strong><br />Yes, fully licensed and crypto-focused.</li>
    <li><strong>Which coins can I use?</strong><br />Bitcoin, Ethereum, and more.</li>
  </ul>
</div>
```

#### ⚠️ Disclaimer

```tsx
<p className="text-center text-xs text-gray-400 mt-4">
  18+ | Gamble responsibly. CASINONAAM may not be available in all jurisdictions.
</p>
```

---

## 📌 Notes & Best Practices

- ✅ Pass everything via **props**, not as internal JSX blocks (unless children are intended).
- ✅ Use the working `BitStarz` page as reference.
- ✅ Always include structured data (review, breadcrumb, FAQ).
- ✅ Keep all layout elements consistent — button position, block spacing, background visuals.
- ❌ NEVER modify `CasinoReviewTemplate.tsx` unless globally necessary.
- ❌ Don’t insert children that break the layout grid or styling.

---

## 🔚 Summary

Use this `.md` as the single source of truth for generating all future review pages.  
Whether hand-coded or via GPT/Windsurf, following this will ensure:
- Visual consistency
- Functional structure
- Top-notch SEO performance

🧠 "Stick to the structure. Keep the visuals tight. Let the SEO shine."

---
