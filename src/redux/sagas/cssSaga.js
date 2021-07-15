import { put, takeLatest } from 'redux-saga/effects';

function writeCSS(styles, key){
  let CSS = '';
  let values = Object.keys(styles[key].props);
  let i = 0, len = values.length;

  while (i < len) {
      const value = values[i];
      
      let prop = styles[key].props[value];
      try {
        if (prop.enabled) {
          CSS = CSS + `\t${prop.alias}: ${prop.val};\n`
        }
      } catch (error) {
        console.log('Error in writeCSS', error);
        return CSS
      }

      i++
  }

  return CSS;
}

function reloadCSS(styles) {
    let CSS = '', keys = Object.keys(styles);

    let i = 0, len = keys.length;

    while (i < len) {
        const key = keys[i];
        if (styles[key].enabled) {
          CSS += writeCSS(styles, key)
        }

        i++
    }

    return CSS
}

function parseStyles(action, styles) {
  let CSS = styles.css;
  let prop = styles[action.payload.title].props[action.payload.name];
  let re = new RegExp(`\\t${prop.alias}[: ].+;\\n`)
  if (styles[action.payload.title].props[action.payload.name].enabled) {
    if (re.test(CSS)){
      CSS = CSS.replace(re, `\t${prop.alias}: ${prop.val};\n`);
    } else {
      CSS = reloadCSS(styles);
    }
  } else {
    if (re.test(CSS)){
      CSS = CSS.replace(re, ``);
    } else {
      CSS = reloadCSS(styles);
    }
  }
  return CSS;
}

function* loadCSS(action){
    try {
      let styles = action.payload.styles;
      let CSS = reloadCSS(styles);

      styles.css = CSS;

      if (action.payload.selection !== 'content') {
        yield put({ type: `SET_${action.payload.selection.toUpperCase()}_STYLE`, payload: styles });
      } else {
        yield put({ type: 'SET_STYLE', payload: styles });
      }

      yield put({ type: 'SET_LOG', payload: 'SET_STYLE' + action.payload.selection + ' to ' + JSON.stringify(styles) });
    } catch (error) {
      console.log('Error in loadCSS', error);
    }
}

function* updateCSS(action){
    try {
      let styles = action.payload.styles;

      let CSS = parseStyles(action, styles);
      styles.css = CSS;

      if (action.payload.selection !== 'content') {
        yield put({ type: `SET_${action.payload.selection.toUpperCase()}_STYLE`, payload: styles });
      } else {
        yield put({ type: 'SET_STYLE', payload: styles });
      }

      yield put({ type: 'SET_LOG', payload: 'SET_STYLE' + action.payload.selection + ' to ' + JSON.stringify(styles) });
    } catch (error) {
      console.log('Error in updateCSS', error);
    }
}

function* cssSaga() {
    yield takeLatest('LOAD_CSS', loadCSS);
    yield takeLatest('UPDATE_CSS', updateCSS);
}

export default cssSaga;