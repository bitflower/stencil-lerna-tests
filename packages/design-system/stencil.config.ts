import { Config } from '@stencil/core';
// import nodePolyfills from 'rollup-plugin-node-polyfills';
import builtins from 'rollup-plugin-node-builtins';
import replace from '@rollup/plugin-replace';

export const config: Config = {
  namespace: 'design-system',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [builtins()],
  rollupPlugins: {
    before: [
      replace({
        preventAssignment: true,
        delimiters: ['', ''],
        '_interopRequireDefault(require("sift"))': "require('sift')",
      }),
    ],
  },
  // testing: {
  //   // transformIgnorePatterns: [
  //   //   '<rootDir>.*(node_modules)(?!.*@ryancavanaugh/pkg.*).*$'
  //   // ],
  //   // transformIgnorePatterns: ['<rootDir>/node_modules/(?!@ryancavanaugh)']
  //   // moduleNameMapper: {
  //   //   '@ryancavanaugh/(.*)': '<rootDir>/../$1'
  //   //   // '@ryancavanaugh/pkg1': '<rootDir>/../pkg1'
  //   // },
  //   // resolver: '<rootDir>/jest-resolver.js',
  //   // moduleDirectories: [
  //   //   'node_modules',
  //   //   // '/Users/matthias/Documents/Projekte/bitflower/Case OS/Prototype/v0.2/_Knowledge/StencilJS/stencil-lerna-tests/packages/pkg1',
  //   //   '../pkg1'
  //   // ]
  // }
};
