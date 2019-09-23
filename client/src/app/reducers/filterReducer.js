import { SET_CURRENCY, SET_STOPS } from 'constants/actions';

export const initialState = {
  currency: 'UAH',
  stops: [3],
  sort: 'price',
};

function filter(state = initialState, action) {
  const { type, currency, stops } = action;
  switch (type) {
    case SET_CURRENCY:
      return { ...state, currency };
    case SET_STOPS:
      return { ...state, stops };
    default:
      return state;
  }
}

export default filter;
