import {
    REQUEST_SECTIONS,
    ERROR
} from '../actions/types';

const INITIAL_STATE = {
    sections: [],
    loading: true,
    error: '',
};

export const fetchSectionsReducer = (state =  INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_SECTIONS: 
            return { ...state, sections: action.sections, loading: false }
        case ERROR: 
            return { ...state, error: action.error }
        default:
            return state;
    }
};