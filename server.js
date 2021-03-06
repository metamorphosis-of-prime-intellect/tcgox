const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const nextConfig = require('./next.config');

const port = parseInt(process.env.PORT, 10) || 21380;
const dev = false;
const app = next({ dev, dir: __dirname, conf: nextConfig });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer((req, res) => handle(req, res, parse(req.url, true).pathname)).listen(
		port,
		(err) => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${port}/search`);
		}
	);
});
