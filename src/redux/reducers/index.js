import { combineReducers } from 'redux';
import styles from './styleReducer';
import container from './containerStyleReducer';
import hover from './hoverReducer';
import active from './activeReducer';
import focus from './focusReducer';
import target from './targetReducer';
import selection from './selectionReducer';
import log from './logReducer';

const rootReducer = combineReducers({
  container,
  hover,
  active,
  focus,
  target,
  selection,
  styles,
  log
});

export default rootReducer;
