import { createStore, combineReducers } from 'redux';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

// Combine reducers - manages both products and cart state
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

// Create Redux store - demonstrates Redux state management
const store = createStore(rootReducer);

export default store;
