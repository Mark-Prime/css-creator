import { combineReducers } from 'redux';
import styles from './styleReducer';
import container from './containerStyleReducer';
import before from './beforeReducer';
import after from './afterReducer';
import hover from './hoverReducer';
import active from './activeReducer';
import focus from './focusReducer';
import target from './targetReducer';
import disabled from './disabledReducer';
import invalid from './invalidReducer';
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
  log,
  disabled,
  after,
  before,
  invalid
});

export default rootReducer;
