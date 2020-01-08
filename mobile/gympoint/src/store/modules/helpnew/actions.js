export function helpnewUpRequest(id, question) {
  return {
    type: '@auth/HELPNEW_UP_REQUEST',
    payload: { id, question },
  };
}

export function helpnewUpSuccess(id) {
  return {
    type: '@auth/HELPNEW_UP_SUCCESS',
    payload: { id },
  };
}

export function helpnewInFailure() {
  return {
    type: '@auth/HELPNEW_FAILURE',
  };
}
