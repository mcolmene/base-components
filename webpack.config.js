var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');
var IMP_DIR = path.resolve(__dirname, 'app/imports');

module.exports = {
  entry: './app/main.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
 			 test : /\.jsx?/,
 			 include : [APP_DIR,IMP_DIR],
 			 loader : 'babel'
 		 }
    ]
  }
}
