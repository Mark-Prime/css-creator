import { put, takeLatest } from 'redux-saga/effects';

function* updateStyle(action){
    try {
      yield put({ type: 'SET_STYLE', payload: action.payload.styles });
      yield put({ type: 'UPDATE_CSS', payload: action.payload });
    } catch (error) {
      console.log('Error in updateStyle', error);
    }
  }

function* styleSaga() {
    yield takeLatest('UPDATE_STYLE', updateStyle);
  }
  
  export default styleSaga;