function ignoreStyles() {
  return null;
}
require.extensions['.css'] = ignoreStyles;
require.extensions['.scss'] = ignoreStyles;
require.extensions['.svg'] = ignoreStyles;