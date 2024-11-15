// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { BookingType } from "../../utils/types";
// import { toast } from "react-toastify";

type BookingState = {
  bookings: BookingType[]
}

const initialState: BookingState = {
  bookings: []
}

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    // addBooking: (state, action: PayloadAction<{ booking: { booking_id: string, user_id: string, table_id: number, order_id: number } }>) => {
    //   const { booking } = action.payload;
    //   state.bookings.push(booking);
    //   toast.success('Tu orden ha sido creada exitosamente');
    //   localStorage.setItem('bookings', JSON.stringify(state.bookings));
    // },
    clearBookingsState: () => {
      return { ...initialState };
    }
  },
  extraReducers: () => { }
})

// export const { addBooking, clearBookingsState } = bookingsSlice.actions;
export const { clearBookingsState } = bookingsSlice.actions;
export default bookingsSlice.reducer;