import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    items: [],
  },
  reducers: {
    increment: (state, action) => {
      const anotherDish = state.items.every(
        ({ name }) => name !== action.payload.name
      );

      if (anotherDish) {
        state.items.push({ ...action.payload, qty: 1 });
      } else {
        const query = action.payload.qty || 0;
        state.items = state.items.map(product =>
          product.name === action.payload.name
            ? { ...action.payload, qty: query + 1 }
            : product
        );
      }
    },
    decrement: (state, action) => {
      if (action.payload.qty === 1) {
        state.items = state.items.filter(
          item => item.name !== action.payload.name
        );
      } else {
        state.items = state.items.map(product =>
          product.name === action.payload.name
            ? { ...action.payload, qty: action.payload.qty - 1 }
            : product
        );
      }
    },
    reset: state => {
      state.items = [];
    },
    save: (state, action) => {
      state.items = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, save } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
