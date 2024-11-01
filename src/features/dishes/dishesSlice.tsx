import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCategoriesThunk, filterByCategoryThunk } from "./dishesThunk";
import { toast } from "react-toastify";
import { DishType, CategoryType } from "../../utils/types";

export const getAllCategories = createAsyncThunk('categories/getAllCategories', getAllCategoriesThunk);

export const filterByCategory = createAsyncThunk('dishes/getDefaultDishes', filterByCategoryThunk);

type DishesState = {
  isLoadingCategories: boolean
  isLoadingDishes: boolean
  isError: boolean
  categories: CategoryType[]
  all_dishes: DishType[]
  active_filter: string,
  filtered_dishes: DishType[]
  featured_dishes: DishType[]
}

const initialState: DishesState = {
  isLoadingCategories: false,
  isLoadingDishes: false,
  isError: false,
  categories: [],
  all_dishes: [],
  active_filter: '',
  filtered_dishes: [],
  featured_dishes: [],
}

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    setActiveFilter: (state, action: PayloadAction<string>) => {
      state.active_filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isLoadingCategories = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action: PayloadAction<{ categories: CategoryType[] }>) => {
        const { categories } = action.payload;
        // console.log(categories);
        state.categories = [...categories];
        state.isLoadingCategories = false;
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isLoadingCategories = false;
        toast.error('Hubo un error consultando las categorías');
      })
      .addCase(filterByCategory.pending, (state) => {
        state.isLoadingDishes = true
      })
      .addCase(filterByCategory.fulfilled, (state, action: PayloadAction<{ defaultDishes: DishType[] }>) => {
        const { defaultDishes } = action.payload;
        state.filtered_dishes = [...defaultDishes];
        state.isLoadingDishes = false;
      })
      .addCase(filterByCategory.rejected, (state) => {
        state.isLoadingDishes = false;
        toast.error('Hubo un error filtrando los platos');
      })
  }
})

export const { setActiveFilter } = dishesSlice.actions;
export default dishesSlice.reducer;