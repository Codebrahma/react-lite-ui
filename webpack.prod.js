const merge = require('webpack-merge');
const path = require('path');
const glob = require('glob');
const common = require('./webpack.common.js');

function getFiles(filePattern) {
  const files = {
    'index.js': path.join(__dirname, 'lib/index.js'),
  };
  glob.sync(filePattern).forEach((file) => {
    files[file.replace('lib/', '../components/')] = path.join(__dirname, file);
  });
  return files;
}

module.exports = merge(common, {
  devtool: '',
  mode: 'production',
  entry: getFiles('lib/!(index.js)**/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]',
    libraryTarget: 'commonjs2',
  },
  externals: [
    'react',
    'react-dom',
  ],
});
