const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const baseConf = require('./webpack.base');

module.exports = merge(baseConf, {
  mode: 'none',
  entry: {
    'market-ui': path.join(__dirname, '../src/index.js'),
    'market-ui.min': path.join(__dirname, '../src/index.js'),
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    library: 'marketUi',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\.js$/,
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
