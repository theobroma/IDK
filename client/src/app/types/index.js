import {
  shape,
  number,
  string,
  // bool,
  // oneOf,
  arrayOf,
} from 'prop-types';

export const filterShape = shape({
  currency: string,
  stops: arrayOf(number),
});

export const currencyShape = shape({
  baseCurrency: string,
  currency: string,
  purchaseRateNB: number,
  saleRateNB: number,
});

export const segmentShape = shape({
  origin: string,
  destination: string,
  date: string,
  stops: arrayOf(string),
  duration: number,
});

export const ticketShape = shape({
  price: number,
  carrier: string,
  segments: arrayOf(segmentShape),
});

export default {
  filterShape,
  currencyShape,
  ticketShape,
};
