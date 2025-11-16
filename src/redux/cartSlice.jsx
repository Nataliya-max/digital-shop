import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { item, quantity } = action.payload;

      const existingItem = state.cartItems.find(
        cartProduct => cartProduct.item.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } 
      else {
        state.cartItems.push({
          item,
          quantity
        });
      }
    },
    removeItemFromCart: (state, action) => {
      // Expect action.payload.itemId to be the id of the product to remove
      const itemId = action.payload.itemId;
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.item.id !== itemId
      );
    }
  }
});

// Selector
export const getCartItems = (state) => state.cart.cartItems;

// Actions
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

// Reducer
export default cartSlice.reducer;

