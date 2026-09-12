const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  try {
    if (!fs.existsSync(src)) return;
    const stats = fs.lstatSync(src);
    if (stats.isSymbolicLink()) {
      return; // Skip raw symlinks during tree copying to avoid dangling references
    }
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
  } catch (err) {
    // Ignore non-fatal copy errors during post-build sync
  }
}

try {
  // Standalone output synchronization: copy .next/static and public into .next/standalone
  const standaloneDir = path.join(process.cwd(), '.next', 'standalone');
  const staticDir = path.join(process.cwd(), '.next', 'static');
  const publicDir = path.join(process.cwd(), 'public');

  // Ensure common app router chunks have non-hashed aliases for development and fallback clients
  const appChunksDir = path.join(staticDir, 'chunks', 'app');
  if (fs.existsSync(appChunksDir)) {
    const chunkFiles = fs.readdirSync(appChunksDir);
    const prefixes = ['error', 'global-error', 'not-found', 'layout', 'page'];
    for (const prefix of prefixes) {
      const aliasTarget = path.join(appChunksDir, `${prefix}.js`);
      if (!fs.existsSync(aliasTarget)) {
        const matching = chunkFiles.find(f => f.startsWith(`${prefix}-`) && f.endsWith('.js'));
        if (matching) {
          try {
            fs.copyFileSync(path.join(appChunksDir, matching), aliasTarget);
          } catch (_) {}
        }
      }
    }
  }

  if (fs.existsSync(standaloneDir)) {
    const standaloneStaticDir = path.join(standaloneDir, '.next', 'static');
    copyRecursiveSync(staticDir, standaloneStaticDir);

    if (fs.existsSync(publicDir)) {
      const standalonePublicDir = path.join(standaloneDir, 'public');
      copyRecursiveSync(publicDir, standalonePublicDir);
    }

    const serverTs = path.join(process.cwd(), 'server.ts');
    if (fs.existsSync(serverTs)) {
      fs.copyFileSync(serverTs, path.join(standaloneDir, 'server.ts'));
    }
  }

  // Remove dist if created to avoid confusion
  const distDir = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distDir)) {
    try {
      fs.rmSync(distDir, { recursive: true, force: true });
    } catch (_) {}
  }
} catch (globalErr) {
  // Gracefully handle any unexpected synchronization errors
  console.warn('Post-build sync warning:', globalErr && globalErr.message);
}

console.log('Post-build synchronization complete.');
process.exit(0);
