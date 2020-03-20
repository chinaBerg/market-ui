'use strict';
const path = require('path');
const merge = require('webpack-merge');
const baseConf = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

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
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
});