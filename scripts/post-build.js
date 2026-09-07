const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursiveSync(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    const parent = path.dirname(dest);
    if (!fs.existsSync(parent)) {
      fs.mkdirSync(parent, { recursive: true });
    }
    fs.copyFileSync(src, dest);
  }
}

// 1. Copy server chunks from .next/server/chunks to .next/server/
const serverChunksDir = path.join(process.cwd(), '.next', 'server', 'chunks');
const serverDir = path.join(process.cwd(), '.next', 'server');

if (fs.existsSync(serverChunksDir)) {
  const files = fs.readdirSync(serverChunksDir);
  for (const file of files) {
    if (file.endsWith('.js')) {
      const src = path.join(serverChunksDir, file);
      const dest = path.join(serverDir, file);
      try {
        fs.copyFileSync(src, dest);
      } catch (err) {
        // ignore copy errors
      }
    }
  }
}

// 2. Standalone output synchronization
const standaloneDir = path.join(process.cwd(), '.next', 'standalone');
const staticDir = path.join(process.cwd(), '.next', 'static');
const publicDir = path.join(process.cwd(), 'public');

if (fs.existsSync(standaloneDir)) {
  // Standalone server requires static files and public folder in .next/standalone
  const standaloneStaticDir = path.join(standaloneDir, '.next', 'static');
  copyRecursiveSync(staticDir, standaloneStaticDir);

  if (fs.existsSync(publicDir)) {
    const standalonePublicDir = path.join(standaloneDir, 'public');
    copyRecursiveSync(publicDir, standalonePublicDir);
  }
}

// 5. Populate dist directory so artifact uploaders (which check dist/) find valid build output
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy standalone build to dist if available
if (fs.existsSync(standaloneDir)) {
  copyRecursiveSync(standaloneDir, distDir);
}

// Copy static assets to dist/.next/static and dist/static
copyRecursiveSync(staticDir, path.join(distDir, '.next', 'static'));
copyRecursiveSync(staticDir, path.join(distDir, 'static'));
copyRecursiveSync(staticDir, path.join(distDir, '_next', 'static'));

// Copy public assets to dist/public
if (fs.existsSync(publicDir)) {
  copyRecursiveSync(publicDir, path.join(distDir, 'public'));
}

// Copy prerendered index.html to dist/index.html
const prerenderedIndex = path.join(serverDir, 'app', 'index.html');
if (fs.existsSync(prerenderedIndex)) {
  try {
    fs.copyFileSync(prerenderedIndex, path.join(distDir, 'index.html'));
  } catch (err) {
    // ignore
  }
}

// Ensure server entrypoint exists in dist
const serverEntrySrc = path.join(process.cwd(), 'server.js');
if (fs.existsSync(serverEntrySrc)) {
  try {
    fs.copyFileSync(serverEntrySrc, path.join(distDir, 'server.js'));
    fs.copyFileSync(serverEntrySrc, path.join(distDir, 'server.cjs'));
  } catch (err) {
    // ignore
  }
}

console.log('Post-build synchronization complete.');
