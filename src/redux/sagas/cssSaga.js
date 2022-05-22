import { put, takeLatest } from 'redux-saga/effects';

function parseShorthand(prop, CSS) {
  let props = Object.keys(prop.props);

  let output = '';

  for (let index in props) {
    let innerProp = prop.props[props[index]];

    if (!innerProp.enabled) {
      continue;
    }

    if (innerProp.type === 'shorthand') {
      CSS = CSS + parseShorthand(innerProp, CSS);
      continue;
    }

    if (innerProp.index !== undefined) {

      if (innerProp.val !== undefined) {
        output += ` ${innerProp.val}`;
      }

      if (!prop.props[props[parseInt(index) + 1]] || !prop.props[props[parseInt(index) + 1]].enabled || prop.props[props[parseInt(index) + 1]]?.index === undefined) {
        console.log('index + 1', prop.props[props[parseInt(index) + 1]])
        console.log('OUTPUT:', `\t${prop.alias}: ${output};\n`)
        CSS = CSS + `\t${prop.alias}: ${output};\n`
        output = '';
      }

      continue;
    }

  }

  // console.log(CSS)
  return CSS
}

function parseProp(prop, CSS, styles, key) {
    if (prop.type === 'shorthand') {
      if (prop.enabled) {
        return parseShorthand(prop, CSS);
      }
      return CSS;
    }

    if (prop.key) {
      if (styles[key].props[prop.key].enabled && prop.showOnValue[styles[key].props[prop.key].val] && prop.enabled && prop.val !== undefined) {
        return CSS + `\t${prop.alias}: ${prop.val};\n`
      }
      return CSS;
    }
    
    if (prop.enabled) {
      return CSS + `\t${prop.alias}: ${prop.val};\n`
    }
    return CSS;
}

function writeCSS(styles, key){
  let CSS = '';
  let values = Object.keys(styles[key].props);
  let i = 0, len = values.length;

  while (i < len) {
      const value = values[i];
      
      let prop = styles[key].props[value];
      try {
        CSS = parseProp(prop, CSS, styles, key);
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
  
  let alias = prop?.alias;


  if (action.payload.isChild) {
    prop = styles[action.payload.title].props[action.payload.parent].props[action.payload.child];
    alias = styles[action.payload.title].props[action.payload.parent].alias;
  }

  let re = new RegExp(`\\t${alias}[: ].+;\\n`)
  if (prop.enabled) {
    if (re.test(CSS)){
      if (prop.isKey) {
        CSS = reloadCSS(styles);
      } else if (action.payload.isChild) {
        CSS = CSS.replace(re, parseShorthand(styles[action.payload.title].props[action.payload.parent], ''));
      } else {
        CSS = CSS.replace(re, `\t${prop.alias}: ${prop.val};\n`);
      }
    } else {
      CSS = reloadCSS(styles);
    }
  } else {
    if (re.test(CSS)){
      if (prop.isKey) {
        CSS = reloadCSS(styles);
      } else if (action.payload.isChild) {
        CSS = CSS.replace(re, parseShorthand(styles[action.payload.title].props[action.payload.parent], ''));
      } else {
        CSS = CSS.replace(re, ``);
      }
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

      yield put({ type: 'SET_LOG', payload: 'SET_STYLE ' + action.payload.selection + ' to ' + JSON.stringify(styles) });
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

      yield put({ type: 'SET_LOG', payload: 'SET_STYLE ' + action.payload.selection + ' to ' + JSON.stringify(styles) });
    } catch (error) {
      console.log('Error in updateCSS', error);
    }
}

function* cssSaga() {
    yield takeLatest('LOAD_CSS', loadCSS);
    yield takeLatest('UPDATE_CSS', updateCSS);
}

export default cssSaga;