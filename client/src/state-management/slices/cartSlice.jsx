import { createSlice } from "@reduxjs/toolkit";

// export interface ICartItem{
//   id: string;
//   name: string;
//   image: string;
//   qty: number;
//   price: number;
// }
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      cartSlice.caseReducers.calculateTotals(state)
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
      cartSlice.caseReducers.calculateTotals(state)
    },
    addItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item._id === payload._id);
      if (cartItem === undefined) {
        const item = {
          _id: payload._id,
          name: payload.name,
          qty: 1,
          price: payload.price,
          image: payload.image
        }
        state.cartItems.push(item);
      } else {
        cartItem.qty = cartItem.qty + 1;
      }
      cartSlice.caseReducers.calculateTotals(state)
    },
    subtractItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item._id === payload._id);
      if (cartItem.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== payload._id
        );
      } else {
        cartItem.qty = cartItem.qty - 1;
      }
      cartSlice.caseReducers.calculateTotals(state)
    },
    calculateTotals: (state) => {
      let qty = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        qty += item.qty;
        total += item.qty * item.price;
      });
      state.totalQty = qty;
      state.totalAmount = total;
    },
  },
});

export default cartSlice.reducer;
export const { clearCart, removeItem, addItem, subtractItem, calculateTotals } =
  cartSlice.actions;
