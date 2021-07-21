import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'  
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import './index.css';
import App from './App';
import CssBuilder from './Pages/css-builder';
import Home from './Pages/home';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js

const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewareList),
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>  
      <Route exact path="/" component={App} /> 
      <Route path="/home" component={Home} /> 
      <Route path="/css" component={CssBuilder} /> 
    </Router>
  </Provider>,
  document.getElementById('root')
);