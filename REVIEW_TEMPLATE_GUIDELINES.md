# Crypto Casino Review Template: Best Practices & Lessons Learned

## 1. OUR REVIEW Section: Paragraph Spacing
- **Always use `<br><br>`** between paragraphs in the `reviewText` prop.
- The template splits `reviewText` on `<br><br>` and renders real line breaks, so spacing is always correct.
- Example:
  ```tsx
  reviewText={`Paragraph one.<br><br>Paragraph two.<br><br>Paragraph three.`}
  ```

## 2. No `&nbsp;` or Dashes for Spacing
- Never use `&nbsp;` or long dashes (—) for whitespace or paragraph breaks.
- Use only `<br><br>` for visual paragraph separation.

## 3. Template Rendering Logic
- The template now renders each paragraph as a fragment with `<br /><br />` between, ensuring true visual separation.
- This is **fail-safe**: as long as you use `<br><br>` in your text, the output will always look right.

## 4. Consistency for All Reviews
- Always copy/paste the reviewText structure from a working example.
- Do not rely on whitespace, enters, or Markdown for spacing—**only `<br><br>` works reliably**.

## 5. Troubleshooting
- If you see all text as one block, check for missing `<br><br>`.
- If you see `&lt;br&gt;` as text, check that the template uses `.split('<br><br>')` and renders real `<br />` tags.

---

## Example Usage
```tsx
<CasinoReviewTemplate
  ...
  reviewText={`First paragraph.<br><br>Second paragraph.<br><br>Third paragraph.`}
  ...
/>
```

---

## Summary
- Use `<br><br>` for paragraph breaks in reviewText.
- Do not use `&nbsp;`, long dashes, or just enters.
- The template is now robust and will always show correct spacing for all future reviews.
