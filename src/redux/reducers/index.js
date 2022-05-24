import { combineReducers } from 'redux';
import styles from './styleReducer';
import container, {container_hover, container_active, container_focus, container_target, container_disabled, container_invalid} from './containerStyleReducer';
import before, {before_hover, before_active, before_focus, before_target, before_disabled, before_invalid} from './beforeReducer';
import after, {after_hover, after_active, after_focus, after_target, after_disabled, after_invalid} from './afterReducer';
import hover from './hoverReducer';
import active from './activeReducer';
import focus from './focusReducer';
import target from './targetReducer';
import disabled from './disabledReducer';
import invalid from './invalidReducer';
import selection from './selectionReducer';
import selector from './selectorReducer';
import log from './logReducer';

const rootReducer = combineReducers({
  selection,
  selector,
  styles,
  log,
  hover,
  active,
  focus,
  target,
  disabled,
  invalid,
  container,
  container_hover,
  container_active,
  container_focus,
  container_target,
  container_disabled,
  container_invalid,
  after,
  after_hover,
  after_active,
  after_focus,
  after_target,
  after_disabled,
  after_invalid,
  before,
  before_hover,
  before_active,
  before_focus,
  before_target,
  before_disabled,
  before_invalid,
});

export default rootReducer;
