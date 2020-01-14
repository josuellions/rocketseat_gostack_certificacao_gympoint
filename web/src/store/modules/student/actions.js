export function studentUpRequest(name, email, idade, peso, altura) {
  return {
    type: '@auth/STUDENT_UP_REQUEST',
    payload: { name, email, idade, peso, altura },
  };
}

export function studentUpdateRequest(id, name, email, idade, peso, altura) {
  return {
    type: '@auth/STUDENT_UPDATE_REQUEST',
    payload: { id, name, email, idade, peso, altura },
  };
}

export function studentUpSuccess(name, email, idade, peso, altura) {
  return {
    type: '@auth/STUDENT_UP_SUCCESS',
    payload: { name, email, idade, peso, altura },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
