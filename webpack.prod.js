const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
  },
});
