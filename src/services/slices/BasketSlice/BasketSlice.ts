import type { IBasket } from '@/types/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getFromStorage, saveToStorage, removeFromStorage } from '@/libs/localStorage/localStorage';

interface IBasketState {
  products: IBasket[];
}

const getInitialState = (): IBasketState => {
  return {
    products: (getFromStorage('basket_products') as IBasket[]) || [],
  };
};

const BasketSlice = createSlice({
  name: 'Basket',
  initialState: getInitialState(),
  reducers: {
    addProduct: (state, action: PayloadAction<IBasket>) => {
      if (state.products.some((product) => product.product.id === action.payload.product.id)) {
        return;
      } else {
        state.products.push(action.payload);
        saveToStorage('basket_products', state.products);
      }
    },
    delProductId: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.product.id !== action.payload);
      saveToStorage('basket_products', state.products);
    },
    clearBasket: (state) => {
      state.products = [];
      removeFromStorage('basket_products');
    },
  },
});

export const { addProduct, delProductId, clearBasket } = BasketSlice.actions;
export const BasketReducer = BasketSlice.reducer;
