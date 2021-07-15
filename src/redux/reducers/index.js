import { combineReducers } from 'redux';
import styles from './styleReducer';
import container from './containerStyleReducer';
import hover from './hoverReducer';
import selection from './selectionReducer';
import log from './logReducer';

const rootReducer = combineReducers({
  styles,
  container,
  hover,
  selection,
  log
});

export default rootReducer;
