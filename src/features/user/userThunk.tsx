import { toast } from "react-toastify";
import customFetch, { checkForUnauthorizedResponse } from "../../utils"
import { PreferenceType } from "../../utils/types";
import { Dispatch } from "@reduxjs/toolkit";
import { logoutUser } from "./userSlice";
import { clearOrder } from "../order/orderSlice";
import { clearTable } from "../table/tableSlice";
import { clearTablesState } from "../tables/tablesSlice";
import { clearDishesState } from "../dishes/dishesSlice";
import { clearBookingState } from "../booking/bookingSlice";
import { clearBookingsState } from "../bookings/bookingsSlice";

export const registerUserThunk = async (user: { name: string, email: string, password: string, preferences: PreferenceType[] }, thunkAPI: {}) => {
  const { name, email, password, preferences } = user
  try {
    const response = await customFetch.post(`/register/User?name=${name}&email=${email}&password=${password}&usertype=customer`);
    // console.log(response);
    if (response.status === 200) {
      return { name, email, password, preferences, nickname: name, phone: '3000000000', location: 'Bogotá D.C' }
    } else {
      toast.error('Ha ocurrido un error con tu registro. Intenta de nuevo más tarde');
    }
  } catch (error: any) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}
export const loginUserThunk = async (user: { name: string, password: string, preferences: PreferenceType[] }, thunkAPI: {}) => {
  const { name, password, preferences } = user;
  try {
    const response = await customFetch.get(`/Login/User?username=${name}&password=${password}`);
    // console.log(response);
    if (response.status === 200) {
      return { id: response.data[0].customer_id, name: response.data[0].name, email: response.data[0].email, password, preferences, nickname: name, phone: '3000000000', location: 'Bogotá D.C' }
    } else {
      toast.error('Ha ocurrido un error con tu ingreso. Intenta de nuevo más tarde');
    }
  } catch (error: any) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}

export const clearStoreThunk = async (message: string, thunkAPI: { dispatch: Dispatch }) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearOrder());
    thunkAPI.dispatch(clearTable());
    thunkAPI.dispatch(clearTablesState());
    thunkAPI.dispatch(clearDishesState());
    thunkAPI.dispatch(clearBookingState());
    thunkAPI.dispatch(clearBookingsState());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
}