const path = require('path')
const {
  VueLoaderPlugin
} = require('vue-loader')
module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extentions: ['.js', '.vue']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000 // 10Kb
        }
      }
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}