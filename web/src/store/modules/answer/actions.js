export function answerUpRequest(id, answer) {
  return {
    type: '@auth/ANSWER_UP_REQUEST',
    payload: { id, answer },
  };
}

export function answerUpSuccess(id, answer) {
  return {
    type: '@auth/ANSWER_UP_SUCCESS',
    payload: { id, answer },
  };
}

export function answerInFailure() {
  return {
    type: '@auth/ANSWER_FAILURE',
  };
}
