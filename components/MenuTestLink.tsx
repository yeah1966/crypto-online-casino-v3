import Link from 'next/link';

export default function MenuTestLink() {
  return (
    <div style={{ margin: '2rem', padding: '2rem', background: '#222', color: '#fff', borderRadius: '12px' }}>
      <h2>Test kale Next.js Link</h2>
      <Link href="/blog">
        <a style={{ color: 'yellow', fontSize: '1.5rem', textDecoration: 'underline' }}>Ga naar Blog</a>
      </Link>
      <p style={{ marginTop: '1rem' }}>
        Klik op de link hierboven. Navigeer je naar /blog? Dan werkt Next.js Link correct.<br />
        Gebeurt er niets? Dan zit het probleem dieper (setup/import).
      </p>
    </div>
  );
}
