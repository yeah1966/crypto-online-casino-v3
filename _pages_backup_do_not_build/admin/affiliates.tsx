// 🔁 Legacy component – gebruikt verouderde affiliateLinks.json
// Deze component is gearchiveerd. Gebruik casinosData.ts in /data als centrale bron.
// Bestanden in deze map worden niet meer actief onderhouden.

import React, { useEffect, useState } from "react";

interface AffiliateLinks {
  [slug: string]: string;
}

interface ClickStats {
  [slug: string]: {
    url: string;
    clicks: number;
  };
}

const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_SECRET || "";

export default function AffiliatesAdmin() {
  const [links, setLinks] = useState<AffiliateLinks>({});
  const [clickStats, setClickStats] = useState<ClickStats>({});
  const [slug, setSlug] = useState("");
  const [affiliateUrl, setAffiliateUrl] = useState("");
  const [editSlug, setEditSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  // Auth state
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    // Check localStorage for auth
    if (typeof window !== "undefined") {
      const authed = localStorage.getItem("affiliates_admin_authed");
      if (authed === "true") setIsAuthed(true);
    }
  }, []);

  // Load affiliate links and click stats
  useEffect(() => {
    if (!isAuthed) return;
    fetch("/api/admin/affiliate-links")
      .then((res) => res.json())
      .then((data) => setLinks(data));
    // Fetch click stats via dummy slug
    fetch("/api/out/bitstarz")
      .then((res) => res.json())
      .then((data) => setClickStats(data.allStats || {}))
      .catch(() => setClickStats({}));
  }, [success, isAuthed]);

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const envSecret = process.env.NEXT_PUBLIC_ADMIN_SECRET || "your-strong-admin-password";
    if (password === envSecret) {
      setIsAuthed(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("affiliates_admin_authed", "true");
      }
    } else {
      setAuthError("Incorrect password");
    }
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    if (!slug || !affiliateUrl) {
      setError("Slug and URL are required.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/admin/affiliate-links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, affiliateUrl }),
      });
      if (!res.ok) {
        const { error } = await res.json();
        setError(error || "Failed to save.");
      } else {
        setSuccess(editSlug ? "Affiliate link updated!" : "Affiliate link added!");
        setSlug("");
        setAffiliateUrl("");
        setEditSlug(null);
      }
    } catch {
      setError("Network error.");
    }
    setLoading(false);
  };

  // Handle edit
  const handleEdit = (slug: string) => {
    setEditSlug(slug);
    setSlug(slug);
    setAffiliateUrl(links[slug]);
    setSuccess("");
    setError("");
  };

  // Handle delete
  const handleDelete = async (slug: string) => {
    if (!window.confirm(`Are you sure you want to delete the link for '${slug}'?`)) return;
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch(`/api/admin/affiliate-links?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const { error } = await res.json();
        setError(error || "Failed to delete.");
      } else {
        setSuccess("Affiliate link deleted!");
        setLinks((prev) => {
          const updated = { ...prev };
          delete updated[slug];
          return updated;
        });
      }
    } catch {
      setError("Network error.");
    }
    setLoading(false);
  };

  // Total clicks
  const totalClicks = Object.values(clickStats).reduce((sum, v) => sum + (v.clicks || 0), 0);

  // Sorteer affiliates op clicks
  const sortedSlugs = Object.keys(links).sort((a, b) => {
    const aClicks = clickStats[a]?.clicks || 0;
    const bClicks = clickStats[b]?.clicks || 0;
    return bClicks - aClicks;
  });

  if (!isAuthed) {
    return (
      <div className="max-w-sm mx-auto py-24 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <input
            type="password"
            className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-400 text-black placeholder-gray-400 bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            autoFocus
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-5 py-2 font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        {authError && <div className="text-red-600 font-medium mt-4">{authError}</div>}
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Affiliate Links Admin</h1>
        <div className="mb-6 text-lg font-semibold text-green-400 flex items-center gap-2">
          <span role="img" aria-label="stats">📊</span> Total Clicks: {totalClicks}
        </div>
        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-white rounded-lg shadow p-6 flex flex-col gap-4"
        >
          <div>
            <label className="block font-medium mb-1 text-black">Slug</label>
            <input
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-400 text-black placeholder-gray-400 bg-white"
              value={slug}
              onChange={(e) => setSlug(e.target.value.replace(/\s/g, "").toLowerCase())}
              placeholder="e.g. bitstarz"
              disabled={!!editSlug}
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-black">Affiliate URL</label>
            <input
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-400 text-black placeholder-gray-400 bg-white"
              value={affiliateUrl}
              onChange={(e) => setAffiliateUrl(e.target.value)}
              placeholder="https://..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-5 py-2 font-semibold hover:bg-blue-700 transition"
            disabled={loading}
          >
            {editSlug ? "Update" : "Add"}
          </button>
          {success && <div className="text-green-600 font-medium">{success}</div>}
          {error && <div className="text-red-600 font-medium">{error}</div>}
        </form>
        <div className="bg-white rounded-lg shadow divide-y">
          {sortedSlugs.length === 0 && (
            <div className="p-4 text-gray-500">No affiliate links found.</div>
          )}
          {sortedSlugs.map((slug) => (
            <div key={slug} className="flex items-center justify-between p-4">
              <div>
                <div className="font-bold text-yellow-400 text-lg flex items-center gap-2 mb-1">
                  <span role="img" aria-label="casino">🎰</span> {slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}
                </div>
                <a
                  href={links[slug]}
                  className="text-sm text-blue-500 underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {links[slug]}
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-sm text-green-400 ml-2">
                  🖱️ {clickStats[slug]?.clicks || 0} clicks
                </span>
                <button
                  className="bg-gray-200 hover:bg-gray-300 rounded px-4 py-1 text-sm font-medium"
                  onClick={() => handleEdit(slug)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-1 text-sm font-medium"
                  onClick={() => handleDelete(slug)}
                  disabled={loading}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
