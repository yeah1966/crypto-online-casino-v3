// DEZE API-ROUTE IS VERVALLEN
// Gebruik voortaan alleen de centrale bron: /data/casinosData.ts
export default function handler(req, res) {
  res.status(410).json({
    message:
      'Deze route is verwijderd. Gebruik /data/casinosData.ts als centrale bron voor affiliate links.',
  });
}
