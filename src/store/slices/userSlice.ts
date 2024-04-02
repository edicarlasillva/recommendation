import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { login } from "../../services/api";
import { ILogin } from "../../types/login";
import { IUser } from "../../types/user";
import { setLoading } from "./loadingSlice";

const initialState: IUser | null = null 

export const loginRequest = createAsyncThunk('user/login', async (data: ILogin, config) => {
  config.dispatch(setLoading(true))

  const result = await login(data)

  config.dispatch(setLoading(false))

  return result
})

const userSlice = createSlice({
  name: 'user',
  initialState: initialState as IUser | null,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginRequest.pending, (_, action) => {
      console.log('Pending...', action)
       return null
    })

    builder.addCase(loginRequest.fulfilled, (_, action) => {
      console.log('Fulfilled...', action)
      return action.payload
    })

    builder.addCase(loginRequest.rejected, (_, action) => {
      console.log('Rejected...', action)
       return null
    })
  }
})

export default userSlice.reducer