// Centrale helpers voor structured data (JSON-LD)

// 1. Review structured data (voor casino reviews)
export function getReviewStructuredData(casino: {
  name: string;
  reviewRating: number;
  reviewCount: number;
  url: string;
  image?: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": casino.name,
      "image": casino.image,
      "description": casino.description,
      "url": casino.url
    },
    "author": {
      "@type": "Organization",
      "name": "Crypto Online Casino"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": casino.reviewRating,
      "bestRating": 5,
      "worstRating": 1
    },
    "reviewCount": casino.reviewCount
  };
}

// 2. FAQ structured data
export function getFAQStructuredData(faqItems: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

// 3. Blog structured data
export function getBlogStructuredData(post: {
  title: string;
  description: string;
  url: string;
  author: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "url": post.url,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.datePublished,
    "image": post.image
  };
}

// 4. Breadcrumb structured data
export function getBreadcrumbListStructuredData(items: { name: string; href: string }[], baseUrl: string) {
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
