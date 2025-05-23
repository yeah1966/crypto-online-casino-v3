"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';

interface Affiliate {
  name: string;
  url: string;
  active: boolean;
  clicks: number;
}

const legacyClickStats = {
  stake: 4,
  vave: 3,
  "7bit": 2,
  mbit: 1,
  cloudbet: 2,
  trustdice: 2,
  bitstarz: 98,
  dreams: 1,
  spin: 8,
};

export default function AffiliatesAdminPage() {
  const [affiliates, setAffiliates] = useState<Affiliate[]>([
    { name: "BitStarz", url: "https://www.bitstarz.com/?ref=YOUR_ID", active: true, clicks: 0 },
    { name: "Cloudbet", url: "https://www.cloudbet.com/?ref=YOUR_ID", active: true, clicks: 0 },
    { name: "7Bit", url: "https://www.7bitcasino.com/?ref=YOUR_ID", active: true, clicks: 0 },
    { name: "Betplay", url: "https://www.betplay.io/?ref=YOUR_ID", active: true, clicks: 0 },
    { name: "Dreams", url: "https://www.dreamscasino.com/?ref=YOUR_ID", active: true, clicks: 0 },
    { name: "Crypto Loko", url: "https://www.cryptoloko.com/?ref=YOUR_ID", active: true, clicks: 0 },
    { name: "Betzard", url: "https://www.betzard.com/?ref=YOUR_ID", active: true, clicks: 0 },
    { name: "Coinpoker", url: "https://www.coinpoker.com/?ref=YOUR_ID", active: true, clicks: 0 },
  ]);
  const [form, setForm] = useState({ name: "", url: "", active: true });
  const [error, setError] = useState("");
  const [sortClicks, setSortClicks] = useState<null | 'asc' | 'desc'>(null);
  const [editName, setEditName] = useState<string | null>(null);
  const [success, setSuccess] = useState("");
  const [legacyLoaded, setLegacyLoaded] = useState(false);
  // On mount, try to load legacy click stats
  useEffect(() => {
    if (!legacyLoaded) {
      setAffiliates(prev => prev.map(a => {
        const slug = a.name.replace(/\s/g, '').toLowerCase();
        return legacyClickStats[slug] ? { ...a, clicks: legacyClickStats[slug] } : a;
      }));
      setLegacyLoaded(true);
    }
  }, [legacyLoaded]);
  // Add or update affiliate
  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.name || !form.url) {
      setError("Please fill in all fields.");
      return;
    }
    if (editName) {
      setAffiliates(affiliates.map(a => a.name === editName ? { ...a, ...form } : a));
      setSuccess("Affiliate updated successfully");
      setEditName(null);
    } else {
      if (affiliates.some(a => a.name.toLowerCase() === form.name.toLowerCase())) {
        setError("A casino with this name already exists.");
        return;
      }
      setAffiliates([{ ...form, clicks: 0 }, ...affiliates]);
      setSuccess("Affiliate added successfully");
    }
    setForm({ name: "", url: "", active: true });
  }
  // Delete affiliate
  function handleDelete(name: string) {
    setAffiliates(affiliates.filter(a => a.name !== name));
  }
  // Edit affiliate
  function handleEdit(a: Affiliate) {
    setForm({ name: a.name, url: a.url, active: a.active });
    setEditName(a.name);
    setSuccess("");
    setError("");
  }
  // Track clicks
  function handleClick(name: string) {
    setAffiliates(affiliates.map(a => a.name === name ? { ...a, clicks: a.clicks + 1 } : a));
  }
  // Sorting
  const sortedAffiliates = sortClicks
    ? [...affiliates].sort((a, b) => sortClicks === 'asc' ? a.clicks - b.clicks : b.clicks - a.clicks)
    : affiliates;
  // Tooltip
  const clickTooltip = "Aantal keer dat deze link is aangeklikt";
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-10 pt-36">
      {!legacyLoaded && (
        <div className="mb-4 bg-yellow-200 text-pink-700 font-bold px-4 py-2 rounded-xl animate-pulse">No legacy affiliate data found. Please re-enter your links.</div>
      )}
      <h1 className="text-3xl font-extrabold mb-6">Affiliate Casino Management</h1>
      <form className="mb-8 flex flex-col md:flex-row gap-4 items-end bg-[#241f6b] p-6 rounded-xl shadow-xl animate-fade-in" onSubmit={handleAdd}>
        <div className="flex-1">
          <label className="block mb-1 text-yellow-300 font-bold">Casino Name</label>
          <input className="w-full rounded px-3 py-2 text-black" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="e.g. BitStarz" disabled={!!editName} />
        </div>
        <div className="flex-1">
          <label className="block mb-1 text-yellow-300 font-bold">Affiliate Link</label>
          <input className="w-full rounded px-3 py-2 text-black" value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} placeholder="https://..." />
        </div>
        <div>
          <label className="block mb-1 text-yellow-300 font-bold">Status <span title="Active: visible on site. Inactive: hidden from users." className="cursor-help text-xs">?</span></label>
          <select className="rounded px-3 py-2 text-black" value={form.active ? "active" : "inactive"} onChange={e => setForm(f => ({ ...f, active: e.target.value === "active" }))}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="bg-yellow-300 text-pink-700 font-bold px-6 py-2 rounded-xl shadow hover:bg-pink-600 hover:text-white transition-all">{editName ? "Update" : "Add"}</button>
      </form>
      {success && <div className="mb-4 text-green-400 font-bold animate-pulse">{success}</div>}
      {error && <div className="mb-4 text-red-400 font-bold animate-pulse">{error}</div>}
      <table className="w-full bg-[#241f6b] rounded-xl overflow-hidden shadow-xl animate-fade-in">
        <thead>
          <tr className="bg-purple-800 text-yellow-300">
            <th className="py-3 px-4 text-left">Casino</th>
            <th className="py-3 px-4 text-left">Affiliate Link</th>
            <th className="py-3 px-4 text-left cursor-pointer" title={clickTooltip} onClick={() => setSortClicks(sortClicks === 'asc' ? 'desc' : 'asc')}>Clicks {sortClicks ? (sortClicks === 'asc' ? '▲' : '▼') : ''}</th>
            <th className="py-3 px-4 text-left">Status <span title="Active: visible on site. Inactive: hidden from users." className="cursor-help">?</span></th>
            <th className="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {sortedAffiliates.map((a, i) => (
            <tr key={a.name} className={`border-b border-purple-900 transition-all duration-300 hover:bg-purple-800 ${!a.active ? 'bg-black/20 text-white/50' : ''}`}>
              <td className="py-3 px-4 font-bold text-lg flex items-center gap-2">
                {/* Optioneel: logo hier */}
                {a.name}
              </td>
              <td className="py-3 px-4 text-blue-300 underline break-all">
                <Link href={a.url} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick(a.name)}>{a.url}</a>
                </Link>
              </td>
              <td className="py-3 px-4 text-yellow-200 font-mono text-center">{a.clicks}</td>
              <td className="py-3 px-4">
                {a.active ? (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Active</span>
                ) : (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">Inactive</span>
                )}
              </td>
              <td className="py-3 px-4 text-right flex gap-2 justify-end">
                <button onClick={() => handleEdit(a)} className="ml-2 text-xl hover:scale-125 transition-transform" title="Edit affiliate"><span className="text-yellow-300">✎</span></button>
                <button onClick={() => handleDelete(a.name)} className="ml-2 text-xl hover:scale-125 transition-transform" title="Delete affiliate"><span className="text-red-400">❌</span></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 text-white/70 text-sm">This page is for internal management. Only casinos with <span className="text-green-400 font-bold">Active</span> status should be visible to users.</div>
    </main>
  );
}
