import { put, takeLatest } from 'redux-saga/effects';

function writeCSS(action, key){
  let CSS = '';
  let values = Object.keys(action.payload[key].props);
  let i = 0, len = values.length;

  while (i < len) {
      const value = values[i];
      
      let prop = action.payload[key].props[value];

      if (prop.enabled) {
        CSS = CSS + `\t${prop.alias}: ${prop.val};\n`
      }

      i++
  }

  return CSS;
}

function* updateCSS(action){
    try {
      let CSS = '', keys = Object.keys(action.payload);

      let i = 0, len = keys.length;

      while (i < len) {
          const key = keys[i];

          if (action.payload[key].enabled) {
            // CSS = CSS + `\t${action.payload[key].alias}: ${action.payload[key].val};\n`\
            CSS += writeCSS(action, key)
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