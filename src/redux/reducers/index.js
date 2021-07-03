import { combineReducers } from 'redux';
import styles from './styleReducer';
import css from './cssReducer';

const rootReducer = combineReducers({
  styles,
  css,
});

export default rootReducer;
