const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('ok');
});

server.listen(PORT, () => {
  console.log(`echo-server listening on http://localhost:${PORT}`);
});
