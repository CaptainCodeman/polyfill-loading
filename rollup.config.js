'use strict';

import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: [
    'src/index.ts',
    'src/store.ts',
    'src/views.ts',
  ],
  output: {
    dir: 'public/scripts',
    format: 'esm',
    chunkFileNames: '[name].js',
    sourcemap: true,
  },
  external: [
    // '/scripts/store.js',
    '/scripts/views.js',
  ],
  manualChunks(id) {
    // if (id.includes('node_modules')) {
    //   return 'vendor';
    // }
    if (id.includes('src/store')
     || id.includes('node_modules/@captaincodeman/rdx')
     || id.includes('node_modules/@captaincodeman/router')) {
      return 'store';
    }
  },
  plugins: [
    resolve({
      dedupe: [
        '@captaincodeman/rdx',
        '@captaincodeman/rdx-model',
        '@captaincodeman/router',
        'lit-element',
        'lit-html',
      ]
    }),
    typescript({ typescript: require('typescript') }),
    production && terser({
      output: {
        comments: false
      }
    })
  ],
}
