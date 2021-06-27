import { all } from 'redux-saga/effects';
import styleSaga from './styleSaga';

export default function* rootSaga() {
  yield all([
    styleSaga()
  ]);
}
