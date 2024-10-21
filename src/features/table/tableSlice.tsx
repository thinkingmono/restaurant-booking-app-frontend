import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TableType } from '../../utils/types';

//Table Slice: Table selection on book page.

type TableState = {
  table: TableType
}

const initialState: TableState = {
  table: {
    table_id: 0,
    book_zone: '',
    book_date: '',
    book_hour: '',
    guests: 0,
    status: 'Available'
  }
}


const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    selectTable: (state, action: PayloadAction<{ table: TableType }>) => {
      const { table } = action.payload;
      state.table = { ...table };
    }
  }

})

export const { selectTable } = tableSlice.actions;
export default tableSlice.reducer;