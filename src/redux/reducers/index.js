import { combineReducers } from 'redux';
import styles from './styleReducer';
import css from './cssReducer';
import containerCss from './containerReducer';
import containerStyles from './containerStyleReducer';
import selection from './selectionReducer';

const rootReducer = combineReducers({
  styles,
  css,
  containerCss,
  containerStyles,
  selection
});

export default rootReducer;
