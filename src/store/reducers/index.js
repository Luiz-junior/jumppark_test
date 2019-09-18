import { combineReducers } from 'redux';

import { fetchSectionsReducer } from './sectionsReducer';

const reducers = combineReducers({
  fetchSections: fetchSectionsReducer,
});

export default reducers;
