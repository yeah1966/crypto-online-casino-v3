import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const { slug } = params;

  // Fallback content — pas aan zoals jij wilt
  if (!slug) {
    notFound();
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Blog: {slug}</h1>
      <p>This is a dynamic blog page for: {slug}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
