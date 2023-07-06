import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import shoppingCartReducer from './shoppingCartSlice';
import themeReducer from './themeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const shoppingCartConfig = {
  key: 'shoppingCart',
  storage,
};

const shopConfig = {
  key: 'shop',
  storage,
};

const themeConfig = {
  key: 'theme',
  storage,
};

const shoppingCartPersistReducer = persistReducer(
  shoppingCartConfig,
  shoppingCartReducer
);
const shopPersistReducer = persistReducer(shopConfig, shopReducer);
const themePersistReducer = persistReducer(themeConfig, themeReducer);

export const store = configureStore({
  reducer: {
    shop: shopPersistReducer,
    shoppingCart: shoppingCartPersistReducer,
    theme: themePersistReducer,
  },
});

export const persistor = persistStore(store);
