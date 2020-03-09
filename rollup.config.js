'use strict';

import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import minify from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const views = [
  'src/views',
]

const store = [
  '@captaincodeman/rdx',
  '@captaincodeman/rdx-model',
  '@captaincodeman/router',
  'src/store',
]

const vendor = [
  'lit-element',
  'lit-html',
  'tslib',
]

export default {
  input: 'src/index.ts',
  output: {
    dir: 'public/scripts',
    format: 'esm',
    chunkFileNames: '[name].js',
    sourcemap: true,
  },
  manualChunks(id) {
    if (views.find(mod => id.includes(mod))) return 'views'
    if (store.find(mod => id.includes(mod))) return 'store'
    if (vendor.find(mod => id.includes(mod))) return 'vendor'
  },
  plugins: [
    alias({
      entries: [
        { find: 'lit-html/lib/shady-render.js', replacement: 'node_modules/lit-html/lit-html.js' },
      ]
    }),
    resolve({
      dedupe: [
        '@captaincodeman/rdx',
        '@captaincodeman/rdx-model',
        '@captaincodeman/router',
        'lit-element',
        'lit-html',
      ]
    }),
    production && minify(),
    typescript({ typescript: require('typescript') }),
    production && terser({
      output: {
        comments: false
      }
    })
  ],
}
