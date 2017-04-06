import { combineReducers } from 'redux';
import collection from './collection';
import shows from './shows';

const rootReducer = combineReducers({
  collection,
  shows,
});

export default rootReducer;