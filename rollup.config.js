'use strict';

import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import minify from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.ts',
  output: {
    dir: 'public/scripts',
    format: 'esm',
    sourcemap: true,
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
    production && minify(),
    typescript({ typescript: require('typescript') }),
    production && terser({
      output: {
        comments: false
      }
    })
  ],
}
