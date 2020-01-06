import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  answer: null,
  loading: false,
};

export default function answers(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/ANSWER_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/ANSWER_UP_SUCCESS': {
        draft.answer = action.payload.answer;
        draft.loading = false;
        break;
      }
      case '@auth/ANSWER_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
