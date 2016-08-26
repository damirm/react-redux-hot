'use strict';

const config = require('config');

function init(app) {
    /**
     * Default view vars
     */
    app.use((req, res, next) => {
        res.locals.assetsBasePath = config.bundles.basePath;

        next();
    });

    app.get('/', (req, res, next) => {
        res.render('index', {
            bundle: config.defaultBundle
        });
    });

    app.get('/:bundle', (req, res, next) => {
        res.render('index', {
            bundle: req.params.bundle
        });
    });
}

module.exports = init;
