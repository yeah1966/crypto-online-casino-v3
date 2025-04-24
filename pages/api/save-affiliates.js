const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data', 'affiliateLinks.json');

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { links } = req.body;
    fs.writeFile(filePath, JSON.stringify(links, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save links' });
      }
      res.status(200).json({ message: 'Links saved successfully' });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
