import React from 'react';
import {
    INIT_TEXTAREA_REF
} from '../actions/actions';


export const initApplicationInstance = () => {

    return {
        type: INIT_TEXTAREA_REF,
        payload: () => React.createRef()
    }
}


