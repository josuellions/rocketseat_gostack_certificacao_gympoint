import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import checkin from './checkins/sagas';

import helpnews from './helpnew/sagas';

export default function* rootSaga() {
  return yield all([auth, checkin, helpnews]);
}
