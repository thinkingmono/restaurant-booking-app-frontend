import { Dispatch } from "@reduxjs/toolkit";
import customFetch, { checkForUnauthorizedResponse } from "../../utils";
import { BookingType } from "../../utils/types";
import { clearOrder } from "../order/orderSlice";
import { clearTable } from "../table/tableSlice";

export const createBookingThunk = async (booking: BookingType, thunkAPI: { dispatch: Dispatch }) => {
  const { user_id, table_id, order, date_hour, num_people } = booking;
  const bookingToSend = {
    tableId: table_id,
    customerId: user_id,
    dishIds: [...order],
    dates: date_hour,
    num_people
  }
  try {
    const response = await customFetch.post('/orders/sendOrder', bookingToSend);
    if (response.status === 200) {
      thunkAPI.dispatch(clearTable());
      thunkAPI.dispatch(clearOrder());
      return { status: response.status };
    }
  } catch (error: any) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}