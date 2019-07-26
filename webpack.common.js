const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob');

function getFiles(filePattern) {
  const files = {
    'index.js': path.join(__dirname, 'lib/index.js'),
  };
  glob.sync(filePattern).forEach((file) => {
    files[file.replace('lib/', '../components/')] = path.join(__dirname, file);
  });
  console.log({ files });
  return files;
}

const prod = process.env.NODE_ENV === 'production';

// Configure style loaders according to environment.
const cssLoader = prod
  ? 'css-loader'
  : `${require.resolve('css-loader')}?sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]`;
const sassLoader = prod
  ? 'sass-loader'
  : `${require.resolve('sass-loader')}?sourceMap`;

const styleLoader = [
  'style-loader',
  cssLoader,
  sassLoader,
];

module.exports = {
  entry: getFiles('lib/!(index.js)**/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
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
  optimization: {
    minimizer: [
      new TerserPlugin({
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
