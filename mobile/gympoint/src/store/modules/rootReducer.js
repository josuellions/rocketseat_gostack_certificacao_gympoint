import { combineReducers } from 'redux';

import auth from './auth/reducer';
import checkins from './checkins/reducer';

import helponews from './helpnew/reducer';

export default combineReducers({
  auth,
  checkins,
  helponews,
});
