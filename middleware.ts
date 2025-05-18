import { NextRequest, NextResponse } from 'next/server';

const restrictedCountries = ['germany', 'spain', 'brazil']; // Voeg hier alleen landen toe die IP-restrictie nodig hebben

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const countryParam = pathname.split('/')[2]?.toLowerCase();

  // Alleen IP-check als het een expliciet restricted country betreft
  if (!pathname.startsWith('/casinos/') || !restrictedCountries.includes(countryParam)) {
    return NextResponse.next();
  }

  const userCountry = request.geo?.country?.toLowerCase();

  // 🔓 EXTRA DEV BYPASS voor lokale development (verwijderen bij livegang!)
  if (process.env.NODE_ENV !== 'production' && !userCountry) {
    return NextResponse.next();
  }

  if (!userCountry) {
    return NextResponse.redirect(new URL('/access-denied', request.url));
  }

  // 🔓 TEMPORARY DEV BYPASS (verwijderen bij livegang!)
  const developerBypassCountries = ['nl']; // geef toegang aan NL (Nederland)
  if (developerBypassCountries.includes(userCountry)) {
    return NextResponse.next();
  }
  // ✅ Verwijder deze bypass bij live deploy naar productie

  if (countryParam !== userCountry) {
    return NextResponse.redirect(new URL('/access-denied', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/casinos/:country*'],
};
