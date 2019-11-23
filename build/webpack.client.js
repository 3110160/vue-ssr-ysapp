const path = require('path');
const merge = require('webpack-merge');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin') //  添加vue-router、vuex需要的插件，
const base = require('./webpack.base.js')

module.exports = merge(base,{
  entry:path.resolve(__dirname,'../src/client-entry.js'),
  optimization:{
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    }   
  },
  plugins: [
    // 第三方库运行时优化缓存
     new CleanWebpackPlugin(),
    new VueSSRClientPlugin(),  //打包成vue-ssr-client-manifest.json
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      favicon:path.resolve(__dirname, '../public/favicon.ico'),
      filename: 'index.html'
    })
  ]
})