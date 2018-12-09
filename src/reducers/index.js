import { combineReducers } from 'redux';
import BankReducer from './reducer_bank';

const rootReducer = combineReducers({
  bank: BankReducer
});

export default rootReducer;
