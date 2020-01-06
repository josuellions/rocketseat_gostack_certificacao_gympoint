import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import checkin from './checkins/sagas';

import helporders from './helporders/sagas';

export default function* rootSaga() {
  return yield all([auth, checkin, helporders]);
}
