const path = require('node:path');
const fs = require('node:fs');

// Respect existing environment port or default to 3000 as required by reverse proxy infrastructure
Object.assign(process.env, { NODE_ENV: process.env.NODE_ENV || 'production' });
process.env.PORT = process.env.PORT || '3000';
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js');

if (fs.existsSync(standaloneServer)) {
  // Use Next.js optimized standalone server
  require(standaloneServer);
} else if (fs.existsSync(path.join(__dirname, 'server.js'))) {
  // Use server.js in current directory (standalone server in runner container or fallback custom server)
  require(path.join(__dirname, 'server.js'));
} else {
  console.error('> No server.js found to start application.');
  process.exit(1);
}
