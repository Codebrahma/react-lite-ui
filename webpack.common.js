const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const devMode = process.env.NODE_ENV !== 'production';
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

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
        include: path.resolve(__dirname, './src'),
        use: [
          'style-loader',
          `${require.resolve('css-loader')}?sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]`,
          `${require.resolve('sass-loader')}?sourceMap`,
        ],
      },
      {
        test: /\.(woff)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    // new BundleAnalyzerPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: devMode ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    // }),
  ],
};
