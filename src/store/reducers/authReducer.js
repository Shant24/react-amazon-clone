import * as types from '../types';

const initialState = {
  user: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return { ...state, isAuth: true };

    case types.SIGN_OUT:
      return { ...state, isAuth: false };

    default:
      return state;
  }
};

export default authReducer;
