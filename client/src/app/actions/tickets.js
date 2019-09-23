import { POLL_START, POLL_STOP, GET_DATA_SUCCESS, GET_DATA_FAILURE } from 'constants/actions';

export const pollStartAction = () => ({ type: POLL_START });
export const pollStopAction = () => ({ type: POLL_STOP });
export const getDataSuccessAction = (payload) => ({ type: GET_DATA_SUCCESS, payload });
export const getDataFailureAction = (payload) => ({ type: GET_DATA_FAILURE, payload });
