import * as types from '../types';

const initialState = {
  user: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.user, isAuth: !!action.user };

    default:
      return state;
  }
};

export default authReducer;
