const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    './client/index.js'
  ],
  context: __dirname,
	devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'docs.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.scss', '.js', '.json', '.md'],
    alias: {
      'react-lite': path.resolve(__dirname + './../components')
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }, {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
      }, {
        test: /\.(txt)$/,
        loader: 'raw-loader',
        include: path.resolve(__dirname, './app/components/layout/main/modules')
      }, {
        test: /\.(md)$/,
        loader: 'html-loader!highlight-loader!markdown-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('docs.css', { allChunks: true }),
    new TransferWebpackPlugin([{
      from: 'public/images',
      to: 'images'
    }], path.resolve(__dirname, './')),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
