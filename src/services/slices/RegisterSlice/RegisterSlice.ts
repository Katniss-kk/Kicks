import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setCookie, removeCookie } from '@/libs/cookies/cookies';
import { saveToStorage, removeFromStorage } from '@/libs/localStorage/localStorage';
import type { IUserData } from '@/types/types';

interface RegisterState {
  loading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk('auth/register', async (userData: IUserData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const fakeToken = `fake_token_${Date.now()}`;

  const fakeUser = {
    ...userData,
    id: Date.now(),
    registeredAt: new Date().toISOString(),
  };

  setCookie('auth_token', fakeToken);

  saveToStorage('user', fakeUser);
  saveToStorage('auth_token', fakeToken);

  return fakeUser;
});

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    logout: () => {
      removeCookie('auth_token');
      removeFromStorage('user');
      removeFromStorage('auth_token');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка регистрации';
      });
  },
});

export const { logout, clearError } = registerSlice.actions;
export const RegisterReducer = registerSlice.reducer;
