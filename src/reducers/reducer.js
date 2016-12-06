import { combineReducers } from 'redux';
import iteration from './iteration.js';
import cellState from './cellState.js';
import stats from './stats.js';

export default combineReducers({
  iteration,
  cellState,
  stats
});