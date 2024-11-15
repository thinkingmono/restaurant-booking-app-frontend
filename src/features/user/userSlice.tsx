import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUserThunk, registerUserThunk, clearStoreThunk } from "./userThunk";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";
import { UserType, UserUpdateType } from '../../utils/types';


export const registerUser = createAsyncThunk('user/registerUser', registerUserThunk);

export const loginUser = createAsyncThunk('user/loginUser', loginUserThunk);

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

type UserState = {
  isLoading: boolean,
  isSidebarOpen: boolean,
  user: UserType | null;
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
    },
    updateUser: (state, action: PayloadAction<UserUpdateType>) => {
      state.user = { ...state.user!, ...action.payload };
      addUserToLocalStorage(state.user!);
      toast.success(`Tus datos han sido actualizados con éxito`);
    },
    logoutUser: (state, action: PayloadAction<string>) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (action.payload) {
        toast.success(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.isLoading = false;
        state.user = { ...state.user, ...action.payload };
        addUserToLocalStorage(state.user);
        toast.success(`¡Hola! Bienvenido a Cima Gourmet ${state.user.name}`);
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        toast.error('Hubo un error con tu registro, intenta de nuevo más tarde');
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.isLoading = false;
        state.user = { ...state.user, ...action.payload };
        addUserToLocalStorage(state.user);
        toast.success(`¡Hola! Bienvenido de vuelta ${state.user.name}`);
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        toast.error('Hubo un error con tu login, intenta de nuevo más tarde');
      })
  }
})

export const { toggleSidebar, logoutUser, updateUser } = userSlice.actions;

export default userSlice.reducer;