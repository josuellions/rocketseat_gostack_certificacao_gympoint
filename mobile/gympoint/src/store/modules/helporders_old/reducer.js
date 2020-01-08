import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  created_at: null,
  question: null,
  answer_at: null,
  answer: null,
  loading: false,
};

export default function helporders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/HELPORDERS_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/HELPORDERS_UP_SUCCESS': {
        draft.helporders = action.payload.helporders;
        draft.loading = false;
        break;
      }
      case '@auth/HELPORDERS_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
