const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Ensure NODE_ENV is strictly production for production build
process.env.NODE_ENV = 'production';

// Clean stale .next compilation cache if exists to prevent development/production chunk conflicts
const nextDir = path.resolve(__dirname, '..', '.next');
try {
  const cacheDir = path.join(nextDir, 'cache');
  if (fs.existsSync(cacheDir)) {
    fs.rmSync(cacheDir, { recursive: true, force: true });
  }
} catch (_) {}

console.log('> Running Next.js build with NODE_ENV=production...');
const nextCli = path.resolve(__dirname, '..', 'node_modules', 'next', 'dist', 'bin', 'next');
const buildResult = spawnSync(process.execPath, [nextCli, 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'production',
  },
  cwd: path.resolve(__dirname, '..'),
});

if (buildResult.status !== 0) {
  console.error('> Next.js build failed with exit code:', buildResult.status);
  process.exit(buildResult.status || 1);
}

// Run post-build assets synchronization
require('./post-build.js');
