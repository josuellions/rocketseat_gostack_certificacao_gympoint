import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { studentUpSuccess, signInFailure } from './actions';

export function* student({ payload }) {
  try {
    const { name, email, idade, peso, altura } = payload;

    const response = yield call(api.post, 'students', {
      name,
      email,
      idade,
      peso,
      altura,
    });

    // const {  email, peso, altura } = response.data;

    yield put(studentUpSuccess(response.data));

    history.push('/student/list');
  } catch (err) {
    console.tron.log(err);
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signInFailure());
  }
}

export default all([takeLatest('@auth/STUDENT_UP_REQUEST', student)]);
