import { all } from 'redux-saga/effects';
import cssSaga from './cssSaga';

export default function* rootSaga() {
  yield all([
    cssSaga()
  ]);
}
