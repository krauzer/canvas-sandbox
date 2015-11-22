var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve("./", 'node_modules');
var mainPath = path.resolve("./", "app","assets","javascripts", "main.js");
var buildPath = path.resolve("./", "build")

console.log(path.resolve("./"))
module.exports = function(env){

  var webpackConfig = {
    entry:  mainPath,
    output: {
      path: buildPath,
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