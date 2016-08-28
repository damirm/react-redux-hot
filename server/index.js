'use strict';

const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const app = express();

app.set('env', config.environment);
app.set('views', config.server.views.root);
app.set('view engine', 'pug');

if (config.environment === 'development' && !config.webpack.useDevServer) {
    const hot = require('./middlewares/hot');

    hot(app);
}

app.use(express.static(config.bundles.basePath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

routes(app);

app.listen(config.server.port, () => {
    console.log(`Server running on port ${config.server.port}`);
});
