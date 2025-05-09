/* eslint-disable import/no-anonymous-default-export */

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json' assert { type: 'json' };

export default [
  // JS + CSS bundle
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', declaration: false }),
      postcss({
        extract: true,
        minimize: true,
        modules: true,
      }),
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies || {}),
      ...Object.keys(packageJson.dependencies || {}),
    ],
  },
  // Type declarations
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
  {
    input: 'src/app/style.css',
    output: [{ file: 'dist/index.css', format: 'es' }],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  },
];
