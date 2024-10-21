import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersType, TableType } from "../../utils/types";
import { tables } from "../../utils/data";
import moment from "moment"
import { toast } from "react-toastify";

type TablesState = {
  isLoading: boolean
  filtered_tables: TableType[]
  filters: FiltersType
}

const initialState: TablesState = {
  isLoading: false,
  filtered_tables: [],
  filters: {
    filter_date: moment().add(1, 'days').format("YYYY-MM-DD").toString(),
    filter_hour: '01:00:00 p. m.',
    filter_zone: 'General',
    guests: 2,
    status: 'Available'
  }
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
    updateFilters: (state, action: PayloadAction<{ filters: FiltersType }>) => {
      const { filters } = action.payload
      state.filters = { ...filters };
    },
  },
  extraReducers: (builder) => {
  }
})

export const { filterTables, updateFilters } = tablesSlice.actions;
export default tablesSlice.reducer;