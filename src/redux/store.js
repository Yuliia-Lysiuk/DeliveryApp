import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './shopSlice'
import shoppingCartReducer from './shoppingCartSlice';

export default configureStore({
  reducer: {
    shop: shopReducer,
    shoppingCart: shoppingCartReducer
  },
})
