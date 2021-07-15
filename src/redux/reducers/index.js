import { combineReducers } from 'redux';
import styles from './styleReducer';
import css from './cssReducer';
import containerCss from './containerReducer';
import containerStyles from './containerStyleReducer';

const rootReducer = combineReducers({
  styles,
  css,
  containerCss,
  containerStyles
});

export default rootReducer;
