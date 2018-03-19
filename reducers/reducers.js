import { combineReducers } from 'redux';

import manageReducers from './manage_reducers';
import boardReducers from './board_reducers';

export default combineReducers({
  manageReducers,
  boardReducers
});
