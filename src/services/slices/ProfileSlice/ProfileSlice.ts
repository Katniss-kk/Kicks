import type { IUserData } from '@/types/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getFromStorage, saveToStorage, removeFromStorage } from '@/libs/localStorage/localStorage';

interface IBasketState {
  user: IUserData | null;
}

const getInitialState = (): IBasketState => {
  return {
    user: (getFromStorage('user') as IUserData | null) || null,
  };
};

const ProfileSlice = createSlice({
  name: 'Profile',
  initialState: getInitialState(),
  reducers: {
    userEdit: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
      saveToStorage('user', action.payload);
    },
    loadingUserFromStorage: (state) => {
      const userData = getFromStorage('user') as IUserData | null;
      state.user = userData;
    },
    clearUser: (state) => {
      state.user = null;
      removeFromStorage('user');
    },
    login: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
      saveToStorage('user', action.payload);
    },
  },
});

export const { userEdit, loadingUserFromStorage, clearUser, login } = ProfileSlice.actions;
export const ProfileReducer = ProfileSlice.reducer;
