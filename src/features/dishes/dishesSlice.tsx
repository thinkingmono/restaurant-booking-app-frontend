import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCategoriesThunk, filterByCategoryThunk } from "./dishesThunk";
import { toast } from "react-toastify";

export const getAllCategories = createAsyncThunk('categories/getAllCategories', getAllCategoriesThunk);

export const filterByCategory = createAsyncThunk('dishes/getDefaultDishes', filterByCategoryThunk);

type CategoryType = {
  category_id: string
  category_name: string
}

type DishType = {
  dish_id: string
  dish_name: string
  dish_img: string
  dish_category: string
  dish_price: number
}

type DishesState = {
  isLoading: boolean
  isError: boolean
  categories: CategoryType[]
  all_dishes: DishType[]
  filtered_dishes: DishType[]
  featured_dishes: DishType[]
}

const initialState: DishesState = {
  isLoading: false,
  isError: false,
  categories: [],
  all_dishes: [],
  filtered_dishes: [],
  featured_dishes: [],
}

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action: PayloadAction<{ categories: CategoryType[] }>) => {
        const { categories } = action.payload;
        // console.log(categories);
        state.categories = [...categories];
        state.isLoading = false;
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isLoading = false;
        toast.error('Hubo un error consultando las categorías');
      })
      .addCase(filterByCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(filterByCategory.fulfilled, (state, action: PayloadAction<{ defaultDishes: DishType[] }>) => {
        const { defaultDishes } = action.payload;
        state.filtered_dishes = [...defaultDishes];
        state.isLoading = false;
      })
      .addCase(filterByCategory.rejected, (state) => {
        state.isLoading = false;
        toast.error('Hubo un error filtrando los platos');
      })
  }
})

export const { } = dishesSlice.actions;
export default dishesSlice.reducer;