import ACTIONS from '../constants/actions.json';

const INITIAL_STATE = {
  currentUser: {},
};

const authReducers = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS.AUTH_SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

export { authReducers };
