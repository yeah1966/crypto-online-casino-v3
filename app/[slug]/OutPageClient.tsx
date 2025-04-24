"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import affiliateLinks from "@/data/affiliateLinks.json";

export default function OutPageClient() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug ?? "";
  const url = affiliateLinks[slug];

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  if (!url) {
    return (
      <div className="text-center text-white mt-20">
        <h1 className="text-4xl mb-4">Casino niet gevonden: {slug}</h1>
        <p>Geen affiliate link beschikbaar.</p>
      </div>
    );
  }

  return (
    <div className="text-center text-white mt-20">
      <h1 className="text-4xl mb-4">Casino: {slug}</h1>
      <p>Je wordt doorgestuurd...</p>
    </div>
  );
}
