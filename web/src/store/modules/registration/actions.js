export function registrationUpRequest(student_id, plan_id, start_date) {
  return {
    type: '@auth/REGISTRATION_UP_REQUEST',
    payload: { student_id, plan_id, start_date },
  };
}

export function registrationUpdateRequest(id, student_id, plan_id, start_date) {
  return {
    type: '@auth/REGISTRATION_UPDATE_REQUEST',
    payload: { id, student_id, plan_id, start_date },
  };
}

export function registrationUpSuccess(student_id, plan_id, start_date) {
  return {
    type: '@auth/REGISTRATION_UP_SUCCESS',
    payload: { student_id, plan_id, start_date },
  };
}

export function registrationInFailure() {
  return {
    type: '@auth/REGISTRATION_FAILURE',
  };
}
