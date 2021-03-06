'use strict';

const path = require('path');

const ROOT = path.resolve(
    path.join(
        __dirname,
        '..'
    )
);

const SRC_DIR = path.join(ROOT, 'src');

module.exports = {
    root: ROOT,
    environment: process.env.NODE_ENV || 'development',
    server: {
        host: 'localhost',
        port: process.env.NODE_PORT || 8080,

        views: {
            root: path.join(ROOT, 'server', 'views')
        }
    },
    bundles: {
        context: SRC_DIR,
        root: path.join(SRC_DIR, 'bundles'),
        dist: path.join(ROOT, 'dist'),
        basePath: '/dist/'
    },

    defaultBundle: 'app',

    webpack: {
        useDevServer: false,

        wds: {
            port: process.env.WDS_PORT || 8081,
            contentBase: ROOT,
            host: 'localhost',
            protocol: 'http'
        }
    }
};
