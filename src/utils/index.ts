import axios from "axios";

const serverUrl = import.meta.env.VITE_APP_SERVER;

type KnowError = {
  errorMessage: string
}

const customFetch = axios.create({
  baseURL: `${serverUrl}`
})

export const checkForUnauthorizedResponse = (error: { response: { status: number, data: { msg: string } } }, thunkAPI: any) => {
  console.log(error);
  if (error.response.status === 401) {
    return thunkAPI.rejectWithValue({ errorMessage: 'Unauthorized! Loggin Out..' } as KnowError);
  }
  return thunkAPI.rejectWithValue({ errorMessage: error.response.data.msg } as KnowError);
}

export default customFetch;