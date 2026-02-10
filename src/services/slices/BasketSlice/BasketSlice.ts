import type { IBasket } from '@/types/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IBasketState {
  products: IBasket[];
}

const initialState: IBasketState = {
  products: [],
};

const BasketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IBasket>) => {
      if (state.products.some((product) => product.product.id === action.payload.product.id)) {
        return;
      } else {
        state.products.push(action.payload);
      }
    },
    delProductId: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.product.id !== action.payload);
    },
  },
});

export const { addProduct, delProductId } = BasketSlice.actions;
export const BasketReducer = BasketSlice.reducer;
