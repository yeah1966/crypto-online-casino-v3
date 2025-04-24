// components/BonusCard.tsx
interface BonusCardProps {
  casino: string;
  slug: string;
  offer: string;
  perks: string[];
  highlight?: string;
  tags?: string[];
  compact?: boolean;
}

export default function BonusCard({ casino, slug, offer, perks, highlight, tags = [], compact = false }: BonusCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">
        {highlight && <span>{highlight} </span>}
        {casino} – {offer}
      </h2>
      {/* Badges */}
      <div className="mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-purple-700 text-white text-xs px-2 py-1 rounded mr-2 mb-2"
          >
            {tag.replace('-', ' ')}
          </span>
        ))}
      </div>
      {/* Perks (compact mode hides this) */}
      {!compact && (
        <ul className="list-disc pl-6 mb-4">
          {perks.map((perk, i) => <li key={i}>{perk}</li>)}
        </ul>
      )}
      <a href={`/crypto-casino-reviews/${slug}`} className="text-purple-400 underline">
        Read full review
      </a>
    </div>
  );
}
