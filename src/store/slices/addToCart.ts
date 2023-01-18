import { createSlice } from '@reduxjs/toolkit'
import { NewProducts } from '../../consts/products'
import { RootState } from '../store'

// Define a type for the slice state
interface Count extends NewProducts {
  count: number
}

interface Cart {
  cartItems: Array<Count>
  totalAmount: number
}
// type CartItem = {
//   id: string
//   name: string
//   price: number
//   count: number
// }
// Define the initial state using that type
const initialState: Cart = {
  cartItems: [],
  totalAmount: 0
}
//amilgit
export const cartActions = createSlice({
  name: 'addToCart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const check = state.cartItems.find((item: Count) => item.id === action.payload.id)
      if (!check) {
        state.cartItems.push(action.payload)
        state.totalAmount = state.totalAmount + action.payload.count * action.payload.price
      }
    },
    removeFromCart: (state, action) => {
      const { id, count, price } = action.payload
      const newState: Count[] = state.cartItems.filter((item) => item.id !== id)
      state.cartItems = newState
      state.totalAmount = state.totalAmount - count * price
    },
    increaseCount: (state, action) => {
      const { id, price } = action.payload
      state.cartItems.forEach((item) => {
        if (item.id === id) {
          item.count += 1
          state.totalAmount = state.totalAmount + price
        }
      })
    },
    decreaseCount: (state, action) => {
      const { id, price } = action.payload
      state.cartItems.forEach((item) => {
        if (item.id === id && item.count > 1) {
          item.count -= 1
          state.totalAmount = state.totalAmount - price
        }
      })
    }
  }
})

export const { addToCart, removeFromCart, increaseCount, decreaseCount } = cartActions.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cartItems
export const totalAmount = (state: RootState) => state.cart.totalAmount
export default cartActions.reducer
