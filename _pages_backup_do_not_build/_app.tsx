import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import StickyCTA from "@/components/StickyCTA";
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideStickyCTA = router.pathname.startsWith('/admin');
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <Component {...pageProps} />
      </main>
      {!hideStickyCTA && <StickyCTA />}
    </>
  );
}
