import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  student_id: null,
  plan_id: null,
  start_date: null,
  loading: false,
};

export default function registrations(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/REGISTRATION_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/REGISTRATION_UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/REGISTRATION_UP_SUCCESS': {
        draft.registration = action.payload.registration;
        draft.loading = false;
        break;
      }
      case '@auth/REGISTRATION_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
