var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.dev.js',
  eslint: {
    configFile: path.resolve('.eslintrc')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [
          path.join(__dirname, 'index.js'),
          path.join(__dirname, 'index.dev.js'),
          path.join(__dirname, 'server.js'),
          path.join(__dirname, 'src'),
          path.join(__dirname, 'test'),
          path.join(__dirname, 'node_modules'),
          path.join(__dirname, 'middlewares/api')
        ]
      },
      { test: /\.s?css$/,
        loader:
        'style-loader!' +
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!' +
        'sass-loader!import-glob-loader'
      },
      {
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader: 'url?prefix=font/&limit=10000'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ],
    sassLoader: {
      includePaths: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules')
      ]
    }
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx', '.scss']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: true
      }
    })
  ]
};
