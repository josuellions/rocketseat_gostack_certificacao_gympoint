export function planUpRequest(title, duration, price) {
  return {
    type: '@auth/PLAN_UP_REQUEST',
    payload: { title, duration, price },
  };
}

export function planUpdateRequest(id, title, duration, price) {
  return {
    type: '@auth/PLAN_UPDATE_REQUEST',
    payload: { id, title, duration, price },
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
