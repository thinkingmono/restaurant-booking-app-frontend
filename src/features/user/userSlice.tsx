import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUserThunk, registerUserThunk, updateUserThunk, clearStoreThunk } from "./userThunk";
import { addUserToLocalStorage, getUserFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";
import { UserType } from '../../utils/types';

export const registerUser = createAsyncThunk('user/registerUser', registerUserThunk);

export const loginUser = createAsyncThunk('user/loginUser', loginUserThunk);

export const updateUser = createAsyncThunk('user/updateUser', updateUserThunk);

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

type UserState = {
  isLoading: boolean,
  isSidebarOpen: boolean,
  user: UserType
}

const initialState: UserState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage()
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<UserState>) => {
        const { user } = action.payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`¡Hola! Bienvenido a Cima Gourmet ${user.name}`);
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        toast.error('Hubo un error con tu registro, intenta de nuevo más tarde');
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserState>) => {
        const { user } = action.payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`¡Hola! Bienvenido de vuelta ${user.name}`);
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        toast.error('Hubo un error con tu registro, intenta de nuevo más tarde');
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<UserState>) => {
        const { user } = action.payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`User updated`);
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        toast.error('Hubo un error con la actualización de tus datos, intenta de nuevo más tarde');
      })
  }
})

export const { toggleSidebar } = userSlice.actions;

export default userSlice.reducer;