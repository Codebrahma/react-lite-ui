const path = require('path');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        use: [
          'style-loader',
          `${require.resolve('css-loader')}?sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]`,
          `${require.resolve('sass-loader')}?sourceMap`,
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new BundleAnalyzer(),
  ],
};
