const browserSync = require('browser-sync').create();
const compression = require('compression');

browserSync.init({
  cwd: 'public',
  server: {
    baseDir: 'public',
    index: "index.html",
  },
  files: [
    'scripts/**',
    'index.html',
  ],
  middleware: [
    compression({ level: 9 }),
  ],
  snippetOptions: {
    ignorePaths: ['/', '/**'],
  },
});