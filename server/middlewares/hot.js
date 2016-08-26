'use strict';

const path = require('path');
const config = require('config');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require(
    path.join(config.root, 'webpack.config.js')
);

const compiler = webpack(webpackConfig);

function init(app) {
    app.use(devMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true
        }
    }));

    app.use(hotMiddleware(compiler));
}

module.exports = init;
