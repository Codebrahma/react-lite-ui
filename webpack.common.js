const path = require('path');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

// Configure style loaders according to environment.
const cssLoader = prod ?
  'css-loader' :
  `${require.resolve('css-loader')}?sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]`;
const sassLoader = prod ?
  'sass-loader' :
  `${require.resolve('sass-loader')}?sourceMap`;

const styleLoader = [
  'style-loader',
  cssLoader,
  sassLoader,
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        include: path.resolve(__dirname, './lib'),
        use: styleLoader,
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new BundleAnalyzer({
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, 'stats/bundle_analyzer_stats.html'),
    }),
    new Visualizer({
      filename: '../stats/visualizer_stats.html',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
};
