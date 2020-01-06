import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import student from './student/reducer';
import plan from './plan/reducer';
import registration from './registration/reducer';
import answer from './answer/reducer';

export default combineReducers({
  auth,
  user,
  student,
  plan,
  registration,
  answer,
});
