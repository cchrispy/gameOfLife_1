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
      include: __dirname + '/src',
      loader: 'babel'
    },
    {
      test: /\.s?css$/,
      include: __dirname + '/src',
      loaders: ["style", "css", "sass"]
    }]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}