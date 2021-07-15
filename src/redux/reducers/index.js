import { combineReducers } from 'redux';
import styles from './styleReducer';
import container from './containerStyleReducer';
import selection from './selectionReducer';
import log from './logReducer';

const rootReducer = combineReducers({
  styles,
  container,
  selection,
  log
});

export default rootReducer;
