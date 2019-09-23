import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas/index';
import { loadState, saveState } from './helpers/localStorage';
import rootReducer from './reducers';
// mock data
// import TICKETS_MOCK_DATA from './helpers/TICKETS_MOCK_DATA.json';
import TICKETS_MOCK_DATA_V2 from './helpers/TICKETS_MOCK_DATA_V2.json';
import CURRENCY_MOCK_DATA from './helpers/CURRENCY_MOCK_DATA.json';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const persistedState = loadState();

  const totalInitialState = {
    tickets: {
      // tickets: TICKETS_MOCK_DATA_V2.tickets,
      tickets: [],
      stop: false,
      polling: false,
      searchId: '',
      errorMessage: '',
    },
    currency: {
      data: CURRENCY_MOCK_DATA,
      pending: false,
      errorMessage: '',
    },
    filter: {
      currency: 'UAH',
      stops: [1],
      sort: 'price',
    },
  };
  // if persistedState is not empty then assign parsed persistedState to initState
  // if (persistedState) {
  //   totalInitialState = persistedState;
  // }

  const logger = createLogger({
    collapsed: true,
  });

  const middlewares = [thunk, sagaMiddleware, logger];

  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const store = createStore(
    rootReducer,
    totalInitialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  // store.subscribe(
  //   throttle(() => {
  //     console.log('saved to localStorage');
  //     saveState(store.getState());
  //   }, 1000),
  // );

  // sagaMiddleware.run(rootSaga);
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};

export default configureStore;
