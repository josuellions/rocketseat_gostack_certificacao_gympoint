export function planUpRequest(title, duration, price) {
  return {
    type: '@auth/PLAN_UP_REQUEST',
    payload: { title, duration, price },
  };
}

export function planUpSuccess(title, duration, price) {
  return {
    type: '@auth/PLAN_UP_SUCCESS',
    payload: { title, duration, price },
  };
}

export function planInFailure() {
  return {
    type: '@auth/PLAN_FAILURE',
  };
}
