const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    './client/index.js',
  ],
  context: __dirname,
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'docs.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.scss', '.js', '.json', '.md'],
    modules: [
      'node_modules',
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './../node_modules'),
      path.resolve(__dirname, './../src'),
    ],
    alias: {
      'react-lite': path.resolve(`${__dirname}./../components`),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      }, {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        include: [path.join(__dirname), path.join(__dirname, '../src'), /flexboxgrid/, /codemirror/],
      }, {
        test: /\.(txt)$/,
        use: 'raw-loader',
        include: path.resolve(__dirname, './app/components/layout/main/modules'),
      }, {
        test: /\.(md)$/,
        use: ['html-loader', 'highlight-loader', 'markdown-loader'],
      },
      {
        test: /\.(woff)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('docs.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
