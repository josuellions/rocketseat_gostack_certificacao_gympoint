import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

// import history from '~/services/history';
import api from '~/services/api';

import { answerUpSuccess, answerInFailure } from './actions';

export function* answers({ payload }) {
  try {
    const { id, answer } = payload;

    const response = yield call(api.put, `help-orders/${id}/answer`, {
      answer,
    });

    yield put(answerUpSuccess(response.data));

    // history.push('/helporder/list');
  } catch (err) {
    console.tron.log(err);
    Alert.error('Falha no cadastro, verifique seus dados!');
    yield put(answerInFailure());
  }
}

export default all([takeLatest('@auth/ANSWER_UP_REQUEST', answers)]);
