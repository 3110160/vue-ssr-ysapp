const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin') //  添加vue-router、vuex需要的插件，
const base = require('./webpack.base.js')
module.exports = merge(base,{
  entry:path.resolve(__dirname,'../src/server-entry.js'),
  target: 'node', // node 环境
  externals: nodeExternals({
    // 不要外置化 webpack 需要处理的依赖模块。
    // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
    // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
    whitelist: /\.css$/
  }),
  output: {
    libraryTarget: 'commonjs2' // node 环境使用 commonjs2 规范
  },
  plugins: [
    new VueSSRServerPlugin()
  ]
})