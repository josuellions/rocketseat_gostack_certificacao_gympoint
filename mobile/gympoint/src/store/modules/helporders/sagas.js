import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { helpordersUpSuccess, helpordersInFailure } from './actions';

export function* helporders({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, `students/${id}/help-orders`, {});

    console.tron.log(response);
    yield put(helpordersUpSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
    Alert.alert('Falha no cadastro, verifique seus dados!');
    yield put(helpordersInFailure());
  }
}

export default all([takeLatest('@auth/HELPORDERS_UP_REQUEST', helporders)]);
