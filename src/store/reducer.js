import * as actionTypes from "./action";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 4
};
const INGREDIENTS_PRICE = { 
  salad: 0.6,
  bacon: 0.9,
  cheese: 0.7,
  meat: 1.2
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientsName]:state.ingredients[action.ingredientsName] + 1
        },
        totalPrice:state.totalPrice + INGREDIENTS_PRICE[action.ingredientsName]
      };
    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientsName]:
            state.ingredients[action.ingredientsName] - 1
        },
        totalPrice:state.totalPrice - INGREDIENTS_PRICE[action.ingredientsName]
      };
    default:
      return state;
  }
};
export default reducer;
