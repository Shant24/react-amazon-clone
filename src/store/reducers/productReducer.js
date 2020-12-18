import * as types from '../types';

const initialState = {
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case types.REMOVE_FROM_BASKET:
      const newBasket = [...state.basket];

      if (action.index >= 0) {
        newBasket.splice(action.index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${
            state.basket[action.index].id
          }) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default basketReducer;
