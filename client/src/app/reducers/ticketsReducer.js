// import { FETCH_USERS_PENDING } from '../actions';
import {
  REQUEST,
  SUCCESS,
  ERROR,
  POLL_START,
  POLL_STOP,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_SEARCH_ID,
} from 'constants/actions';

// export const initialState = {
//   tickets: [],
//   stop: false,
//   pending: false,
//   errorMessage: '',
// };

// function tickets(state = initialState, action) {
//   return state;
// }

const initialState = {
  // data: false,
  // polling: false,
  tickets: [],
  stop: false,
  polling: false,
  searchId: '',
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ID + SUCCESS:
      return {
        ...state,
        searchId: action.searchId,
      };
    case POLL_START:
      return {
        ...state,
        polling: true,
      };
    case POLL_STOP:
      return {
        ...state,
        polling: false,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        // tickets: action.payload.tickets,
        polling: !action.payload.stop,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        polling: false,
      };
    default:
      return state;
  }
};

export default tickets;
