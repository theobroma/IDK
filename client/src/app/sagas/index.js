import {
  all,
  fork,
  join,
  put,
  call,
  takeEvery,
  take,
  race,
  delay,
  select,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_SEARCH_ID,
  REQUEST,
  SUCCESS,
  ERROR,
  POLL_START,
  POLL_STOP,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from 'constants/actions';

import {
  pollStartAction,
  pollStopAction,
  getDataSuccessAction,
  getDataFailureAction,
} from 'actions/tickets';

const ENDPOINT = `https://front-test.beta.aviasales.ru`;

export function* getSearchId() {
  // console.log('getSearchId SAGA');
  try {
    const response = yield call(() => axios({ url: `${ENDPOINT}/search` }));
    const { searchId } = response.data;

    yield put({ type: GET_SEARCH_ID + SUCCESS, searchId });
    // mb temporary
    yield put({ type: POLL_START });
  } catch (error) {
    yield put({ type: GET_SEARCH_ID + ERROR, error });
  }
}

export function* watchGetSearchId() {
  yield takeEvery(GET_SEARCH_ID + REQUEST, getSearchId);
}

/*
 * Selector. The query depends by the state shape
 */
export const getFromStateSearchId = (state) => state.tickets.searchId;

/**
 * Saga worker.
 */
function* pollSaga(action) {
  while (true) {
    try {
      const searchId = yield select(getFromStateSearchId);
      const { data } = yield call(() => axios({ url: `${ENDPOINT}/tickets?searchId=${searchId}` }));
      yield put(getDataSuccessAction(data));
      if (data.stop) {
        yield put({ type: POLL_STOP });
      }
      // yield delay(10);
    } catch (err) {
      yield put(getDataFailureAction(err));
    }
  }
}

/**
 * Saga watcher.
 */
function* watchPollSaga() {
  while (true) {
    yield take(POLL_START);
    yield race([call(pollSaga), take(POLL_STOP)]);
  }
}

export default function* rootSaga() {
  yield all([watchGetSearchId(), watchPollSaga()]);
}
