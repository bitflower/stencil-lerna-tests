import { Config } from '@stencil/core';
// import nodePolyfills from 'rollup-plugin-node-polyfills';
import builtins from 'rollup-plugin-node-builtins';

export const config: Config = {
  namespace: 'design-system',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [builtins()]
  // testing: {
  //   // transformIgnorePatterns: [
  //   //   '<rootDir>.*(node_modules)(?!.*@ryancavanaugh/pkg.*).*$'
  //   // ],
  //   // transformIgnorePatterns: ['<rootDir>/node_modules/(?!@ryancavanaugh)']
  //   // moduleNameMapper: {
  //   //   '@ryancavanaugh/(.*)': '<rootDir>/../$1'
  //   //   // '@ryancavanaugh/pkg1': '<rootDir>/../pkg1'
  //   // },
  // }
};
