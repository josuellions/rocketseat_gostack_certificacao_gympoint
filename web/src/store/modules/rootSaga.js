import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import students from './student/sagas';
import plans from './plan/sagas';
import registrations from './registration/sagas';
import answer from './answer/sagas';

export default function* rootSaga() {
  return yield all([auth, user, students, plans, registrations, answer]);
}
