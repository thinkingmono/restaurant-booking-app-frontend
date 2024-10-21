import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Filters Slice: Filters selection on book page to show food dishes.

const initialState = {
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
})

export const { } = filtersSlice.actions;
export default filtersSlice.reducer;