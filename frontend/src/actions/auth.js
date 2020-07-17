import ACTIONS from '../constants/actions.json'

const authActions = {
  setCurrentUser: currentUser => ({
    payload: currentUser,
    type: ACTIONS.AUTH_SET_CURRENT_USER,
  }),
};

export { authActions };
