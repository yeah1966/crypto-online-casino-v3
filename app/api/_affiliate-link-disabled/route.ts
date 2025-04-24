// Temporarily disabled for static export compatibility
// Original code renamed to prevent Next.js static export build failure
// import { NextResponse } from 'next/server';
// import affiliateLinks from '../../../data/affiliateLinks.json';

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const slug = searchParams.get('slug');
//   const url = slug ? affiliateLinks[slug] : undefined;
//   if (url) return NextResponse.json({ url });
//   return new NextResponse(JSON.stringify({ error: 'Not found' }), { status: 404 });
// }
