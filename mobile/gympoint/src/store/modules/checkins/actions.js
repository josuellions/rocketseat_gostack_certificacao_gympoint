export function checkinsUpRequest(id) {
  return {
    type: '@auth/CHECKINS_UP_REQUEST',
    payload: { id },
  };
}

export function checkinsUpSuccess(id) {
  return {
    type: '@auth/CHECKINS_UP_SUCCESS',
    payload: { id },
  };
}

export function checkinsInFailure() {
  return {
    type: '@auth/CHECKINS_FAILURE',
  };
}
