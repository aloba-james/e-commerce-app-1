import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalCount += 1;
      state.totalPrice += action.payload.price;
    },
    decrementItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity -= 1;
        state.totalCount -= 1;
        state.totalPrice -= existingItem.price;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      if (itemToRemove) {
        state.totalCount -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const { addItem, decrementItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
