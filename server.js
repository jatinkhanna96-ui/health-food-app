const { createServer } = require('http');
const { parse } = require('url');
const path = require('path');
const fs = require('fs');
const Module = require('module');

// Intercept chunk loading for Next.js webpack-runtime so chunks in .next/server/chunks are always found
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  try {
    return originalResolveFilename.call(this, request, parent, isMain, options);
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND' && parent && parent.filename && parent.filename.includes('.next/server')) {
      const baseReq = path.basename(request);
      const parentDir = path.dirname(parent.filename);
      
      const candidates = [
        path.join(parentDir, 'chunks', baseReq),
        path.resolve(process.cwd(), '.next/server/chunks', baseReq),
        path.resolve(process.cwd(), '.next/server', baseReq),
      ];

      for (const candidate of candidates) {
        if (fs.existsSync(candidate)) {
          return candidate;
        }
      }
    }
    throw err;
  }
};

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const pathname = parsedUrl.pathname || '';

      // Direct fallback handler for app chunk requests (e.g. error.js, global-error.js)
      if (pathname.startsWith('/_next/static/chunks/app/')) {
        const chunkFileName = pathname.replace('/_next/static/chunks/app/', '');
        const chunkFilePath = path.join(process.cwd(), '.next', 'static', 'chunks', 'app', chunkFileName);
        if (fs.existsSync(chunkFilePath)) {
          res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
          res.setHeader('Cache-Control', 'no-store, must-revalidate');
          return fs.createReadStream(chunkFilePath).pipe(res);
        }
      }

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  })
    .once('error', (err) => {
      console.error('Server error:', err);
      process.exit(1);
    })
    .listen(port, hostname, () => {
      console.log(`> Ready on http://${hostname}:${port} (NODE_ENV=${process.env.NODE_ENV || 'development'})`);
    });
}).catch((err) => {
  console.error('Error preparing Next.js app:', err);
  process.exit(1);
});
