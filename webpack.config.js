const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  devtool: "cheap-module-eval-source-map",
  mode: "development",
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: ["node_modules", "test"]
  }
});
