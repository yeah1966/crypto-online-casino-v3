import fs from 'fs';
import path from 'path';
import { resolveOgImageForSlug } from '../lib/ogMeta';

// Slugs from ogMeta.ts (update if you add more casinos)
const slugs = [
  'bitstarz',
  '7bit',
  'wildvegas',
  'cloudbet',
  'betplay',
  'betzard',
  'dreams',
  'coinpoker',
  'cryptoloko',
  'slotsofvegas',
  'goldenbilly',
  'ninlayplay',
];

const aliasMap: Record<string, string> = {
  bitstarz: 'bitstarz-2.png',
  // Add more aliases here if needed
};

const ogDir = path.join(__dirname, '../public/og');
const files = fs.readdirSync(ogDir);

function scanOgImages() {
  for (const slug of slugs) {
    const alias = aliasMap[slug];
    const expected = alias || `${slug}.png`;
    if (files.includes(expected)) {
      if (alias) {
        console.log(`🔁 Alias used: ${slug} → ${alias} ✅`);
      } else {
        console.log(`✅ Found: ${expected}`);
      }
    } else {
      console.log(`❌ Missing: ${expected} → Suggested: create /public/og/${expected}`);
    }
  }
}

scanOgImages();
