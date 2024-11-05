import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice'
import tableReducer from './features/table/tableSlice'
import tablesReducer from './features/tables/tablesSlice'
import dishesReducer from './features/dishes/dishesSlice'
import orderReducer from './features/order/orderSlice'
import bookingsReducer from './features/bookings/bookingsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    table: tableReducer,
    tables: tablesReducer,
    dishes: dishesReducer,
    order: orderReducer,
    bookings: bookingsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch