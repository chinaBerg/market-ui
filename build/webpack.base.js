const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          // 开启多进程多实例构建
          {
            loader: 'thread-loader',
            options: {
              workers: 3, // 开启三个进程
            },
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            },
          }
        ],
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
        ],
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join(__dirname, 'images/[name].[ext]')
        }
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // 开启模块的缓存
    new HardSourceWebpackPlugin(),
    // 友好的构建提示
    new FriendlyErrorsWebpackPlugin(),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
    },
    extensions: ['*', '.js', '.vue'],
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  stats: 'errors-only',
};
