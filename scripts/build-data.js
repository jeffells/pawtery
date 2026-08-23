const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'data');

function readJsonEntries(folderName) {
  const folder = path.join(root, folderName);
  if (!fs.existsSync(folder)) return [];

  return fs.readdirSync(folder)
    .filter(name => name.toLowerCase().endsWith('.json'))
    .sort()
    .map(name => {
      const file = path.join(folder, name);
      try {
        const value = JSON.parse(fs.readFileSync(file, 'utf8'));
        if (!value || Array.isArray(value) || typeof value !== 'object') {
          throw new Error('entry must be a JSON object');
        }
        return value;
      } catch (error) {
        throw new Error(`Could not read ${folderName}/${name}: ${error.message}`);
      }
    });
}

function writeJson(filename, value) {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(
    path.join(dataDir, filename),
    JSON.stringify(value, null, 2) + '\n',
    'utf8'
  );
}

const products = readJsonEntries('products')
  .sort((a, b) => {
    const orderA = Number.isFinite(Number(a.order)) ? Number(a.order) : 999;
    const orderB = Number.isFinite(Number(b.order)) ? Number(b.order) : 999;
    if (orderA !== orderB) return orderA - orderB;
    return String(a.name || '').localeCompare(String(b.name || ''));
  });

const events = readJsonEntries('events')
  .sort((a, b) => {
    const dateCompare = String(a.date || '').localeCompare(String(b.date || ''));
    if (dateCompare !== 0) return dateCompare;
    return String(a.name || '').localeCompare(String(b.name || ''));
  });

writeJson('products.json', { products });
writeJson('events.json', { events });

console.log(`Pawtery build: ${products.length} product(s), ${events.length} event(s).`);
