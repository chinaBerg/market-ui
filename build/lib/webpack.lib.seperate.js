const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const genEntries = () => {
  const entries = {}
  const files = glob.sync(path.join(__dirname, '../../src/lib/*/index.js'))
  files.forEach(file => {
    const match = file.match(/src\/lib\/(.*)\/index\.js/)
    const dirName = match && match[1]
    if (dirName && dirName.charAt(0) !== '_') {
      entries[dirName] = file
    }
  })
  return entries
}

const entry = genEntries()

module.exports = merge(baseConfig, {
  entry,
  output: {
    path: path.resolve(__dirname, '../../lib/components'),
    filename: '[name]/index.js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
})
