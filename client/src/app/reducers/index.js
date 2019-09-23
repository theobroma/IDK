import { combineReducers } from 'redux';
import tickets from './ticketsReducer';
import currency from './currencyReducer';
import filter from './filterReducer';

export default combineReducers({ tickets, currency, filter });
