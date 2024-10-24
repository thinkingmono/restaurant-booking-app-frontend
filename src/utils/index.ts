import axios from "axios";

const serverUrl = import.meta.env.VITE_APP_SERVER;

const customFetch = axios.create({
  baseURL: `${serverUrl}`
})

export const checkForUnauthorizedResponse = (error: { response: { status: number, data: { msg: string } } }, thunkAPI) => {
  console.log(error);
  if (error.response.status === 401) {
    return thunkAPI.rejectWithValue('Unauthorized! Loggin Out..');
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
}

export default customFetch;