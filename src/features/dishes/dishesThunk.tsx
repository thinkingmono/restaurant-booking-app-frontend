import customFetch, { checkForUnauthorizedResponse } from "../../utils"

export const getAllCategoriesThunk = async () => {
  try {
    const response = await customFetch('/categories.php');
    const preCategories = response.data.categories;
    const categories = preCategories.map((category: { idCategory: string, strCategory: string }) => {
      return {
        category_id: category.idCategory,
        category_name: category.strCategory
      }
    })
    return { categories }
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}

export const filterByCategoryThunk = async (category: string, thunkAPI: {}) => {
  try {
    const response = await customFetch(`/filter.php?c=${category}`)
    const preDefaultDishes = response.data.meals;
    const defaultDishes = preDefaultDishes.map((dish: { idMeal: string, strMeal: string, strMealThumb: string }) => {
      return {
        dish_id: dish.idMeal,
        dish_name: dish.strMeal,
        dish_img: dish.strMealThumb,
        dish_category: category,
        dish_price: 100000,
      }
    })
    return { defaultDishes: defaultDishes.slice(0, 10) }
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}