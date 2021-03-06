'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from '../../containers/App';
import configureStore from '../../store';

const store = configureStore();

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,

    document.getElementById('root')
);
