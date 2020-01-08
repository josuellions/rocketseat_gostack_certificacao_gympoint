import { Alert } from 'react-native';
import { takeLatest, call, put, all, delay } from 'redux-saga/effects';

import api from '~/services/api';

import { helpnewUpSuccess, helpnewInFailure } from './actions';

export function* helpnew({ payload }) {
  try {
    const { id, question } = payload;
    yield call(api.post, `students/${id}/help-orders`, {
      question,
    });

    yield delay(3000); // Somente para teste de loading button

    Alert.alert('Sucesso!', 'Seu pedido foi enviado com sucesso.');

    yield put(helpnewUpSuccess());
  } catch (err) {
    console.tron.log(err);
    Alert.alert('Falha no cadastro, verifique seus dados!');
    yield put(helpnewInFailure());
  }
}

export default all([takeLatest('@auth/HELPNEW_UP_REQUEST', helpnew)]);
