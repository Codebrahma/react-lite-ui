const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  entry: path.resolve(__dirname, 'lib'),
  externals: [
    // eslint-disable-next-line quote-props
    'react',
    'react-dom',
  ],
});
