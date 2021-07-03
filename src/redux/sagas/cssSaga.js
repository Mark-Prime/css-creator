import { put, takeLatest } from 'redux-saga/effects';

function* updateCSS(action){
    try {
      let CSS = '', keys = Object.keys(action.payload);
      
      let i = 0, len = keys.length;

      while (i < len) {
          const key = keys[i];

          if (action.payload[key].enabled) {
            CSS = CSS + `\t${action.payload[key].alias}: ${action.payload[key].val};\n`
          }

          i++
      }

      yield put({ type: 'SET_CSS', payload: CSS });
    } catch (error) {
      console.log('Error in get from /user/refresh', error);
    }
  }

function* cssSaga() {
    yield takeLatest('UPDATE_CSS', updateCSS);
  }
  
  export default cssSaga;