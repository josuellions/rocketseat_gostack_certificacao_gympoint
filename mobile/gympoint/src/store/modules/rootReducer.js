import { combineReducers } from 'redux';

import auth from './auth/reducer';
import checkins from './checkins/reducer';

import helporders from './helporders/reducer';

export default combineReducers({
  auth,
  checkins,
  helporders,
});
