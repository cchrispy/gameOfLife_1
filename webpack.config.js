var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Conway\'s Game Of Life',
  filename: 'index.html',
  template: './src/index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include: '/src',
      loaders: ["babel"]
    },
    {
      test: /\.s?css$/,
      include: '/src',
      loaders: ["style", "css", "sass"]
    }]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}