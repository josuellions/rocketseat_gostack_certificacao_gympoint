import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { checkinsUpSuccess, checkinsInFailure } from './actions';

export function* checkins({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, `students/${id}/checkins`);

    // yield delay(3000); // Somente para teste de loading button

    yield put(checkinsUpSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
    Alert.alert(
      'Notificação',
      'limite **5 checkins** no período de 7 dias, foi atingido!'
    );
    yield put(checkinsInFailure());
  }
}

export default all([takeLatest('@auth/CHECKINS_UP_REQUEST', checkins)]);
