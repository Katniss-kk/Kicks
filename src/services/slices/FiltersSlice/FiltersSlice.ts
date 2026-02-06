import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IProductState {
  sizes: number[];
  colors: string[];
  sort: string | null;
}

const initialState: IProductState = {
  sizes: [],
  colors: [],
  sort: null,
};

const FilterSlice = createSlice({
  name: 'Filters',
  initialState,
  reducers: {
    setSizes: (state, action: PayloadAction<number>) => {
      if (state.sizes.find((size) => size === action.payload)) {
        state.sizes = state.sizes.filter((size) => size !== action.payload);
      } else {
        state.sizes = [...state.sizes, action.payload];
      }
    },
    setColors: (state, action: PayloadAction<string>) => {
      if (state.colors.find((color) => color === action.payload)) {
        state.colors = state.colors.filter((color) => color !== action.payload);
      } else {
        state.colors = [...state.colors, action.payload];
      }
    },
    setSort: (state, action: PayloadAction<string>) => {
      if ((state.sort === action.payload)) {
        state.sort = null;
      } else {
        state.sort = action.payload;
      }
    },
    clearFilter: (state) => {
      state.colors = [];
      state.sizes = [];
      state.sort = null;
    },
  },
});

export const { setSizes, setColors, setSort, clearFilter } = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;
