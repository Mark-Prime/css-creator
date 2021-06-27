import { put, takeLatest } from 'redux-saga/effects';

function* updateStyle(action){
    try {
      console.log(action.payload)
      yield put({ type: 'SET_STYLE', payload: action.payload });
    } catch (error) {
      console.log('Error in get from /user/refresh', error);
    }
  }

function* styleSaga() {
    yield takeLatest('UPDATE_STYLE', updateStyle);
  }
  
  export default styleSaga;