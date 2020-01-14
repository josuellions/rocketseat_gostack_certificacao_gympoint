import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  title: null,
  duration: null,
  price: null,
  loading: false,
};

export default function plans(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/PLAN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/PLAN_UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/PLAN_UP_SUCCESS': {
        draft.plan = action.payload.plan;
        draft.loading = false;
        break;
      }
      case '@auth/PLAN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
