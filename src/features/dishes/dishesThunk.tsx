import customFetch, { checkForUnauthorizedResponse } from "../../utils"

export const getAllDishesThunk = async (filter: string, thunkAPI = {}) => {
  try {
    const response = await customFetch.get(`/Dishes/getAvailability?restrictions=${filter}`)
    return { dishes: [...response.data] }
  } catch (error: any) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}