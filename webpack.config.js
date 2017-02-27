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
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'test'),
                    path.join(__dirname, 'node_modules/axp-api-ducks'),
                    path.join(__dirname, 'middlewares/api')
                ]
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
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
        new webpack.ProvidePlugin({
            Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
            fetch: 'imports?this=>global!exports?global.fetch!isomorphic-fetch',
            Intl: 'imports?this=>global!exports?global.Intl!intl'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: true
            }
        })
    ]
};
