const path = require('path');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');

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
        test: /\.scss$/,
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
    new BundleAnalyzer(),
    new Visualizer(),
  ],
};
