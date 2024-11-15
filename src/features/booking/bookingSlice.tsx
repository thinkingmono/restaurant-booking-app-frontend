import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingType } from "../../utils/types";
import { createBookingThunk } from "./bookingThunk";
import { toast } from "react-toastify";

export const createBooking = createAsyncThunk('booking/createBooking', createBookingThunk);

type BookingState = {
  isLoading: boolean,
  isError: boolean,
  booking: BookingType
}

const initialState: BookingState = {
  isLoading: false,
  isError: false,
  booking: {
    booking_id: '',
    table_id: 0,
    user_id: 0,
    order: [],
    date_hour: '',
    num_people: 0
  }
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    clearBookingState: () => {
      return { ...initialState };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBooking.fulfilled, (state, action: PayloadAction<{ status: number }>) => {
        state.isLoading = false;
        const { status } = action.payload;
        if (status === 200) toast.success('Tu reserva ha sido creada exitósamente');
        state = { ...initialState };
      })
      .addCase(createBooking.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        toast.error(`Hubo un error creando tu reserva`);
      })
  }
})

export const { clearBookingState } = bookingSlice.actions;
export default bookingSlice.reducer;