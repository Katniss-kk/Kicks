import type { IBasket, IUserData } from '@/types/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getFromStorage, saveToStorage, removeFromStorage } from '@/libs/localStorage/localStorage';

interface IBasketState {
  products: IBasket[];
  user: IUserData | null;
}

const getInitialState = (): IBasketState => {
  return {
    products: (getFromStorage('basket_products') as IBasket[]) || [],
    user: (getFromStorage('user') as IUserData | null) || null,
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
    loadUserFromStorage: (state) => {
      const user = getFromStorage('user') as IUserData | null;
      state.user = user;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { addProduct, delProductId, clearBasket, loadUserFromStorage, clearUser } =
  BasketSlice.actions;
export const BasketReducer = BasketSlice.reducer;
