import { all } from 'redux-saga/effects';
import styleSaga from './styleSaga';
import cssSaga from './cssSaga';
import containerSaga from './containerSaga';

export default function* rootSaga() {
  yield all([
    styleSaga(),
    cssSaga(),
    containerSaga()
  ]);
}
