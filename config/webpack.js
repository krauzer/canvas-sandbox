var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve("./", 'node_modules');
var mainPath = path.resolve("./", "app","assets","javascripts", "main.js");

module.exports = function(env){

  var webpackConfig = {
    entry:  mainPath,
    output: {
      path: __dirname,
      filename: "build.js"
    },
    plugins: [],
    module: {
      loaders: [
        { test: /\.html$/, loader: "html"},
        { test: /\.css$/, loader: 'style!css'},
        { test: /\.js$/, loader: 'babel?presets[]=es2015', exclude: /node_modules/}
      ]
    },
    resolve: {
      extensions: ['','.js']
    }
  }

  if (env === 'development') {
    webpackConfig.devtool = "eval",
    webpackConfig.debug = true
  }

  return webpackConfig
}