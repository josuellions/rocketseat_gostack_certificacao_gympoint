import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { studentUpSuccess, signInFailure } from './actions';

export function* student({ payload }) {
  try {
    const { name, email, idade, peso, altura } = payload;

    yield call(api.post, 'students', {
      name,
      email,
      idade,
      peso,
      altura,
    });

    yield put(studentUpSuccess());

    history.push('/student/list');
  } catch (err) {
    console.tron.log(err);
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signInFailure());
  }
}

export function* studentUpdate({ payload }) {
  try {
    const { id, name, email, idade, peso, altura } = payload;

    yield call(api.put, 'students', {
      id,
      name,
      email,
      idade,
      peso,
      altura,
    });

    yield put(studentUpSuccess());

    history.push('/student/list');
  } catch (err) {
    console.tron.log(err);
    toast.error('Falha ao atualizar cadastro, verifique seus dados!');
    yield put(signInFailure());
  }
}

export default all([
  takeLatest('@auth/STUDENT_UP_REQUEST', student),
  takeLatest('@auth/STUDENT_UPDATE_REQUEST', studentUpdate),
]);
