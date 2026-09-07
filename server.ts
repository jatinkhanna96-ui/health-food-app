const path = require('node:path');
const fs = require('node:fs');

const standaloneServer = path.join(process.cwd(), '.next', 'standalone', 'server.js');

if (fs.existsSync(standaloneServer)) {
  // Use Next.js optimized standalone server
  require(standaloneServer);
} else {
  // Fallback to local server runner
  require('./server.js');
}
