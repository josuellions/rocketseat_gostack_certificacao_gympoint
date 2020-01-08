export function helpordersUpRequest(
  id,
  created_at,
  question,
  answer_at,
  answer
) {
  return {
    type: '@auth/HELPORDERS_UP_REQUEST',
    payload: { id, created_at, question, answer_at, answer },
  };
}

export function helpordersUpSuccess(
  id,
  created_at,
  question,
  answer_at,
  answer
) {
  return {
    type: '@auth/HELPORDERS_UP_SUCCESS',
    payload: { id, created_at, question, answer_at, answer },
  };
}

export function helpordersInFailure() {
  return {
    type: '@auth/HELPORDERS_FAILURE',
  };
}
