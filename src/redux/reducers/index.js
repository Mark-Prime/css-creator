import { combineReducers } from 'redux';
import styles from './styleReducer';
import container from './containerStyleReducer';
import hover from './hoverReducer';
import active from './activeReducer';
import focus from './focusReducer';
import selection from './selectionReducer';
import log from './logReducer';

const rootReducer = combineReducers({
  styles,
  container,
  hover,
  active,
  focus,
  selection,
  log
});

export default rootReducer;
