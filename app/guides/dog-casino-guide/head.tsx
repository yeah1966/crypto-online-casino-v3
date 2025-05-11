import { generateGuideMetadata } from '@/lib/generateMetadata';

export function generateMetadata({ params }: { params?: { slug?: string } }) {
  return generateGuideMetadata('dog-casino-guide');
}
