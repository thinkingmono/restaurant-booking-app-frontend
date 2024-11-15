import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersType, TableType } from "../../utils/types";
import { tables } from "../../utils/data";
import { toast } from "react-toastify";
import { getAvailabilityThunk } from "./tablesThunk";

export const getAvailability = createAsyncThunk('tables/getAvailability', getAvailabilityThunk);

type TablesState = {
  isLoading: boolean
  isError: boolean
  filtered_tables: TableType[]
}

const initialState: TablesState = {
  isLoading: false,
  isError: false,
  filtered_tables: [],
}

const tablesSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    filterTables: (state, action: PayloadAction<{ table_filters: FiltersType }>) => {
      const { table_filters: { filter_date, filter_hour, filter_zone, guests, status } } = action.payload;
      state.isLoading = true;
      let filteredTables = tables.filter((table) => {
        return (table.book_date === filter_date && table.book_zone === filter_zone && table.status === status && table.book_hour === filter_hour && table.guests === (typeof guests === 'string' ? parseInt(guests) : guests))
      })
      state.isLoading = false;
      state.filtered_tables = [...filteredTables];
    },
    clearTablesState: () => {
      return { ...initialState };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAvailability.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAvailability.fulfilled, (state, action: PayloadAction<TableType[]>) => {
        state.isLoading = false;
        state.filtered_tables = [...action.payload];
      })
      .addCase(getAvailability.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        toast.error(`Hubo un error creando tu reserva`);
      })
  }
})

export const { filterTables, clearTablesState } = tablesSlice.actions;
export default tablesSlice.reducer;