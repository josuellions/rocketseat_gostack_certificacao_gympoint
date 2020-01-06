import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { planUpSuccess, planInFailure } from './actions';

export function* plan({ payload }) {
  try {
    const { title, duration, price } = payload;

    const response = yield call(api.post, 'plans', {
      title,
      duration,
      price,
    });
    yield put(planUpSuccess(response.data));

    history.push('/plan/list');
  } catch (err) {
    console.tron.log(err);
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(planInFailure());
  }
}

export default all([takeLatest('@auth/PLAN_UP_REQUEST', plan)]);
