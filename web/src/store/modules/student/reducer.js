import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  name: null,
  email: null,
  idade: null,
  peso: null,
  altura: null,
  loading: false,
};

export default function students(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/STUDENT_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/STUDENT_UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/STUDENT_UP_SUCCESS': {
        draft.student = action.payload.student;
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
