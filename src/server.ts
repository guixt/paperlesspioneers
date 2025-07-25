import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';

const indexHtml = readFileSync(join(__dirname, '../index.html'));

createServer((req, res) => {
  if (req.url && req.url.startsWith('/dist/')) {
    try {
      const file = readFileSync(join(__dirname, '..', req.url));
      res.writeHead(200);
      res.end(file);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtml);
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
