var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var IMP_DIR = path.resolve(__dirname, 'src/components');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './src',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
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
 		 },
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel'
     }
    ]
  }
}
