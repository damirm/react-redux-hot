'use strict';

import { COUNTER_INCR, COUNTER_DECR } from '../actions/counter';

export default function counter(state = 0, action) {
    switch (action.type) {
        case COUNTER_INCR:
            return state + action.count;

        case COUNTER_DECR:
            return state - action.count;

        default:
            return state;
    }
}