const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseConfig, {
  entry: {
    main: path.resolve(__dirname, '../../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../../lib'),
    filename: '[name].min.js',
    publicPath: '/',
    library: 'market-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    })
  ]
})
