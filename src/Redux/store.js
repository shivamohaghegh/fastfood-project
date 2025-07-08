import { combineReducers, createStore } from "redux";
import cartReducer from "./ShoppingCart/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
