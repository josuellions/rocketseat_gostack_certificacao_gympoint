import produce from 'immer';

const INITIAL_STATE = {
  checkins: null,
  loading: false,
};

export default function checkins(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/CHECKINS_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/CHECKINS_UP_SUCCESS': {
        draft.checkins = action.payload.checkins;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
