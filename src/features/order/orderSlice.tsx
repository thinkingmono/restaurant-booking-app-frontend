import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishType } from "../../utils/types";
import { toast } from "react-toastify";

type OrderState = {
  order: {
    order_id: number
    items: DishType[]
    total_items: number
    total_price: number
  }
}

const setBookingConsecutive = () => {
  const result = localStorage.getItem('bookings');
  const currentBookingsQty = result ? JSON.parse(result).length : 0;
  return currentBookingsQty;
}

const initialState: OrderState = {
  order: {
    order_id: setBookingConsecutive(),
    items: [],
    total_items: 0,
    total_price: 0
  },
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ item: DishType }>) => {
      const { item } = action.payload;
      const indexItem = state.order.items.findIndex((single) => single.dish_id === item.dish_id);
      let itemsCopy = [...state.order.items];
      if (indexItem !== -1) {
        itemsCopy[indexItem] = { ...itemsCopy[indexItem], dish_qty: itemsCopy[indexItem].dish_qty + 1, dish_subtotal: itemsCopy[indexItem].dish_price * (itemsCopy[indexItem].dish_qty + 1) };
        state.order.items = [...itemsCopy];
      } else {
        let newItem = { ...item, dish_subtotal: item.dish_price }
        state.order.items.push(newItem);
      }
      toast.success('Tu plato ha sido agregado a la orden');
    },
    deleteItem: (state, action: PayloadAction<{ item_id: string }>) => {
      const { item_id } = action.payload;
      const newOrder = state.order.items.filter((single) => single.dish_id !== item_id);
      state.order.items = [...newOrder];
      toast.success('Tu plato ha sido eliminado de la orden');
    },
    updateOrderId: (state, action: PayloadAction<number>) => {
      state.order.order_id = action.payload;
    }
  },
  extraReducers: (builder) => { }
})

export const { addItem, deleteItem, updateOrderId } = orderSlice.actions;
export default orderSlice.reducer;