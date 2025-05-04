const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, '../public/logos');
const logos = fs.readdirSync(logosDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.svg'));

const casinosDataPath = path.join(__dirname, '../data/casinosData.ts');
const casinosRaw = fs.readFileSync(casinosDataPath, 'utf8');

// Extract the array part from the TypeScript file
const arrayMatch = casinosRaw.match(/const casinos:.*?=\s*\[(.*?)];/s);
if (!arrayMatch) {
  console.error('❌ Kon het casino-array gedeelte niet vinden in casinosData.ts');
  process.exit(1);
}
const arrayText = '[' + arrayMatch[1] + ']';

// Naive parse: find all logo fields
const logoRegex = /logo:\s*['\"](.*?)['\"]/g;
let match;
const usedLogos = [];
while ((match = logoRegex.exec(arrayText)) !== null) {
  // Remove leading slash if present
  let logoPath = match[1].replace(/^\//, '');
  // Only the filename
  const logoFile = path.basename(logoPath);
  usedLogos.push(logoFile);
}

const missing = usedLogos.filter(l => !logos.includes(l));

if (missing.length === 0) {
  console.log('✅ Alle logo-bestanden uit casinosData.ts zijn aanwezig in /public/logos!');
} else {
  console.log('❌ Ontbrekende of fout gelinkte logo-bestanden:');
  missing.forEach(l => console.log(' -', l));
  process.exit(1);
}
