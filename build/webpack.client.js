const path = require('path');
const merge = require('webpack-merge');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin') //  添加vue-router、vuex需要的插件，
const base = require('./webpack.base')

module.exports = merge(base,{
  entry:path.resolve(__dirname,'../src/client-entry.js'),
  plugins: [
    new CleanWebpackPlugin(),
    new VueSSRClientPlugin(),  //打包成vue-ssr-client-manifest.json
    // 客户端激活
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html'
    })
  ]
})