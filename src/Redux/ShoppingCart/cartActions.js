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

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: { item },
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: { id },
});

export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

export const increaseQuantity = (id) => ({
  type: INCREASE_QUANTITY,
  payload: { id },
});

export const decreaseQuantity = (id) => ({
  type: DECREASE_QUANTITY,
  payload: { id },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const calculateTotals = () => ({
  type: CALCULATE_TOTALS,
});
