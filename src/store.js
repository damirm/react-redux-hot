'use strict';

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const logger = createLogger();

function init(initialState) {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(
            logger,
            thunkMiddleware
        )
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default;

            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default init;