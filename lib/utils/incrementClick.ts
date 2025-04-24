import fs from "fs";
import path from "path";

export const incrementClick = (slug: string) => {
  const statsPath = path.join(process.cwd(), "lib/data/clickStats.json");

  let stats = {};
  if (fs.existsSync(statsPath)) {
    const raw = fs.readFileSync(statsPath, "utf8");
    stats = JSON.parse(raw);
  }

  stats[slug] = (stats[slug] || 0) + 1;
  fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2), "utf8");
};
