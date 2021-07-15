import { put, takeLatest } from 'redux-saga/effects';

function* updateContainer(action){
    try {
    console.table(action.payload.container);
      yield put({ type: 'SET_CONTAINER_STYLE', payload: action.payload.container });
      yield put({ type: 'UPDATE_CONTAINER_CSS', payload: action.payload });
    } catch (error) {
      console.log('Error in updateContainer', error);
    }
  }

function* styleSaga() {
    yield takeLatest('UPDATE_CONTAINER', updateContainer);
  }
  
  export default styleSaga;