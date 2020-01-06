import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

// import history from '~/services/history';
import api from '~/services/api';

import { checkinsUpSuccess, checkinsInFailure } from './actions';

export function* checkins({ payload }) {
  try {
    const { id } = payload;

    console.tron.log('Aqui saga');
    const response = yield call(api.post, `students/${id}/checkins`, {});
    // const {  email, peso, altura } = response.data;

    yield put(checkinsUpSuccess(response.data));

    // history.push('/student/list');
  } catch (err) {
    console.tron.log(err);
    Alert.alert('Falha no cadastro, verifique seus dados!');
    yield put(checkinsInFailure());
  }
}

export default all([takeLatest('@auth/CHECKINS_UP_REQUEST', checkins)]);
