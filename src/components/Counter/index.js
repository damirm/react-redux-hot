'use strict';

require('./counter.scss');

import React, { PropTypes } from 'react';

import Button from 'react-islands/components/Button';
import ProgressBar from 'react-islands/components/ProgressBar';

const Counter = (props) => {
    return (
        <div className="counter">
            {props.counter}

            <ProgressBar value={props.counter} />

            <div className="counter__controls">
                <Button view="action" size="l" onClick={props.incr}>+</Button>
                <Button size="l" onClick={props.decr}>-</Button>
            </div>
        </div>
    );
};

Counter.propTypes = {
    counter: PropTypes.number,
    incr: PropTypes.func,
    decr: PropTypes.func
};

export default Counter;
