const merge = require('webpack-merge');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: '',
  mode: 'production',
  externals: [
    'react',
    'react-dom',
  ],
  plugins: [
    new BundleAnalyzer({
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, 'stats/bundle_analyzer_stats.html'),
    }),
    new Visualizer({
      filename: '../stats/visualizer_stats.html',
    }),
  ],
});
