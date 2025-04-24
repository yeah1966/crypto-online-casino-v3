import path from "path";
import fs from "fs/promises";

export async function getAffiliateLinks() {
  const filePath = path.join(process.cwd(), "data", "affiliateLinks.json");
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}
