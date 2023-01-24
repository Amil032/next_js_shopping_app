import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../pages/api/admin/upload';
import { NewProducts } from '../../consts/products';
import { RootState } from '../store';

// Define a type for the slice state
interface Count extends NewProducts {
  count: number;
}

interface Cart {
  cartItems: Product[] | [];
  totalAmount: number;
}
const initialState: Cart = {
  cartItems: [],
  totalAmount: 0
};
export const cartActions = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const check = state.cartItems.find((item: Product) => item._id === action.payload._id);
      if (!check) {
        state.cartItems.push(action.payload);
        state.totalAmount = state.totalAmount + action.payload.count * action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      const { _id, count, price } = action.payload;
      const newState: Product[] = state.cartItems.filter((item) => item._id !== _id);
      state.cartItems = newState;
      state.totalAmount = state.totalAmount - count * price;
    },
    increaseCount: (state, action) => {
      const { id, price } = action.payload;
      state.cartItems.forEach((item) => {
        if (item._id === id) {
          item.count += 1;
          state.totalAmount = state.totalAmount + price;
        }
      });
    },
    decreaseCount: (state, action) => {
      const { id, price } = action.payload;
      state.cartItems.forEach((item) => {
        if (item._id === id && item.count > 1) {
          item.count -= 1;
          state.totalAmount = state.totalAmount - price;
        }
      });
    }
  }
});

export const { addToCart, removeFromCart, increaseCount, decreaseCount } = cartActions.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cartItems;
export const totalAmount = (state: RootState) => state.cart.totalAmount;
export default cartActions.reducer;
