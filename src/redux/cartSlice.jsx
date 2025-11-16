import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const existing = state.items.find(i => i.item.title === item.title);
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ item, quantity });
      }
    },
    removeItemFromCart: (state, action) => {
      const title = action.payload;
      state.items = state.items.filter(i => i.item.title !== title);
    }
  }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;

