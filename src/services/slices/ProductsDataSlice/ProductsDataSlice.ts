import type { IProduct } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

import Products from '../../../../public/db/sneakers.json';

interface IProductState {
  Products: IProduct[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: IProductState = {
  Products: null,
  loading: false,
  error: null,
};

const ProductsDataSlice = createSlice({
  name: 'ProductsData',
  initialState,
  reducers: {
    setData: (state) => {
      state.Products = Products;
    },
  },
});

export const { setData } = ProductsDataSlice.actions;
export const ProductsDataReducer = ProductsDataSlice.reducer;
