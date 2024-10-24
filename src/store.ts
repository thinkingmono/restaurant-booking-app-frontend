import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice'
import tableReducer from './features/table/tableSlice'
import tablesReducer from './features/tables/tablesSlice'
import filtersReducer from './features/filters/filtersSlice'
import dishesReducer from './features/dishes/dishesSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    table: tableReducer,
    tables: tablesReducer,
    dishes: dishesReducer,
    filters: filtersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch