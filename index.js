const http = require('http');
const { URL } = require('url');

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  // GET /echo?msg=hello
  if (req.method === 'GET' && url.pathname === '/echo') {
    const msg = url.searchParams.get('msg') ?? '';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(
      JSON.stringify(
        {
          msg,
          headers: req.headers,
        },
        null,
        2
      )
    );
    return;
  }

  // default
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('ok');
});

server.listen(PORT, () => {
  console.log(`echo-server listening on http://localhost:${PORT}`);
});
