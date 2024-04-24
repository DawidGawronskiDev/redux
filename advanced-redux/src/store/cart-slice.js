import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.items.reduce((acc, cur) => {
        return (acc = acc + cur.quantity);
      }, 0);
    },
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      state.changed = true;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );

      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.quantity * existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
