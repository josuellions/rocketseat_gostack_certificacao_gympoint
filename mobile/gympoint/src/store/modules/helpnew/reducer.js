import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  helpnew: null,
  loading: false,
};

export default function helpnew(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/HELPNEW_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/HELPNEW_UP_SUCCESS': {
        draft.helpnew = action.payload.helpnew;
        draft.loading = false;
        break;
      }
      case '@auth/HELPNEW_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
