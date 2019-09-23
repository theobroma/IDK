// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './assets/styles/index.scss';
import MainApp from './MainApp';
import configureStore from './configureStore';
import rootSaga from './sagas/index';

window.__localeId__ = 'ru'; // eslint-disable-line

const store = configureStore();
store.runSaga(rootSaga);

// Any dispatch for test
const action = {
  // type: 'POLL_START',
  type: 'GET_SEARCH_ID_REQUEST',
};
store.dispatch(action);

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root'),
);
