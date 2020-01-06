import { Alert } from 'react-native';
import { takeLatest, call, put, all, delay } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    yield call(api.get, `students/${id}/checkins`, {});

    yield delay(3000); // Somente para teste de loading button

    yield put(signInSuccess(id));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Falha na autenticação, verifique seus dados!');
    yield put(signInFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
