import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllDishesThunk } from "./dishesThunk";
import { toast } from "react-toastify";
import { DishType } from "../../utils/types";
import { dishesImgs } from "../../utils/data";

export const getAllDishes = createAsyncThunk('dishes', getAllDishesThunk);


type DishesState = {
  isLoadingFilters: boolean
  isLoadingDishes: boolean
  isError: boolean
  all_dishes: DishType[]
  categories: string[]
  dishTypes: string[],
  active_filter: string,
  filtered_dishes: DishType[]
  featured_dishes: DishType[]
}

const initialState: DishesState = {
  isLoadingFilters: false,
  isLoadingDishes: false,
  isError: false,
  all_dishes: [],
  categories: [],
  dishTypes: [],
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
    },
    setDishTypes: (state) => {
      const allTypes = state.all_dishes.map((dish) => dish.dish_type);
      const uniqueTypes = Array.from(new Set(allTypes));
      state.dishTypes = ['Todos', ...uniqueTypes.sort()];
    },
    setCategories: (state) => {
      const allCategories = state.all_dishes.map((dish) => dish.restrictions);
      const uniqueCategories = Array.from(new Set(allCategories));
      state.categories = ['Todos', ...uniqueCategories.sort()];
    },
    filterDishes: (state, action: PayloadAction<{ filter: string, filter_type: string }>) => {
      const { filter, filter_type } = action.payload;
      let filteredDishes: DishType[] = [];
      if (filter === 'Todos') {
        state.filtered_dishes = [...state.all_dishes];
      }
      if (filter_type === 'category' && filter !== 'Todos') {
        filteredDishes = state.all_dishes.filter((dish) => dish.restrictions === filter);
        state.filtered_dishes = [...filteredDishes];
      }
      if (filter_type === 'dish-type' && filter !== 'Todos') {
        filteredDishes = state.all_dishes.filter((dish) => dish.dish_type === filter);
        state.filtered_dishes = [...filteredDishes];
      }
    },
    clearDishesState: () => {
      return { ...initialState };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDishes.pending, (state) => {
        state.isLoadingDishes = true;
      })
      .addCase(getAllDishes.fulfilled, (state, action: PayloadAction<{ dishes: DishType[] }>) => {
        const { dishes } = action.payload;
        const allDishes = dishes.map((dish, index) => {
          const img = dishesImgs[index].img;
          return { ...dish, dish_qty: 1, restrictions: dish.restrictions.trim(), dish_img: img }
        })
        state.isLoadingDishes = false;
        state.all_dishes = [...allDishes];
        state.filtered_dishes = [...allDishes];
      })
      .addCase(getAllDishes.rejected, (state) => {
        state.isLoadingDishes = false;
        toast.error('Hubo un error consultando los platos disponibles');
      })
  }
})

export const { setActiveFilter, setCategories, setDishTypes, filterDishes, clearDishesState } = dishesSlice.actions;
export default dishesSlice.reducer;