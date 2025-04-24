module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeDetection: false // <-- boolean, niet als string!
    // fallbackLng: 'en', // VERWIJDERD: niet geldig voor Next.js
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
