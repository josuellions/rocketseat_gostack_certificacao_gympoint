import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { registrationUpSuccess, registrationInFailure } from './actions';

export function* registration({ payload }) {
  try {
    const { student_id, plan_id, start_date } = payload;

    const response = yield call(api.post, 'registrations', {
      student_id,
      plan_id,
      start_date,
    });

    yield put(registrationUpSuccess(response.data));

    history.push('/registration/list');
  } catch (err) {
    console.tron.log(err);
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(registrationInFailure());
  }
}

export default all([takeLatest('@auth/REGISTRATION_UP_REQUEST', registration)]);
