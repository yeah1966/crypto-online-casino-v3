const fs = require('fs');
const path = require('path');

const casinos = require('../data/casinosData.ts').casinos || [];
const logosDir = path.join(__dirname, '../public/logos');

const missing = [];

casinos.forEach(casino => {
  if (!casino.logo) {
    missing.push({ slug: casino.slug, reason: 'No logo field' });
    return;
  }
  const logoPath = path.join(logosDir, casino.logo.replace('/logos/', ''));
  if (!fs.existsSync(logoPath)) {
    missing.push({ slug: casino.slug, logo: casino.logo, reason: 'File not found' });
  }
});

if (missing.length === 0) {
  console.log('✅ All casino logos found!');
} else {
  console.log('❌ Missing or wrong logo files:');
  missing.forEach(m => console.log(m));
  process.exit(1);
}
