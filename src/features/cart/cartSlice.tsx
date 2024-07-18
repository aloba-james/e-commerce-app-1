import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
  isCartOpen: boolean;
}

const initialState: CartState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalCount += 1;
      state.totalPrice += action.payload.price;
    },
    decrementItem: (state, action: PayloadAction<{ id: string }>) => {
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
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
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

export const { addItem, decrementItem, removeItem, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
