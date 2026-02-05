import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';
import { ProductsDataReducer } from './slices/ProductsDataSlice/ProductsDataSlice';
import { FilterReducer } from './slices/FiltersSlice/FiltersSlice';

const rootReducer = {
  Products: ProductsDataReducer,
  Filters: FilterReducer,
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
