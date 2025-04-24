const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data', 'affiliateLinks.json');

module.exports = (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load links' });
    }
    res.status(200).json(JSON.parse(data));
  });
};
