import Link from "next/link";
import { useRouter } from "next/navigation";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function getBreadcrumbList(items: BreadcrumbItem[], baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": `${baseUrl}${item.href}`
    }))
  };
}

const Breadcrumbs = ({ items, baseUrl = "https://www.yourdomain.com" }: { items: BreadcrumbItem[]; baseUrl?: string }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap text-sm text-gray-400 gap-1">
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center">
            {idx > 0 && <span className="mx-1">/</span>}
            {idx < items.length - 1 ? (
              <Link href={item.href} className="hover:underline text-purple-300">
                {item.name}
              </Link>
            ) : (
              <span className="text-white">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
