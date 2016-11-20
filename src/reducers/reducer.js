import { combineReducers } from 'redux';
import iteration from './iteration.js';
import cellState from './cellState.js';

export default combineReducers({
  iteration,
  cellState
});