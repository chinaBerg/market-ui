
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  pages: {
    index: path.join(__dirname, './examples/main.js'),
  },
  configureWebpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, './examples');
  },
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .tap(() => ({
        compilerOptions: {
          preserveWhitespace: false,
        },
      }))
      .end()
      .use('md-loader')
      .loader(path.resolve(__dirname, './build/md-loader/index.js'))
      .end();
  },
};
