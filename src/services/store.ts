import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';
import { ProductsDataReducer } from './slices/ProductsDataSlice/ProductsDataSlice';
import { FilterReducer } from './slices/FiltersSlice/FiltersSlice';
import { BasketReducer } from './slices/BasketSlice/BasketSlice';
import { RegisterReducer } from './slices/RegisterSlice/RegisterSlice';
import { ProfileReducer } from './slices/ProfileSlice/ProfileSlice';

const rootReducer = {
  Products: ProductsDataReducer,
  Filters: FilterReducer,
  Basket: BasketReducer,
  Register: RegisterReducer,
  Profile: ProfileReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
export { rootReducer };
