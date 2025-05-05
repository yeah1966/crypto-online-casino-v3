// 🔁 Legacy component – gebruikt verouderde affiliateLinks.json
// Deze component is gearchiveerd. Gebruik casinosData.ts in /data als centrale bron.
// Bestanden in deze map worden niet meer actief onderhouden.

import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";

const filePath = path.join(process.cwd(), "data", "affiliateLinks.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      const links = JSON.parse(data);
      res.status(200).json(links);
    } catch (err) {
      res.status(500).json({ error: "Failed to load affiliate links." });
    }
  } else if (req.method === "POST") {
    try {
      const { slug, affiliateUrl } = req.body;
      if (!slug || !affiliateUrl) {
        return res.status(400).json({ error: "Missing slug or affiliateUrl" });
      }
      const data = await fs.readFile(filePath, "utf-8");
      const links = JSON.parse(data);
      links[slug.toLowerCase()] = affiliateUrl;
      await fs.writeFile(filePath, JSON.stringify(links, null, 2), "utf-8");
      res.status(200).json({ success: true, links });
    } catch (err) {
      res.status(500).json({ error: "Failed to save affiliate link." });
    }
  } else if (req.method === "DELETE") {
    try {
      const { slug } = req.query;
      if (!slug || typeof slug !== "string") {
        return res.status(400).json({ error: "Missing or invalid slug" });
      }
      const data = await fs.readFile(filePath, "utf-8");
      const links = JSON.parse(data);
      if (!links[slug]) {
        return res.status(404).json({ error: "Affiliate link not found" });
      }
      delete links[slug];
      await fs.writeFile(filePath, JSON.stringify(links, null, 2), "utf-8");
      res.status(200).json({ success: true, links });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete affiliate link." });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
