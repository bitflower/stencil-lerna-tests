const resolve = require('resolve');

/**
 * @typedef {{
    basedir: string;
    browser?: boolean;
    defaultResolver: (request: string, options: ResolverOptions) => string;
    extensions?: readonly string[];
    moduleDirectory?: readonly string[];
    paths?: readonly string[];
    rootDir?: string;
  }} ResolverOptions
 */

/**
 * @param {string} request
 * @param {ResolverOptions} options
 */
module.exports = (request, options) => {
  console.log('BF jest-resolver', request, options);
  try {
    return resolve.sync(request, {
      basedir: options.basedir,
      extensions: options.extensions,
      preserveSymlinks: true,
    });
  } catch (e) {
    console.log('BF jest-resolver, ERROR');
    if (e.code === 'MODULE_NOT_FOUND') {
      console.log('BF jest-resolver, ERROR, IF', request);
      return options.defaultResolver(request, options);
    }
    throw e;
  }
};
