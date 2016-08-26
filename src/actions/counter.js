'use strict';

export const COUNTER_INCR = 'COUNTER_INCR';
export const COUNTER_DECR = 'COUNTER_DECR';

export function incr(count = 1) {
    return {
        type: COUNTER_INCR,
        count
    };
}

export function decr(count = 1) {
    return {
        type: COUNTER_DECR,
        count
    };
}
