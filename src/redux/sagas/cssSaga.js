import { put, takeLatest } from 'redux-saga/effects';

function writeCSS(action, key){
  let CSS = '', styles = action.payload.styles;
  let values = Object.keys(styles[key].props);
  let i = 0, len = values.length;

  while (i < len) {
      const value = values[i];
      
      let prop = styles[key].props[value];

      if (prop.enabled) {
        CSS = CSS + `\t${prop.alias}: ${prop.val};\n`
      }

      i++
  }

  return CSS;
}

function reloadCSS(action) {
    let styles = action.payload.styles;
    let CSS = '', keys = Object.keys(styles);

    let i = 0, len = keys.length;

    while (i < len) {
        const key = keys[i];

        if (styles[key].enabled) {
          CSS += writeCSS(action, key)
        }

        i++
    }

    return CSS
}

function* loadCSS(action){
    try {
      let CSS = reloadCSS(action);
      yield put({ type: 'SET_CSS', payload: CSS });
    } catch (error) {
      console.log('Error in loadCSS', error);
    }
}

function* updateCSS(action){
    try {
      let styles = action.payload.styles, CSS = action.payload.css;
      let prop = styles[action.payload.title].props[action.payload.name];
      let re = new RegExp(`\\t${prop.alias}[: ].+;\\n`)
      if (styles[action.payload.title].props[action.payload.name].enabled) {
        if (re.test(CSS)){
          CSS = CSS.replace(re, `\t${prop.alias}: ${prop.val};\n`);
        } else {
          CSS = reloadCSS(action);
        }
      } else {
        if (re.test(CSS)){
          CSS = CSS.replace(re, ``);
        } else {
          CSS = reloadCSS(action);
        }
      }
      yield put({ type: 'SET_CSS', payload: CSS });
    } catch (error) {
      console.log('Error in updateCSS', error);
    }
  }

function* cssSaga() {
    yield takeLatest('UPDATE_CSS', updateCSS);
    yield takeLatest('LOAD_CSS', loadCSS);
  }
  
  export default cssSaga;