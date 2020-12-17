import * as types from '../types';

export const addToBasket = (item) => (dispatch) => {
  dispatch({ type: types.ADD_TO_BASKET, item });
};

export const removeFromBasket = (index) => (dispatch) => {
  dispatch({ type: types.REMOVE_FROM_BASKET, index });
};
