'use strict';

const config = require('config');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = config.environment === 'development';

const RESOLVE_EXTS = ['', '.js', '.jsx', '.scss'];
const CSS_LOADERS = ['css', 'postcss', 'sass'];
const BROWSER_SUPPORT = [
    'last 2 versions'
];

const extractCss = new ExtractTextPlugin('[name].css');

const devServerEnabled = config.webpack.useDevServer;

const wds = config.webpack.wds;
const wdsUrl = devServerEnabled ? `${wds.protocol}://${wds.host}:${wds.port}` : '';

module.exports = {
    context: config.bundles.context,

    entry: entries(config.bundles.root),

    output: {
        path: config.bundles.dist,
        filename: `[name].js`,
        publicPath: `${wdsUrl}${config.bundles.basePath}`
    },

    resolve: {
        root: [config.bundles.context],
        extensions: RESOLVE_EXTS
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.scss/,

                loader: IS_DEV
                    ? null
                    : extractCss.extract(CSS_LOADERS),

                loaders: IS_DEV
                    ? ['style'].concat(CSS_LOADERS)
                    : []
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        extractCss
    ],

    postcss: [
        autoprefixer({
            browsers: BROWSER_SUPPORT
        })
    ],

    devtool: IS_DEV ? "eval" : null,

    devServer: {
        port: wds.port,
        contentBase: config.bundles.dist,

        proxy: {
            "**": `http://${config.server.host}:${config.server.port}`
        }
    }
};

function entries(dir) {
    const containers = fs.readdirSync(dir);

    /**
     * In development mode enable hot reaload features
     */
    const devEntries = [
        devServerEnabled
            ? ''
            : 'webpack-hot-middleware/client'
    ];

    const entry = containers.reduce((result, container) => {
        result[container.toLowerCase()] = [
            path.join(dir, container)
        ].concat(IS_DEV ? devEntries : []);

        return result;
    }, {});

    return entry;
}
