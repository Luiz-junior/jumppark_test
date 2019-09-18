import api from '../../services/api';
import {
    REQUEST_SECTIONS,
    ERROR,
} from './types';

export const requestSections = () => {

    return async dispatch => {
        try {
            const response = await api.get('/data');
            dispatch({ type: REQUEST_SECTIONS, sections: response.data, loading: false })
        } catch (error) {
            dispatch({ type: ERROR, loading: false });            
        }
    };
}

export const error = (error) => ({ type: ERROR, error });