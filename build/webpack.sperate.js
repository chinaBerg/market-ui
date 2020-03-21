const glob = require('glob');
const path = require('path');
const merge = require('webpack-merge');
const baseConf = require('./webpack.base');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const genEntries = () => {
  const entries = {};
  const entryPath = path.join(__dirname, '../src/lib/*/index.js');
  const files = glob.sync(entryPath);

  files.forEach((file) => {
    const match = file.match(/src\/lib\/(.*)\/index\.js/);
    const dirName = match && match[1];
    if (dirName && dirName.charAt(0) !== '_') {
      entries[dirName] = file;
    }
  });
  return entries;
};

const entry = genEntries();

module.exports = merge(baseConf, {
  mode: 'production',
  entry,
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        cache: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
});
