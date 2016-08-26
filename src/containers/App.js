'use strict';

import React from 'react';
import { connect } from 'react-redux';

// TODO
import { bindActionCreators } from 'redux';

import { incr, decr } from '../actions/counter';
import Counter from '../components/Counter';
import IslandsApp from 'react-islands/components/App';

class App extends React.Component {
    render() {
        return (
            <IslandsApp theme="islands">
                <Counter {...this.props} />
            </IslandsApp>
        );
    }
}

const AppContainer = connect(
    state => state,
    dispatch => ({
        incr: () => dispatch(incr()),
        decr: () => dispatch(decr())
    })
)(App);

export default AppContainer;
