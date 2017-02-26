let webpack = require('webpack');
let path = require('path');

let APP_DIR = path.resolve(__dirname, 'src');
let IMP_DIR = path.resolve(__dirname, 'src/components');
let BUILD_DIR = path.resolve(__dirname, 'build');

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
 			 include : [
 			     APP_DIR,
           IMP_DIR,
           BUILD_DIR
       ],
 			 loader : 'babel'
 		 },
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel'
     }
    ]
  },
  resolve: {
      root: path.resolve('./src'),
      extensions: ['', '.js', '.jsx', '.scss']
  }
}
