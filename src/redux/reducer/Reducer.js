import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";

const initProduct = {
  carts: [],
};

const addToCartReducer = (state = initProduct, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const IteamIndex = state.carts.findIndex(
        iteam => iteam.id === action.payload.id
      );

      if (IteamIndex >= 0) {
        state.carts[IteamIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case REMOVE_TO_CART:
      const data = state.carts.filter(el => el.id !== action.payload.id);
      return {
        ...state,
        carts: data,
      };
    default:
      return state;
  }
};

export default addToCartReducer;
