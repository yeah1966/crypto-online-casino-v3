import React, { useState } from "react";

export default function AffiliateAdmin() {
  console.log("AffiliateAdmin geladen!");
  const [slug, setSlug] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Je hebt op Add geklikt!", { slug, url });
    try {
      const response = await fetch("/api/save-affiliates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ links: [{ slug, url }] }),
      });
      if (response.ok) {
        alert("Opgeslagen!");
      } else {
        alert("Fout bij opslaan!");
      }
    } catch (err) {
      alert("Netwerkfout!");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{padding: 40}}>
      <input
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="Casino naam"
        style={{marginRight: 10}}
      />
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Affiliate link"
        style={{marginRight: 10}}
      />
      <button type="submit">Add</button>
    </form>
  );
}
