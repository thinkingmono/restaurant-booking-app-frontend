import customFetch, { checkForUnauthorizedResponse } from "../../utils"
import { preferences } from "../../utils/data";
import { UserType, UserUpdateType } from "../../utils/types";

export const registerUserThunk = async (user: UserType, thunkAPI: {}) => {
  const { name, email, password, preferences } = user;
  try {
    // const response = await customFetch.post('/auth/register', user);
    // return response.data
    const user = { name, email, password, preferences };
    return { user };
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}
export const loginUserThunk = async (user: { email: string, password: string }, thunkAPI: {}) => {
  try {
    // const response = await customFetch.post('/auth/login', user);
    // return response.data
    const userInfo = { name: 'Test User', email: user.email, password: user.password, preferences: [...preferences] };
    return { user: userInfo };
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}
export const updateUserThunk = async (user: UserUpdateType, thunkAPI: {}) => {
  try {
    // const response = await customFetch.patch('/auth/updateUser', user);
    // return response.data
    const newUserInfo = { ...user };
    return { user: newUserInfo }
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
}
export const clearStoreThunk = async (message: string, thunkAPI: {}) => {
  try {
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
}