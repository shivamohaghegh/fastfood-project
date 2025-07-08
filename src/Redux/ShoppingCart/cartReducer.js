import cartActionTypes from "./cartAtionTypes";

const {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
  CALCULATE_TOTALS,
} = cartActionTypes;

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const item = action.payload.item;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = state.cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        updatedCart = [...state.cartItems, item];
      }

      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case REMOVE_ITEM: {
      const id = action.payload.id;
      const updatedCart = state.cartItems.filter((item) => item.id !== id);
      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      const updatedCart = state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case INCREASE_QUANTITY: {
      const id = action.payload.id;
      const updatedCart = state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case DECREASE_QUANTITY: {
      const id = action.payload.id;
      const updatedCart = state.cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        totalAmount: 0,
        totalQuantity: 0,
      };

    case CALCULATE_TOTALS: {
      const { totalAmount, totalQuantity } = state.cartItems.reduce(
        (totals, item) => {
          totals.totalAmount += item.price * item.quantity;
          totals.totalQuantity += item.quantity;
          return totals;
        },
        { totalAmount: 0, totalQuantity: 0 }
      );

      return {
        ...state,
        totalAmount,
        totalQuantity,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
